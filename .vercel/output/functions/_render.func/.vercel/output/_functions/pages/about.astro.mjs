/* empty css                                 */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from '../chunks/astro/server_Br1wbYCy.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C3wLbWyD.mjs';
import { $ as $$Navigation, a as $$Footer } from '../chunks/Footer_BfcYL_pV.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$About$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24"> <div> <div class="relative mx-auto max-w-[40rem] pt-20 pb-12"> <h1 class="font-extrabold text-5xl text-black font-display">
About Us
</h1> </div> </div> <div> <div class="mx-auto max-w-[40rem] prose-base prose text-gray-500 prose-h3:text-black prose-a:font-semibold prose-a:text-accent-300 hover:prose-a:text-black"> <p>
Meet the visionary behind our small moving company, a family-owned business that is driven by a passion to make a positive impact. Fuelled by a desire to help others during their major life transition, our owner understands the challenges of moving and strives to help ease the stress for those in the community.
</p> <p>
Having embarked on a journey to a new country and new culture, our founder is committed to giving back and contributing to the community that welcomed him.  With a genuine belief in the power of lending a helping hand, our founder regularly donates portions of the profits earned from the moving business to charities and to support those in need.
</p> <p>
Beyond just transporting belongings, our moving company is built on a foundation of empathy and compassion. Every move is an opportunity to foster a sense of community, and our owner takes pride in ensuring that the funds generated from these services contribute positively to the lives of others.
</p> <p>
The name Wrap-it Moving was born from the goal to safeguard valuables while transporting them rapidly, playing on the word ‘rapid’ which has the same sound as ‘wrap-it’.
</p> <p>
By choosing Wrap-it Moving, you're not just getting a reliable service; you're supporting a local business that genuinely cares about people. Join us on this journey, and let's move forward together with heart, purpose, and a commitment to making a difference in the lives of those around us.
</p> </div> </div> </div> </section>`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/components/infopages/About.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${renderComponent($$result2, "About", $$About$1, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/pages/about.astro", void 0);

const $$file = "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };