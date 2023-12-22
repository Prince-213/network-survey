import { c as create_ssr_component, v as validate_component, g as compute_rest_props, h as spread, j as escape_object, i as escape_attribute_value, b as add_attribute, d as escape, e as each, a as subscribe } from "../../../chunks/ssr.js";
import { B as Button } from "../../../chunks/Button.js";
import { twMerge } from "tailwind-merge";
import { M as Modal, B as BadgeCheckIcon } from "../../../chunks/Modal.js";
import { L as ListPlaceholder } from "../../../chunks/ListPlaceholder.js";
import { n as navigating } from "../../../chunks/stores.js";
import "devalue";
import { I as Icon } from "../../../chunks/Icon.js";
const Check_circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M22 11.08V12a10 10 0 1 1-5.93-9.14"
      }
    ],
    ["path", { "d": "m9 11 3 3L22 4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "check-circle" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const CheckCircleIcon = Check_circle;
const Minus_circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M8 12h8" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "minus-circle" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const MinusCircleIcon = Minus_circle;
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelClass;
  let $$restProps = compute_rest_props($$props, ["color", "defaultClass", "show"]);
  let { color = "gray" } = $$props;
  let { defaultClass = "text-sm font-medium block" } = $$props;
  let { show = true } = $$props;
  let node;
  const colorClasses = {
    gray: "text-gray-900 dark:text-gray-300",
    green: "text-green-700 dark:text-green-500",
    red: "text-red-700 dark:text-red-500",
    disabled: "text-gray-400 dark:text-gray-500"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  {
    {
      color = color;
    }
  }
  labelClass = twMerge(defaultClass, colorClasses[color], $$props.class);
  return `${show ? ` <label${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(labelClass)
      }
    ],
    {}
  )}${add_attribute("this", node, 0)}>${slots.default ? slots.default({}) : ``}</label>` : `${slots.default ? slots.default({}) : ``}`} `;
});
const common = "block w-full";
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "items",
    "value",
    "placeholder",
    "underline",
    "size",
    "defaultClass",
    "underlineClass"
  ]);
  let { items = [] } = $$props;
  let { value = void 0 } = $$props;
  let { placeholder = "Choose option ..." } = $$props;
  let { underline = false } = $$props;
  let { size = "md" } = $$props;
  let { defaultClass = "text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" } = $$props;
  let { underlineClass = "text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" } = $$props;
  const sizes = {
    sm: "text-sm p-2",
    md: "text-sm p-2.5",
    lg: "text-base py-3 px-4"
  };
  let selectClass;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0)
    $$bindings.underline(underline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.underlineClass === void 0 && $$bindings.underlineClass && underlineClass !== void 0)
    $$bindings.underlineClass(underlineClass);
  selectClass = twMerge(common, underline ? underlineClass : defaultClass, sizes[size], underline && "!px-0", $$props.class);
  return `<select${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(selectClass)
      }
    ],
    {}
  )}>${placeholder ? `<option disabled selected value="">${escape(placeholder)}</option>` : ``}${items.length ? each(items, ({ value: value2, name }) => {
    return `<option${add_attribute("value", value2, 0)}>${escape(name)}</option>`;
  }) : `${slots.default ? slots.default({}) : ``}`}</select> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let { data } = $$props;
  let { form } = $$props;
  let popupModal = false;
  let network;
  let networTypes = [
    { value: "2G", name: "2G" },
    { value: "3G", name: "3G" },
    { value: "4G", name: "4G" },
    { value: "5G", name: "5G" }
  ];
  let deviceTypes = [
    { value: 0, name: "Android" },
    { value: 1, name: "IOS" },
    { value: 2, name: "Windows" },
    { value: 3, name: "Mac" }
  ];
  let ratings = [
    { value: 0, name: "BAD" },
    { value: 1, name: "SATISFACTORY" },
    { value: 2, name: "GOOD" },
    { value: 3, name: "VERY GOOD" },
    { value: 4, name: "EXCELLENT" }
  ];
  let formData = {
    name: "",
    age: 0,
    location: "",
    device: 0,
    network: "",
    ratings: 0,
    sms: 0,
    revenue: 0,
    data: 0,
    calls: 0
  };
  const snapshot = {
    capture: () => {
      return formData;
    },
    restore: (data2) => {
      formData = data2;
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.snapshot === void 0 && $$bindings.snapshot && snapshot !== void 0)
    $$bindings.snapshot(snapshot);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$navigating ? `${validate_component(ListPlaceholder, "ListPlaceholder").$$render($$result, {}, {}, {})}` : `<section class="bg-white dark:bg-gray-900"><div class="mx-auto max-w-2xl px-4 py-8 lg:py-16"><h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white" data-svelte-h="svelte-p544i7">Add a new product</h2> <form method="post" action="?/register"><div class="grid gap-4 sm:grid-cols-2 sm:gap-6"><div class="sm:col-span-2"><label for="name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-1c3ldt0">Name</label> <input type="text" name="name" id="name" class="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="Type your name" required${add_attribute("value", formData.name, 0)}></div> <div><label for="calls" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-1bcy0lc">Age</label> <input type="number" name="age" id="age" class="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="12" required${add_attribute("value", formData.age, 0)}></div> <div class="w-full"><label for="location" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-f0kjm5">Location</label> <input type="text" name="location" id="location" class="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="Type location" required${add_attribute("value", formData.location, 0)}></div> <div class="w-full">${validate_component(Label, "Label").$$render($$result, {}, {}, {
      default: () => {
        return `Device Type
							${validate_component(Select, "Select").$$render(
          $$result,
          {
            name: "device",
            class: "mt-2",
            items: deviceTypes,
            value: formData.device
          },
          {
            value: ($$value) => {
              formData.device = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div> <div><label for="sms" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-1d903at">SMS Count</label> <input type="number" name="sms" id="sms" class="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="12" required${add_attribute("value", formData.sms, 0)}></div> <div class="w-full">${validate_component(Label, "Label").$$render($$result, {}, {}, {
      default: () => {
        return `Customer Ratings
							${validate_component(Select, "Select").$$render(
          $$result,
          {
            name: "rating",
            class: "mt-2",
            items: ratings,
            value: formData.ratings
          },
          {
            value: ($$value) => {
              formData.ratings = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div> <div class="w-full"><label for="revenue" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-p6svdt">Revenue</label> <input type="number" name="revenue" id="revenue" class="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="Revenue" required${add_attribute("value", formData.revenue, 0)}></div> <div class="w-full"><label for="data" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-dvrzh1">Total Data Usage</label> <input type="number" name="data" id="data" class="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="Total Data Usage in GB" required${add_attribute("value", formData.data, 0)}></div> <div class="w-full">${validate_component(Label, "Label").$$render($$result, {}, {}, {
      default: () => {
        return `Network Type
							${validate_component(Select, "Select").$$render(
          $$result,
          {
            name: "network",
            class: "mt-2",
            items: networTypes,
            value: network
          },
          {
            value: ($$value) => {
              network = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div> <div><label for="calls" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-lyv6pw">Number of Calls</label> <input type="number" name="calls" id="calls" class="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="12" required${add_attribute("value", formData.calls, 0)}></div></div> <div class="mt-5 sm:col-span-2" data-svelte-h="svelte-84v1m7"><label for="description" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Comments</label> <textarea id="description" rows="8" class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="Enter your comments here..."></textarea></div> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: " mt-6 flex items-center space-x-3 font-medium",
        type: "submit",
        color: "green"
      },
      {},
      {
        default: () => {
          return `<p class="font-medium text-white" data-svelte-h="svelte-xw73cf">Submit</p> ${`${form ? `${form.error ? `${validate_component(MinusCircleIcon, "MinusCircleIcon").$$render($$result, { class: " text-red-500" }, {}, {})}` : `${validate_component(CheckCircleIcon, "CheckCircleIcon").$$render($$result, { class: " text-emerald-500" }, {}, {})}`}` : `<p></p>`}`}`;
        }
      }
    )} ${validate_component(Modal, "Modal").$$render(
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
          )} <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-10s365v">Based on Our AI algorithm the system has decided that this user is fit for this bundle:</h3> ${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "yellow",
              class: "me-2 mb-5 text-white font-medium"
            },
            {},
            {
              default: () => {
                return `${escape(form?.plan)}`;
              }
            }
          )} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "green",
              class: "me-2 text-white font-medium"
            },
            {},
            {
              default: () => {
                return `OK`;
              }
            }
          )}</div>`;
        }
      }
    )}</form></div></section>`}`;
  } while (!$$settled);
  $$unsubscribe_navigating();
  return $$rendered;
});
export {
  Page as default
};
