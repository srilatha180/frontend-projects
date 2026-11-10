let billAmt=document.getElementById("billAmt");
let tipAmt=document.getElementById("tipAmt");
let myBtn=document.getElementById("myBtn");
let res=document.getElementById("res");
myBtn.addEventListener("click",function(){
    let billAmt=Number(document.getElementById("billAmt").value);
    let tipAmt=Number(document.getElementById("tipAmt").value); 
    
    let total=0;
    total=billAmt+(tipAmt*billAmt)/100;
    res.textContent="total amount is"+" "+ total;

})