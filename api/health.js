import { handleHealth } from "../src/server/handlers.mjs";
import { writeNodeResponse } from "../src/server/http.mjs";
export default async function handler(req,res){writeNodeResponse(res,await handleHealth({method:req.method,url:req.url,headers:req.headers,env:process.env}));}
