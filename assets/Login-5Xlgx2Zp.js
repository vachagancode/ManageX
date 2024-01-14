import{e as a,g as x,r as k,o as c,c as p,a as e,i as y,h as L,j as m,v as b,d,b as V,w as B,l as C,k as E}from"./index-x7KjULFv.js";import{a as h}from"./axios-kMxbiGYq.js";const N={class:"bg-black h-screen flex items-center justify-center"},P={class:"bg-black p-8 rounded-md shadow-lg w-full max-w-md"},S=e("h1",{class:"text-3xl font-extrabold text-white mb-6"}," Login ",-1),U={key:0,class:"text-white"},A=e("div",{class:"mb-4"},null,-1),D={class:"mb-4"},I=e("label",{for:"email",class:"block text-sm font-medium text-white"}," Email Address ",-1),M={class:"mb-4"},j=e("label",{for:"password",class:"block text-sm font-medium text-white"}," Password (8-32 symbols) ",-1),T=e("button",{class:"disabled:bg-blue-950 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-700",type:"submit"}," Login ",-1),W={class:"text-sm text-white mt-4"},$={__name:"Login",setup(H){const l=a([]),r=a(""),t=a(""),i=a(!1),u=a(!0),g=E,f=async()=>{try{const{data:s}=await h.get("https://manage-x-backend.onrender.com/api/users/get_users/");l.value=s.map(o=>({...o})),console.log(l.value)}catch(s){console.log(s)}console.log("Yo")},w=async()=>{try{for(const s of l.value)if(s.email===r.value&&s.password===t.value){console.log("Logged Successfully"),await g.push("/dashboard"),await h.put(`https://manage-x-backend.onrender.com/api/users/put_users/${s.id}/`,{isLoggedIn:!0}),await C(),localStorage.setItem("email",s.email);break}else i.value=!0,location.reload()}catch(s){console.log(s)}},_=()=>{t.value.length<=32&&t.value.length>=8?(u.value=!1,console.log("Password is okay")):u.value=!0};return x(()=>f()),(s,o)=>{const v=k("router-link");return c(),p("div",N,[e("div",P,[e("form",{class:"flex flex-col",onSubmit:y(w,["prevent"])},[S,i.value?(c(),p("p",U,"Password is Wrong")):L("",!0),A,e("div",D,[I,m(e("input",{type:"email",id:"email",name:"email",class:"w-full p-2 border-2 border-purple-500 bg-black text-white rounded-md focus:outline-none focus:border-purple-700",placeholder:"Enter your email address","onUpdate:modelValue":o[0]||(o[0]=n=>r.value=n)},null,512),[[b,r.value]])]),e("div",M,[j,m(e("input",{type:"password",id:"password",class:"w-full p-2 border-2 border-purple-500 bg-black text-white rounded-md focus:outline-none focus:border-purple-700",placeholder:"Enter your password","onUpdate:modelValue":o[1]||(o[1]=n=>t.value=n),onInput:o[2]||(o[2]=()=>_())},null,544),[[b,t.value]])]),T,e("p",W,[d(" Don't Have an Account "),V(v,{to:"/register",class:"underline"},{default:B(()=>[d("Register here")]),_:1}),d(". ")])],32)])])}}};export{$ as default};
