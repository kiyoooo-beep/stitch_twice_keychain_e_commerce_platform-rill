import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const text = await request.text();
    if (!text) {
      return new Response(JSON.stringify({ error: 'Request body is empty.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    let body;
    try {
      body = JSON.parse(text);
    } catch (error) {
      return new Response(JSON.stringify({ error: `Invalid JSON: ${error instanceof Error ? error.message : 'unknown'}` }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
    const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

    const payload = {
      nama: body.nama || (body.first_name ? `${body.first_name} ${body.last_name || ''}`.trim() : 'Guest'),
      email: body.email || null,
      alamat: body.alamat || [body.address, body.city].filter(Boolean).join(', '),
      telepon: body.telepon || null,
      kode_pos: body.kode_pos || body.postal_code || '',
      pesanan: body.items || [],
      total: String(body.total || 0),
      status: body.status || 'pending',
      created_at: body.created_at || new Date().toISOString(),
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

    const data = await response.text();

    if (!response.ok) {
      return new Response(JSON.stringify({ error: data }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
