const inp = document.querySelector(".inp");
const btn = document.querySelector(".btn");

btn.addEventListener('click',function(){
    const price = inp.value*4.34*0.75  
    document.querySelector(".newPrice").textContent= `${price} Shekels` 
    document.body.style.backgroundColor= 'yellow' 
    inp.value= " "
    inp.placeholder  = `תודה אוסי המיסניקית `

})