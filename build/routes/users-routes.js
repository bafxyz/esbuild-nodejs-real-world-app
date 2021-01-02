var y=Object.create,r=Object.defineProperty,l=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,h=Object.getOwnPropertyNames,R=Object.getOwnPropertyDescriptor,p=e=>r(e,"__esModule",{value:!0}),N=(e,t)=>{p(e);for(var o in t)r(e,o,{get:t[o],enumerable:!0})},w=(e,t,o)=>{if(p(e),t&&typeof t=="object"||typeof t=="function")for(let s of h(t))!c.call(e,s)&&s!=="default"&&r(e,s,{get:()=>t[s],enumerable:!(o=R(t,s))||o.enumerable});return e},a=e=>e&&e.__esModule?e:w(r(e!=null?y(l(e)):{},"default",{value:e,enumerable:!0}),e);N(exports,{UsersRoutes:()=>g});var f=a(require("express")),m=a(require("passport")),i=a(require("../database/models/user.model")),d=a(require("../utils/authentication"));const n=f.Router();n.get("/user",d.authentication.required,(e,t,o)=>{i.User.findById(e.payload.id).then(s=>{t.status(200).json({user:s.toAuthJSON()})}).catch(o)}),n.put("/user",d.authentication.required,(e,t,o)=>{i.User.findById(e.payload.id).then(s=>s?(typeof e.body.user.email!="undefined"&&(s.email=e.body.user.email),typeof e.body.user.username!="undefined"&&(s.username=e.body.user.username),typeof e.body.user.password!="undefined"&&s.setPassword(e.body.user.password),typeof e.body.user.image!="undefined"&&(s.image=e.body.user.image),typeof e.body.user.bio!="undefined"&&(s.bio=e.body.user.bio),s.save().then(()=>t.json({user:s.toAuthJSON()}))):t.sendStatus(401)).catch(o)}),n.post("/users",(e,t,o)=>{const s=new i.User;return s.username=e.body.user.username,s.email=e.body.user.email,s.setPassword(e.body.user.password),s.bio="",s.image="",s.save().then(()=>t.json({user:s.toAuthJSON()})).catch(o)}),n.post("/users/login",(e,t,o)=>{if(!e.body.user.email)return t.status(422).json({errors:{email:"Can't be blank"}});if(!e.body.user.password)return t.status(422).json({errors:{password:"Can't be blank"}});m.default.authenticate("local",{session:!1},(s,u,b)=>s?o(s):u?(u.token=u.generateJWT(),t.json({user:u.toAuthJSON()})):t.status(422).json(b))(e,t,o)});const g=n;