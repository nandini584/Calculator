const text=document.getElementById("display")
var str='';
let i=0,j=0;
for(;i<16;i++){
    const type=document.getElementsByClassName("type")[i];
    type.addEventListener("click", ()=>{
    str+=type.innerHTML;
    text.innerHTML=str; 
    })
}
const notype_C=document.getElementsByClassName("notype")[0];
notype_C.addEventListener("click", ()=>{
    text.innerHTML='';
})
const notype_del=document.getElementsByClassName("notype")[2];
notype_del.addEventListener("click", ()=>{
    str=str.slice(0,str.length-1)
    text.innerHTML=str;
})
const notype_eq=document.getElementsByClassName("notype")[3];
notype_eq.addEventListener("click", ()=>{
    text.innerHTML='';
    text.innerHTML=eval(str);
})

