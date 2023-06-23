const images=["/one-on-one.jpg","/family.jpg","/child-therapy.jpg","/drug.jpg"];
let curr=0;

function plusSlides(x){
    curr=(curr+x+4)%4;
    const img=document.querySelector(".scroll-through");
    img.src=images[curr];
    const dots=document.querySelectorAll('.dot')
    for (i = 0; i < dots.length; i++) 
        dots[i].className = dots[i].className.replace(" active", "");
        dots[curr].className += " active";
}

function currentSlide(n) {
    curr=n-1;
    const img=document.querySelector(".scroll-through");
    const dots=document.querySelectorAll('.dot')
    for (i = 0; i < dots.length; i++) 
        dots[i].className = dots[i].className.replace(" active", "");
    img.src=images[curr];
    dots[curr].className += " active";
  }

var id=setInterval(plusSlides,4000,1);
// console.log(id);

function set(){
    localStorage.setItem('minPrice',0);
    localStorage.setItem('maxPrice',15000);
    localStorage.setItem('minStars',0);
    localStorage.setItem('specific','all');
}

function opening(){
    clearInterval(1);
    let x='all';
    
    if(curr===0){
        x='Behaviour Counseling';
    }
    else if(curr==1){
        x='Marriage and Family Counseling';
    }
    else if(curr==2){
        x='Child Therapy';
    }
    else x='Addiction Therapy';
    localStorage.setItem('specific',x);
    window.open('professionals.html','_self');
    // clearInterval(1);
    // const img=document.querySelector('.scroll-through');
    // console.log(img);
    // localStorage.setItem('specific','all');
}
const btn=document.querySelector('.image');
btn.addEventListener('click',opening);
