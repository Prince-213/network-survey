import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.DwU6-ZDP.js","_app/immutable/chunks/scheduler.FiqkJNEK.js","_app/immutable/chunks/index.DnrPuxAA.js","_app/immutable/chunks/stores.okP-ydTF.js","_app/immutable/chunks/singletons.b5n_fUri.js","_app/immutable/chunks/bundle-mjs.66vbMriA.js","_app/immutable/chunks/Button.F40aNeJE.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/Wrapper.X0us1hTP.js","_app/immutable/chunks/Icon.pknzQbwh.js"];
export const stylesheets = [];
export const fonts = [];
