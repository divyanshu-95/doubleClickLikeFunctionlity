const clickCount=document.querySelector('.clickCount');
const clickArea=document.querySelector('.inner-div');
let like=0;
//<i class="fa-solid fa-heart fas"></i>

const showHeart=(e)=>{
    const heart=document.createElement('i');
    heart.classList.add('fa-solid');
    heart.classList.add('fa-heart');
    clickArea.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 400);
    
}
clickArea.addEventListener('dblclick',(e)=>{
    ++clickCount.innerHTML;
    showHeart(e);
});

