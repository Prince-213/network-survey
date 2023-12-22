import * as server from '../entries/pages/artists/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/artists/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/artists/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.vF-WGcZU.js","_app/immutable/chunks/scheduler.FiqkJNEK.js","_app/immutable/chunks/index.DnrPuxAA.js","_app/immutable/chunks/stores.okP-ydTF.js","_app/immutable/chunks/singletons.b5n_fUri.js","_app/immutable/chunks/bundle-mjs.66vbMriA.js","_app/immutable/chunks/ListPlaceholder.jZWjiTsb.js"];
export const stylesheets = [];
export const fonts = [];
