export interface ProductItem {
  id: number;
  name: string;
  price: string;
  image: string;
  badge: string;
  category: string;
}

const productMetadata: Record<string, Omit<ProductItem, 'id' | 'image'>> = {
  'Product 1.jpg': {
    name: 'Red Apple Charm Bag',
    price: 'Rp25.000',
    badge: 'POPULAR',
    category: 'Charms',
  },
  'Product 2.jpg': {
    name: 'Clay Keychain Custom',
    price: 'Rp15.000',
    badge: '',
    category: 'Charms',
  },
  'Product 3.jpg': {
    name: 'Fish Keychain',
    price: 'Rp25.000',
    badge: '',
    category: 'Charms',
  },
  'Product 4.jpg': {
    name: 'Miawberry Crystal Keychain',
    price: 'Rp25.000',
    badge: '',
    category: 'Charms',
  },
  'Product 5.jpg': {
    name: 'Crownberries crystal Charm',
    price: 'Rp30.000',
    badge: 'BESTIE FAV',
    category: 'Charms',
  },
  'Product 6.jpg': {
    name: 'Buddy Brownie Series Keychain',
    price: 'Rp20.000',
    badge: '',
    category: 'Charms',
  },
  'Product 7.jpg': {
    name: 'Black Cat & Bunny Charm',
    price: 'Rp20.000',
    badge: '',
    category: 'Charms',
  },
  'Product 8.jpg': {
    name: 'Dust Bunny Charm',
    price: 'Rp20.000',
    badge: '',
    category: 'Charms',
  },
  'Product 9.jpg': {
    name: 'Paw Crochet Keychain',
    price: 'Rp15.000',
    badge: '',
    category: 'Charms',
  },
  'Product 10.jpg': {
    name: 'Keychain rock n red',
    price: 'Rp25.000',
    badge: 'EXCLUSIVE',
    category: 'Charms',
  },
  'Product 11.jpg': {
    name: 'Pink Yellow baby Bag Charm',
    price: 'Rp30.000',
    badge: '',
    category: 'Charms',
  },
  'Product 12.jpg': {
    name: 'Creamy Crystal Charm',
    price: 'Rp25.000',
    badge: 'NEW',
    category: 'Charms',
  },
  'Product 13.jpg': {
    name: 'Alphabet Coloring Charm',
    price: 'Rp20.000',
    badge: '',
    category: 'Charms',
  },
};

function getPublicImageUrl(filename: string) {
  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
  return `${supabaseUrl}/storage/v1/object/public/product-images/${encodeURIComponent(filename)}`;
}

export async function getProducts(): Promise<ProductItem[]> {
  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
  const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL or anon key is not configured.');
  }

  const listResponse = await fetch(`${supabaseUrl}/storage/v1/object/list/product-images`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
    },
    body: JSON.stringify({ prefix: '', limit: 100 }),
  });

  if (!listResponse.ok) {
    const errorText = await listResponse.text();
    console.error("Gagal load storage:", errorText);
    return [];
  }

  const payload = await listResponse.json();
  const objects = Array.isArray(payload) ? payload : payload?.data || [];

  const allowedFiles = new Set(Object.keys(productMetadata));

  const products = objects
    .filter((file: any) => {
      if (typeof file.name !== 'string') return false;
      return allowedFiles.has(file.name);
    })
    .map((file: any) => {
      const filename = file.name;
      const metadata = productMetadata[filename];
      const id = Number(filename.match(/(\d+)/)?.[1] ?? 0);

      return {
        id,
        image: getPublicImageUrl(filename),
        ...metadata,
      };
    });

  return products;
}