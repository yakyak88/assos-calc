const inp = document.querySelector(".inp");
const btn = document.querySelector(".btn");

btn.addEventListener('click',function(){
    const price = inp.value*4.32*0.80 
    document.querySelector(".newPrice").textContent= `${price} Shekels` 
    document.body.style.backgroundColor= 'yellow' 
    inp.value= " "
    inp.placeholder  = `תודה אוסי המיסניקית `

})
