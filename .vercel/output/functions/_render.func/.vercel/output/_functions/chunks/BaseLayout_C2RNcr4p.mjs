import { c as createComponent, r as renderHead, a as renderSlot, b as renderTemplate, d as createAstro } from './astro/server_BUxigWNf.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html class="light" lang="en" data-astro-cid-37fxchfa> <head><link rel="icon" type="image/png" href="/1.png"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} | TWICE KEYCHAIN</title><link href="https://fonts.googleapis.com" rel="preconnect"><link crossorigin href="https://fonts.gstatic.com" rel="preconnect"><link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,700;1,400&family=Quicksand:wght@400;600;700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-background text-on-surface font-body-md min-h-screen" data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/TUGAS/stitch_twice_keychain_e_commerce_platform rill/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
