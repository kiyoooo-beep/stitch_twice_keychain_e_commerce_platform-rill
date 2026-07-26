const STORAGE_KEY = 'twice-cart';

export function getCart() {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Failed to parse cart:', error);
    return [];
  }
}

function saveCart(cart) {
  if (typeof window === 'undefined') return;

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  window.dispatchEvent(
    new CustomEvent('cart:updated', {
      detail: {
        cart,
        count: getCartCount(cart),
      },
    })
  );
}

export function getCartCount(cart = getCart()) {
  return cart.reduce((total, item) => total + (item.quantity || 0), 0);
}

export function addToCart(product) {
  const cart = getCart();
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  saveCart(cart);
  return cart;
}

export function updateQuantity(productId, delta) {
  const cart = getCart();
  const item = cart.find((entry) => entry.id === productId);

  if (!item) return cart;

  item.quantity = Math.max(0, item.quantity + delta);

  const nextCart = item.quantity === 0 ? cart.filter((entry) => entry.id !== productId) : cart;
  saveCart(nextCart);
  return nextCart;
}

export function removeFromCart(productId) {
  const nextCart = getCart().filter((item) => item.id !== productId);
  saveCart(nextCart);
  return nextCart;
}

export function clearCart() {
  saveCart([]);
  return [];
}

export function syncCartBadge() {
  if (typeof document === 'undefined') return;

  const badge = document.querySelector('[data-cart-count]');
  if (!badge) return;

  const count = getCartCount(getCart());
  badge.textContent = String(count);
  badge.classList.toggle('hidden', count === 0);
}
