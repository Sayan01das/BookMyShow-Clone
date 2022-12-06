var i =0;
var images=[];
var time = 3000;

images[0]="./Images/slide2.avif"
images[1]="./Images/image1.jpg"
images[2]= "./Images/image2.png"
images[3]= "./Images/image3.png"
images[4]= "./Images/slide1.avif"

function changeSlide(){
    document.slide.src = images [i];

    if(i< images.length -1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("changeSlide()",time);
}
window.onload=changeSlide;

function bigImg(x) {
    x.style.height ="64px";
    x.style.width ="64px";
}

function normalImg(x){
    x.style.height ="50px";
    x.style.width ="50px";
}

function biggImg(x) {
    x.style.width ="110px";
}

function normallImg(x){
    x.style.width ="100px";

}
function bigggImg(x) {
    x.style.width ="105px";
}

function normalllImg(x){
    x.style.width ="95px";
}


