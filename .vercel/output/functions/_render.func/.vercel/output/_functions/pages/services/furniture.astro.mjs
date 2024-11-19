/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_Br1wbYCy.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_C3wLbWyD.mjs';
import { $ as $$Navigation, a as $$Footer } from '../../chunks/Footer_BfcYL_pV.mjs';
import { $ as $$Hero, a as $$Content } from '../../chunks/Content_CMEa2STp.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://wrapitmoving.com");
const $$Furniture = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Furniture;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Furniture Service", "image": {
    src: "/services/furniture-1.jpg",
    alt: "AstroWind Hero Image"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="hidden sm:inline">
Small Short Notice Moves - Single item moves: <span class="font-semibold">furniture, appliance, couch, mattress, fridge, tables, large size or quantity items from a store, etc.</span> </span> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
VANCOUVER’S PREMIER CHOICE <br> <span class="text-accent dark:text-orange highlight">
FOR
</span>
SMALL MOVES AND DELIVERIES<br> ` })}` })} ${renderComponent($$result2, "Content", $$Content, { "title": "Single Item Moving and Delivery", "subtitle": "Wrap-it Moving is here to help you to move your entire household, or just a few items. No move is too big or too small for our dedicated team! Whether it is handling a single wall art piece or a couch you bought on Marketplace, picking up wood planks for your home renovation or collecting a bulk order from a supplies store, we provide the tailored service that meets your unique needs.", "isReversed": true, "items": [
    {
      title: "\u2022 Customize a delivery plan"
    },
    {
      title: "\u2022 Help wrap and protect the item(s) on request"
    },
    {
      title: "\u2022 Dispose of wrapping material used by Wrap-it Moving"
    },
    {
      title: "\u2022 Pick-up and drop-off on request"
    },
    {
      title: "\u2022 Safely move or deliver item(s)"
    },
    {
      title: "\u2022 Include fuel and wrapping material cost in the rate"
    }
  ], "image": {
    src: "/services/furniture-2.png",
    alt: "Startup Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-blue sm:text-3xl mb-2">
You Can Count on Us
</h3>  <p class="text-lg text-gray-600 mt-4">
Need to move a single or few items with extra care, or don’t have the truck space to transport something huge or in bulk quantity? Wrap-it Moving will make it easy for you! Simply contact us, tell us what you need moved or delivered, and we will:
</p>  ` })}` })}  ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/pages/services/furniture.astro", void 0);

const $$file = "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/pages/services/furniture.astro";
const $$url = "/services/furniture";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Furniture,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
