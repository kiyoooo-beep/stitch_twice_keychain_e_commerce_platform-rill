export async function saveOrder(orderData) {
  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
  const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase is not configured. Add PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY.');
  }
  if (supabaseKey.startsWith('sb_secret_')) {
    throw new Error('Konfigurasi Supabase tidak aman: PUBLIC_SUPABASE_ANON_KEY berisi secret key. Ganti dengan Publishable key atau anon key dari Supabase Dashboard > Settings > API.');
  }

  const payload = {
    nama: orderData.nama || (orderData.first_name ? `${orderData.first_name} ${orderData.last_name || ''}`.trim() : 'Guest'),
    email: orderData.email || null,
    alamat: orderData.alamat || [orderData.address, orderData.city].filter(Boolean).join(', '),
    telepon: orderData.telepon || null,
    kode_pos: orderData.kode_pos || orderData.postal_code || '',
    pesanan: orderData.items || [],
    total: String(orderData.total || 0),
    status: orderData.status || 'pending',
    created_at: orderData.created_at || new Date().toISOString(),
  };

  const response = await fetch(`${supabaseUrl}/rest/v1/pelanggan`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      Prefer: 'return=representation',
    },
    body: JSON.stringify(payload),
  });

  const text = await response.text();
  let data = null;
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = { message: text };
    }
  }

  if (!response.ok) {
    if (data?.code === '42501') {
      throw new Error('Supabase menolak penyimpanan karena policy INSERT tabel pelanggan belum diaktifkan. Jalankan SUPABASE_SETUP.sql di SQL Editor Supabase.');
    }
    throw new Error((data && (data.error || data.message)) || 'Failed to save shipping details.');
  }

  return data;
}
