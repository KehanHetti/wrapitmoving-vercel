import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint__0v5PPcL.mjs';
import { manifest } from './manifest_BwwEBRS2.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/send.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/faq/faq.astro.mjs');
const _page5 = () => import('./pages/faq/moving.astro.mjs');
const _page6 = () => import('./pages/login.astro.mjs');
const _page7 = () => import('./pages/pricing.astro.mjs');
const _page8 = () => import('./pages/privacy.astro.mjs');
const _page9 = () => import('./pages/services/commercial.astro.mjs');
const _page10 = () => import('./pages/services/furniture.astro.mjs');
const _page11 = () => import('./pages/services/junk.astro.mjs');
const _page12 = () => import('./pages/services/long-distance.astro.mjs');
const _page13 = () => import('./pages/services/moving.astro.mjs');
const _page14 = () => import('./pages/signup.astro.mjs');
const _page15 = () => import('./pages/terms.astro.mjs');
const _page16 = () => import('./pages/thank-you.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/send.ts", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/faq/faq.astro", _page4],
    ["src/pages/faq/moving.astro", _page5],
    ["src/pages/login.astro", _page6],
    ["src/pages/pricing.astro", _page7],
    ["src/pages/privacy.astro", _page8],
    ["src/pages/services/commercial.astro", _page9],
    ["src/pages/services/furniture.astro", _page10],
    ["src/pages/services/junk.astro", _page11],
    ["src/pages/services/long-distance.astro", _page12],
    ["src/pages/services/moving.astro", _page13],
    ["src/pages/signup.astro", _page14],
    ["src/pages/terms.astro", _page15],
    ["src/pages/thank-you.astro", _page16],
    ["src/pages/index.astro", _page17]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e83bf2c0-1600-4a89-b30c-c49d8d8edde5",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
