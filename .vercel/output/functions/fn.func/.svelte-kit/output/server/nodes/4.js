import * as server from '../entries/pages/projects/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.qeHNr9gm.js","_app/immutable/chunks/scheduler.FiqkJNEK.js","_app/immutable/chunks/index.DnrPuxAA.js","_app/immutable/chunks/index.eIz2PEbX.js","_app/immutable/chunks/Button.IU0TFMov.js","_app/immutable/chunks/stores._EqfbG3h.js","_app/immutable/chunks/singletons.b2yJREYN.js","_app/immutable/chunks/bundle-mjs.66vbMriA.js","_app/immutable/chunks/Modal.d5kGrMjn.js","_app/immutable/chunks/Icon.nlRTva6g.js","_app/immutable/chunks/ListPlaceholder.jZWjiTsb.js","_app/immutable/chunks/parse.RrI1B0B4.js","_app/immutable/chunks/navigation.lOJujCQi.js"];
export const stylesheets = [];
export const fonts = [];
