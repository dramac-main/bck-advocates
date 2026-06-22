// Full-page screenshot via Edge DevTools Protocol (Node 22 global WebSocket).
// Usage: node scripts/shot.mjs <url> <outfile> [width] [height]
import { writeFileSync } from 'node:fs';

const [, , url, outfile, widthArg, heightArg, viewportOnly] = process.argv;
const width = parseInt(widthArg || '1440', 10);
const height = parseInt(heightArg || '900', 10);
const beyond = viewportOnly !== 'viewport';
const base = 'http://localhost:9222';

const list = await (await fetch(base + '/json')).json();
let target = list.find((t) => t.type === 'page') || (await (await fetch(base + '/json/new')).json());

const ws = new WebSocket(target.webSocketDebuggerUrl);
let id = 0;
const pending = new Map();
const events = {};
const send = (method, params = {}) =>
  new Promise((res) => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });
ws.addEventListener('message', (ev) => {
  const m = JSON.parse(ev.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m.result); pending.delete(m.id); }
  else if (m.method && events[m.method]) events[m.method](m.params);
});
await new Promise((r) => ws.addEventListener('open', r));

await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width < 700 });
const loaded = new Promise((r) => { events['Page.loadEventFired'] = r; });
await send('Page.navigate', { url });
await loaded;
// force all scroll-reveal content visible (no waiting on IntersectionObserver), settle layout
await send('Runtime.evaluate', { expression: "document.documentElement.classList.remove('js'); window.scrollTo(0,0);" });
await new Promise((r) => setTimeout(r, 1100));
const { data } = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: beyond, fromSurface: true });
writeFileSync(outfile, Buffer.from(data, 'base64'));
ws.close();
console.log('saved', outfile);
process.exit(0);
