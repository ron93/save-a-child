$(document).foundation()
var show = document.getElementById("slider");

//image array
var pics = ["url('../img/aids.jpeg')", "url('../img/hope.jpeg')", "url('../img/hunger.jpeg')", "url('../img/thanks.jpeg')"

var counter = 0;

function slider() {
    
  
    show.style.backgroundImage = pics[counter];
    counter++;
    //counter reset
    if (counter >= pics.length) {
        counter = 0;
    }
   
}
//interval
setInterval(slider, 3000);