import { c as create_ssr_component, v as validate_component, b as add_attribute, f as compute_slots, g as compute_rest_props, h as spread, i as escape_attribute_value, j as escape_object, d as escape, k as get_current_component, s as setContext, l as getContext, a as subscribe } from "../../chunks/ssr.js";
import { i as is_void, n as navigating } from "../../chunks/stores.js";
import { twMerge, twJoin } from "tailwind-merge";
import { F as Frame, B as Button } from "../../chunks/Button.js";
import * as dom from "@floating-ui/dom";
import { w as writable } from "../../chunks/index2.js";
import { W as Wrapper } from "../../chunks/Wrapper.js";
import { I as Icon } from "../../chunks/Icon.js";
const Bell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
      }
    ],
    ["path", { "d": "M10.3 21a1.94 1.94 0 0 0 3.4 0" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "bell" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const BellIcon = Bell;
const profile = "/_app/immutable/assets/karsten-winegeart-uNVjLyA3xu8-unsplash.JTKAa3O0.jpg";
const Placeholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { size = "md" } = $$props;
  const sizes = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-20 h-20",
    xl: "w-36 h-36"
  };
  const borderedSizes = {
    xs: "w-4 h-4",
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-16 h-16",
    xl: "w-32 h-32"
  };
  let svgClass = twMerge("text-gray-400 bg-gray-100 dark:bg-gray-600", rounded ? "rounded" : "rounded-full", border ? borderedSizes[size] : sizes[size], $$props.class);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg${add_attribute("class", svgClass, 0)} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg> `;
});
const Indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { color = "gray" } = $$props;
  let { rounded = false } = $$props;
  let { size = "md" } = $$props;
  let { border = false } = $$props;
  let { placement = void 0 } = $$props;
  let { offset = true } = $$props;
  const colors = {
    gray: "bg-gray-200",
    dark: "bg-gray-900 dark:bg-gray-700",
    blue: "bg-blue-600",
    orange: "bg-orange-600",
    green: "bg-green-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    indigo: "bg-indigo-500",
    yellow: "bg-yellow-300",
    teal: "bg-teal-500",
    none: ""
  };
  const sizes = {
    xs: "w-2 h-2",
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3",
    lg: "w-3.5 h-3.5",
    xl: "w-6 h-6"
  };
  const placements = {
    // top
    "top-left": "top-0 left-0",
    "top-center": "top-0 left-1/2 -translate-x-1/2",
    "top-right": "top-0 right-0",
    // center
    "center-left": "top-1/2 -translate-y-1/2 left-0",
    center: "top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
    "center-right": "top-1/2 -translate-y-1/2 right-0",
    // bottom
    "bottom-left": "bottom-0 left-0",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-0 right-0"
  };
  const offsets = {
    // top
    "top-left": "-translate-x-1/3 -translate-y-1/3",
    "top-center": "-translate-y-1/3",
    "top-right": "translate-x-1/3 -translate-y-1/3",
    // center
    "center-left": "-translate-x-1/3",
    center: "",
    "center-right": "translate-x-1/3",
    // bottom
    "bottom-left": "-translate-x-1/3 translate-y-1/3",
    "bottom-center": "translate-y-1/3",
    "bottom-right": "translate-x-1/3 translate-y-1/3"
  };
  let dotClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  dotClass = twMerge("flex-shrink-0", rounded ? "rounded" : "rounded-full", border && "border-2 border-white dark:border-gray-800", sizes[size], colors[color], $$slots.default && "inline-flex items-center justify-center", placement && "absolute " + placements[placement], placement && offset && offsets[placement], $$props.class);
  return `<div${add_attribute("class", dotClass, 0)}>${slots.default ? slots.default({}) : ``}</div> `;
});
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["src", "href", "rounded", "border", "stacked", "dot", "alt", "size"]);
  let $$slots = compute_slots(slots);
  let { src = "" } = $$props;
  let { href = void 0 } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { stacked = false } = $$props;
  let { dot = void 0 } = $$props;
  let { alt = "" } = $$props;
  let { size = "md" } = $$props;
  const sizes = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-20 h-20",
    xl: "w-36 h-36"
  };
  let avatarClass;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.stacked === void 0 && $$bindings.stacked && stacked !== void 0)
    $$bindings.stacked(stacked);
  if ($$props.dot === void 0 && $$bindings.dot && dot !== void 0)
    $$bindings.dot(dot);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  dot = dot && {
    placement: "top-right",
    color: "gray",
    size: "lg",
    ...dot
  };
  avatarClass = twMerge(rounded ? "rounded" : "rounded-full", border && "p-1 ring-2 ring-gray-300 dark:ring-gray-500", sizes[size], stacked && "border-2 -ml-4 border-white dark:border-gray-800", "bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300", $$props.class);
  return `${!src || !!href || $$slots.default || dot ? `${((tag) => {
    return tag ? `<${href ? "a" : "div"}${spread(
      [
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        {
          class: "relative flex justify-center items-center " + escape(avatarClass, true)
        }
      ],
      {}
    )}>${is_void(tag) ? "" : `${src ? `<img${add_attribute("alt", alt, 0)}${add_attribute("src", src, 0)}${add_attribute("class", rounded ? "rounded" : "rounded-full", 0)}>` : `${slots.default ? slots.default({}) : `${validate_component(Placeholder, "AvatarPlaceholder").$$render(
      $$result,
      {
        rounded,
        size,
        border,
        class: twMerge($$props.classPlaceholder)
      },
      {},
      {}
    )}`}`} ${dot ? `${validate_component(Indicator, "Indicator").$$render($$result, Object.assign({}, { border: true }, { offset: rounded }, dot), {}, {})}` : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}` : `<img${spread(
    [
      { alt: escape_attribute_value(alt) },
      { src: escape_attribute_value(src) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(avatarClass)
      }
    ],
    {}
  )}>`} `;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let innerPadding;
  let $$restProps = compute_rest_props($$props, ["href", "horizontal", "reverse", "img", "padding", "size"]);
  let { href = void 0 } = $$props;
  let { horizontal = false } = $$props;
  let { reverse = false } = $$props;
  let { img = void 0 } = $$props;
  let { padding = "lg" } = $$props;
  let { size = "sm" } = $$props;
  const paddings = {
    none: "p-0",
    sm: "p-4 sm:p-6 md:p-8",
    md: "p-4 sm:p-5",
    lg: "p-4 sm:p-6",
    xl: "p-4 sm:p-8"
  };
  const sizes = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-screen-xl"
  };
  let cardClass;
  let imgClass;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  innerPadding = paddings[padding];
  cardClass = twMerge(
    "flex",
    sizes[size],
    reverse ? "flex-col-reverse" : "flex-col",
    horizontal && (reverse ? "md:flex-row-reverse md:max-w-xl" : "md:flex-row md:max-w-xl"),
    href && "hover:bg-gray-100 dark:hover:bg-gray-700",
    !img && innerPadding,
    $$props.class
  );
  imgClass = twMerge(reverse ? "rounded-b-lg" : "rounded-t-lg", horizontal && "object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none", horizontal && (reverse ? "md:rounded-r-lg" : "md:rounded-l-lg"));
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: href ? "a" : "div" }, { rounded: true }, { shadow: true }, { border: true }, { href }, $$restProps, { class: cardClass }), {}, {
    default: () => {
      return `${img ? `<img${add_attribute("class", imgClass, 0)}${add_attribute("src", img, 0)} alt=""> <div${add_attribute("class", innerPadding, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
    }
  })} `;
});
const Chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  return `<div${add_attribute("class", $$props.class, 0)}></div> `;
});
function createEventDispatcher() {
  const component = get_current_component();
  return (type, target, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = new CustomEvent(type, { detail });
      target.dispatchEvent(event);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
const Popper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let middleware;
  let $$restProps = compute_rest_props($$props, [
    "activeContent",
    "arrow",
    "offset",
    "placement",
    "trigger",
    "triggeredBy",
    "reference",
    "strategy",
    "open",
    "yOnly",
    "middlewares"
  ]);
  let { activeContent = false } = $$props;
  let { arrow = true } = $$props;
  let { offset = 8 } = $$props;
  let { placement = "top" } = $$props;
  let { trigger = "hover" } = $$props;
  let { triggeredBy = void 0 } = $$props;
  let { reference = void 0 } = $$props;
  let { strategy = "absolute" } = $$props;
  let { open = false } = $$props;
  let { yOnly = false } = $$props;
  let { middlewares = [dom.flip(), dom.shift()] } = $$props;
  const dispatch = createEventDispatcher();
  let referenceEl;
  let floatingEl;
  let arrowEl;
  let contentEl;
  const px = (n) => n != null ? `${n}px` : "";
  let arrowSide;
  const oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function updatePosition() {
    dom.computePosition(referenceEl, floatingEl, { placement, strategy, middleware }).then(({ x, y, middlewareData, placement: placement2, strategy: strategy2 }) => {
      floatingEl.style.position = strategy2;
      floatingEl.style.left = yOnly ? "0" : px(x);
      floatingEl.style.top = px(y);
      if (middlewareData.arrow && arrowEl instanceof HTMLDivElement) {
        arrowEl.style.left = px(middlewareData.arrow.x);
        arrowEl.style.top = px(middlewareData.arrow.y);
        arrowSide = oppositeSideMap[placement2.split("-")[0]];
        arrowEl.style[arrowSide] = px(-arrowEl.offsetWidth / 2 - ($$props.border ? 1 : 0));
      }
    });
  }
  function init(node, _referenceEl) {
    floatingEl = node;
    let cleanup = dom.autoUpdate(_referenceEl, floatingEl, updatePosition);
    return {
      update(_referenceEl2) {
        cleanup();
        cleanup = dom.autoUpdate(_referenceEl2, floatingEl, updatePosition);
      },
      destroy() {
        cleanup();
      }
    };
  }
  let arrowClass;
  if ($$props.activeContent === void 0 && $$bindings.activeContent && activeContent !== void 0)
    $$bindings.activeContent(activeContent);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0)
    $$bindings.arrow(arrow);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0)
    $$bindings.trigger(trigger);
  if ($$props.triggeredBy === void 0 && $$bindings.triggeredBy && triggeredBy !== void 0)
    $$bindings.triggeredBy(triggeredBy);
  if ($$props.reference === void 0 && $$bindings.reference && reference !== void 0)
    $$bindings.reference(reference);
  if ($$props.strategy === void 0 && $$bindings.strategy && strategy !== void 0)
    $$bindings.strategy(strategy);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.yOnly === void 0 && $$bindings.yOnly && yOnly !== void 0)
    $$bindings.yOnly(yOnly);
  if ($$props.middlewares === void 0 && $$bindings.middlewares && middlewares !== void 0)
    $$bindings.middlewares(middlewares);
  placement && (referenceEl = referenceEl);
  {
    dispatch("show", referenceEl, open);
  }
  middleware = [
    ...middlewares,
    dom.offset(+offset),
    arrowEl
  ];
  arrowClass = twJoin("absolute pointer-events-none block w-[10px] h-[10px] rotate-45 bg-inherit border-inherit", $$props.border && arrowSide === "bottom" && "border-b border-r", $$props.border && arrowSide === "top" && "border-t border-l ", $$props.border && arrowSide === "right" && "border-t border-r ", $$props.border && arrowSide === "left" && "border-b border-l ");
  return `${!referenceEl ? `<div${add_attribute("this", contentEl, 0)}></div>` : ``} ${open && referenceEl ? `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { use: init }, { options: referenceEl }, { role: "tooltip" }, { tabindex: activeContent ? -1 : void 0 }, $$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``} ${arrow ? `<div${add_attribute("class", arrowClass, 0)}></div>` : ``}`;
    }
  })}` : ``} `;
});
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["activeUrl", "open", "containerClass", "headerClass", "footerClass", "activeClass"]);
  let $$slots = compute_slots(slots);
  const activeUrlStore = writable("");
  let { activeUrl = "" } = $$props;
  let { open = false } = $$props;
  let { containerClass = "divide-y z-50" } = $$props;
  let { headerClass = "py-1 overflow-hidden rounded-t-lg" } = $$props;
  let { footerClass = "py-1 overflow-hidden rounded-b-lg" } = $$props;
  let { activeClass = "text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900" } = $$props;
  let activeCls = twMerge(activeClass, $$props.classActive);
  setContext("DropdownType", { activeClass: activeCls });
  setContext("activeUrl", activeUrlStore);
  let containerCls = twMerge(containerClass, $$props.classContainer);
  let headerCls = twMerge(headerClass, $$props.classHeader);
  let ulCls = twMerge("py-1", $$props.class);
  let footerCls = twMerge(footerClass, $$props.classFooter);
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0)
    $$bindings.activeUrl(activeUrl);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.containerClass === void 0 && $$bindings.containerClass && containerClass !== void 0)
    $$bindings.containerClass(containerClass);
  if ($$props.headerClass === void 0 && $$bindings.headerClass && headerClass !== void 0)
    $$bindings.headerClass(headerClass);
  if ($$props.footerClass === void 0 && $$bindings.footerClass && footerClass !== void 0)
    $$bindings.footerClass(footerClass);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      activeUrlStore.set(activeUrl);
    }
    {
      {
        $$restProps.arrow = $$restProps.arrow ?? false;
        $$restProps.trigger = $$restProps.trigger ?? "click";
        $$restProps.placement = $$restProps.placement ?? "bottom";
        $$restProps.color = $$restProps.color ?? "dropdown";
        $$restProps.shadow = $$restProps.shadow ?? true;
        $$restProps.rounded = $$restProps.rounded ?? true;
      }
    }
    $$rendered = `${validate_component(Popper, "Popper").$$render(
      $$result,
      Object.assign({}, { activeContent: true }, $$restProps, { class: containerCls }, { open }),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${$$slots.header ? `<div${add_attribute("class", headerCls, 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``} <ul${add_attribute("class", ulCls, 0)}>${slots.default ? slots.default({}) : ``}</ul> ${$$slots.footer ? `<div${add_attribute("class", footerCls, 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
        }
      }
    )} `;
  } while (!$$settled);
  return $$rendered;
});
const DropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let liClass;
  let $$restProps = compute_rest_props($$props, ["defaultClass", "href", "activeClass"]);
  let { defaultClass = "font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600" } = $$props;
  let { href = void 0 } = $$props;
  let { activeClass = void 0 } = $$props;
  const context = getContext("DropdownType") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = "";
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  let wrap = true;
  function init(node) {
    wrap = node.parentElement?.tagName === "UL";
  }
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  active = sidebarUrl ? href === sidebarUrl : false;
  liClass = twMerge(defaultClass, href ? "block" : "w-full text-left", active && (activeClass ?? context.activeClass), $$props.class);
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { tag: "li", show: wrap, use: init }, {}, {
    default: () => {
      return `${((tag) => {
        return tag ? `<${href ? "a" : "button"}${spread(
          [
            { href: escape_attribute_value(href) },
            {
              type: escape_attribute_value(href ? void 0 : "button")
            },
            {
              role: escape_attribute_value(href ? "link" : "button")
            },
            escape_object($$restProps),
            { class: escape_attribute_value(liClass) }
          ],
          {}
        )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(href ? "a" : "button")}`;
    }
  })} `;
});
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["title", "defaultClass"]);
  let $$slots = compute_slots(slots);
  let { title = "" } = $$props;
  let { defaultClass = "py-2 px-3" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  return `${validate_component(Popper, "Popper").$$render(
    $$result,
    Object.assign({}, { activeContent: true }, { border: true }, { shadow: true }, { rounded: true }, $$restProps, {
      class: "dark:!border-gray-600 " + $$props.class
    }),
    {},
    {
      default: () => {
        return `${$$slots.title || title ? `<div class="py-2 px-3 bg-gray-100 rounded-t-md border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700">${slots.title ? slots.title({}) : ` <h3 class="font-semibold text-gray-900 dark:text-white">${escape(title)}</h3> `}</div>` : ``} <div${add_attribute("class", defaultClass, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
      }
    }
  )} `;
});
const Skeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let outDivclass;
  const sizes = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    xxl: "max-w-2xl"
  };
  let { divClass = "animate-pulse" } = $$props;
  let { size = "sm" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  outDivclass = twMerge(sizes[size], divClass, $$props.class);
  return `<div role="status"${add_attribute("class", outDivclass, 0)}><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-10/12 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12"></div> <span class="sr-only" data-svelte-h="svelte-1wtojot">Loading...</span></div> `;
});
const WidgetPlaceholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { divClass = "p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  return `<div role="status"${add_attribute("class", twMerge(divClass, $$props.class), 0)}><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div> <div class="mb-10 w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div> <div class="flex items-baseline mt-4 space-x-6" data-svelte-h="svelte-1ql3a"><div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div> <div class="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div> <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div> <div class="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div> <div class="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div> <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div> <div class="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div></div> <span class="sr-only" data-svelte-h="svelte-1wtojot">Loading...</span></div> `;
});
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["type", "defaultClass"]);
  let { type = "dark" } = $$props;
  let { defaultClass = "py-2 px-3 text-sm font-medium" } = $$props;
  const types = {
    dark: "bg-gray-900 text-white dark:bg-gray-700",
    light: "border-gray-200 bg-white text-gray-900",
    auto: " bg-white text-gray-900 dark:bg-gray-700 dark:text-white border-gray-200 dark:border-gray-700",
    custom: ""
  };
  let toolTipClass;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  {
    {
      if ($$restProps.color)
        type = "custom";
      else
        $$restProps.color = "none";
      if (["light", "auto"].includes(type))
        $$restProps.border = true;
      toolTipClass = twMerge("tooltip", defaultClass, types[type], $$props.class);
    }
  }
  return `${validate_component(Popper, "Popper").$$render($$result, Object.assign({}, { rounded: true }, { shadow: true }, $$restProps, { class: toolTipClass }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })} `;
});
const A = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "color", "aClass"]);
  let { href = "#" } = $$props;
  let { color = "text-primary-600 dark:text-primary-500" } = $$props;
  let { aClass = "inline-flex items-center hover:underline" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  return `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(twMerge(aClass, color, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a> `;
});
const ArrowDownToBraketSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "arrow down to braket solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 16 18" }
    ],
    {}
  )}><g fill="currentColor"><path d="M7.292 12.706a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-1.414-1.414L9 9.586V1a1 1 0 0 0-2 0v8.586L4.707 7.293a1 1 0 1 0-1.414 1.414l3.999 3.999Z"></path><path d="M15 11a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 1 0-2 0v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3a1 1 0 0 0-1-1Z"></path></g></svg> `;
});
const ArrowUpSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "arrow up solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 11 14" }
    ],
    {}
  )}><path fill="currentColor" d="m10.707 4.293-4-4a1 1 0 0 0-1.416 0l-4 4a1 1 0 1 0 1.414 1.414L5 3.414V13a1 1 0 1 0 2 0V3.414l2.293 2.293a1 1 0 0 0 1.414-1.414Z"></path></svg> `;
});
const ChevronDownSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "chevron down solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 10 6" }
    ],
    {}
  )}><path fill="currentColor" d="M5.012 6a1 1 0 0 1-.707-.292l-4-3.992A.998.998 0 0 1 1.395.08a1 1 0 0 1 .324.224L5.012 3.59 8.305.305A1.001 1.001 0 0 1 10 1.014a.997.997 0 0 1-.28.702l-4 3.992A1.001 1.001 0 0 1 5.011 6Z"></path></svg> `;
});
const ChevronRightSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "chevron right solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 6 10" }
    ],
    {}
  )}><path fill="currentColor" d="M1.01 10a.997.997 0 0 1-.705-1.705L3.59 5.006.305 1.717A.999.999 0 1 1 1.715.305L5.709 4.3a1 1 0 0 1 0 1.412L1.716 9.707A.998.998 0 0 1 1.01 10Z"></path></svg> `;
});
const InfoCircleSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "info circle solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 20 20" }
    ],
    {}
  )}><path fill="currentColor" d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path></svg> `;
});
const UserGroupSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "user group solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 20 19" }
    ],
    {}
  )}><g fill="currentColor"><path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"></path><path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z"></path></g></svg> `;
});
const Chart_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { values } = $$props;
  let { two } = $$props;
  let { three } = $$props;
  let { four } = $$props;
  let { five } = $$props;
  let options = {
    chart: {
      height: "400px",
      maxWidth: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: { enabled: false },
      toolbar: { show: false }
    },
    tooltip: { enabled: true, x: { show: false } },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"]
      }
    },
    dataLabels: { enabled: false },
    stroke: { width: 6 },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: { left: 2, right: 2, top: 0 }
    },
    series: [
      {
        name: "Revenue",
        data: [
          two.reduce((acc, currentValue) => acc + currentValue.revenue, 0),
          three.reduce((acc, currentValue) => acc + currentValue.revenue, 0),
          four.reduce((acc, currentValue) => acc + currentValue.revenue, 0),
          five.reduce((acc, currentValue) => acc + currentValue.revenue, 0)
        ],
        color: "#1A56DB"
      }
    ],
    xaxis: {
      categories: ["2G Network", "3G Network", "4G Network", "5G Network"],
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: { show: false }
  };
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  if ($$props.two === void 0 && $$bindings.two && two !== void 0)
    $$bindings.two(two);
  if ($$props.three === void 0 && $$bindings.three && three !== void 0)
    $$bindings.three(three);
  if ($$props.four === void 0 && $$bindings.four && four !== void 0)
    $$bindings.four(four);
  if ($$props.five === void 0 && $$bindings.five && five !== void 0)
    $$bindings.five(five);
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex justify-between"><div><h5 class="pb-2 text-3xl font-bold leading-none text-gray-900 dark:text-white">${escape(values.length)}k</h5> <p class="text-base font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-zvvbpy">Users this week</p></div> <div class="flex items-center px-2.5 py-0.5 text-center text-base font-semibold text-green-500 dark:text-green-500">12%
			${validate_component(ChevronRightSolid, "ChevronRightSolid").$$render($$result, { class: "ms-1 h-3 w-3" }, {}, {})}</div></div> ${validate_component(Chart, "Chart").$$render($$result, { options }, {}, {})} <div class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700"><div class="flex items-center justify-between pt-5">${validate_component(Button, "Button").$$render(
        $$result,
        {
          class: "inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent"
        },
        {},
        {
          default: () => {
            return `Last 7 days${validate_component(ChevronDownSolid, "ChevronDownSolid").$$render($$result, { class: "m-2.5 ms-1.5 w-2.5" }, {}, {})}`;
          }
        }
      )} ${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "w-40", offset: -6 }, {}, {
        default: () => {
          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `Yesterday`;
            }
          })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `Today`;
            }
          })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `Last 7 days`;
            }
          })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `Last 30 days`;
            }
          })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `Last 90 days`;
            }
          })}`;
        }
      })} ${validate_component(A, "A").$$render(
        $$result,
        {
          href: "/",
          class: "rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:text-primary-700 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-primary-500 dark:focus:ring-gray-700"
        },
        {},
        {
          default: () => {
            return `Users Report
				${validate_component(ChevronRightSolid, "ChevronRightSolid").$$render($$result, { class: "ms-1.5 h-2.5 w-2.5" }, {}, {})}`;
          }
        }
      )}</div></div>`;
    }
  })}`;
});
const Radar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bundle } = $$props;
  let { family } = $$props;
  let { premium } = $$props;
  let total = bundle.length + family.length + premium.length;
  const options = {
    series: [
      bundle.length / total * 100,
      family.length / total * 100,
      premium.length / total * 100
    ],
    colors: ["#1C64F2", "#16BDCA", "#FDBA8C"],
    chart: {
      height: "380px",
      width: "100%",
      type: "radialBar",
      sparkline: { enabled: true }
    },
    plotOptions: {
      radialBar: {
        track: { background: "#E5E7EB" },
        dataLabels: { show: false },
        hollow: { margin: 0, size: "32%" }
      }
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: { left: 2, right: 2, top: -23, bottom: -20 }
    },
    labels: ["Bundle Plan", "Family Plan", "Premium PN"],
    legend: {
      show: true,
      position: "bottom",
      fontFamily: "Inter, sans-serif"
    },
    tooltip: { enabled: true, x: { show: false } },
    yaxis: {
      show: false,
      labels: {
        formatter(value) {
          return value + "%";
        }
      }
    }
  };
  if ($$props.bundle === void 0 && $$bindings.bundle && bundle !== void 0)
    $$bindings.bundle(bundle);
  if ($$props.family === void 0 && $$bindings.family && family !== void 0)
    $$bindings.family(family);
  if ($$props.premium === void 0 && $$bindings.premium && premium !== void 0)
    $$bindings.premium(premium);
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex w-full items-start justify-between"><div class="flex-col items-center"><div class="mb-1 flex items-center"><h5 class="me-1 text-xl font-bold leading-none text-gray-900 dark:text-white" data-svelte-h="svelte-143o45d">Your team&#39;s progress</h5> ${validate_component(InfoCircleSolid, "InfoCircleSolid").$$render(
        $$result,
        {
          id: "donut1",
          class: "ms-1 h-3.5 w-3.5 cursor-pointer text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        },
        {},
        {}
      )} ${validate_component(Popover, "Popover").$$render(
        $$result,
        {
          triggeredBy: "#donut1",
          class: "z-10 w-72 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
        },
        {},
        {
          default: () => {
            return `<div class="space-y-2 p-3"><h3 class="font-semibold text-gray-900 dark:text-white" data-svelte-h="svelte-qi5nse">Activity growth - Incremental</h3> <p data-svelte-h="svelte-7nsui0">Report helps navigate cumulative growth of community activities. Ideally, the chart
							should have a growing trend, as stagnating chart signifies a significant decrease of
							community activity.</p> <h3 class="font-semibold text-gray-900 dark:text-white" data-svelte-h="svelte-b9ibyd">Calculation</h3> <p data-svelte-h="svelte-1xob2ys">For each date bucket, the all-time volume of activities is calculated. This means that
							activities in period n contain all activities up to period n, plus the activities
							generated by your community in period.</p> ${validate_component(A, "A").$$render($$result, { href: "/" }, {}, {
              default: () => {
                return `Read more ${validate_component(ChevronRightSolid, "ChevronRightSolid").$$render($$result, { class: "ms-1.5 h-2 w-2" }, {}, {})}`;
              }
            })}</div>`;
          }
        }
      )}</div></div> <div class="flex items-center justify-end">${validate_component(ArrowDownToBraketSolid, "ArrowDownToBraketSolid").$$render($$result, { class: "h-3.5 w-3.5" }, {}, {})} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
        default: () => {
          return `Download CSV`;
        }
      })}</div></div> <div class="rounded-lg bg-gray-50 p-3 dark:bg-gray-700"><div class="mb-2 grid grid-cols-3 gap-3"><dl class="flex h-[78px] flex-col items-center justify-center rounded-lg bg-orange-50 dark:bg-gray-600"><dt class="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm font-medium text-orange-600 dark:bg-gray-500 dark:text-orange-300">${escape(bundle.length)} </dt><dd class="text-sm font-medium text-orange-600 dark:text-orange-300" data-svelte-h="svelte-rot4oa">Bundle Plan</dd></dl> <dl class="flex h-[78px] flex-col items-center justify-center rounded-lg bg-teal-50 dark:bg-gray-600"><dt class="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-sm font-medium text-teal-600 dark:bg-gray-500 dark:text-teal-300">${escape(family.length)} </dt><dd class="text-sm font-medium text-teal-600 dark:text-teal-300" data-svelte-h="svelte-1v3hfmq">Family Plan</dd></dl> <dl class="flex h-[78px] flex-col items-center justify-center rounded-lg bg-blue-50 dark:bg-gray-600"><dt class="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-gray-500 dark:text-blue-300">${escape(premium.length)} </dt><dd class="text-sm font-medium text-blue-600 dark:text-blue-300" data-svelte-h="svelte-qeoqgo">Premium</dd></dl></div> <button type="button" class="inline-flex items-center text-xs font-medium text-gray-500 hover:underline dark:text-gray-400">Show more details ${validate_component(ChevronDownSolid, "ChevronDownSolid").$$render($$result, { class: "ms-1 h-2 w-2" }, {}, {})}</button> ${``}</div> ${validate_component(Chart, "Chart").$$render($$result, { options, class: "py-6" }, {}, {})} <div class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700"><div class="flex items-center justify-between pt-5">${validate_component(Button, "Button").$$render(
        $$result,
        {
          class: "inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent"
        },
        {},
        {
          default: () => {
            return `Last 7 days${validate_component(ChevronDownSolid, "ChevronDownSolid").$$render($$result, { class: "m-2.5 ms-1.5 w-2.5" }, {}, {})}`;
          }
        }
      )} ${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "w-40", offset: -6 }, {}, {
        default: () => {
          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `Yesterday`;
            }
          })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `Today`;
            }
          })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `Last 7 days`;
            }
          })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `Last 30 days`;
            }
          })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `Last 90 days`;
            }
          })}`;
        }
      })} ${validate_component(A, "A").$$render(
        $$result,
        {
          href: "/",
          class: "hover:text-primary-700 dark:hover:text-primary-500 rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        },
        {},
        {
          default: () => {
            return `PROGRESS REPORT
				${validate_component(ChevronRightSolid, "ChevronRightSolid").$$render($$result, { class: "ms-1.5 h-2.5 w-2.5" }, {}, {})}`;
          }
        }
      )}</div></div>`;
    }
  })}`;
});
const Line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { values } = $$props;
  let { two } = $$props;
  let { three } = $$props;
  let { four } = $$props;
  let { five } = $$props;
  const options = {
    colors: ["#1A56DB", "#FDBA8C"],
    series: [
      {
        name: "Data Usage",
        color: "#1A56DB",
        data: [
          {
            x: "2G",
            y: two.reduce((acc, currentValue) => acc + currentValue.data, 0)
          },
          {
            x: "3G",
            y: three.reduce((acc, currentValue) => acc + currentValue.data, 0)
          },
          {
            x: "4G",
            y: four.reduce((acc, currentValue) => acc + currentValue.data, 0)
          },
          {
            x: "5G",
            y: five.reduce((acc, currentValue) => acc + currentValue.data, 0)
          }
        ]
      },
      {
        name: "SMS Count",
        color: "#FDBA8C",
        data: [
          {
            x: "2G",
            y: two.reduce((acc, currentValue) => acc + currentValue.sms, 0)
          },
          {
            x: "3G",
            y: three.reduce((acc, currentValue) => acc + currentValue.sms, 0)
          },
          {
            x: "4G",
            y: four.reduce((acc, currentValue) => acc + currentValue.sms, 0)
          },
          {
            x: "5G",
            y: five.reduce((acc, currentValue) => acc + currentValue.sms, 0)
          }
        ]
      },
      {
        name: "Call Count",
        color: "#FD998C",
        data: [
          {
            x: "2G",
            y: two.reduce((acc, currentValue) => acc + currentValue.calls, 0)
          },
          {
            x: "3G",
            y: three.reduce((acc, currentValue) => acc + currentValue.calls, 0)
          },
          {
            x: "4G",
            y: four.reduce((acc, currentValue) => acc + currentValue.calls, 0)
          },
          {
            x: "5G",
            y: five.reduce((acc, currentValue) => acc + currentValue.calls, 0)
          }
        ]
      }
    ],
    chart: {
      type: "bar",
      height: "320px",
      fontFamily: "Inter, sans-serif",
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadiusApplication: "end",
        borderRadius: 8
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: { fontFamily: "Inter, sans-serif" }
    },
    states: {
      hover: { filter: { type: "darken", value: 1 } }
    },
    stroke: {
      show: true,
      width: 0,
      colors: ["transparent"]
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: { left: 2, right: 2, top: -14 }
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    xaxis: {
      floating: false,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400"
        }
      },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: { show: false },
    fill: { opacity: 1 }
  };
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  if ($$props.two === void 0 && $$bindings.two && two !== void 0)
    $$bindings.two(two);
  if ($$props.three === void 0 && $$bindings.three && three !== void 0)
    $$bindings.three(three);
  if ($$props.four === void 0 && $$bindings.four && four !== void 0)
    $$bindings.four(four);
  if ($$props.five === void 0 && $$bindings.five && five !== void 0)
    $$bindings.five(five);
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="mb-4 flex justify-between border-b border-gray-200 pb-4 dark:border-gray-700"><div class="flex items-center"><div class="me-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">${validate_component(UserGroupSolid, "UserGroupSolid").$$render(
        $$result,
        {
          class: "h-6 w-6 text-gray-500 dark:text-gray-400"
        },
        {},
        {}
      )}</div> <div><h5 class="pb-1 text-2xl font-bold leading-none text-gray-900 dark:text-white">₦${escape(values.reduce((acc, currentValue) => acc + currentValue.revenue, 0).toLocaleString("en", {
        notation: "compact",
        compactDisplay: "short"
      }))}</h5> <p class="text-sm font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1qogvz4">Revenue generated per week</p></div></div> <div><span class="inline-flex items-center rounded-md bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">${validate_component(ArrowUpSolid, "ArrowUpSolid").$$render($$result, { class: "me-1.5 h-2.5 w-2.5" }, {}, {})}
				42.5%</span></div></div> <div class="grid grid-cols-2"><dl class="flex items-center"><dt class="me-1 text-sm font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-p97sjj">Money spent:</dt><dd class="text-sm font-semibold text-gray-900 dark:text-white">₦${escape(values.reduce((acc, currentValue) => acc + currentValue.revenue / 80, 0).toLocaleString("en", {
        notation: "compact",
        compactDisplay: "short"
      }))}</dd></dl> <dl class="flex items-center justify-end"><dt class="me-1 text-sm font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1is0djh">Conversion rate:</dt><dd class="text-sm font-semibold text-gray-900 dark:text-white">${escape(values.reduce((acc, currentValue) => acc + currentValue.revenue, 0) / values.reduce((acc, currentValue) => acc + currentValue.revenue / 80, 0))}%</dd></dl></div> ${validate_component(Chart, "Chart").$$render($$result, { options }, {}, {})} <div class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700"><div class="flex items-center justify-between pt-5">${validate_component(Button, "Button").$$render(
        $$result,
        {
          class: "inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent"
        },
        {},
        {
          default: () => {
            return `Last 7 days${validate_component(ChevronDownSolid, "ChevronDownSolid").$$render($$result, { class: "m-2.5 ms-1.5 w-2.5" }, {}, {})}`;
          }
        }
      )} ${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "w-40", offset: -6 }, {}, {
        default: () => {
          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `Yesterday`;
            }
          })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `Today`;
            }
          })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `Last 7 days`;
            }
          })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `Last 30 days`;
            }
          })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `Last 90 days`;
            }
          })}`;
        }
      })} ${validate_component(A, "A").$$render(
        $$result,
        {
          href: "/",
          class: "rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:text-primary-700 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-primary-500 dark:focus:ring-gray-700"
        },
        {},
        {
          default: () => {
            return `Leads Report
				${validate_component(ChevronRightSolid, "ChevronRightSolid").$$render($$result, { class: "ms-1.5 h-2.5 w-2.5" }, {}, {})}`;
          }
        }
      )}</div></div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_navigating();
  return `${$navigating ? `<div class="space-y-8">${validate_component(Skeleton, "Skeleton").$$render($$result, {}, {}, {})} ${validate_component(WidgetPlaceholder, "WidgetPlaceholder").$$render($$result, {}, {}, {})}</div>` : `<div class="w-[95%] pb-10"><div class="flex w-full justify-end"><div class="flex items-end space-x-8"><div class="flex items-center space-x-4 rtl:space-x-reverse">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      src: profile,
      size: "md",
      class: " h-14 w-14"
    },
    {},
    {}
  )} <div class="space-y-1 font-medium dark:text-white" data-svelte-h="svelte-ycznw1"><div>Jese Leos</div> <div class="text-sm text-gray-500 dark:text-gray-400">Admin</div></div></div> <div class="flex h-12 w-12 items-center justify-center rounded-[50%] bg-[#e5f2f2f2]">${validate_component(BellIcon, "BellIcon").$$render($$result, {}, {}, {})}</div></div></div> <div class="flex w-full space-x-14"><div class="w-[70%]"><div data-svelte-h="svelte-xpw5qg"><h1 class="text-lg font-semibold">In the last 30 days</h1> <div class="mt-8 flex w-full items-center justify-between"><div class="relative h-[80px] w-[30%] overflow-hidden rounded-md bg-[#427A5B]"><div class="pl-4 pt-4 text-white"><h1 class="text-2xl font-semibold">30,000</h1> <p class="text-xs font-medium">Art Sales</p></div> <div class="absolute -right-9 -top-5 h-[15em] w-10 -rotate-[20deg] bg-[#7A643C]"></div> <div class="absolute -top-5 right-[6px] h-[15em] w-10 -rotate-[20deg] bg-[#2E4438]"></div> <div class="absolute -top-5 right-11 h-[15em] w-16 -rotate-[20deg] bg-[#905546]"></div></div> <div class="relative h-[80px] w-[30%] overflow-hidden rounded-md bg-[#427A5B]"><div class="pl-4 pt-4 text-white"><h1 class="text-2xl font-semibold">30,000</h1> <p class="text-xs font-medium">Art Sales</p></div> <div class="absolute -right-9 -top-5 h-[15em] w-10 -rotate-[20deg] bg-[#7A643C]"></div> <div class="absolute -top-5 right-[6px] h-[15em] w-10 -rotate-[20deg] bg-[#2E4438]"></div> <div class="absolute -top-5 right-11 h-[15em] w-16 -rotate-[20deg] bg-[#905546]"></div></div> <div class="relative h-[80px] w-[30%] overflow-hidden rounded-md bg-[#427A5B]"><div class="pl-4 pt-4 text-white"><h1 class="text-2xl font-semibold">30,000</h1> <p class="text-xs font-medium">Art Sales</p></div> <div class="absolute -right-9 -top-5 h-[15em] w-10 -rotate-[20deg] bg-[#7A643C]"></div> <div class="absolute -top-5 right-[6px] h-[15em] w-10 -rotate-[20deg] bg-[#2E4438]"></div> <div class="absolute -top-5 right-11 h-[15em] w-16 -rotate-[20deg] bg-[#905546]"></div></div></div></div> <div class="flex w-full items-start justify-between space-x-6 pt-10"><div class="w-[50%]">${validate_component(Line, "Line").$$render(
    $$result,
    {
      values: data.data,
      two: data.two,
      three: data.three,
      four: data.four,
      five: data.five
    },
    {},
    {}
  )}</div> <div class="w-[50%] translate-x-2">${validate_component(Chart_1, "Chart").$$render(
    $$result,
    {
      values: data.data,
      two: data.two,
      three: data.three,
      four: data.four,
      five: data.five
    },
    {},
    {}
  )}</div></div></div> <div class="mt-10 w-[30%]"><h1 class="text-2xl font-semibold" data-svelte-h="svelte-r417e1">Statistics</h1> <br> ${validate_component(Radar, "Radar").$$render(
    $$result,
    {
      bundle: data.bundle,
      family: data.family,
      premium: data.premium
    },
    {},
    {}
  )}</div></div></div>`}`;
});
export {
  Page as default
};
