-- Jalankan di Supabase SQL Editor

-- 1) Kolom tambahan di tabel pelanggan
alter table pelanggan add column if not exists order_code text unique;
alter table pelanggan add column if not exists payment_status text default 'menunggu_pembayaran';

-- 2) Fungsi kurangi stock secara atomik (aman dari race condition kalau ada 2 pembeli bersamaan)
create or replace function decrement_stock(product_id_input int, qty int)
returns boolean
language plpgsql
security definer
as $$
declare
  updated_rows int;
begin
  update products
  set stock = stock - qty
  where id = product_id_input and stock >= qty;

  get diagnostics updated_rows = row_count;
  return updated_rows > 0; -- true kalau berhasil, false kalau stock kurang
end;
$$;
