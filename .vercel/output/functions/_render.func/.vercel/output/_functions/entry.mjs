import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_QH9czy9F.mjs';
import { manifest } from './manifest_KQu175K4.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/admin/pesanan.astro.mjs');
const _page3 = () => import('./pages/api/about-us.astro.mjs');
const _page4 = () => import('./pages/api/checkout.astro.mjs');
const _page5 = () => import('./pages/api/confirm-payment.astro.mjs');
const _page6 = () => import('./pages/api/join-member.astro.mjs');
const _page7 = () => import('./pages/api/order-status.astro.mjs');
const _page8 = () => import('./pages/api/orders.astro.mjs');
const _page9 = () => import('./pages/api/resend.astro.mjs');
const _page10 = () => import('./pages/api/store-info.astro.mjs');
const _page11 = () => import('./pages/api/_order_code_.astro.mjs');
const _page12 = () => import('./pages/cart.astro.mjs');
const _page13 = () => import('./pages/checkout.astro.mjs');
const _page14 = () => import('./pages/product/_id_.astro.mjs');
const _page15 = () => import('./pages/shipping.astro.mjs');
const _page16 = () => import('./pages/shop.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/admin/pesanan.astro", _page2],
    ["src/pages/api/about-us.js", _page3],
    ["src/pages/api/checkout.js", _page4],
    ["src/pages/api/confirm-payment.js", _page5],
    ["src/pages/api/join-member.js", _page6],
    ["src/pages/api/order-status.js", _page7],
    ["src/pages/api/orders.ts", _page8],
    ["src/pages/api/resend.js", _page9],
    ["src/pages/api/store-info.js", _page10],
    ["src/pages/api/[order_code].astro", _page11],
    ["src/pages/cart.astro", _page12],
    ["src/pages/checkout.astro", _page13],
    ["src/pages/product/[id].astro", _page14],
    ["src/pages/shipping.astro", _page15],
    ["src/pages/shop.astro", _page16],
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
    "middlewareSecret": "a3dfa7b5-75e7-4d2b-977c-b2c81dd33894",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
