const cf=document.getElementById("CF");
const fc=document.getElementById("FC");
const btn=document.getElementById("btn");
const display=document.getElementById("ans");
let num,res;
btn.onclick=function(){
if(cf.checked){
num=Number(document.getElementById("in").value);
res=(9/5)*num+32;
display.textContent=res+"◦F";

}
else if(fc.checked){
    num=Number(document.getElementById("in").value);
    res=(5/9)*(num-32);
    display.textContent=res+"◦C"
    }
    else{
        display.textContent="Please select conversion unit first"  
    }
}