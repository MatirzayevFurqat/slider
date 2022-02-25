let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slideImgs = document.querySelector('.slide-imgs');
let startPx = 0;

next.addEventListener('click',()=>{


if(startPx == 0){
  startPx=600;
}else if(startPx != 1800){
  startPx+=600;
}else{
  startPx = 0;
}
  slideImgs.style.transform = `translateX(-${startPx}px)`;

});

prev.addEventListener('click',()=>{

if(startPx != 0){
  startPx-=600;
}else{
  startPx = 1800;
}
  slideImgs.style.transform = `translateX(-${startPx}px)`;
});
