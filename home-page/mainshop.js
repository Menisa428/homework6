const btnAdd=document.getElementsByClassName("button");
const card=document.getElementsByClassName("product");
for( let i=0;i< card.length;i++){
    btnAdd[i].addEventListener("click",function(e){
        console.log(btnAdd[i]);
        




        e.preventDefault();
    })
}