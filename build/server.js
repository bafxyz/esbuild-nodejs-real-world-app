var l=Object.create,i=Object.defineProperty,m=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty,u=Object.getOwnPropertyNames,P=Object.getOwnPropertyDescriptor,a=r=>i(r,"__esModule",{value:!0}),c=(r,o,s)=>{if(a(r),o&&typeof o=="object"||typeof o=="function")for(let e of u(o))!f.call(r,e)&&e!=="default"&&i(r,e,{get:()=>o[e],enumerable:!(s=P(o,e))||s.enumerable});return r},p=r=>r&&r.__esModule?r:c(i(r!=null?l(m(r)):{},"default",{value:r,enumerable:!0}),r);var g=p(require("./app")),t=p(require("./utils/logger")),n=p(require("./utils/secrets"));g.default.listen(n.APP_PORT,()=>{t.default.info(`server running on port : ${n.APP_PORT}`),console.log(`server running on port : ${n.APP_PORT}`)}).on("error",r=>t.default.error(r));