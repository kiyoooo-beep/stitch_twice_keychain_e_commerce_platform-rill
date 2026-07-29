import { c as createComponent, e as renderComponent, b as renderTemplate, d as createAstro, m as maybeRenderHead, f as addAttribute } from '../../chunks/astro/server_BUxigWNf.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../../chunks/PageLayout_BISJRS7c.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const productId = Astro2.params.id || 1;
  const productDetails = {
    "1": {
      name: "Moonlit Whale",
      price: "$18.00",
      rating: 4.8,
      reviews: 124,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBr1tdL1njM3CrL7QVpANmtFCCM1pC-QB6IFrGyE5sLyTx6_mqxTOgIwd6uqD-fEnNvs9wRZrfADylPW29ZOGIEbfXUhkgWdspwaunc8-iC_Lbmo0yYPzOpdNoo54W7MGmkrALXXSn6a67s8xDzx-IDeHBSDW_8CEgBsx3KtlnPxwsu3xq8ppYrGOyW-JUP5fqQfAKhnEr3AT1TpNWuqHzSduymK5YC1Ly49ZL7Whfan9lxlfon8ORP",
      description: "A beautiful moonlit whale charm with holographic finish. Perfect for keychain collectors.",
      details: ["Holographic Acrylic", '2.5" size', "Star-shaped clasp", "Limited Edition"],
      inStock: true
    }
  };
  const product = productDetails[productId] || productDetails["1"];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": product.name, "data-astro-cid-lpkum7gf": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" data-astro-cid-lpkum7gf> <!-- Product Image --> <div class="aspect-square rounded-xl overflow-hidden bg-surface-container" data-astro-cid-lpkum7gf> <img${addAttribute(product.name, "alt")} class="w-full h-full object-cover"${addAttribute(product.image, "src")} data-astro-cid-lpkum7gf> </div> <!-- Product Info --> <div class="flex flex-col gap-6" data-astro-cid-lpkum7gf> <div data-astro-cid-lpkum7gf> <span class="text-label-caps text-secondary font-label-caps" data-astro-cid-lpkum7gf>AVAILABLE NOW</span> <h1 class="font-display-hero text-headline-lg mt-2 text-on-surface" data-astro-cid-lpkum7gf>${product.name}</h1> </div> <!-- Rating --> <div class="flex items-center gap-3" data-astro-cid-lpkum7gf> <div class="flex" data-astro-cid-lpkum7gf> ${[...Array(5)].map(() => renderTemplate`<span class="material-symbols-outlined text-pastel-yellow text-lg" style="font-variation-settings: 'FILL' 1;" data-astro-cid-lpkum7gf>
star
</span>`)} </div> <span class="text-on-surface-variant" data-astro-cid-lpkum7gf>${product.rating} (${product.reviews} reviews)</span> </div> <!-- Price --> <span class="font-price-display text-[36px] text-primary" data-astro-cid-lpkum7gf>${product.price}</span> <!-- Description --> <p class="text-body-lg text-on-surface-variant" data-astro-cid-lpkum7gf>${product.description}</p> <!-- Details --> <div class="bg-surface-container-low p-4 rounded-lg" data-astro-cid-lpkum7gf> <h3 class="font-headline-md text-headline-md mb-3" data-astro-cid-lpkum7gf>Product Details</h3> <ul class="space-y-2" data-astro-cid-lpkum7gf> ${product.details.map((detail) => renderTemplate`<li class="flex items-center gap-2 text-on-surface-variant" data-astro-cid-lpkum7gf> <span class="w-2 h-2 bg-primary rounded-full" data-astro-cid-lpkum7gf></span> ${detail} </li>`)} </ul> </div> <!-- Quantity & Add to Cart --> <div class="flex gap-4" data-astro-cid-lpkum7gf> <div class="flex items-center border-2 border-outline-variant rounded-lg bg-surface-container-lowest" data-astro-cid-lpkum7gf> <button class="px-4 py-3 text-primary active:scale-95" data-astro-cid-lpkum7gf> <span class="material-symbols-outlined" data-astro-cid-lpkum7gf>remove</span> </button> <input type="number" value="1" min="1" class="w-12 text-center bg-transparent border-0 focus:ring-0" data-astro-cid-lpkum7gf> <button class="px-4 py-3 text-primary active:scale-95" data-astro-cid-lpkum7gf> <span class="material-symbols-outlined" data-astro-cid-lpkum7gf>add</span> </button> </div> <button class="flex-1 bg-primary text-white font-bold py-3 rounded-full hover:bg-on-primary-fixed-variant transition-all active:scale-95 shadow-lg" data-astro-cid-lpkum7gf>
Add to Cart
</button> </div> <!-- Stock Status --> ${product.inStock ? renderTemplate`<div class="flex items-center gap-2 text-tertiary" data-astro-cid-lpkum7gf> <span class="material-symbols-outlined" data-astro-cid-lpkum7gf>check_circle</span> <span data-astro-cid-lpkum7gf>In Stock - Ships within 2-3 days</span> </div>` : renderTemplate`<div class="flex items-center gap-2 text-error" data-astro-cid-lpkum7gf> <span class="material-symbols-outlined" data-astro-cid-lpkum7gf>cancel</span> <span data-astro-cid-lpkum7gf>Out of Stock</span> </div>`} </div> </div>  <section class="mt-16" data-astro-cid-lpkum7gf> <h2 class="font-headline-lg text-headline-lg mb-6" data-astro-cid-lpkum7gf>Related Products</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-astro-cid-lpkum7gf> ${[1, 2, 3].map((i) => renderTemplate`<div class="bg-surface-container-lowest p-4 rounded-xl cloud-shadow hover:-translate-y-2 transition-transform" data-astro-cid-lpkum7gf> <div class="aspect-square rounded-lg overflow-hidden mb-4 bg-surface-container" data-astro-cid-lpkum7gf> <img${addAttribute(`Related Product ${i}`, "alt")} class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-AekghMNPOxyZec3jySjrifrKRxmPmrFCTeSt3YuLabxWhepzmfU2Yugu1xPfYGtGemS4oUQPMGDIQ9b1VELCCVlXetE0fq5ZoWZ2hBoXzXk0pZsrbQIo-Ydm1Wm_PLCKhF1SVqRAdhpGe4jsfdHZJikut0SIzlP7SE5r4FskE7EsfWy9xXxN3l1sMv_0UOHr-1dazF1PC9VoEq9PWRflpuOZOB64265UX-3v5BUPaNb62v2PvPHR" data-astro-cid-lpkum7gf> </div> <h4 class="font-headline-md text-headline-md mb-1" data-astro-cid-lpkum7gf>Related Item ${i}</h4> <span class="font-price-display text-price-display text-primary" data-astro-cid-lpkum7gf>$${15 + i * 2}.00</span> </div>`)} </div> </section> ` })} `;
}, "D:/TUGAS/stitch_twice_keychain_e_commerce_platform rill/src/pages/product/[id].astro", void 0);

const $$file = "D:/TUGAS/stitch_twice_keychain_e_commerce_platform rill/src/pages/product/[id].astro";
const $$url = "/product/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
