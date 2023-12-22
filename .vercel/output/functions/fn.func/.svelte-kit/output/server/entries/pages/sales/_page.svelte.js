import { c as create_ssr_component, g as compute_rest_props, l as getContext, v as validate_component, b as add_attribute, h as spread, j as escape_object, i as escape_attribute_value, d as escape, f as compute_slots, a as subscribe, s as setContext } from "../../../chunks/ssr.js";
import { T as ToolbarButton, M as Modal, B as BadgeCheckIcon } from "../../../chunks/Modal.js";
import { F as Frame, B as Button } from "../../../chunks/Button.js";
import { twMerge, twJoin } from "tailwind-merge";
import { W as Wrapper } from "../../../chunks/Wrapper.js";
import { L as ListPlaceholder } from "../../../chunks/ListPlaceholder.js";
import { w as writable } from "../../../chunks/index2.js";
import { n as navigating } from "../../../chunks/stores.js";
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "wrappedClass", "unWrappedClass", "innerWrappedClass"]);
  let $$slots = compute_slots(slots);
  const background = getContext("background");
  let { value = void 0 } = $$props;
  let { wrappedClass = "block w-full text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-none focus:ring-0" } = $$props;
  let { unWrappedClass = "p-2.5 text-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" } = $$props;
  let { innerWrappedClass = "py-2 px-4 bg-white dark:bg-gray-800" } = $$props;
  let wrapped;
  let wrapperClass;
  let textareaClass;
  const headerClass = (header) => twMerge(header ? "border-b" : "border-t", "py-2 px-3 border-gray-200 dark:border-gray-600");
  let innerWrapperClass;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.wrappedClass === void 0 && $$bindings.wrappedClass && wrappedClass !== void 0)
    $$bindings.wrappedClass(wrappedClass);
  if ($$props.unWrappedClass === void 0 && $$bindings.unWrappedClass && unWrappedClass !== void 0)
    $$bindings.unWrappedClass(unWrappedClass);
  if ($$props.innerWrappedClass === void 0 && $$bindings.innerWrappedClass && innerWrappedClass !== void 0)
    $$bindings.innerWrappedClass(innerWrappedClass);
  wrapped = $$slots.header || $$slots.footer;
  wrapperClass = twMerge(
    "w-full rounded-lg",
    background ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700",
    "text-gray-900 dark:placeholder-gray-400 dark:text-white ",
    "border border-gray-200 dark:border-gray-600",
    $$props.class
  );
  textareaClass = wrapped ? wrappedClass : twMerge(wrapperClass, unWrappedClass);
  innerWrapperClass = twMerge(innerWrappedClass, $$slots.footer ? "" : "rounded-b-lg", $$slots.header ? "" : "rounded-t-lg");
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: wrapperClass }, {}, {
    default: () => {
      return `${$$slots.header ? `<div${add_attribute("class", headerClass(true), 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``} ${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: innerWrapperClass }, {}, {
        default: () => {
          return `<textarea${spread(
            [
              escape_object($$restProps),
              {
                class: escape_attribute_value(textareaClass)
              }
            ],
            {}
          )}>${escape(value || "")}</textarea>`;
        }
      })} ${$$slots.footer ? `<div${add_attribute("class", headerClass(false), 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
    }
  })} `;
});
const Toolbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "embedded"]);
  let $separators, $$unsubscribe_separators;
  const separators = writable(false);
  $$unsubscribe_separators = subscribe(separators, (value) => $separators = value);
  setContext("toolbar", separators);
  let { color = "dark" } = $$props;
  let { embedded = false } = $$props;
  let divClass;
  const divideColors = {
    gray: "divide-gray-400 dark:divide-gray-700",
    red: "divide-red-400 dark:divide-red-700",
    yellow: "divide-yellow-400 dark:divide-yellow-700",
    green: "divide-green-400 dark:divide-green-700",
    indigo: "divide-indigo-400 dark:divide-indigo-700",
    purple: "divide-purple-400 dark:divide-purple-700",
    pink: "divide-pink-400 dark:divide-pink-700",
    blue: "divide-blue-400 dark:divide-blue-700",
    dark: "divide-gray-400 dark:divide-gray-600",
    none: ""
  };
  let separatorsClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.embedded === void 0 && $$bindings.embedded && embedded !== void 0)
    $$bindings.embedded(embedded);
  divClass = twMerge("flex justify-between items-center", embedded && "p-2", $$props.class);
  separatorsClass = twJoin($separators && "sm:divide-x", divideColors[color]);
  $$unsubscribe_separators();
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, $$restProps, { class: divClass }, { color: embedded ? "none" : color }, { rounded: !embedded }), {}, {
    default: () => {
      return `<div class="${"flex flex-wrap items-center " + escape(separatorsClass, true)}">${slots.default ? slots.default({}) : ``}</div> ${slots.end ? slots.end({}) : ``}`;
    }
  })} `;
});
const ImageOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "strokeLinecap", "strokeLinejoin", "strokeWidth", "ariaLabel"]);
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
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "image outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 20 18" }
    ],
    {}
  )}><path fill="currentColor" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"></path><path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"></path></svg> `;
});
const MapPinAltSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "map pin alt solid" } = $$props;
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
      { viewBox: "0 0 16 20" }
    ],
    {}
  )}><path fill="currentColor" d="M8 0a7.992 7.992 0 0 0-6.583 12.535.999.999 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.926.926 0 0 0 .122-.192A8 8 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"></path></svg> `;
});
const PaperClipOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "strokeLinejoin", "strokeWidth", "ariaLabel"]);
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
  let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "paper clip outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 12 20" }
    ],
    {}
  )}><path stroke="currentColor"${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"></path></svg> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let message;
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let popupModal = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    message = "";
    $$rendered = `${$navigating ? `${validate_component(ListPlaceholder, "ListPlaceholder").$$render($$result, {}, {}, {})}` : `<div class="w-[95%]"><form>${validate_component(Textarea, "Textarea").$$render(
      $$result,
      {
        class: "mb-4",
        rows: "15",
        placeholder: "Write a comment"
      },
      {},
      {
        footer: () => {
          return `<div slot="footer" class="flex items-center justify-between"><div class="flex items-center space-x-4">${validate_component(Button, "Button").$$render($$result, { type: "submit", class: " bg-yellow-400" }, {}, {
            default: () => {
              return `Send To Bundle Plan`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: " bg-blue-400" }, {}, {
            default: () => {
              return `Send To Family Plan`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: " bg-green-400" }, {}, {
            default: () => {
              return `Send To Premium Plan`;
            }
          })}</div> ${validate_component(Toolbar, "Toolbar").$$render($$result, { embedded: true }, {}, {
            default: () => {
              return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, { name: "Attach file" }, {}, {
                default: () => {
                  return `${validate_component(PaperClipOutline, "PaperClipOutline").$$render($$result, { class: "h-6 w-6" }, {}, {})}`;
                }
              })} ${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, { name: "Set location" }, {}, {
                default: () => {
                  return `${validate_component(MapPinAltSolid, "MapPinAltSolid").$$render($$result, { class: "h-6 w-6" }, {}, {})}`;
                }
              })} ${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, { name: "Upload image" }, {}, {
                default: () => {
                  return `${validate_component(ImageOutline, "ImageOutline").$$render($$result, { class: "h-6 w-6" }, {}, {})}`;
                }
              })}`;
            }
          })}</div>`;
        }
      }
    )}</form> <p class="ms-auto text-xs text-gray-500 dark:text-gray-400" data-svelte-h="svelte-10tjbr">Remember, contributions to this topic should follow our <a href="/" class="text-primary-600 hover:underline dark:text-primary-500">Community Guidelines</a>
			.</p> ${validate_component(Modal, "Modal").$$render(
      $$result,
      { size: "xs", open: popupModal },
      {
        open: ($$value) => {
          popupModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="flex flex-col items-center py-10 text-center">${validate_component(BadgeCheckIcon, "BadgeCheckIcon").$$render(
            $$result,
            {
              class: "mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200"
            },
            {},
            {}
          )} <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Broadcast SMS has been sent to users qualified for ${escape(message)}</h3></div>`;
        }
      }
    )}</div>`}`;
  } while (!$$settled);
  $$unsubscribe_navigating();
  return $$rendered;
});
export {
  Page as default
};
