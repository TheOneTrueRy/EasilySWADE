import{A as e,B as r,G as i}from"./index-btuYbHwl.js";class p{async getProfiles(){e.profiles=[];const a=await r.get("api/profiles");e.profiles=a.data.map(s=>new i(s))}async getProfileById(a){e.profile=null;const s=await r.get("api/profiles/"+a);e.profile=new i(s.data)}async searchProfiles(a){e.profiles=[];const s=await r.get("api/profiles",{params:{name:a.query}});e.profiles=s.data.map(o=>new i(o))}}const f=new p;export{f as p};