export async function sendCustomerConfirmation({ to, nama, orderCode, items, total }) {
  console.log("🚀 [RESEND] Mulai memproses email...");
  console.log("👉 Target email pelanggan dari form web:", to);

  const resendApiKey = import.meta.env.RESEND_API_KEY;
  const fromEmail = import.meta.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  if (!resendApiKey || !to) {
    console.error("❌ [RESEND] GAGAL: Konfigurasi API atau email tujuan tidak tersedia.");
    return;
  }

  const itemsHtml = (items || [])
    .map((item) => `<li>${item.name} x${item.quantity || item.qty || 1}</li>`)
    .join('');

  try {
    console.log("⏳ [RESEND] Mengirim email konfirmasi...");
    
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
        Authorization: `Bearer ${resendApiKey}` 
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [to],
        subject: `Pembayaran Diterima - Order ${orderCode}`,
        html: `
          <div style="font-family: sans-serif; color: #333;">
            <h2>Halo ${nama || 'Kak'}, pembayaran kamu sudah kami terima! 🎉</h2>
            <p><b>Kode Order:</b> ${orderCode}</p>
            <p><b>Total:</b> Rp${Number(total).toLocaleString('id-ID')}</p>
            <p><b>Pesanan:</b></p>
            <ul>${itemsHtml}</ul>
            <p>Pesanan kamu sedang kami proses. Terima kasih sudah belanja! 🥰</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ [RESEND] DITOLAK OLEH SERVER RESEND! Detail:", errorText);
      return;
    }

    const data = await res.json();
    console.log("✅ [RESEND] SUKSES TERKIRIM! Cek kotak masuk/spam email kamu sekarang! ID Resend:", data.id);
    return data;

  } catch (error) {
    console.error("❌ [RESEND] KONEKSI TERPUTUS:", error);
  }
}
