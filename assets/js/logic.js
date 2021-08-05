let noIndex = 1;
tampilanSlide(noIndex);

function gantiSlides(a){
    tampilanSlide(noIndex += a);
}


function tampilanSlide(m){
    let j;
    let slide = document.getElementsByClassName("containSlide");
    if(m > slide.length){noIndex = 1}
    if(m < 1){noIndex = slide.length}
    for(j = 0; j < slide.length; j++){
        slide[j].style.display ="none";

    }
    slide[noIndex - 1].style.display = "block";
}



setInterval(showTime,0);

function showTime(){
    const today = new Date();
    document.getElementById("currentTime").innerHTML = today.toLocaleTimeString(); 
}

