import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.rG2-IfQn.js","_app/immutable/chunks/scheduler.FiqkJNEK.js","_app/immutable/chunks/index.DnrPuxAA.js","_app/immutable/chunks/stores._EqfbG3h.js","_app/immutable/chunks/singletons.b2yJREYN.js","_app/immutable/chunks/bundle-mjs.66vbMriA.js","_app/immutable/chunks/Button.IU0TFMov.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/Wrapper.0IHQIhwG.js","_app/immutable/chunks/Icon.nlRTva6g.js"];
export const stylesheets = [];
export const fonts = [];
