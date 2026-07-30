import { handleCoach } from "../src/server/handlers.mjs";
import { readRequestBody,writeNodeResponse } from "../src/server/http.mjs";
export default async function handler(req,res){let body="";try{body=await readRequestBody(req,16384)}catch(error){body=error instanceof RangeError?"x".repeat(16385):"{"}writeNodeResponse(res,await handleCoach({method:req.method,url:req.url,headers:req.headers,body,env:process.env}));}
