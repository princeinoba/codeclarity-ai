const CONTROL_CHARACTERS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const MULTISPACE = /\s+/g;
export function normalizeText(value,maxLength=500){if(typeof value!=="string")return"";return value.replace(CONTROL_CHARACTERS,"").replace(MULTISPACE," ").trim().slice(0,maxLength)}
export function normalizeMultiline(value,maxLength=2000){if(typeof value!=="string")return"";return value.replace(CONTROL_CHARACTERS,"").replace(/\r\n?/g,"\n").replace(/[ \t]+/g," ").replace(/\n{3,}/g,"\n\n").trim().slice(0,maxLength)}
export function clampNumber(value,min,max,fallback=min){const n=Number(value);return Number.isFinite(n)?Math.min(max,Math.max(min,n)):fallback}
export function uniqueStrings(values,{maxItems=20,maxLength=120,lowercase=false}={}){if(!Array.isArray(values))return[];const seen=new Set(),out=[];for(const value of values){let n=normalizeText(value,maxLength);if(lowercase)n=n.toLowerCase();if(!n||seen.has(n))continue;seen.add(n);out.push(n);if(out.length>=maxItems)break}return out}
export function slugify(value){return normalizeText(value,120).toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,80)}
export function safeJsonParse(value,fallback=null){if(typeof value!=="string"||!value.trim())return fallback;try{return JSON.parse(value)}catch{return fallback}}
export function escapeHtml(value){return String(value??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}
export function formatPercent(value){const n=Number.isFinite(Number(value))?Number(value):0;return `${Math.round(n)}%`}
export function isIsoDate(value){return typeof value==="string"&&Number.isFinite(Date.parse(value))}
