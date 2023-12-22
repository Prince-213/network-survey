import * as server from '../entries/pages/projects/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.h7bawMbP.js","_app/immutable/chunks/scheduler.FiqkJNEK.js","_app/immutable/chunks/index.DnrPuxAA.js","_app/immutable/chunks/index.eIz2PEbX.js","_app/immutable/chunks/Button.F40aNeJE.js","_app/immutable/chunks/stores.okP-ydTF.js","_app/immutable/chunks/singletons.b5n_fUri.js","_app/immutable/chunks/bundle-mjs.66vbMriA.js","_app/immutable/chunks/Modal.70Ml105X.js","_app/immutable/chunks/Icon.pknzQbwh.js","_app/immutable/chunks/ListPlaceholder.jZWjiTsb.js","_app/immutable/chunks/parse.RrI1B0B4.js","_app/immutable/chunks/navigation.QYHx9wVq.js"];
export const stylesheets = [];
export const fonts = [];
