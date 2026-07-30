export const CATEGORIES = [
 {id:"javascript-basics",name:"JavaScript Basics",shortName:"Basics",description:"Types, operators, bindings, strings and modern syntax.",accent:"violet"},
 {id:"functions-scope",name:"Functions & Scope",shortName:"Functions",description:"Functions, closures, callbacks, hoisting and scope.",accent:"blue"},
 {id:"arrays-objects",name:"Arrays & Objects",shortName:"Data",description:"Collections, transformation, copying and object access.",accent:"cyan"},
 {id:"dom-events",name:"DOM & Events",shortName:"DOM",description:"Semantic document updates, event handling and resilient interactions.",accent:"green"},
 {id:"web-apis-storage",name:"Web APIs & Storage",shortName:"Web APIs",description:"Fetch, timers, browser storage and failure handling.",accent:"amber"},
 {id:"accessibility-security",name:"Accessibility & Security",shortName:"A11y & Security",description:"Semantics, focus, safe rendering, links, CSP and secret boundaries.",accent:"rose"}
];
export const DIFFICULTIES=["beginner","intermediate","advanced"];
export const CATEGORY_MAP=new Map(CATEGORIES.map(c=>[c.id,c]));
export function getCategory(id){return CATEGORY_MAP.get(id)??{id:"general",name:"General",shortName:"General",description:"General coding knowledge.",accent:"violet"};}
