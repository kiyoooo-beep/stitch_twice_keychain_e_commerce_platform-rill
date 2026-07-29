import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  try {
    const body = await request.json();
    const fullName = body.fullName || body.name;
    const email = body.email;
    if (!fullName || !email) {
      return new Response(JSON.stringify({
        success: false,
        message: "Nama dan email wajib diisi!"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const memberId = "TWICE-" + Math.floor(1e5 + Math.random() * 9e5);
    const voucherCode = "KAWAII10";
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "arzaliafithri@gmail.com",
        // Email kamu yang bertugas ngirim
        pass: "sbzlfzzshegtpjdx"
        // App Password kamu (tanpa spasi)
      }
    });
    try {
      await transporter.sendMail({
        from: '"TWICE KEYCHAIN" <arzaliafithri@gmail.com>',
        to: email,
        // Otomatis terkirim ke email apapun yang diketik di form web
        subject: "🎀 YEY! Kamu Resmi Jadi Member TWICE KEYCHAIN - Ini Voucher Spesialmu!",
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #FFFDF5; padding: 20px; border-radius: 16px; color: #2F3E46;">
            <h2 style="color: #F46B8D; text-align: center;">Selamat Datang di TWICE KEYCHAIN Club! ✨</h2>
            <p>Halo <strong>${fullName}</strong>,</p>
            <p>Terima kasih sudah mendaftarkan diri! Mulai sekarang, kamu berhak mendapatkan berbagai info produk terbaru dan penawaran eksklusif.</p>
            
            <div style="background-color: #ffe6ed; border: 2px dashed #F46B8D; padding: 15px; border-radius: 12px; text-align: center; margin: 20px 0;">
              <p style="margin: 0; font-size: 12px; color: #6D777B;">ID Member Kamu:</p>
              <p style="margin: 5px 0 15px 0; font-size: 18px; font-weight: bold; color: #2F3E46;">${memberId}</p>
              
              <p style="margin: 0; font-size: 12px; color: #6D777B;">Kode Voucher Diskon 10% Pertamamu:</p>
              <p style="margin: 5px 0 0 0; font-size: 22px; font-weight: bold; color: #F46B8D; letter-spacing: 2px;">${voucherCode}</p>
            </div>
          </div>
        `
      });
      console.log("SUKSES: Email terkirim ke", email);
    } catch (emailErr) {
      console.error("GAGAL kirim email:", emailErr);
    }
    try {
      const supabaseUrl = "https://ennesvjjsyinwqthhqtu.supabase.co";
      const supabaseKey = "sb_publishable_WHVfGgvnxzYIlqPOybW62w_1w-DFFW8";
      if (supabaseUrl && supabaseKey) {
        await fetch(`${supabaseUrl}/rest/v1/member_twice_keychain`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
            Prefer: "return=representation"
          },
          body: JSON.stringify({
            full_name: fullName,
            email,
            member_id: memberId
          })
        });
      }
    } catch (dbErr) {
      console.error("Database error diabaikan:", dbErr);
    }
    return new Response(JSON.stringify({
      success: true,
      message: "Pendaftaran berhasil!",
      memberId,
      discountVoucher: voucherCode
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({
      success: false,
      message: "Server error: " + err.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
