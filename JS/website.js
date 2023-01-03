//JavaScript file for my 3150 Website Project Page

var one = document.getElementById("caption1");
var two = document.getElementById("caption2");
var three = document.getElementById("caption3");
var four = document.getElementById("caption4");
var five = document.getElementById("caption5");
var beforeFive = document.getElementById("b45");

var slideIndex = 1;
showDivs(slideIndex);

//Increment or Decrement slides
function plusDivs(n) {
  showDivs((slideIndex += n));
}

function webbackward(n) {
  plusDivs(-1);
  if (slideIndex != 1) {
    //If the current slide isn't the first, don't display the first caption
    one.style.display = "none";
  }
  if (slideIndex != 2) {
    two.style.display = "none";
  }
  if (slideIndex != 3) {
    three.style.display = "none";
  }
  if (slideIndex != 4) {
    four.style.display = "none";
  }
  if (slideIndex != 5) {
    five.style.display = "none";
  }
  if (slideIndex == 1) {
    //If we're on the first slide, display the first caption
    one.style.display = "block";
  } else if (slideIndex == 2) {
    two.style.display = "block";
  } else if (slideIndex == 3) {
    three.style.display = "block";
  } else if (slideIndex == 4) {
    four.style.display = "block";
  } else if (slideIndex == 5) {
    five.style.display = "block";
    //Automatic smooth scrolling once the larger image is displayed
    beforeFive.scrollIntoView();
  }
}

function webforward(n) {
  plusDivs(+1);
  if (slideIndex != 1) {
    //If the current slide isn't the first, don't display the first caption
    one.style.display = "none";
  }
  if (slideIndex != 2) {
    two.style.display = "none";
  }
  if (slideIndex != 3) {
    three.style.display = "none";
  }
  if (slideIndex != 4) {
    four.style.display = "none";
  }
  if (slideIndex != 5) {
    five.style.display = "none";
  }
  if (slideIndex == 1) {
    //If we're on the first slide, display the first caption
    one.style.display = "block";
  } else if (slideIndex == 2) {
    two.style.display = "block";
  } else if (slideIndex == 3) {
    three.style.display = "block";
  } else if (slideIndex == 4) {
    four.style.display = "block";
  } else if (slideIndex == 5) {
    five.style.display = "block";
    //Automatic smooth scrolling once the larger image is displayed
    beforeFive.scrollIntoView();
  }
}

//Display the slideshow
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("web_slideshow");
  //If the user is at the end and still clicks next (to the right),
  //Bring them back to the beginning
  if (n > x.length) {
    slideIndex = 1;
  }
  //If the user presses back (left) with nowhere to go (slideIndex - 1 < 1)
  //Then put them at the end of the slideshow
  if (n < 1) {
    slideIndex = x.length;
  }
  //For each element with the classname of web_slideshow, don't display them
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  //Display the first element
  x[slideIndex - 1].style.display = "block";
}
