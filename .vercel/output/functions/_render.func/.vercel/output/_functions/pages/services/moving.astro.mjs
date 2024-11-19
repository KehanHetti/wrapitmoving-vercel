/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_Br1wbYCy.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_C3wLbWyD.mjs';
import { $ as $$Navigation, a as $$Footer } from '../../chunks/Footer_BfcYL_pV.mjs';
import { $ as $$Hero, a as $$Content } from '../../chunks/Content_CMEa2STp.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://wrapitmoving.com");
const $$Moving = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Moving;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Moving Service", "image": {
    src: "/services/moving-service-1.webp",
    alt: "AstroWind Hero Image"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="hidden sm:inline"> <span class="font-semibold">Wrap-It Moving</span>'s dedicated and professional team will ensure a smooth relocation experience, handling every detail with care and precision..
</span>
Trust Wrap-it Moving for your local move needs in Vancouver
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
VANCOUVER’S PREMIER CHOICE <br> <span class="text-accent dark:text-orange highlight">
FOR
</span>
LOCAL MOVING SOLUTIONS.
<br> ` })}` })} ${renderComponent($$result2, "Content", $$Content, { "title": "How We Move", "subtitle": "Enhancing the way individuals navigate their movements. We ensure precision and transparency throughout the entire procedure through our unique methods, specialized tools, and cost-effective pricing, all while upholding the highest service standards. Here's our approach:", "isReversed": true, "items": [
    {
      title: "Description:",
      description: "You\u2019ll get clear, upfront pricing with Wrap-it Moving.  Our affordable rates are based on your item list and travel distance, with no hidden fees or unexpected charges.  We believe in transparency pricing to ensure you know exactly what to expect."
    }
  ], "image": {
    src: "/services/moving-service-2.jpeg",
    alt: "Startup Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-blue sm:text-3xl mb-2">
PRICING: <br><span class="text-2xl">Affordable rates clearly outlined.</span> </h3> ` })}` })} ${renderComponent($$result2, "Content", $$Content, { "isAfterContent": true, "items": [
    {
      title: "Description:",
      description: `Based on the information you provide and an assessment of the items needed to be moved on the moving day, our expert team will plan a specific strategy for your move, ensuring utmost efficiency.`
    }
  ], "image": {
    src: "/services/moving-service-3.jpg.webp",
    alt: "SaaS Businesses Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-blue sm:text-3xl mb-2">
PLANNING: <br><span class="text-2xl">Your relocation will be tailored to your unique needs.</span> </h3> ` })}` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/pages/services/moving.astro", void 0);

const $$file = "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/pages/services/moving.astro";
const $$url = "/services/moving";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Moving,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
