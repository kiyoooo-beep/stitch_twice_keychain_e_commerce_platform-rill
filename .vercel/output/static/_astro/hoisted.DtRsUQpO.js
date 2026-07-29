import{g as m,s as u,u as b,r as v}from"./cart.Z8mnVVDp.js";import"./hoisted.CyU-uIGZ.js";function r(t){return Math.round(t).toLocaleString("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0})}function p(t){return Number(String(t).replace(/\D/g,""))||0}function s(){const t=m(),n=document.getElementById("cart-items"),i=document.getElementById("cart-summary"),c=document.getElementById("cart-count");if(!n||!i||!c)return;if(c.textContent=`You have ${t.length} items`,t.length===0){n.innerHTML=`
        <div class="bg-surface-container-lowest p-8 rounded-xl cloud-shadow border border-surface-variant/30 text-center">
          <p class="text-on-surface-variant mb-4">Your cart is empty.</p>
          <a href="/shop" class="inline-block bg-primary text-white px-6 py-3 rounded-full font-headline-md">Continue Shopping</a>
        </div>
      `,i.innerHTML=`
        <h2 class="font-headline-md text-headline-md mb-6">Order Summary</h2>
        <div class="space-y-3 mb-6 pb-6 border-b border-surface-variant/50">
          <div class="flex justify-between">
            <span class="text-on-surface-variant">Subtotal</span>
            <span>Rp0</span>
          </div>
          <div class="flex justify-between">
            <span class="text-on-surface-variant">Shipping</span>
            <span class="text-pastel-green font-bold">FREE</span>
          </div>
          <div class="flex justify-between">
            <span class="text-on-surface-variant">Tax</span>
            <span>Rp0</span>
          </div>
        </div>
        <div class="flex justify-between mb-6">
          <span class="font-headline-md text-headline-md">Total</span>
          <span class="font-price-display text-headline-lg text-primary">Rp0</span>
        </div>
      `,u();return}const d=t.reduce((e,a)=>{const o=p(a.price);return e+o*a.quantity},0),l=d*.08,f=d+l;n.innerHTML=t.map(e=>{const a=p(e.price);return`
          <div class="bg-surface-container-lowest p-4 rounded-xl cloud-shadow border border-surface-variant/30 flex gap-4">
            <div class="w-24 h-24 bg-white rounded-lg overflow-hidden shrink-0 border border-surface-variant/30">
              <img alt="${e.name}" class="w-full h-full object-cover" src="${e.image}" />
            </div>
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-headline-md text-headline-md text-primary">${e.name}</h3>
                <p class="text-sm text-on-surface-variant">${e.variant}</p>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-price-display text-price-display text-secondary">${r(a)}</span>
                <div class="flex items-center gap-2">
                  <button class="w-8 h-8 rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container" data-update-quantity="-1" data-product-id="${e.id}">
                    <span class="material-symbols-outlined text-sm">remove</span>
                  </button>
                  <span class="w-8 text-center font-bold">${e.quantity}</span>
                  <button class="w-8 h-8 rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container" data-update-quantity="1" data-product-id="${e.id}">
                    <span class="material-symbols-outlined text-sm">add</span>
                  </button>
                  <button class="w-8 h-8 rounded text-error hover:bg-error-container/20 ml-2" data-remove-product="${e.id}">
                    <span class="material-symbols-outlined text-sm">delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        `}).join(""),i.innerHTML=`
      <h2 class="font-headline-md text-headline-md mb-6">Order Summary</h2>
      <div class="space-y-3 mb-6 pb-6 border-b border-surface-variant/50">
        <div class="flex justify-between">
          <span class="text-on-surface-variant">Subtotal</span>
          <span>${r(d)}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-on-surface-variant">Shipping</span>
          <span class="text-pastel-green font-bold">FREE</span>
        </div>
        <div class="flex justify-between">
          <span class="text-on-surface-variant">Tax</span>
          <span>${r(l)}</span>
        </div>
      </div>
      <div class="flex justify-between mb-6">
        <span class="font-headline-md text-headline-md">Total</span>
        <span class="font-price-display text-headline-lg text-primary">${r(f)}</span>
      </div>
      <a href="/shipping" class="block w-full bg-primary text-white text-center py-4 rounded-full font-headline-md hover:bg-on-primary-fixed-variant transition-all active:scale-95 shadow-lg">
        Proceed to Checkout
      </a>
      <a href="/shop" class="block w-full mt-3 border-2 border-primary text-primary text-center py-3 rounded-full font-headline-md hover:bg-primary/5 transition-colors">
        Continue Shopping
      </a>
    `,n.querySelectorAll("[data-update-quantity]").forEach(e=>{e.addEventListener("click",()=>{const a=Number(e.getAttribute("data-product-id")),o=Number(e.getAttribute("data-update-quantity"));b(a,o),s()})}),n.querySelectorAll("[data-remove-product]").forEach(e=>{e.addEventListener("click",()=>{const a=Number(e.getAttribute("data-remove-product"));v(a),s()})}),u()}s();window.addEventListener("cart:updated",s);
