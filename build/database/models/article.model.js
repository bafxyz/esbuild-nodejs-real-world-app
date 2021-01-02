var p=Object.create,n=Object.defineProperty,m=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty,h=Object.getOwnPropertyNames,y=Object.getOwnPropertyDescriptor,l=t=>n(t,"__esModule",{value:!0}),g=(t,i)=>{l(t);for(var r in i)n(t,r,{get:i[r],enumerable:!0})},A=(t,i,r)=>{if(l(t),i&&typeof i=="object"||typeof i=="function")for(let s of h(i))!f.call(t,s)&&s!=="default"&&n(t,s,{get:()=>i[s],enumerable:!(r=y(i,s))||r.enumerable});return t},a=t=>t&&t.__esModule?t:A(n(t!=null?p(m(t)):{},"default",{value:t,enumerable:!0}),t);g(exports,{Article:()=>v});var e=a(require("mongoose")),u=a(require("mongoose-unique-validator")),d=a(require("slugify")),c=a(require("./user.model"));const o=new e.Schema({slug:{type:e.Schema.Types.String,lowercase:!0,unique:!0},title:{type:e.Schema.Types.String},description:{type:e.Schema.Types.String},body:{type:e.Schema.Types.String},tagList:[{type:e.Schema.Types.String}],favoritesCount:{type:e.Schema.Types.Number,default:0},author:{type:e.Schema.Types.ObjectId,ref:"User"},comments:[{type:e.Schema.Types.ObjectId,ref:"Comment"}]},{timestamps:!0});o.methods.slugify=function(){this.slug=d.default(this.title)+"-"+(Math.random()*Math.pow(36,6)|0).toString(36)},o.plugin(u.default,{message:"is already taken"}),o.pre("validate",function(t){this.slug||this.slugify(),t()}),o.methods.updateFavoriteCount=function(){const t=this;return c.User.count({favorites:{$in:[t._id]}}).then(function(i){return t.favoritesCount=i,t.save()})},o.methods.toJSONFor=function(t){return{slug:this.slug,title:this.title,description:this.description,body:this.body,createdAt:this.createdAt,updatedAt:this.updatedAt,tagList:this.tagList,favorited:t?t.isFavorite(this._id):!1,favoritesCount:this.favoritesCount,author:this.author.toProfileJSONFor(t)}};const v=e.model("Article",o);
