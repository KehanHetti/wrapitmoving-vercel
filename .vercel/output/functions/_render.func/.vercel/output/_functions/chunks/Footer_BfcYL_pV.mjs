import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent, F as Fragment } from './astro/server_Br1wbYCy.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://wrapitmoving.com");
const trim = (str = "", ch) => {
  let start = 0, end = str.length || 0;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};
const trimSlash = (s) => trim(trim(s, "/"));
const data = {
  links: [
    {
      text: "Services",
      links: [
        {
          text: "Moving",
          href: "/services/moving"
        },
        {
          text: "Furniture Move",
          href: "/services/furniture"
        },
        {
          text: "Junk Removal",
          href: "/services/junk"
        },
        {
          text: "Commercial Moves",
          href: "/services/commercial"
        },
        {
          text: "Long Distance",
          href: "/services/long-distance"
        }
      ]
    },
    {
      text: "FAQ",
      links: [
        {
          text: "FAQ",
          href: "/faq/faq"
        },
        {
          text: "Moving Tips",
          href: "/faq/moving"
        }
      ]
    },
    {
      text: "Pricing",
      href: "/#pricing"
    }
  ]
};
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Navigation;
  const currentPath = `/${trimSlash(new URL(Astro2.url).pathname)}`;
  return renderTemplate`${maybeRenderHead()}<section class="bg-white border-b border-black/5"> <div class="w-full mx-auto md:px-12 px-8 max-w-7xl lg:px-16"> <div x-data="{ open: false }" class="relative flex flex-col w-full py-7 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6"> <div class="flex flex-row items-center justify-between lg:justify-start"> <a href="/" class="text-blue inline-flex items-center gap-4"> <img alt="logo" class="h-16" src="/move.svg"> <span class="font-bold font-display text-2xl">Wrap-It Moving</span> </a> <button @click="open = !open" class="inline-flex items-center justify-center p-3 text-gray-400 hover:text-black focus:outline-none focus:text-black lg:hidden"> <svg class="w-7 h-7" stroke="currentColor" fill="none" viewBox="0 0 24 24"> <path :class="{'hidden': open, 'inline-flex': !open }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> <path :class="{'hidden': !open, 'inline-flex': open }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <nav :class="{'flex': open, 'hidden': !open}" class="flex-col items-center flex-grow hidden md:pb-0 md:flex md:justify-end md:flex-row"> <ul class="nav-links flex flex-row w-full md:w-auto text-xl tracking-[0.01rem] font-medium justify-center items-center"> ${data.links.map(({ text, href, links }) => renderTemplate`<li${addAttribute(links?.length ? "group" : "", "class")}> ${links?.length ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <button class="px-3 lg:px-8 py-3 md:px-4 text-lg font-medium text-black hover:text-accent-400 lg:ml-auto items-center"> ${text} </button> <ul class="dropdown-menu md:backdrop-blur-md dark:md:bg-dark rounded md:absolute pl-4 md:pl-0 font-medium md:bg-white/90 md:min-w-[200px] drop-shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible"> ${links.map(({ text: text2, href: href2 }) => renderTemplate`<li> <a${addAttribute([
    "first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-3 px-6 block whitespace-no-wrap",
    { "aw-link-active": href2 === currentPath }
  ], "class:list")}${addAttribute(href2, "href")}> ${text2} </a> </li>`)} </ul> ` })}` : renderTemplate`<a${addAttribute([
    "px-3 lg:px-8 py-3 md:px-4 text-lg font-medium text-black hover:text-accent-400 items-center",
    { "aw-link-active": href === currentPath }
  ], "class:list")}${addAttribute(href, "href")}> ${text} </a>`} </li>`)} </ul> <!-- Request a Quote and Call Now buttons --> <div class="inline-flex items-center gap-4 list-none lg:ml-auto"> <a href="/contact" class="inline-flex items-center h-14 justify-center px-8 py-3 text-sm font-medium rounded-xl focus-visible:outline-black focus:outline-none bg-orange border-2 border-orange duration-200 focus-visible:ring-blue hover:bg-transparent hover:border-blue hover:text-blue lg:w-auto text-center text-white w-full">
Request a Quote
</a> <a href="tel:+1-236-867-8800" class="inline-flex items-center h-14 justify-center px-8 py-3 text-sm font-medium rounded-xl focus-visible:outline-black focus:outline-none bg-orange border-2 border-orange duration-200 focus-visible:ring-blue hover:bg-transparent hover:border-blue hover:text-blue lg:w-auto text-center text-white w-full">
Call Now at 236-867-8800
</a> </div> </nav> </div> </div> </section>`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/components/global/Navigation.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white border-t"> <div class="items-center px-8 mx-auto py-12 md:px-12 lg:px-16 xl:px-36 2xl:max-w-7xl"> <div class="grid grid-cols-2 items-start gap-8 gap-y-24 xl:col-span-4"> <a href="/" class="xl:col-span-1 text-blue inline-flex flex-col items-center gap-2"> <img alt="Wrap-it Moving logo" class="h-14" src="/move.svg"> <span class="font-bold font-display">Wrap-it Moving</span> <p class="text-base text-gray-400 mt-2">7 days a week, 8am - 8pm</p> </a> <div class="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-8"> <div> <h3 class="text-lg text-black font-medium tracking-tight">Services</h3> <ul role="list" class="mt-4 space-y-1"> <li> <a href="/services/moving" class="text-base text-gray-400 hover:text-black">Local Moves</a> </li> <li> <a href="/services/furniture" class="text-base text-gray-400 hover:text-black">Furniture Moves</a> </li> <li> <a href="/services/junk" class="text-base text-gray-400 hover:text-black">Junk Removal</a> </li> <li> <a href="/services/commercial" class="text-base text-gray-400 hover:text-black">Commercial Moves</a> </li> <li> <a href="/services/long-distance" class="text-base text-gray-400 hover:text-black">Long Distance</a> </li> </ul> </div> <div class="mt-12 md:mt-0"> <h3 class="text-lg text-black font-medium tracking-tight">Company</h3> <ul role="list" class="mt-4 space-y-1"> <li> <a href="/about" class="text-base text-gray-400 hover:text-black">About Us</a> </li> <li> <a href="/#testimonials" class="text-base text-gray-400 hover:text-black">Testimonials</a> </li> <li> <a href="/faq/faq" class="text-base text-gray-400 hover:text-black">FAQ</a> </li> </ul> </div> <div class="mt-12 md:mt-0"> <h3 class="text-lg text-black font-medium tracking-tight">Contact</h3> <ul role="list" class="mt-4 space-y-1"> <li> <a href="tel:+1-236-867-8800" class="text-base text-gray-400 hover:text-black">236-867-8800</a> </li> <li> <a href="mailto:info@wrapitmoving.com" class="text-base text-gray-400 hover:text-black">info.wrapitmoving@gmail.com</a> </li> <li> <a href="/contact" class="text-base text-gray-400 hover:text-black">Contact Us</a> </li> </ul> </div> </div> </div> <section class="mt-6 gap-y-6 gap-x-8"> <div> <p class="text-sm text-neutral-600 lg:col-span-2 mt-4">© ${(/* @__PURE__ */ new Date()).getFullYear()} Wrap-it Moving - All Rights Reserved</p> </div> </section> </div> </footer>`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/components/global/Footer.astro", void 0);

export { $$Navigation as $, $$Footer as a };
