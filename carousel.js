const slides = document.getElementsByClassName("carousel-item")
const carouselBtnNext = document.getElementById('carousel-button-next')
const carouselBtnPrev = document.getElementById('carousel-button-prev')
const list = document.querySelectorAll(".carousel li")
carouselBtnNext.addEventListener('click',moveToNextSlide )
carouselBtnPrev.addEventListener('click',moveToPrevSlide )

let slidePosition = 0
const totalSlides = slides.length

function hideAllSlides(){

    for(let slide of slides){

        slide.classList.remove("carousel-item-visible")  
        
    }
}
function moveToNextSlide(){ 
    
    hideAllSlides()

    if(slidePosition === totalSlides-1){

        slidePosition = 0
    }else{

        slidePosition++
    }

    slides[slidePosition].classList.add("carousel-item-visible")
    showCurrentIndicatior(slidePosition)
}

function moveToPrevSlide(){
    
    hideAllSlides()

    if(slidePosition=== 0 ){

      slidePosition = totalSlides -1

        
    }else{
        slidePosition--
    }

    slides[slidePosition].classList.add("carousel-item-visible")
    showCurrentIndicatior(slidePosition)
   
}


for(let i = 0; i < list.length; i ++){

    list[i].addEventListener('click',function(){

        slidePosition = i
        showCurrentIndicatior(slidePosition)
        hideAllSlides()
        slides[slidePosition].classList.add("carousel-item-visible")

    })
   

}
function showCurrentIndicatior(number){
    for(let i = 0; i < list.length; i ++){

        list[i].classList.remove("selected")
    }
    list[number].classList.add("selected")

   }

   function moveSlides(){

    
    hideAllSlides()

    if(slidePosition === totalSlides-1){

        slidePosition = 0
    }else{

        slidePosition++
    }

    slides[slidePosition].classList.add("carousel-item-visible")
    showCurrentIndicatior(slidePosition)

   }

   setInterval(moveSlides, 1500)
    

 




