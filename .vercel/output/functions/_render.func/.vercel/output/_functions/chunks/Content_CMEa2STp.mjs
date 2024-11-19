import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, d as addAttribute, b as renderComponent, u as unescapeHTML, F as Fragment, f as renderSlot } from './astro/server_Br1wbYCy.mjs';
import 'kleur/colors';
import 'clsx';
import { twMerge } from 'tailwind-merge';
import { getIconData, iconToSVG } from '@iconify/utils';

const icons = {};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$7 = createAstro("https://wrapitmoving.com");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$6 = createAstro("https://wrapitmoving.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "secondary",
    target,
    text = Astro2.slots.render("default"),
    icon = "",
    class: className = "",
    type,
    ...rest
  } = Astro2.props;
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    tertiary: "btn btn-tertiary",
    link: "cursor-pointer hover:text-primary"
  };
  return renderTemplate`${type === "button" || type === "submit" || type === "reset" ? renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")}${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(rest)}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`}</button>` : renderTemplate`<a${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(target ? { target, rel: "noopener noreferrer" } : {})}${spreadAttributes(rest)}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`}</a>`}`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/components/ui/Button.astro", void 0);

const $$Astro$5 = createAstro("https://wrapitmoving.com");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    actions = await Astro2.slots.render("actions"),
    image = await Astro2.slots.render("image")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="py-12 md:py-20 lg:py-20 lg:flex lg:items-center lg:gap-8"> <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto"> ${tagline && renderTemplate`<p class="text-base text-secondary dark:text-orange font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`} ${title && renderTemplate`<h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-blue ">${unescapeHTML(title)}</h1>`} <div class="max-w-3xl mx-auto"> ${subtitle && renderTemplate`<p class="text-xl text-muted mb-6 dark:text-slate-500">${unescapeHTML(subtitle)}</p>`} ${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4"> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto"> ${renderComponent($$result, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0" })} </div>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} </div> ${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`} </div> <div class="basis-1/2"> ${image && renderTemplate`<div class="relative m-auto max-w-5xl"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`<img class="mx-auto rounded-md w-full"${addAttribute([400, 768, 1024, 2040], "widths")} sizes="(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px" loading="eager"${addAttribute(600, "width")}${addAttribute(600, "height")}${addAttribute(image.src, "src")}>`} </div>`} </div> </div> </div> </section>`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/components/services/Hero.astro", void 0);

const $$Astro$4 = createAstro("https://wrapitmoving.com");
const $$Headline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Headline;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    classes = {}
  } = Astro2.props;
  const {
    container: containerClass = "max-w-3xl",
    title: titleClass = "text-3xl md:text-4xl ",
    subtitle: subtitleClass = "text-xl"
  } = classes;
  return renderTemplate`${(title || subtitle || tagline) && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge("mb-8 md:mx-auto md:mb-12 text-center", containerClass), "class")}>${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`}${title && renderTemplate`<h2${addAttribute(twMerge(
    "font-bold leading-tighter tracking-tighter font-heading text-heading text-3xl",
    titleClass
  ), "class")}>${unescapeHTML(title)}</h2>`}${subtitle && renderTemplate`<p${addAttribute(twMerge("mt-4 text-muted", subtitleClass), "class")}>${unescapeHTML(subtitle)}</p>`}</div>`}`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/components/ui/Headline.astro", void 0);

const $$Astro$3 = createAstro("https://wrapitmoving.com");
const $$Background = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Background;
  const { isDark = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["absolute inset-0", { "bg-dark dark:bg-transparent": isDark }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/components/ui/Background.astro", void 0);

const $$Astro$2 = createAstro("https://wrapitmoving.com");
const $$WidgetWrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$WidgetWrapper;
  const { id, isDark = false, containerClass = "", bg, as = "section" } = Astro2.props;
  const WrapperTag = as;
  return renderTemplate`${renderComponent($$result, "WrapperTag", WrapperTag, { "class": "relative not-prose scroll-mt-[72px]", ...id ? { id } : {} }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true"> ${renderSlot($$result2, $$slots["bg"], renderTemplate` ${bg ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(bg)}` })}` : renderTemplate`${renderComponent($$result2, "Background", $$Background, { "isDark": isDark })}`} `)} </div> <div${addAttribute([
    twMerge("relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default", containerClass),
    { dark: isDark }
  ], "class:list")}> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/components/ui/WidgetWrapper.astro", void 0);

const $$Astro$1 = createAstro("https://wrapitmoving.com");
const $$ItemGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ItemGrid;
  const { items = [], columns, defaultIcon = "", classes = {} } = Astro2.props;
  const {
    container: containerClass = "",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary",
    action: actionClass = ""
  } = classes;
  return renderTemplate`${items && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge(
    `grid mx-auto gap-8 md:gap-y-12 ${columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2 " : ""}`,
    containerClass
  ), "class")}>${items.map(({ title, description, icon, callToAction, classes: itemClasses = {} }) => renderTemplate`<div><div${addAttribute(twMerge("flex flex-row max-w-md", panelClass, itemClasses?.panel), "class")}><div class="flex justify-center">${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge("w-7 h-7 mr-2 rtl:mr-0 rtl:ml-2", defaultIconClass, itemClasses?.icon) })}`}</div><div class="mt-0.5">${title && renderTemplate`<h3${addAttribute(twMerge("text-xl font-bold", titleClass, itemClasses?.title), "class")}>${title}</h3>`}${description && renderTemplate`<p${addAttribute(twMerge(`${title ? "mt-3" : ""} text-muted`, descriptionClass, itemClasses?.description), "class")}>${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div${addAttribute(twMerge(
    `${title || description ? "mt-3" : ""}`,
    actionClass,
    itemClasses?.actionClass
  ), "class")}>${renderComponent($$result, "Button", $$Button, { "variant": "link", ...callToAction })}</div>`}</div></div></div>`)}</div>`}`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/components/ui/ItemGrid.astro", void 0);

const $$Astro = createAstro("https://wrapitmoving.com");
const $$Content = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Content;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    callToAction,
    items = [],
    columns,
    image = await Astro2.slots.render("image"),
    isReversed = false,
    isAfterContent = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${isAfterContent ? "pt-0 md:pt-0 lg:pt-0" : ""} ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "max-w-xl sm:mx-auto lg:max-w-2xl",
    title: "text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading",
    subtitle: "max-w-3xl mx-auto sm:text-center text-xl text-muted dark:text-slate-500"
  } })} ${maybeRenderHead()}<div class="mx-auto max-w-7xl p-4 md:px-8"> <div${addAttribute(`md:flex ${isReversed ? "md:flex-row-reverse" : ""} md:gap-16`, "class")}> <div class="md:basis-1/2 self-center"> ${content && renderTemplate`<div class="mb-12 text-lg dark:text-slate-500">${unescapeHTML(content)}</div>`} ${callToAction && renderTemplate`<div class="mt-[-40px] mb-8 text-primary"> ${renderComponent($$result2, "Button", $$Button, { "variant": "link", ...callToAction })} </div>`} ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "classes": {
    container: `gap-y-4 md:gap-y-8`,
    panel: "max-w-none",
    title: "text-lg font-medium leading-6 dark:text-orange ml-2 rtl:ml-0 rtl:mr-2",
    description: "text-muted dark:text-slate-500 ml-2 rtl:ml-0 rtl:mr-2",
    icon: "flex h-7 w-7 items-center justify-center rounded-full bg-green-600 dark:bg-green-700 text-gray-50 p-1",
    action: "text-lg font-medium leading-6 dark:text-orange ml-2 rtl:ml-0 rtl:mr-2"
  } })} </div> <div aria-hidden="true" class="mt-10 md:mt-0 md:basis-1/2"> ${image && renderTemplate`<div class="relative m-auto max-w-4xl"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`<img class="mx-auto w-full h-fit rounded-lg bg-gray-500 shadow-lg"${addAttribute(500, "width")}${addAttribute(500, "height")}${addAttribute([400, 768], "widths")} sizes="(max-width: 768px) 100vw, 432px" layout="responsive"${addAttribute(image.src, "src")}>`} </div>`} </div> </div> </div> ` })}`;
}, "C:/Users/Kehan/Documents/GitHub/wrapitmoving-vercel/src/components/services/Content.astro", void 0);

export { $$Hero as $, $$Content as a };
