/* empty css                                 */
import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Br1wbYCy.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C3wLbWyD.mjs';
import { $ as $$Navigation, a as $$Footer } from '../chunks/Footer_BfcYL_pV.mjs';
export { renderers } from '../renderers.mjs';

const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<div class="w-full mx-auto max-w-7xl items-center py-20 text-center"> <h1 style="font-size: 2rem; font-weight: bold; color: #333;">Thank You for Submitting a Quote</h1> <p style="font-size: 1.2rem; color: #555; margin-top: 10px;">
We have received your quote request and will get back to you as soon as possible.
</p> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/pages/thank-you.astro", void 0);

const $$file = "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/pages/thank-you.astro";
const $$url = "/thank-you";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ThankYou,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
