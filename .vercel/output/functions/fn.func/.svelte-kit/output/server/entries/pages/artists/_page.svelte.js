import { n as noop, o as assign, p as identity, c as create_ssr_component, g as compute_rest_props, a as subscribe, h as spread, j as escape_object, i as escape_attribute_value, d as escape, b as add_attribute, l as getContext, s as setContext, v as validate_component, e as each } from "../../../chunks/ssr.js";
import "@faker-js/faker";
import { i as is_void, n as navigating } from "../../../chunks/stores.js";
import { w as writable } from "../../../chunks/index2.js";
import { twMerge, twJoin } from "tailwind-merge";
import { L as ListPlaceholder } from "../../../chunks/ListPlaceholder.js";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = identity,
      interpolate = get_interpolator
    } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const Progressbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "progress",
    "precision",
    "tweenDuration",
    "animate",
    "size",
    "labelInside",
    "labelOutside",
    "easing",
    "color",
    "labelInsideClass",
    "divClass"
  ]);
  let $_progress, $$unsubscribe__progress;
  let { progress = "45" } = $$props;
  let { precision = 0 } = $$props;
  let { tweenDuration = 400 } = $$props;
  let { animate = false } = $$props;
  let { size = "h-2.5" } = $$props;
  let { labelInside = false } = $$props;
  let { labelOutside = "" } = $$props;
  let { easing = cubicOut } = $$props;
  let { color = "primary" } = $$props;
  let { labelInsideClass = "text-primary-100 text-xs font-medium text-center p-0.5 leading-none rounded-full" } = $$props;
  let { divClass = "w-full bg-gray-200 rounded-full dark:bg-gray-700" } = $$props;
  const _progress = tweened(0, {
    duration: animate ? tweenDuration : 0,
    easing
  });
  $$unsubscribe__progress = subscribe(_progress, (value) => $_progress = value);
  const barColors = {
    primary: "bg-primary-600",
    blue: "bg-blue-600",
    gray: "bg-gray-600 dark:bg-gray-300",
    red: "bg-red-600 dark:bg-red-500",
    green: "bg-green-600 dark:bg-green-500",
    yellow: "bg-yellow-400",
    purple: "bg-purple-600 dark:bg-purple-500",
    indigo: "bg-indigo-600 dark:bg-indigo-500"
  };
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  if ($$props.precision === void 0 && $$bindings.precision && precision !== void 0)
    $$bindings.precision(precision);
  if ($$props.tweenDuration === void 0 && $$bindings.tweenDuration && tweenDuration !== void 0)
    $$bindings.tweenDuration(tweenDuration);
  if ($$props.animate === void 0 && $$bindings.animate && animate !== void 0)
    $$bindings.animate(animate);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.labelInside === void 0 && $$bindings.labelInside && labelInside !== void 0)
    $$bindings.labelInside(labelInside);
  if ($$props.labelOutside === void 0 && $$bindings.labelOutside && labelOutside !== void 0)
    $$bindings.labelOutside(labelOutside);
  if ($$props.easing === void 0 && $$bindings.easing && easing !== void 0)
    $$bindings.easing(easing);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.labelInsideClass === void 0 && $$bindings.labelInsideClass && labelInsideClass !== void 0)
    $$bindings.labelInsideClass(labelInsideClass);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  {
    _progress.set(Number(progress));
  }
  $$unsubscribe__progress();
  return `${labelOutside ? `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("flex justify-between mb-1", $$props.classLabelOutside))
      }
    ],
    {}
  )}><span class="text-base font-medium text-blue-700 dark:text-white">${escape(labelOutside)}</span> <span class="text-sm font-medium text-blue-700 dark:text-white">${escape(progress)}%</span></div>` : ``} <div${add_attribute("class", twMerge(divClass, size, $$props.class), 0)}>${labelInside ? `<div${add_attribute("class", twJoin(labelInsideClass, barColors[color]), 0)} style="${"width: " + escape($_progress, true) + "%"}">${escape($_progress.toFixed(precision))}%</div>` : `<div${add_attribute("class", twJoin(barColors[color], size, "rounded-full"), 0)} style="${"width: " + escape($_progress, true) + "%"}"></div>`}</div> `;
});
const TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tableBodyClass = void 0 } = $$props;
  if ($$props.tableBodyClass === void 0 && $$bindings.tableBodyClass && tableBodyClass !== void 0)
    $$bindings.tableBodyClass(tableBodyClass);
  return `<tbody${add_attribute("class", tableBodyClass, 0)}>${slots.default ? slots.default({}) : ``}</tbody> `;
});
const TableBodyCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tdClass"]);
  let { tdClass = "px-6 py-4 whitespace-nowrap font-medium " } = $$props;
  let color = "default";
  color = getContext("color");
  let tdClassfinal;
  if ($$props.tdClass === void 0 && $$bindings.tdClass && tdClass !== void 0)
    $$bindings.tdClass(tdClass);
  tdClassfinal = twMerge(
    tdClass,
    color === "default" ? "text-gray-900 dark:text-white" : "text-blue-50 whitespace-nowrap dark:text-blue-100",
    $$props.class
  );
  return `${((tag) => {
    return tag ? `<${$$props.onclick ? "button" : "td"}${spread(
      [
        escape_object($$restProps),
        {
          class: escape_attribute_value(tdClassfinal)
        },
        {
          role: escape_attribute_value($$props.onclick ? "button" : void 0)
        }
      ],
      {}
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })($$props.onclick ? "button" : "td")} `;
});
const TableBodyRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color"]);
  let { color = getContext("color") } = $$props;
  const colors = {
    default: "bg-white dark:bg-gray-800 dark:border-gray-700",
    blue: "bg-blue-500 border-blue-400",
    green: "bg-green-500 border-green-400",
    red: "bg-red-500 border-red-400",
    yellow: "bg-yellow-500 border-yellow-400",
    purple: "bg-purple-500 border-purple-400",
    custom: ""
  };
  const hoverColors = {
    default: "hover:bg-gray-50 dark:hover:bg-gray-600",
    blue: "hover:bg-blue-400",
    green: "hover:bg-green-400",
    red: "hover:bg-red-400",
    yellow: "hover:bg-yellow-400",
    purple: "hover:bg-purple-400",
    custom: ""
  };
  const stripColors = {
    default: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
    blue: "odd:bg-blue-800 even:bg-blue-700 odd:dark:bg-blue-800 even:dark:bg-blue-700",
    green: "odd:bg-green-800 even:bg-green-700 odd:dark:bg-green-800 even:dark:bg-green-700",
    red: "odd:bg-red-800 even:bg-red-700 odd:dark:bg-red-800 even:dark:bg-red-700",
    yellow: "odd:bg-yellow-800 even:bg-yellow-700 odd:dark:bg-yellow-800 even:dark:bg-yellow-700",
    purple: "odd:bg-purple-800 even:bg-purple-700 odd:dark:bg-purple-800 even:dark:bg-purple-700",
    custom: ""
  };
  let trClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  trClass = twMerge([
    !getContext("noborder") && "border-b last:border-b-0",
    colors[color],
    getContext("hoverable") && hoverColors[color],
    getContext("striped") && stripColors[color],
    $$props.class
  ]);
  return `<tr${spread([escape_object($$restProps), { class: escape_attribute_value(trClass) }], {})}>${slots.default ? slots.default({}) : ``}</tr> `;
});
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let theadClassfinal;
  let $$restProps = compute_rest_props($$props, ["theadClass", "defaultRow"]);
  let { theadClass = "text-xs uppercase" } = $$props;
  let { defaultRow = true } = $$props;
  let color;
  color = getContext("color");
  let noborder = getContext("noborder");
  let striped = getContext("striped");
  let defaultBgColor = noborder || striped ? "" : "bg-gray-50 dark:bg-gray-700";
  const bgColors = {
    default: defaultBgColor,
    blue: "bg-blue-600",
    green: "bg-green-600",
    red: "bg-red-600",
    yellow: "bg-yellow-600",
    purple: "bg-purple-600",
    custom: ""
  };
  let textColor = color === "default" ? "text-gray-700 dark:text-gray-400" : color === "custom" ? "" : "text-white  dark:text-white";
  let borderColors = striped ? "" : color === "default" ? "border-gray-700" : color === "custom" ? "" : `border-${color}-400`;
  if ($$props.theadClass === void 0 && $$bindings.theadClass && theadClass !== void 0)
    $$bindings.theadClass(theadClass);
  if ($$props.defaultRow === void 0 && $$bindings.defaultRow && defaultRow !== void 0)
    $$bindings.defaultRow(defaultRow);
  theadClassfinal = twMerge(theadClass, textColor, striped && borderColors, bgColors[color], $$props.class);
  return `<thead${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(theadClassfinal)
      }
    ],
    {}
  )}>${defaultRow ? `<tr>${slots.default ? slots.default({}) : ``}</tr>` : `${slots.default ? slots.default({}) : ``}`}</thead> `;
});
const TableHeadCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["padding"]);
  let { padding = "px-6 py-3" } = $$props;
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  return `<th${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(padding, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</th> `;
});
const TableSearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "divClass",
    "inputValue",
    "striped",
    "hoverable",
    "placeholder",
    "customColor",
    "color",
    "innerDivClass",
    "searchClass",
    "svgDivClass",
    "svgClass",
    "inputClass"
  ]);
  let { divClass = "relative overflow-x-auto shadow-md sm:rounded-lg" } = $$props;
  let { inputValue = "" } = $$props;
  let { striped = false } = $$props;
  let { hoverable = false } = $$props;
  let { placeholder = "Search" } = $$props;
  let { customColor = "" } = $$props;
  let { color = "default" } = $$props;
  let { innerDivClass = "p-4" } = $$props;
  let { searchClass = "relative mt-1" } = $$props;
  let { svgDivClass = "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" } = $$props;
  let { svgClass = "w-5 h-5 text-gray-500 dark:text-gray-400" } = $$props;
  let { inputClass = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 pl-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" } = $$props;
  let inputCls = twMerge(inputClass, $$props.classInput);
  let svgDivCls = twMerge(svgDivClass, $$props.classSvgDiv);
  const colors = {
    default: "text-gray-500 dark:text-gray-400",
    blue: "text-blue-100 dark:text-blue-100",
    green: "text-green-100 dark:text-green-100",
    red: "text-red-100 dark:text-red-100",
    yellow: "text-yellow-100 dark:text-yellow-100",
    purple: "text-purple-100 dark:text-purple-100",
    custom: customColor
  };
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.inputValue === void 0 && $$bindings.inputValue && inputValue !== void 0)
    $$bindings.inputValue(inputValue);
  if ($$props.striped === void 0 && $$bindings.striped && striped !== void 0)
    $$bindings.striped(striped);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0)
    $$bindings.hoverable(hoverable);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.customColor === void 0 && $$bindings.customColor && customColor !== void 0)
    $$bindings.customColor(customColor);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.innerDivClass === void 0 && $$bindings.innerDivClass && innerDivClass !== void 0)
    $$bindings.innerDivClass(innerDivClass);
  if ($$props.searchClass === void 0 && $$bindings.searchClass && searchClass !== void 0)
    $$bindings.searchClass(searchClass);
  if ($$props.svgDivClass === void 0 && $$bindings.svgDivClass && svgDivClass !== void 0)
    $$bindings.svgDivClass(svgDivClass);
  if ($$props.svgClass === void 0 && $$bindings.svgClass && svgClass !== void 0)
    $$bindings.svgClass(svgClass);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0)
    $$bindings.inputClass(inputClass);
  {
    setContext("striped", striped);
  }
  {
    setContext("hoverable", hoverable);
  }
  {
    setContext("color", color);
  }
  return `<div${add_attribute("class", divClass, 0)}><div${add_attribute("class", innerDivClass, 0)}><label for="table-search" class="sr-only" data-svelte-h="svelte-1m8vpa4">Search</label> <div${add_attribute("class", searchClass, 0)}><div${add_attribute("class", svgDivCls, 0)}>${slots.svgSearch ? slots.svgSearch({}) : ` <svg${add_attribute("class", svgClass, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg> `}</div> <input type="text" id="table-search"${add_attribute("class", inputCls, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", inputValue, 0)}></div> ${slots.header ? slots.header({}) : ``}</div> <table${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("w-full text-left text-sm", colors[color], $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</table> ${slots.footer ? slots.footer({}) : ``}</div> `;
});
const android = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='96px'%20height='96px'%3e%3cpath%20fill='%237cb342'%20d='M12%2029c0%201.1-.9%202-2%202s-2-.9-2-2v-9c0-1.1.9-2%202-2s2%20.9%202%202V29zM40%2029c0%201.1-.9%202-2%202s-2-.9-2-2v-9c0-1.1.9-2%202-2s2%20.9%202%202V29zM22%2040c0%201.1-.9%202-2%202s-2-.9-2-2v-9c0-1.1.9-2%202-2s2%20.9%202%202V40zM30%2040c0%201.1-.9%202-2%202s-2-.9-2-2v-9c0-1.1.9-2%202-2s2%20.9%202%202V40z'/%3e%3cpath%20fill='%237cb342'%20d='M14%2018v15c0%201.1.9%202%202%202h16c1.1%200%202-.9%202-2V18H14zM24%208c-6%200-9.7%203.6-10%208h20C33.7%2011.6%2030%208%2024%208zM20%2013.6c-.6%200-1-.4-1-1%200-.6.4-1%201-1s1%20.4%201%201C21%2013.1%2020.6%2013.6%2020%2013.6zM28%2013.6c-.6%200-1-.4-1-1%200-.6.4-1%201-1s1%20.4%201%201C29%2013.1%2028.6%2013.6%2028%2013.6z'/%3e%3cpath%20fill='%237cb342'%20d='M28.3%2010.5c-.2%200-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l1.7-2.5c.3-.5.9-.6%201.4-.3.5.3.6.9.3%201.4l-1.7%202.5C29%2010.3%2028.7%2010.5%2028.3%2010.5zM19.3%2010.1c-.3%200-.7-.2-.8-.5l-1.3-2.1c-.3-.5-.2-1.1.3-1.4.5-.3%201.1-.2%201.4.3l1.3%202.1c.3.5.2%201.1-.3%201.4C19.7%2010%2019.5%2010.1%2019.3%2010.1z'/%3e%3c/svg%3e";
const ios = "/_app/immutable/assets/icons8-ios.f71JyoAk.svg";
const windows = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='96px'%20height='96px'%3e%3cpath%20fill='%2300b0ff'%20d='M20%2025.026L5.011%2025%205.012%2037.744%2020%2039.818zM22%2025.03L22%2040.095%2042.995%2043%2043%2025.066zM20%208.256L5%2010.38%205.014%2023%2020%2023zM22%207.973L22%2023%2042.995%2023%2042.995%205z'/%3e%3c/svg%3e";
const apple = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='96px'%20height='96px'%3e%3cpath%20fill='%2342A5F5'%20d='M40.084,32.613c-0.848,1.835-1.254,2.655-2.342,4.274c-1.521,2.264-3.67,5.089-6.326,5.109c-2.361,0.018-2.971-1.507-6.176-1.482c-3.204,0.016-3.872,1.51-6.237,1.484c-2.654-0.022-4.688-2.568-6.21-4.826c-4.259-6.34-4.707-13.768-2.076-17.721c1.861-2.803,4.807-4.449,7.572-4.449c2.817,0,4.588,1.514,6.916,1.514c2.262,0,3.638-1.517,6.896-1.517c2.464,0,5.07,1.313,6.931,3.575C32.942,21.836,33.931,30.337,40.084,32.613z'/%3e%3cpath%20fill='%2342A5F5'%20d='M30.046,12.072c1.269-1.577,2.232-3.804,1.882-6.072c-2.069,0.138-4.491,1.418-5.905,3.075c-1.282,1.51-2.345,3.752-1.931,5.922C26.351,15.066,28.689,13.764,30.046,12.072z'/%3e%3cpath%20fill='%231E88E5'%20d='M36.736,20.421C28,30.001,20,21.001,9.228,27.842c0.375,3.027,1.53,6.303,3.565,9.331c1.521,2.258,3.556,4.804,6.21,4.826c2.365,0.025,3.033-1.469,6.237-1.484c3.205-0.024,3.814,1.5,6.176,1.482c2.656-0.021,4.805-2.846,6.326-5.109c1.088-1.619,1.494-2.439,2.342-4.274C34.878,30.688,33.389,24.314,36.736,20.421z'/%3e%3c/svg%3e";
const edge = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADg0lEQVR4nO2bP2gUQRTGJwaSQgiiaKOgFioo/qnsFZXTQjAw3O33zSWNlTZ2ghYHKiiIYG1hZyOiRtDGTpQgFmJhlPQRC0GIoCjEyEt2YdibndvLbXD2mA8GLtmZYd5v5897M7NKRUVVLq31KMlTxphtVdYL4Igx5rAKWVrrMQAzJJdJLpDcV0W9YjiAJUmtVuuQCtV4kk9T47P0leT+QesGoLM65beqifHLVUEIGoD2G18JhGAB6FXjn1mGLgB4ZzU2mw8GmhOCBKC73/zKWyb5MPtfOik+GbQnBAdAFxgvz2wAWd5BIQQFQHuMdwGoAkJQAADc8I1rFwCHjyCGzNUVwDXfpFYEIA+htgC01qMATmitt7qe+wBk5Y0xJ4vKBw+gl3oBWIsiAMQeoOMQYJwDluMkyLgKLMdlENEP0CpkMTpC7NsTlB1kAJ8lueKLXo6QlMnK9+NiB9MDZBvdMvBLHoIPgORNA7OV5xJnqLoB0KsB1kwRhCIAeeOlDqlL1XEO0J5NExeAdru91zae5ItGozGu6jwJ6gIIeQDBGl/FKuCCAKBj/X01WOOrWgYd22dLBb9lzI+pYfQDdHdPyKew3vx6OEIeCGEaLwJwP+2ei6oCOSCEa7zIGLOb5D2SZ1W1ZxHXJQU35qOioqKioqJW1Ol0NrRarQPGmONJkhw1xmxUfdwDlEivZJqs+h7iQCI5AeAmgG85l/U3gMcADpa5B+jx+7tSP8fr66pms7mL5HyPxv4C0Cyqw473awWg0WiMA/ho3xgBcBfARblIAeCN3RtkWLjqyW143CkzBP775qeI5CWr4a9kKKicSF6xILxWdT/+tkXybdrwnyR3KLdGSL60DNw5NAAALPrebCaS561t68YwAZhLG93x5SN5wTLw9NAAaLfbWwAck/Xfk20EwGxq4N+pqantZQGkJ0aTwfsBJa/ViXGPCvI4AaRHZeEugz5JryB522r0D9nPd+X1nPx88vkCKlSRnLBvkQP44xr7vQDIWu8YArNBA0iSZI/tHMlKkSTJGV+ZfibB9Th+r0zylgF8t7rpvARHJcrVHsAIgMu5gOb59PT0pjKFaw3AGLPRbpQsdSRv9VgahwNAczUS/JCbnR8UBTFF3/31GQyFMwmy2/heIazzu7+1hMOhAHhfBYDabohorTeTPFd2K8v31ac862dLLIj9gChVb/0DpAtKyLQlVWUAAAAASUVORK5CYII=";
const three = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACtklEQVR4nO2asW7UQBCGV4oUCurQByGQKAIPEdBVRIo0kvX/cwW8BgUSoc0LUFAiRANHwStQ0BOoqBJR0wejzdmS5azX57s1jJP9pZXuzueV/887u7NjO5eVlVwiskXysareStkvgIeq+sBZlohsA1iQLEmekryXol9vHMC5b0VR7Dmr5kl+rMzX7RfJ+5v2DUDqPv1nNxHzZSoIpgFI3HwSCGYByNL8p4bRUwBfGxdbzwcbzQkmAcjlO39xl0m+r3+rJsUPm44EcwCkw7w/1gRQ/3dTCKYASMR8CEAKCKYAAHgVi+sQgECO4I18myqAl7FJrQtAG8JkAYjIFoB9EdkJHY8BqM9X1Udd55sH0Kc+AOsoA0AeAZJDgHkOKPMkyLwKlHkZRM4DxFkWcyLEwZmgryAD+O5baH/Rlwj5cwD8IHkyJMU2MwJ8Gb1h8KwNIQagMn/WOL7vpgZAlhusRReELgAB8wvfl5viHCCRokkIwHw+v1ttyev/f57NZjfclCdB6YDQBmDWfIpVIAQBwIvG9+dmzadaBgPls/OOzz7mt91VzAPk8khoN1t3foxEKALBpnkvAG+q4fnbJVAAgl3zXqq6S/I1yScu7bOII9/MxXxWVlZWVtY1lS4rOYd+hxZpB6p6Z5X3AHv6abbD1O8hrqWqhFWu2N6p6s3Ye4AD+hr0eH00kTwZctE+Qwz109zvTwqAiOz0hYCqPiX5s7rwPwBut/tpFTyOVwmB/178HCKSzxoGDyb9+Hsd9RnMAJBHgEw+BBBfx4/XCYFInmEjD1hnHR8CIJZnmFgGxwbQl2c4SyqKYi91CHTkGV9MAvhXy+AYj99HVwaAaz4CmDAVNgVAV6gHVOZTbobsTIIYVg/w5t6m2g6bAMAB9QBv/soVRGSFeoCP+dCwH5hHTLsekOVs6i/0tFYEO/AjiwAAAABJRU5ErkJggg==";
const four = "data:image/png;base64,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";
const five = "data:image/png;base64,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";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items;
  let filteredItems;
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let { data } = $$props;
  let searchTerm = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    items = data.data;
    filteredItems = items?.filter((item) => item.plan.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    $$rendered = `${$navigating ? `${validate_component(ListPlaceholder, "ListPlaceholder").$$render($$result, {}, {}, {})}` : `<div class="w-[95%] pb-10"><div class="relative w-full"><caption class="w-full bg-white p-5 text-left text-lg font-semibold text-gray-900 dark:bg-gray-800 dark:text-white" data-svelte-h="svelte-1h762g2">All Customers
				<p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Monitor artist sales, reviews, etc.</p></caption> ${validate_component(TableSearch, "TableSearch").$$render(
      $$result,
      {
        placeholder: "Search by maker name",
        hoverable: true,
        inputValue: searchTerm
      },
      {
        inputValue: ($$value) => {
          searchTerm = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                default: () => {
                  return `ID`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                default: () => {
                  return `Name`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                default: () => {
                  return `Age`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                default: () => {
                  return `Device Type`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                default: () => {
                  return `Rating`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                default: () => {
                  return `Network Type`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                default: () => {
                  return `Existing Package`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                default: () => {
                  return `Total Data Usage`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                default: () => {
                  return `Revenue`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                default: () => {
                  return `Number of Calls`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: " text-right" }, {}, {
                default: () => {
                  return `SMS Count`;
                }
              })}`;
            }
          })} ${validate_component(TableBody, "TableBody").$$render($$result, { tableBodyClass: " divide-y" }, {}, {
            default: () => {
              return `${each(filteredItems, (item, idx) => {
                return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(idx)}`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(item.name)}`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(item.age)}`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: " flex justify-center" }, {}, {
                      default: () => {
                        return `${item.device == 1 ? `<img${add_attribute("src", ios, 0)} width="32px" alt="">` : `${item.device == 2 ? `<img${add_attribute("src", apple, 0)} width="32px" alt="">` : `${item.device == 3 ? `<img${add_attribute("src", windows, 0)} width="32px" alt="">` : `<img${add_attribute("src", android, 0)} width="32px" alt="">`}`}`} `;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="">${validate_component(Progressbar, "Progressbar").$$render(
                          $$result,
                          {
                            progress: `${item.rating * 25}`,
                            size: "h-1.5"
                          },
                          {},
                          {}
                        )}</div> `;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: " flex justify-center" }, {}, {
                      default: () => {
                        return `${item.network == "3G" ? `<img${add_attribute("src", three, 0)} width="32px" alt="">` : `${item.network == "4G" ? `<img${add_attribute("src", four, 0)} width="32px" alt="">` : `${item.network == "5G" ? `<img${add_attribute("src", five, 0)} width="32px" alt="">` : `<img${add_attribute("src", edge, 0)} width="32px" alt="">`}`}`} `;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: " text-center " }, {}, {
                      default: () => {
                        return `${item.plan.toLowerCase() == "family plan" ? `<div class="rounded-md bg-blue-400 px-3 py-2 text-center text-base font-semibold text-white" data-svelte-h="svelte-1qvj3xs">Family Plan
									</div>` : `${item.plan.toLowerCase() == "premium plan" ? `<div class="rounded-md bg-green-400 px-3 py-2 text-center text-base font-semibold text-white" data-svelte-h="svelte-q72nvc">Premium Plan
									</div>` : `<div class="rounded-md bg-yellow-400 px-3 py-2 text-center text-base font-semibold text-white" data-svelte-h="svelte-qinxvc">Bundle Plan
									</div>`}`} `;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: " text-right" }, {}, {
                      default: () => {
                        return `${escape(item.data)}GB`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: " flex justify-end" }, {}, {
                      default: () => {
                        return `₦ ${escape(item.revenue.toLocaleString("en", {
                          notation: "compact",
                          compactDisplay: "short"
                        }))}`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: " text-right" }, {}, {
                      default: () => {
                        return `${escape(item.calls)}`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: " text-right" }, {}, {
                      default: () => {
                        return `${escape(Intl.NumberFormat("en-US").format(item.sms))}`;
                      }
                    })} `;
                  }
                })}`;
              })}`;
            }
          })}`;
        }
      }
    )}</div></div>`}`;
  } while (!$$settled);
  $$unsubscribe_navigating();
  return $$rendered;
});
export {
  Page as default
};
