import{_ as r,r as d,w as m,C as f,P as b,o as u,c as p,f as t,g as n,v as c,m as _,A as l}from"./index-btuYbHwl.js";const v={setup(){const a=d({});return m(()=>{l.account.id&&(a.value={...l.account})}),{editable:a,async editAccount(e){try{const i=e.target.fileInput.files[0],o=a.value;await f.editAccount(i,o)}catch(i){b.error("Experienced an error attempting to edit your account.",i.message)}}}}},x={class:"row"},h=t("div",{class:"col-12 d-flex justify-content-between align-items-center mb-4"},[t("span",{class:"fs-3"}," Edit Your Profile "),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close Modal"})],-1),y={class:"col-12 mb-3"},g=t("label",{for:"name",class:"form-label mb-0"},"Name",-1),w=t("div",{class:"col-12 mb-3"},[t("label",{for:"picture",class:"form-label mb-0"},"Profile Picture"),t("input",{type:"file",id:"picture",name:"fileInput",class:"form-control"})],-1),A={class:"col-12 mb-4"},P=t("label",{for:"description",class:"form-label mb-0"},"Description",-1),E=t("div",{class:"col-12 text-end"},[t("button",{type:"submit",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Save Changes ")],-1);function S(a,e,i,o,B,C){return u(),p("form",{class:"container-fluid",onSubmit:e[2]||(e[2]=_((...s)=>o.editAccount&&o.editAccount(...s),["prevent"]))},[t("div",x,[h,t("div",y,[g,n(t("input",{type:"text",id:"name","onUpdate:modelValue":e[0]||(e[0]=s=>o.editable.name=s),required:"",class:"form-control",maxlength:"200"},null,512),[[c,o.editable.name]])]),w,t("div",A,[P,n(t("textarea",{type:"text",id:"description","onUpdate:modelValue":e[1]||(e[1]=s=>o.editable.description=s),class:"form-control",maxlength:"1750"},`\r
        `,512),[[c,o.editable.description]])]),E])],32)}const M=r(v,[["render",S]]);export{M as default};