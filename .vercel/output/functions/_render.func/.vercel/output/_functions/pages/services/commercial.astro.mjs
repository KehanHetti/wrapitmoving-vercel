/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_Br1wbYCy.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_C3wLbWyD.mjs';
import { $ as $$Navigation, a as $$Footer } from '../../chunks/Footer_BfcYL_pV.mjs';
import { $ as $$Hero, a as $$Content } from '../../chunks/Content_CMEa2STp.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://wrapitmoving.com");
const $$Commercial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Commercial;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Commercial Service", "image": {
    src: "/services/comm-1.jpg",
    alt: "AstroWind Hero Image"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="hidden sm:inline">
Moving to a new office space or reconfiguring your work place?  Let Wrap-it Moving help make it hassle-free!
</span> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
VANCOUVER’S PREMIER CHOICE FOR COMMERCIAL MOVES <br> ` })}` })} ${renderComponent($$result2, "Content", $$Content, { "title": "WE MOVE YOU SO YOU CAN KEEP MOVING!", "subtitle": "Work or running a business is stressful enough!  Let Wrap-it Moving help remove stress from your office relocation.  We can help with packing, unpacking, moving or assembling office equipment or furniture, to a new location or within your current work space.  Let us handle the many moving parts of a move so you focus your energy on the new chapter of your business venture.", "isReversed": true })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/pages/services/commercial.astro", void 0);

const $$file = "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/pages/services/commercial.astro";
const $$url = "/services/commercial";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Commercial,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
