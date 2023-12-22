import { c as create_ssr_component, v as validate_component, a as subscribe, b as add_attribute, e as each, m as missing_component, d as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { I as Icon } from "../../chunks/Icon.js";
const logo = "data:image/svg+xml,%3csvg%20viewBox='0%200%201920%201280'%20xmlns='http://www.w3.org/2000/svg'%20width='2500'%20height='1667'%3e%3cpath%20d='M960%20320c-353.46%200-640%20143.27-640%20320s286.54%20320%20640%20320%20640-143.27%20640-320-286.54-320-640-320zm0%20589.48c-325.56%200-589.48-120.65-589.48-269.48S634.44%20370.52%20960%20370.52%201549.48%20491.17%201549.48%20640%201285.56%20909.48%20960%20909.48zm-80.71-325.62v-50.53h180.55v50.53h-65v162.81H944.3V583.86zm398.49-50.53v213.34h-50.52l-91.63-127v127h-50.52V533.33h50.52l91.63%20127v-127zM640.72%20746.67V533.33h50.52l56.13%2086.34%2056.13-86.34H854v213.34h-50.5V626l-38.32%2058.9h-35.62L691.24%20626v120.67z'%20fill='%23ffcb05'/%3e%3cg%20fill='none'%3e%3cpath%20d='M0%201280c176.73%200%20320-286.54%20320-640S176.73%200%200%200M1920%200c-176.73%200-320%20286.54-320%20640s143.27%20640%20320%20640M1600%201280c0-176.73-286.54-320-640-320s-640%20143.27-640%20320M320%200c0%20176.73%20286.54%20320%20640%20320s640-143.27%20640-320'/%3e%3cpath%20d='M0%200h1920v1280H0z'/%3e%3c/g%3e%3c/svg%3e";
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "3",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["circle", { "cx": "9", "cy": "9", "r": "2" }],
    [
      "path",
      {
        "d": "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "image" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ImageIcon = Image;
const Layout_dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "7",
        "height": "9",
        "x": "3",
        "y": "3",
        "rx": "1"
      }
    ],
    [
      "rect",
      {
        "width": "7",
        "height": "5",
        "x": "14",
        "y": "3",
        "rx": "1"
      }
    ],
    [
      "rect",
      {
        "width": "7",
        "height": "9",
        "x": "14",
        "y": "12",
        "rx": "1"
      }
    ],
    [
      "rect",
      {
        "width": "7",
        "height": "5",
        "x": "3",
        "y": "16",
        "rx": "1"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "layout-dashboard" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const LayoutDashboardIcon = Layout_dashboard;
const Log_out = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
      }
    ],
    ["polyline", { "points": "16 17 21 12 16 7" }],
    [
      "line",
      {
        "x1": "21",
        "x2": "9",
        "y1": "12",
        "y2": "12"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "log-out" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const LogOutIcon = Log_out;
const Receipt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"
      }
    ],
    [
      "path",
      {
        "d": "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"
      }
    ],
    ["path", { "d": "M12 17V7" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "receipt" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ReceiptIcon = Receipt;
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "settings" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const SettingsIcon = Settings;
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
      }
    ],
    ["circle", { "cx": "12", "cy": "7", "r": "4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "user" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const UserIcon = User;
const Sidbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pathName;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const links = [
    {
      title: "Dashboard",
      icon: LayoutDashboardIcon,
      path: "/"
    },
    {
      title: "Customers",
      icon: UserIcon,
      path: "/artists"
    },
    {
      title: "Enroll",
      icon: ImageIcon,
      path: "/projects"
    },
    {
      title: "Message",
      icon: ReceiptIcon,
      path: "/sales"
    }
  ];
  pathName = $page.url.pathname;
  $$unsubscribe_page();
  return `<aside class="fixed min-h-full w-[15%] bg-[#f2f2f2]"><div class="mx-auto flex h-[80vh] w-[75%] flex-col justify-between"><div data-svelte-h="svelte-158eniz"><img${add_attribute("src", logo, 0)} alt=""></div> <nav class="space-y-5">${each(links, (link, idx) => {
    return `<button${add_attribute(
      "class",
      ` flex w-full rounded-[4px]  px-4 py-3 ${pathName == link.path ? "bg-[#B4CD93] text-black" : "bg-transparent text-[#808080]"} items-center space-x-4  transition-all duration-150`,
      0
    )}>${validate_component(link.icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})} <p class="text-base font-medium">${escape(link.title)}</p> </button>`;
  })}</nav> <nav class="space-y-5"><li${add_attribute(
    "class",
    ` flex w-full rounded-[4px]  px-4 py-3 ${pathName == "/settings" ? "bg-[#B4CD93] text-black" : "bg-transparent text-[#808080]"} items-center space-x-4  transition-all duration-150`,
    0
  )}>${validate_component(SettingsIcon || missing_component, "svelte:component").$$render($$result, {}, {}, {})} <p class="text-base font-medium" data-svelte-h="svelte-dxobck">Settings</p></li> <li${add_attribute(
    "class",
    ` flex w-full rounded-[4px]  px-4 py-3 ${pathName == "/logout" ? "bg-[#B4CD93] text-black" : "bg-transparent text-red-500"} items-center space-x-4  transition-all duration-150`,
    0
  )}>${validate_component(LogOutIcon || missing_component, "svelte:component").$$render($$result, {}, {}, {})} <p class="text-base font-medium" data-svelte-h="svelte-uhj0zf">Log Out</p></li></nav></div></aside>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative font-quick flex min-h-screen w-full items-stretch justify-between space-x-10 bg-white">${validate_component(Sidbar, "Sidebar").$$render($$result, {}, {}, {})} <div class="w-[12%]" data-svelte-h="svelte-b4qok2"></div> <div class="min-h-full w-[85%] pt-[60px]">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Layout as default
};
