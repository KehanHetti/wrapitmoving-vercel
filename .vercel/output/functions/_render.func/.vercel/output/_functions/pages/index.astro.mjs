/* empty css                                 */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from '../chunks/astro/server_Br1wbYCy.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C3wLbWyD.mjs';
import { $ as $$Navigation, a as $$Footer } from '../chunks/Footer_BfcYL_pV.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24"> <div> <div class="text-center max-w-4xl mx-auto"> <!-- Company Slogan and Description --> <div class="flex justify-center col-span-1 "> <img alt="Facebook Logo" src="/top-logo.svg"> </div> <p class="text-gray-500 lg:text-xl max-w-2xl mt-4 mx-auto text-base">
Expertly handling your moving needs, from local to long-distance moves within BC. We offer commercial moves, packing services, junk removal, and delivery with a touch of care and efficiency.
</p> <!-- Call to Action Buttons --> <div class="flex justify-center gap-3 mt-10 flex-col sm:flex-row"> <!-- <a class="items-center justify-center h-12 font-medium rounded-xl focus-visible:outline-black focus:outline-none inline-flex duration-200 text-black lg:w-auto px-6 py-3 text-center text-black/80 w-full border"
            href="/contact">Request a Quote</a> --> <a class="items-center justify-center h-12 font-medium rounded-xl focus-visible:outline-black focus:outline-none inline-flex bg-orange border-2 border-orange duration-200 focus-visible:ring-blue hover:bg-transparent hover:border-blue hover:text-blue lg:w-auto px-6 py-3 text-center text-white w-full" href="/contact">Book a Move</a> </div> <!-- Unique Selling Points --> <dl class="lg:gap-x-8 lg:grid-cols-3 max-w-4xl mt-8 mx-auto sm:gap-x-6 sm:gap-y-12 sm:grid sm:grid-cols-2 sm:space-y-0 space-y-6 text-center text-sm items-start"> <div class="text-gray-500"> <strong class="text-gray-700">Competitive Pricing</strong> ━ Affordable rates without compromising on service quality.
</div> <div class="text-gray-500"> <strong class="text-gray-700">Exceptional Customer Service</strong> ━ Dedicated to ensuring a smooth and hassle-free move.
</div> <div class="text-gray-500"> <strong class="text-gray-700">Specialized Moving Services</strong> ━ Tailored solutions for every unique moving requirement.
</div> </dl> </div> <!-- Social Media Links (Placeholder) --> <!-- <div class="grid grid-cols-2 gap-0.5 lg:mt-8 md:grid-cols-6 mt-6">
        <div class="flex justify-center col-span-1 ">
          <img alt="Google Logo" class="h-15" src="/google.webp" />
        </div>
        <div class="flex justify-center col-span-1 ">
          <img alt="Google Logo" class="h-15h" src="/google2.webp" />
        </div>
        <div class="flex justify-center col-span-1 ">
          <img alt="Home Logo" class="h-15" src="/home.webp" />
        </div>
        <div class="flex justify-center col-span-1 ">
          <img alt="Starts Logo" class="h-15" src="/starts.webp" />
        </div>
        <div class="flex justify-center col-span-1 ">
          <img alt="Aplus Logo" class="h-15" src="/aplus.webp" />
        </div>
        <div class="flex justify-center col-span-1 ">
          <img alt="Yelp Logo" class="h-15" src="/yelp.webp" />
        </div>
      </div> --> </div> </div> </section>`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/components/landing/Hero.astro", void 0);

const $$SectionOne = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="features"> <div class="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24 scroll-mt-12"> <div class="mx-auto max-w-2xl text-center"> <div> <p class="text-black font-extrabold lg:text-5xl text-4xl tracking-tighter">
Moving Made Easy with Wrap-it Moving
</p> <p class="mt-4 text-lg max-w-xl mx-auto tracking-tight text-gray-500">
We combine speed and care to deliver a moving experience that's as stress-free as possible. Your belongings are in good hands with us.
</p> </div> </div> <div> <div class="mx-auto max-w-7xl pt-12"> <h2 class="sr-only">Features.</h2> <div> <div class="grid gap-12 grid-cols-1 lg:space-y-0 lg:text-center md:grid-cols-3"> <!-- Feature 1: Local Moves --> <div> <div> <div class="items-center justify-center text-accent-500 bg-gray-100 rounded-xl flex h-10 w-10 lg:mx-auto"> ${renderComponent($$result, "ion-icon", "ion-icon", { "aria-label": "home outline", "class": "hydrated md h-8 w-8", "name": "home-outline", "role": "img" })} </div> <p class="mt-4 text-lg font-semibold leading-6 text-black font-display tracking-tight">
Local Moves
</p> </div> <div class="mt-4 text-gray-500 text-sm">
Expertly managing your local moves with precision and care.
</div> </div> <!-- Feature 2: Long-Distance Moves --> <div> <div> <div class="items-center justify-center text-accent-500 bg-gray-100 rounded-xl flex h-10 w-10 lg:mx-auto"> ${renderComponent($$result, "ion-icon", "ion-icon", { "aria-label": "trail sign outline", "class": "hydrated md h-8 w-8", "name": "trail-sign-outline", "role": "img" })} </div> <p class="mt-4 text-lg font-semibold leading-6 text-black font-display tracking-tight">
Long-Distance Moves
</p> </div> <div class="mt-4 text-gray-500 text-sm">
Seamless long-distance moving services within BC, ensuring a smooth transition.
</div> </div> <!-- Feature 3: Commercial Moves --> <div> <div> <div class="items-center justify-center text-accent-500 bg-gray-100 rounded-xl flex h-10 w-10 lg:mx-auto"> ${renderComponent($$result, "ion-icon", "ion-icon", { "aria-label": "business outline", "class": "hydrated md h-8 w-8", "name": "business-outline", "role": "img" })} </div> <p class="mt-4 text-lg font-semibold leading-6 text-black font-display tracking-tight">
Commercial Moves
</p> </div> <div class="mt-4 text-gray-500 text-sm">
Tailored moving solutions for businesses of all sizes.
</div> </div> <!-- Additional features like Packing Services, Junk Removal, Delivery can be added here --> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/components/landing/SectionOne.astro", void 0);

const $$SectionTwo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24 scroll-mt-12"> <div class="mx-auto max-w-3xl lg:text-center"> <div> <p class="text-black font-extrabold lg:text-5xl text-4xl tracking-tighter">
Moving with Confidence and Care
</p> <p class="mt-4 text-lg max-w-xl tracking-tight text-gray-500 mx-auto">
At Wrap-it Moving, we ensure a stress-free move for families, businesses, and students with our reliable and efficient services.
</p> </div> </div> <div class="mx-auto pt-12"> <div class="mx-auto w-full gap-12 grid grid-cols-1 lg:gap-24 lg:grid-cols-3"> <!-- Feature 1: Reliable Packing Services --> <div> <div class="gap-3 lg:inline-flex lg:items-center"> <div class="items-center justify-center text-accent-500 bg-gray-100 rounded-xl flex h-10 w-10"> ${renderComponent($$result, "ion-icon", "ion-icon", { "aria-label": "cube outline", "class": "hydrated md h-8 w-8", "name": "cube-outline", "role": "img" })} </div> <p class="mt-4 text-lg font-semibold leading-6 text-black font-display lg:mt-0">
Reliable Packing Services
</p> </div> <p class="text-gray-500 text-sm mt-4">
Professional packing for secure and organized transportation of your belongings.
</p> </div> <!-- Feature 2: Efficient Junk Removal --> <div> <div class="gap-3 lg:inline-flex lg:items-center"> <div class="items-center justify-center text-accent-500 bg-gray-100 rounded-xl flex h-10 w-10"> ${renderComponent($$result, "ion-icon", "ion-icon", { "aria-label": "trash outline", "class": "hydrated md h-8 w-8", "name": "trash-outline", "role": "img" })} </div> <p class="mt-4 text-lg font-semibold leading-6 text-black font-display lg:mt-0">
Efficient Junk Removal
</p> </div> <p class="text-gray-500 text-sm mt-4">
Hassle-free removal of unwanted items, keeping your moving process clean and streamlined.
</p> </div> <!-- Feature 3: Personalized Moving Experience --> <div> <div class="gap-3 lg:inline-flex lg:items-center"> <div class="items-center justify-center text-accent-500 bg-gray-100 rounded-xl flex h-10 w-10"> ${renderComponent($$result, "ion-icon", "ion-icon", { "aria-label": "people outline", "class": "hydrated md h-8 w-8", "name": "people-outline", "role": "img" })} </div> <p class="mt-4 text-lg font-semibold leading-6 text-black font-display lg:mt-0">
Personalized Moving Experience
</p> </div> <p class="text-gray-500 text-sm mt-4">
Customized moving solutions tailored to meet the unique needs of each client, whether for families, businesses, or students.
</p> </div> </div> </div> </div> </section>`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/components/landing/SectionTwo.astro", void 0);

const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="testimonials" class="bg-gray-100"> <div class="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24"> <div class="max-w-2xl mx-auto md:text-center"> <h2 class="text-black font-extrabold lg:text-5xl text-4xl tracking-tight">
What Our Customers Say About Wrap-it Moving
</h2> <img src="/FiveStars.png" alt="Five Stars" class="mx-auto mt-4" style="max-width: 250px;"> </div> <ul role="list" class="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-16 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"> <!-- Testimonial 1 --> <li> <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8"> <li> <figure class="relative h-full p-6 bg-white rounded-3xl"> <blockquote class="relative"> <p class="text-base text-gray-500">
"
                  Not only that but he fixed our garage door in the middle of the move. Worth every penny and a generous tip, not just for the incredible value but also because he's such a friendly, kind guy. :) A great communicator, punctual, and all around top notch. Thank you Ben!"
</p> </blockquote> <figcaption class="relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100"> <div> <div class="text-lg font-semibold leading-6 text-black font-display">
Zheng Chaofan
</div> <div class="mt-1 text-sm text-gray-500">
Satisfied Customer
</div> </div> </figcaption> </figure> </li> <!-- Testimonial 2 --> <li> <figure class="relative h-full p-6 bg-white rounded-3xl"> <blockquote class="relative"> <p class="text-base text-gray-500">
"They are very fast and careful with helping to move!"
</p> </blockquote> <figcaption class="relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100"> <div> <div class="text-lg font-semibold leading-6 text-black font-display">
Xiao Ao
</div> <div class="mt-1 text-sm text-gray-500">
Satisfied Customer
</div> </div> </figcaption> </figure> </li> </ul> </li> <!-- Testimonial 3 --> <li> <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8"> <li> <figure class="relative h-full p-6 bg-white rounded-3xl"> <blockquote class="relative"> <p class="text-base text-gray-500">
"Amazing movers...went above and beyond...fully recommend!!"
</p> </blockquote> <figcaption class="relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100"> <div> <div class="text-lg font-semibold leading-6 text-black font-display">
Kathy Korcsok
</div> <div class="mt-1 text-sm text-gray-500">
Recent Mover
</div> </div> <!-- Customer Image Placeholder --> <!-- [Insert Customer Image] --> </figcaption> </figure> </li> <li> <figure class="relative h-full p-6 bg-white rounded-3xl"> <blockquote class="relative"> <p class="text-base text-gray-500">
"Wrap-it Moving made our cross-country relocation a breeze. The team was reliable, and our move was handled with care and precision."
</p> </blockquote> <figcaption class="relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100"> <div> <div class="text-lg font-semibold leading-6 text-black font-display">
Emily Johnson
</div> <div class="mt-1 text-sm text-gray-500">
Recent Mover
</div> </div> <!-- Customer Image Placeholder --> <!-- [Insert Customer Image] --> </figcaption> </figure> </li> </ul> </li> <li> <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8"> <li> <figure class="relative h-full p-6 bg-white rounded-3xl"> <blockquote class="relative"> <p class="text-base text-gray-500">
"Amazing service! The level of professionalism and kindness the team displays is top notch!"
</p> </blockquote> <figcaption class="relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100"> <div> <div class="text-lg font-semibold leading-6 text-black font-display">
Murtaza Hussain
</div> <div class="mt-1 text-sm text-gray-500">
Recent Mover
</div> </div> <!-- Customer Image Placeholder --> <!-- [Insert Customer Image] --> </figcaption> </figure> </li> <li> <figure class="relative h-full p-6 bg-white rounded-3xl"> <blockquote class="relative"> <p class="text-base text-gray-500">
"Highly recommended! Their team was professional, efficient, and careful with our belongings. Their excellent communication made the process stress-free."
</p> </blockquote> <figcaption class="relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100"> <div> <div class="text-lg font-semibold leading-6 text-black font-display">
Jap Bondoc
</div> <div class="mt-1 text-sm text-gray-500">
Recent Mover
</div> </div> </figcaption> </figure> </li> </ul> </li> </ul> </div> </section>`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/components/global/Testimonial.astro", void 0);

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section aria-labelledby="pricing-section" id="pricing"> <div class="lg:px-16 max-w-7xl md:px-12 mx-auto px-8 py-24 scroll-mt-12"> <div class="text-center"> <h2 class="text-black font-extrabold lg:text-5xl text-4xl tracking-tighter">
Clear and Flexible Pricing,
<span class="lg:block"> tailored for your moving needs</span> </h2> </div> </div> <div class="items-center px-8 lg:pt-12 pb-24 mx-auto max-w-7xl lg:px-16"> <div class="grid max-w-2xl grid-cols-1 py-4 -mx-4 sm:grid-cols-2 gap-y-10 sm:mx-auto lg:max-w-none lg:grid-cols-4 xl:gap-x-4 lg:bg-gray-50 lg:border border-gray-500/10 lg:rounded-3xl"> <!-- Pricing Tier 1: Local Move --> <section class="flex flex-col px-6 rounded-3xl lg:py-8"> <h3 class="mt-5 text-lg text-black font-display">One Mover</h3> <p class="text-gray-500 text-sm">
Ideal for nearby relocations plus
<a href="/pricing#travel-zone-map" class="text-blue-500 underline hover:text-blue-700">travel time</a> </p> <p class="order-first text-5xl font-light tracking-tight text-black font-display">
$99/hr
</p> <ul role="list" class="flex flex-col order-last mt-10 text-sm text-gray-600 gap-y-3"> <li class="flex items-center"> ${renderComponent($$result, "ion-icon", "ion-icon", { "class": "w-4 h-4 md hydrated", "name": "checkmark-outline", "role": "img", "aria-label": "checkmark outline" })} <span class="ml-4">Suitable for individual items or a small 1-bedroom apartment</span> </li> <!-- Additional features --> </ul> <a class="inline-flex items-center justify-center h-12 mt-8 rounded-xl focus-visible:outline-black focus:outline-none bg-orange border-2 border-orange duration-200 focus-visible:ring-blue hover:bg-transparent hover:border-blue hover:text-blue lg:w-auto px-6 py-3 text-center text-white w-full" href="/pricing">Get started</a> </section>  <!-- Pricing Tier 2: Long-Distance Move --> <section class="flex flex-col px-6 rounded-3xl lg:py-8"> <h3 class="mt-5 text-lg text-black font-display">Two Movers</h3> <p class="mt-2 text-sm text-gray-500">
Perfect for interstate relocations plus
<a href="/pricing#travel-zone-map" class="text-blue-500 underline hover:text-blue-700">travel time</a> </p> <p class="order-first text-5xl font-light tracking-tight text-black font-display">
$139/hr
</p> <ul role="list" class="flex flex-col order-last mt-10 text-sm text-gray-600 gap-y-3"> <li class="flex items-center"> ${renderComponent($$result, "ion-icon", "ion-icon", { "class": "w-4 h-4 md hydrated", "name": "checkmark-outline", "role": "img", "aria-label": "checkmark outline" })} <span class="ml-4">Ideal for a 1-2 bedroom apartment</span> </li> <!-- <li class="flex items-center">
            <ion-icon class="w-4 h-4 md hydrated" name="checkmark-outline" role="img" aria-label="checkmark outline" />
            <span class="ml-4">Idea for a small 2-bedroon apartment</span>
          </li> --> <!-- Additional features --> </ul> <a class="inline-flex items-center justify-center h-12 mt-8 rounded-xl focus-visible:outline-black focus:outline-none bg-orange border-2 border-orange duration-200 focus-visible:ring-blue hover:bg-transparent hover:border-blue hover:text-blue lg:w-auto px-6 py-3 text-center text-white w-full" href="/pricing">Get started</a> </section> <!-- Pricing Tier 3: Commercial Move --> <section class="flex flex-col px-6 rounded-3xl lg:py-8"> <h3 class="mt-5 text-lg text-black font-display">Three Movers</h3> <p class="mt-2 text-sm text-gray-500">
Tailored for business relocations plus
<a href="/pricing#travel-zone-map" class="text-blue-500 underline hover:text-blue-700">travel time</a> </p> <p class="order-first text-5xl font-light tracking-tight text-black font-display">
$179/hr
</p> <ul role="list" class="flex flex-col order-last mt-10 text-sm text-gray-600 gap-y-3"> <li class="flex items-center"> ${renderComponent($$result, "ion-icon", "ion-icon", { "class": "w-4 h-4 md hydrated", "name": "checkmark-outline", "role": "img", "aria-label": "checkmark outline" })} <span class="ml-4">Ideal for a 2-4 bedroom apartment</span> </li> <!-- <li class="flex items-center">
            <ion-icon class="w-4 h-4 md hydrated" name="checkmark-outline" role="img" aria-label="checkmark outline" />
            <span class="ml-4">Idea for a small 3-bedroon apartment</span>
          </li> --> <!-- Additional features --> </ul> <a class="inline-flex items-center justify-center h-12 mt-8 rounded-xl focus-visible:outline-black focus:outline-none bg-orange border-2 border-orange duration-200 focus-visible:ring-blue hover:bg-transparent hover:border-blue hover:text-blue lg:w-auto px-6 py-3 text-center text-white w-full" href="/pricing">Get started</a> </section> <!-- Pricing Tier 4: Specialized Services --> <section class="flex flex-col px-6 rounded-3xl lg:py-8"> <h3 class="mt-5 text-lg text-black font-display">Long Distance Move</h3> <p class="mt-2 text-sm text-gray-500">
For unique and delicate moving and any other services
</p> <p class="order-first text-5xl font-light tracking-tight text-black font-display">
Varies
</p> <ul role="list" class="flex flex-col order-last mt-10 text-sm text-gray-600 gap-y-3"> <li class="flex items-center"> ${renderComponent($$result, "ion-icon", "ion-icon", { "class": "w-4 h-4 md hydrated", "name": "checkmark-outline", "role": "img", "aria-label": "checkmark outline" })} <span class="ml-4">Guaranteed flat rate</span> </li> <!-- Additional features --> </ul> <a class="inline-flex items-center justify-center h-12 mt-8 rounded-xl focus-visible:outline-black focus:outline-none bg-orange border-2 border-orange duration-200 focus-visible:ring-blue hover:bg-transparent hover:border-blue hover:text-blue lg:w-auto px-6 py-3 text-center text-white w-full" href="/pricing">Get started</a> </section> </div> </div> </section> `;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/components/landing/Pricing.astro", void 0);

const $$Cta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-zinc-100"> <div class="relative"> <div class="lg:absolute lg:inset-0 lg:left-1/2"> <img class="object-cover w-full h-64 sm:h-80 lg:absolute lg:h-full" src="truck.jpeg" alt="Wrap-it Moving Truck"> </div> <div class="pt-16 pb-24 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32"> <div class="px-8 lg:px-12"> <div class="max-w-lg mx-auto lg:mx-0 lg:pr-12"> <p class="mt-12 text-3xl font-black tracking-tight text-black uppercase font-display">
Wrap-it Moving - Your Trusted Moving Partner
</p> <p class="max-w-2xl mt-4 text-base font-medium tracking-tight text-black">
We provide comprehensive moving services, from local to long-distance moves, packing, and junk removal. Our team ensures a hassle-free experience with a focus on speed and care.
</p> <p class="mt-8 text-2xl tracking-tight text-black font-medium font-display lg:pl-4 lg:border-l-4 border-accent-600">
Experience the Difference with <span class="text-accent-600">Wrap-it Moving</span>.
</p> <p class="max-w-2xl mt-8 text-base font-medium tracking-tight text-black">
Get started with us today for a seamless moving experience. Our commitment is to handle your belongings as if they were our own. Reach out for a custom quote tailored to your specific needs.
</p> <div class="mt-12"> <a href="/contact" class="inline-flex items-center justify-center w-full gap-4 px-6 py-3 text-sm font-medium text-white transition rounded-xl bg-accent-600 group active:text-gray-900/60 active:transition-none outline-offset-2 hover:bg-white hover:text-black lg:w-auto">Request a Quote <span>→</span> </a> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/components/global/Cta.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "SectionOne", $$SectionOne, {})} ${renderComponent($$result2, "SectionTwo", $$SectionTwo, {})} ${renderComponent($$result2, "Testimonial", $$Testimonial, {})} ${renderComponent($$result2, "Pricing", $$Pricing, {})} ${renderComponent($$result2, "Cta", $$Cta, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/pages/index.astro", void 0);

const $$file = "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
