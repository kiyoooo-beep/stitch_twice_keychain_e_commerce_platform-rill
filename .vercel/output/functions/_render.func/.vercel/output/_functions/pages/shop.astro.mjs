import { c as createComponent, b as renderTemplate, e as renderComponent, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server_BUxigWNf.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_BISJRS7c.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const productMetadata = {
  "Product 1.jpg": {
    name: "Red Apple Charm Bag",
    price: "Rp25.000",
    badge: "POPULAR",
    category: "Charms"
  },
  "Product 2.jpg": {
    name: "Clay Keychain Custom",
    price: "Rp15.000",
    badge: "",
    category: "Charms"
  },
  "Product 3.jpg": {
    name: "Fish Keychain",
    price: "Rp25.000",
    badge: "",
    category: "Charms"
  },
  "Product 4.jpg": {
    name: "Miawberry Crystal Keychain",
    price: "Rp25.000",
    badge: "",
    category: "Charms"
  },
  "Product 5.jpg": {
    name: "Crownberries crystal Charm",
    price: "Rp30.000",
    badge: "BESTIE FAV",
    category: "Charms"
  },
  "Product 6.jpg": {
    name: "Buddy Brownie Series Keychain",
    price: "Rp20.000",
    badge: "",
    category: "Charms"
  },
  "Product 7.jpg": {
    name: "Black Cat & Bunny Charm",
    price: "Rp20.000",
    badge: "",
    category: "Charms"
  },
  "Product 8.jpg": {
    name: "Dust Bunny Charm",
    price: "Rp20.000",
    badge: "",
    category: "Charms"
  },
  "Product 9.jpg": {
    name: "Paw Crochet Keychain",
    price: "Rp15.000",
    badge: "",
    category: "Charms"
  },
  "Product 10.jpg": {
    name: "Keychain rock n red",
    price: "Rp25.000",
    badge: "EXCLUSIVE",
    category: "Charms"
  },
  "Product 11.jpg": {
    name: "Pink Yellow baby Bag Charm",
    price: "Rp30.000",
    badge: "",
    category: "Charms"
  },
  "Product 12.jpg": {
    name: "Creamy Crystal Charm",
    price: "Rp25.000",
    badge: "NEW",
    category: "Charms"
  },
  "Product 13.jpg": {
    name: "Alphabet Coloring Charm",
    price: "Rp20.000",
    badge: "",
    category: "Charms"
  }
};
function getPublicImageUrl(filename) {
  const supabaseUrl = "https://ennesvjjsyinwqthhqtu.supabase.co";
  return `${supabaseUrl}/storage/v1/object/public/product-images/${encodeURIComponent(filename)}`;
}
async function getProducts() {
  const supabaseUrl = "https://ennesvjjsyinwqthhqtu.supabase.co";
  const supabaseKey = "sb_publishable_WHVfGgvnxzYIlqPOybW62w_1w-DFFW8";
  const listResponse = await fetch(`${supabaseUrl}/storage/v1/object/list/product-images`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`
    },
    body: JSON.stringify({ prefix: "", limit: 100 })
  });
  if (!listResponse.ok) {
    const errorText = await listResponse.text();
    console.error("Gagal load storage:", errorText);
    return [];
  }
  const payload = await listResponse.json();
  const objects = Array.isArray(payload) ? payload : payload?.data || [];
  const allowedFiles = new Set(Object.keys(productMetadata));
  const products = objects.filter((file) => {
    if (typeof file.name !== "string") return false;
    return allowedFiles.has(file.name);
  }).map((file) => {
    const filename = file.name;
    const metadata = productMetadata[filename];
    const id = Number(filename.match(/(\d+)/)?.[1] ?? 0);
    return {
      id,
      image: getPublicImageUrl(filename),
      ...metadata
    };
  });
  return products;
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Shop = createComponent(async ($$result, $$props, $$slots) => {
  const products = await getProducts();
  const categories = [...new Set(products.map((product) => product.category))].sort();
  return renderTemplate(_a || (_a = __template(["", "  <script>\n  (() => {\n    const searchInput = document.getElementById('product-search');\n    const categoryFilter = document.getElementById('category-filter');\n    const sortFilter = document.getElementById('sort-filter');\n    const productGrid = document.getElementById('products-grid');\n    const noProducts = document.getElementById('no-products');\n    const productCards = Array.from(document.querySelectorAll('.product-card'));\n\n    if (!searchInput || !categoryFilter || !sortFilter || !productGrid || !noProducts) return;\n\n    const normalize = (text) => text.toLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g, '');\n\n    const updateProducts = () => {\n      const queryTerms = normalize(searchInput.value).trim().split(/\\s+/).filter(Boolean);\n      const category = categoryFilter.value;\n      const sort = sortFilter.value;\n      const visibleCards = productCards.filter((card) => {\n        const matchesSearch = queryTerms.every((term) => normalize(card.dataset.search || '').includes(term));\n        return matchesSearch && (!category || card.dataset.category === category);\n      });\n\n      visibleCards.sort((a, b) => {\n        const priceA = Number(a.dataset.price || 0);\n        const priceB = Number(b.dataset.price || 0);\n        if (sort === 'price-asc') return priceA - priceB;\n        if (sort === 'price-desc') return priceB - priceA;\n        if (sort === 'popular') return Number(b.dataset.popular === 'true') - Number(a.dataset.popular === 'true');\n        return Number(b.dataset.id || 0) - Number(a.dataset.id || 0);\n      });\n\n      productCards.forEach((card) => card.classList.add('hidden'));\n      visibleCards.forEach((card) => {\n        card.classList.remove('hidden');\n        productGrid.appendChild(card);\n      });\n      noProducts.classList.toggle('hidden', visibleCards.length > 0);\n    };\n\n    searchInput.addEventListener('input', updateProducts);\n    categoryFilter.addEventListener('change', updateProducts);\n    sortFilter.addEventListener('change', updateProducts);\n  })();\n<\/script> "], ["", "  <script>\n  (() => {\n    const searchInput = document.getElementById('product-search');\n    const categoryFilter = document.getElementById('category-filter');\n    const sortFilter = document.getElementById('sort-filter');\n    const productGrid = document.getElementById('products-grid');\n    const noProducts = document.getElementById('no-products');\n    const productCards = Array.from(document.querySelectorAll('.product-card'));\n\n    if (!searchInput || !categoryFilter || !sortFilter || !productGrid || !noProducts) return;\n\n    const normalize = (text) => text.toLowerCase().normalize('NFD').replace(/[\\\\u0300-\\\\u036f]/g, '');\n\n    const updateProducts = () => {\n      const queryTerms = normalize(searchInput.value).trim().split(/\\\\s+/).filter(Boolean);\n      const category = categoryFilter.value;\n      const sort = sortFilter.value;\n      const visibleCards = productCards.filter((card) => {\n        const matchesSearch = queryTerms.every((term) => normalize(card.dataset.search || '').includes(term));\n        return matchesSearch && (!category || card.dataset.category === category);\n      });\n\n      visibleCards.sort((a, b) => {\n        const priceA = Number(a.dataset.price || 0);\n        const priceB = Number(b.dataset.price || 0);\n        if (sort === 'price-asc') return priceA - priceB;\n        if (sort === 'price-desc') return priceB - priceA;\n        if (sort === 'popular') return Number(b.dataset.popular === 'true') - Number(a.dataset.popular === 'true');\n        return Number(b.dataset.id || 0) - Number(a.dataset.id || 0);\n      });\n\n      productCards.forEach((card) => card.classList.add('hidden'));\n      visibleCards.forEach((card) => {\n        card.classList.remove('hidden');\n        productGrid.appendChild(card);\n      });\n      noProducts.classList.toggle('hidden', visibleCards.length > 0);\n    };\n\n    searchInput.addEventListener('input', updateProducts);\n    categoryFilter.addEventListener('change', updateProducts);\n    sortFilter.addEventListener('change', updateProducts);\n  })();\n<\/script> "])), renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Shop", "data-astro-cid-5w43p2qc": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8" data-astro-cid-5w43p2qc> <h1 class="font-headline-lg text-headline-lg mb-2" data-astro-cid-5w43p2qc>Shop</h1> <p class="text-on-surface-variant" data-astro-cid-5w43p2qc>Browse our collection of kawaii keychains</p> </div>  <div class="bg-surface-container-low p-6 rounded-xl mb-8" data-astro-cid-5w43p2qc> <div class="flex flex-col md:flex-row gap-4" data-astro-cid-5w43p2qc> <div class="flex-1" data-astro-cid-5w43p2qc> <label for="product-search" class="font-label-caps text-label-caps text-on-surface-variant mb-2" data-astro-cid-5w43p2qc>Search</label> <input type="text" id="product-search" placeholder="Cari nama produk..." autocomplete="off" class="w-full bg-surface-container border-2 border-transparent focus:border-secondary-container focus:ring-0 rounded-lg p-3 transition-all outline-none" data-astro-cid-5w43p2qc> </div> <div data-astro-cid-5w43p2qc> <label class="font-label-caps text-label-caps text-on-surface-variant mb-2" data-astro-cid-5w43p2qc>Category</label> <select id="category-filter" class="w-full md:w-48 bg-surface-container border-2 border-transparent focus:border-secondary-container focus:ring-0 rounded-lg p-3 transition-all outline-none" data-astro-cid-5w43p2qc> <option value="" data-astro-cid-5w43p2qc>All Categories</option> ${categories.map((category) => renderTemplate`<option${addAttribute(category, "value")} data-astro-cid-5w43p2qc>${category}</option>`)} </select> </div> <div data-astro-cid-5w43p2qc> <label class="font-label-caps text-label-caps text-on-surface-variant mb-2" data-astro-cid-5w43p2qc>Sort By</label> <select id="sort-filter" class="w-full md:w-48 bg-surface-container border-2 border-transparent focus:border-secondary-container focus:ring-0 rounded-lg p-3 transition-all outline-none" data-astro-cid-5w43p2qc> <option value="newest" data-astro-cid-5w43p2qc>Newest</option> <option value="price-asc" data-astro-cid-5w43p2qc>Price: Low to High</option> <option value="price-desc" data-astro-cid-5w43p2qc>Price: High to Low</option> <option value="popular" data-astro-cid-5w43p2qc>Most Popular</option> </select> </div> </div> </div>  <div id="products-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" data-astro-cid-5w43p2qc> ${products.map((product) => renderTemplate`<div class="product-card min-w-[280px] bg-surface-container-lowest p-4 rounded-xl cloud-shadow hover:-translate-y-2 transition-transform sticker-border flex flex-col group"${addAttribute(`${product.name} ${product.category} ${product.badge}`.toLowerCase(), "data-search")}${addAttribute(product.category, "data-category")}${addAttribute(product.price.replace(/[^0-9]/g, ""), "data-price")}${addAttribute(product.id, "data-id")}${addAttribute(product.badge === "POPULAR" || product.badge === "BESTIE FAV" ? "true" : "false", "data-popular")} data-astro-cid-5w43p2qc> <a${addAttribute(`/product/${product.id}`, "href")} class="relative aspect-square rounded-lg overflow-hidden mb-4 bg-surface-container" data-astro-cid-5w43p2qc> <img${addAttribute(product.name, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"${addAttribute(product.image, "src")} data-astro-cid-5w43p2qc> ${product.badge && renderTemplate`<span class="absolute top-2 left-2 bg-pastel-yellow text-primary px-2 py-1 rounded-full text-[10px] font-bold" data-astro-cid-5w43p2qc> ${product.badge} </span>`} </a> <h4 class="font-headline-md text-headline-md mb-1" data-astro-cid-5w43p2qc>${product.name}</h4> <span class="font-price-display text-price-display text-primary mb-4" data-astro-cid-5w43p2qc>${product.price}</span> <button class="mt-auto w-full py-2 bg-secondary-container text-on-secondary-container rounded-full font-bold text-sm hover:bg-secondary transition-colors" data-add-to-cart${addAttribute(product.id, "data-product-id")}${addAttribute(product.name, "data-product-name")}${addAttribute(product.price, "data-product-price")}${addAttribute(product.image, "data-product-image")}${addAttribute(product.category, "data-product-variant")} data-astro-cid-5w43p2qc>
Add to Cart
</button> </div>`)} </div> <p id="no-products" class="hidden text-center text-on-surface-variant pb-12" aria-live="polite" data-astro-cid-5w43p2qc>
Produk tidak ditemukan. Coba ubah kata kunci atau filter.
</p> ` }));
}, "D:/TUGAS/stitch_twice_keychain_e_commerce_platform rill/src/pages/shop.astro", void 0);

const $$file = "D:/TUGAS/stitch_twice_keychain_e_commerce_platform rill/src/pages/shop.astro";
const $$url = "/shop";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Shop,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
