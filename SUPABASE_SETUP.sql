
alter table public.pelanggan enable row level security;

drop policy if exists "anon can insert pelanggan checkout" on public.pelanggan;
create policy "anon can insert pelanggan checkout"
on public.pelanggan
for insert
to anon
with check (true);
