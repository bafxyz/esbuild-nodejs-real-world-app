var g=Object.create,o=Object.defineProperty,f=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,d=Object.getOwnPropertyNames,E=Object.getOwnPropertyDescriptor,i=r=>o(r,"__esModule",{value:!0}),R=(r,e)=>{i(r);for(var t in e)o(r,t,{get:e[t],enumerable:!0})},q=(r,e,t)=>{if(i(r),e&&typeof e=="object"||typeof e=="function")for(let s of d(e))!l.call(r,s)&&s!=="default"&&o(r,s,{get:()=>e[s],enumerable:!(t=E(e,s))||t.enumerable});return r},m=r=>r&&r.__esModule?r:q(o(r!=null?g(f(r)):{},"default",{value:r,enumerable:!0}),r);R(exports,{loadErrorHandlers:()=>x});var c=m(require("./secrets")),p=m(require("./logger"));function x(r){r.use((e,t,s)=>{const n=new Error("Not Found");n.status=404,s(n)}),r.use((e,t,s,n)=>{if(e.name==="ValidationError")return s.status(422).json({errors:Object.keys(e.errors).reduce(function(a,u){return a[u]=e.errors[u].message,a},{})});p.default.error(e),s.status(e.status||500),s.json({errors:{message:e.message,error:c.IS_PRODUCTION?{}:e}})})}
