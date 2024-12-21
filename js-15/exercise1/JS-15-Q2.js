// ? Question-2:Select all spans  with the 'circle' class and write a code to change classes that have 'blue' with 'purple' and vice versa

// !Answer:
const spans=document.querySelectorAll(".circle")
for(let i=0;i<4;i++){
   if(spans[i].classList.contains("blue")){
    spans[i].classList.replace("blue","purple")
}else{
   spans[i].classList.replace("purple","blue")
}
}
