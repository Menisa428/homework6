let cartCount=0;
function addToCart(){
    cartCount++;
    const CartIcon=document.getElementsByClassName("shop-button");
      if(cartCount>=9){
        CartIcon.style.backgroundColor="red";
      }
      CartIcon.textContent=cartCount;
}

const liste=document.getElementsByClassName("eklebutonu");
console.log(liste);
const listem= Array.from(liste);
listem.forEach((element) => {
    element.addEventListener("click",addToCart);


});

for(let i=0;i<listem.length;i++){
    listem[i].addEventListener("click",addToCart)
}