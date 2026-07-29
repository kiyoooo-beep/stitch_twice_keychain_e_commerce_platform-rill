import { c as createComponent, e as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BUxigWNf.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_BISJRS7c.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Cart = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Your Cart", "data-astro-cid-h3zw4u6d": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8" data-astro-cid-h3zw4u6d> <h1 class="font-headline-lg text-headline-lg mb-2" data-astro-cid-h3zw4u6d>Your Cart</h1> <p id="cart-count" class="text-on-surface-variant" data-astro-cid-h3zw4u6d>You have 0 items</p> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-astro-cid-h3zw4u6d> <div id="cart-items" class="lg:col-span-2 space-y-4" data-astro-cid-h3zw4u6d></div> <div class="lg:col-span-1" data-astro-cid-h3zw4u6d> <div id="cart-summary" class="bg-surface-container-high p-6 rounded-xl cloud-shadow border border-surface-variant/30 sticky top-24" data-astro-cid-h3zw4u6d></div> </div> </div> ` })}  `;
}, "D:/TUGAS/stitch_twice_keychain_e_commerce_platform rill/src/pages/cart.astro", void 0);

const $$file = "D:/TUGAS/stitch_twice_keychain_e_commerce_platform rill/src/pages/cart.astro";
const $$url = "/cart";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cart,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
