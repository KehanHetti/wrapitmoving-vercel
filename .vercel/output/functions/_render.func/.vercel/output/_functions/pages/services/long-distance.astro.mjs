/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_Br1wbYCy.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_C3wLbWyD.mjs';
import { $ as $$Navigation, a as $$Footer } from '../../chunks/Footer_BfcYL_pV.mjs';
import { $ as $$Hero, a as $$Content } from '../../chunks/Content_CMEa2STp.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://wrapitmoving.com");
const $$LongDistance = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LongDistance;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Long Distance Service", "image": {
    src: "/services/long-1.jpg",
    alt: "AstroWind Hero Image"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="hidden sm:inline">
Wrap-it Moving helps you with your long-distance move.
</span> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
VANCOUVER’S PREMIER CHOICE FOR LONG DISTANCE MOVES
` })}` })} ${renderComponent($$result2, "Content", $$Content, { "title": "Long-Distance Moving Has Never Been Easier", "subtitle": "Moving across the province or to the next province?  The stress of a move can multiply when you move long-distance.  Let Wrap-it Moving make it easier for you!  From Vancouver to other cities within BC like Pemberton, Penticton or Kelowna, or Calgary or Edmonton in Alberta, our dedicated and experienced team can help you along the way.  Contact us now and let our friendly team answer your questions or give you a quote to start a safe and smooth move!", "isReversed": true, "items": [
    {
      title: "We strongly recommend you wrapping and protecting every item being moved extra securely, label fragile boxes and items, wrap fragile items such as dishes and cups individually, to make sure they, too, have a comfortable and safe journey to your new home. We offer wrapping services as well. Contact us today for more information "
    }
  ], "image": {
    src: "/services/long-2.jpg",
    alt: "Startup Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-blue sm:text-3xl mb-2">
We Know it’s More Than Just a Move <br><span class="text-xl">We take extra care to handle everything you’ll need to start a new life</span> </h3> ` })}` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/pages/services/long-distance.astro", void 0);

const $$file = "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/pages/services/long-distance.astro";
const $$url = "/services/long-distance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LongDistance,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
