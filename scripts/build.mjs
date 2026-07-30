import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { renderLayout } from "../src/templates/layout.mjs";
import * as pages from "../src/templates/pages.mjs";
const here=path.dirname(fileURLToPath(import.meta.url)),root=path.resolve(here,".."),dist=path.join(root,"dist");
const siteUrl=String(process.env.SITE_URL||"").trim().replace(/\/$/,"");
const publicIndexing=process.env.CODECLARITY_PUBLIC_INDEXING==="true"&&/^https:\/\//.test(siteUrl);
const routes=[
 {path:"/",file:"index.html",title:"CodeClarity AI — Coding Practice, Sprint and Study Coach",description:"Practice verified coding questions, take a timed interview sprint, review every answer and build a browser-local study plan.",page:pages.homePage,robots:"public"},
 {path:"/practice/",file:"practice/index.html",title:"Practice Lab",description:"Untimed coding practice with immediate verified explanations and browser-local review.",page:pages.practicePage,script:"/assets/practice.js",robots:"local"},
 {path:"/sprint/",file:"sprint/index.html",title:"Interview Sprint",description:"A ninety-second ten-question coding sprint with local scoring and review.",page:pages.sprintPage,script:"/assets/sprint.js",robots:"local"},
 {path:"/question-bank/",file:"question-bank/index.html",title:"Question Bank",description:"Search thirty-six original questions across JavaScript, browser APIs, accessibility and security.",page:pages.questionBankPage,script:"/assets/question-bank.js",robots:"public"},
 {path:"/review/",file:"review/index.html",title:"Answer Review",description:"Review browser-local completed sessions with verified answers and explanations.",page:pages.reviewPage,script:"/assets/review.js",robots:"local"},
 {path:"/progress/",file:"progress/index.html",title:"Progress",description:"Inspect, export, import or clear browser-local coding-practice evidence.",page:pages.progressPage,script:"/assets/progress.js",robots:"local"},
 {path:"/leaderboard/",file:"leaderboard/index.html",title:"Local Leaderboard",description:"View and clear browser-local interview sprint scores.",page:pages.leaderboardPage,script:"/assets/leaderboard.js",robots:"local"},
 {path:"/coach/",file:"coach/index.html",title:"Study Coach",description:"Turn verified quiz results into a bounded deterministic coding-study plan.",page:pages.coachPage,script:"/assets/coach.js",robots:"local"},
 {path:"/about/",file:"about/index.html",title:"About the Rebuild",description:"See how a five-question bootcamp quiz became a focused, testable coding-learning product.",page:pages.aboutPage,robots:"public"},
 {path:"/privacy/",file:"privacy/index.html",title:"Privacy",description:"Understand CodeClarity AI browser-local progress, leaderboard and Study Coach data boundaries.",page:pages.privacyPage,robots:"public"},
 {path:"/offline/",file:"offline/index.html",title:"Offline",description:"Use cached CodeClarity pages and browser-local progress while offline.",page:pages.offlinePage,robots:"local"},
 {path:"/404/",file:"404/index.html",title:"Page Not Found",description:"The requested CodeClarity AI route could not be found.",page:pages.notFoundPage,robots:"local"}
];
const canonicalFor=r=>siteUrl?`${siteUrl}${r.path}`:"";
const robotsFor=r=>r.robots==="local"?"noindex,nofollow":publicIndexing?"index,follow":"noindex,follow";
async function put(file,content){const target=path.join(dist,file);await mkdir(path.dirname(target),{recursive:true});await writeFile(target,content,"utf8")}
await rm(dist,{recursive:true,force:true});await mkdir(dist,{recursive:true});
for(const r of routes){const html=renderLayout({title:r.title,description:r.description,path:r.path,content:r.page(),pageScript:r.script||"",robots:robotsFor(r),canonical:canonicalFor(r),bodyClass:r.path==="/"?"home-page":""});await put(r.file,html);if(r.path==="/404/")await put("404.html",html)}
await cp(path.join(root,"src/static/assets"),path.join(dist,"assets"),{recursive:true});
await cp(path.join(root,"src/static/site.webmanifest"),path.join(dist,"site.webmanifest"));
const browserContent=path.join(dist,"assets/content"),browserLib=path.join(dist,"assets/lib");await mkdir(browserContent,{recursive:true});await mkdir(browserLib,{recursive:true});
for(const file of ["categories.mjs","packs.mjs","questions.mjs"])await cp(path.join(root,"src/content",file),path.join(browserContent,file));
for(const file of ["text-core.mjs","quiz-core.mjs","progress-core.mjs"])await cp(path.join(root,"src/lib",file),path.join(browserLib,file));
const versionSource=await Promise.all(["src/content/questions.mjs","src/static/assets/site.css","src/static/assets/site.js","src/static/sw.js"].map(f=>readFile(path.join(root,f))));
const version=`codeclarity-${createHash("sha256").update(Buffer.concat(versionSource)).digest("hex").slice(0,12)}`;
const sw=(await readFile(path.join(root,"src/static/sw.js"),"utf8")).replace("__CACHE_VERSION__",version);await put("sw.js",sw);
const robots=publicIndexing?`User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`:`User-agent: *\nDisallow: /\n`;
await put("robots.txt",robots);
const urls=publicIndexing?routes.filter(r=>r.robots==="public"&&r.path!=="/404/").map(r=>`  <url><loc>${siteUrl}${r.path}</loc></url>`).join("\n"):"";
await put("sitemap.xml",`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
await put(".well-known/security.txt",`Contact: https://github.com/princeinoba/bootcamp-homework4/security/advisories/new\nPreferred-Languages: en\nCanonical: ${siteUrl?siteUrl:"https://example.invalid"}/.well-known/security.txt\nPolicy: ${siteUrl?siteUrl:"https://example.invalid"}/security\n`);
const files=[];async function walk(dir){for(const e of await (await import("node:fs/promises")).readdir(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())await walk(p);else files.push(path.relative(dist,p).replaceAll(path.sep,"/"))}}await walk(dist);files.sort();
await put("build-manifest.json",JSON.stringify({product:"CodeClarity AI",canonicalRoutes:routes.map(r=>r.path),physicalFiles:files,cacheVersion:version,publicIndexing},null,2));
console.log(`Built ${routes.length} canonical documents and ${files.length+1} files.`);
