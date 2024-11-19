import { a as createComponent, r as renderTemplate, b as renderComponent, e as renderHead, f as renderSlot } from './astro/server_Br1wbYCy.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="author" content="Michael Andreuzza"><meta name="your keywords" content="wallpaper,black wallpaper, gradient wallpaper,aesthetic wallpaper,iphone wallpaper,wallpaper iphone,white wallpaper,pink wallpaper"><!-- Favicon guidelines generated with https://realfavicongenerator.net/ --><link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png"><link rel="manifest" href="/images/favicons/site.webmanifest"><link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg" color="#ffffff"><meta name="msapplication-TileColor" content="#ffffff"><meta name="theme-color" content="#ffffff"><!--Ionicons --><script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"><\/script><!--\nhttps://rsms.me/inter/\n--><link rel="preconnect" href="https://rsms.me/"><link rel="stylesheet" href="https://rsms.me/inter/inter.css"><!---- Alpine  --><script defer src="https://unpkg.com/alpinejs@3.10.5/dist/cdn.min.js"><\/script>'])));
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/components/BaseHead.astro", void 0);

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" class="scroll-smooth selection:bg-accent-500 selection:text-white no-touchevents hydrated"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, {})}<!-- Add viewport meta tag to restrict zooming --><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">${renderHead()}</head> <body class="bg-white overflow-x-hidden touch-action-pan-y"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
