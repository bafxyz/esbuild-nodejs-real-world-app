var d=Object.create,n=Object.defineProperty,c=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,x=Object.getOwnPropertyNames,E=Object.getOwnPropertyDescriptor,f=e=>n(e,"__esModule",{value:!0}),y=(e,t)=>{f(e);for(var o in t)n(e,o,{get:t[o],enumerable:!0})},g=(e,t,o)=>{if(f(e),t&&typeof t=="object"||typeof t=="function")for(let i of x(t))!u.call(e,i)&&i!=="default"&&n(e,i,{get:()=>t[i],enumerable:!(o=E(t,i))||o.enumerable});return e},s=e=>e&&e.__esModule?e:g(n(e!=null?d(c(e)):{},"default",{value:e,enumerable:!0}),e);y(exports,{default:()=>D});var l=s(require("fs")),r=s(require("winston")),p=s(require("winston-daily-rotate-file")),a=s(require("./secrets"));let m=a.LOG_DIRECTORY;l.default.existsSync(m)||l.default.mkdirSync(m);const v=a.ENVIRONMENT==="dev"?"debug":"warn",w={file:{level:v,filename:m+"/%DATE%.log",datePattern:"YYYY-MM-DD",zippedArchive:!0,timestamp:!0,handleExceptions:!0,humanReadableUnhandledException:!0,prettyPrint:!0,json:!0,maxSize:"20m",colorize:!0,maxFiles:"14d"}};var D=r.createLogger({transports:[new r.transports.Console({stderrLevels:["info","error"],format:r.format.combine(r.format.errors({stack:!0}),r.format.prettyPrint())})],exceptionHandlers:[new p.default(w.file)],exitOnError:!1});