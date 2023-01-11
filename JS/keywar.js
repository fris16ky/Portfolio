//Importing div container for the contact info
var scroller = document.getElementById("contact_info");

//Import button
const contact_btn = document.querySelector(".contact_btn button");

//Displaying the dropdown for Contact Info when "Contact Me" is clicked
contact_btn.addEventListener("click", (e) => {
  if (document.getElementById("contact_info").className == "hide") {
    document.getElementById("contact_info").className = "show";
    //When the new content is displayed, scroll down into view automatically
    scroller.scrollIntoView();
  } else {
    //The class name is "Show"
    //We'll allow the user to hide it by pressing twice
    document.getElementById("contact_info").className = "hide";
  }
});

//JavaScript for the Gif Slideshow
var one = document.getElementById("caption1");
var two = document.getElementById("caption2");
var three = document.getElementById("caption3");
var four = document.getElementById("caption4");
var five = document.getElementById("caption5");
var six = document.getElementById("caption6");
var seven = document.getElementById("caption7");

//Setting the slideIndex to the beginning and showing the Divs for the first slide
var slideIndex = 1;
showDivs(slideIndex);

//Increment or Decrement slides
function plusDivs(n) {
  showDivs((slideIndex += n));
}

//Changing the starting volume for the audio file
var vid = document.getElementById("hard_music");
vid.volume = 0.4;

//Importing the final two gif images
const gif_atk = document.getElementById("attack");
const gif_ded = document.getElementById("defeat");

//If the user clicks the left arrow
function webbackward(n) {
  plusDivs(-1);

  //Resetting the Attack and Defeated gif animations every time you click previous
  gif_atk.src = gif_atk.getAttribute("src");
  gif_ded.src = gif_ded.getAttribute("src");

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
  if (slideIndex != 6) {
    six.style.display = "none";
  }
  if (slideIndex != 7) {
    seven.style.display = "none";
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
  } else if (slideIndex == 6) {
    six.style.display = "block";
  } else if (slideIndex == 7) {
    seven.style.display = "block";
  }
}

//If the user clicks the right arrow
function webforward(n) {
  //Adding one to the sldies to move to the next image/gif
  plusDivs(+1);

  //Resetting the Attack and Defeated gif animations every time you click next/forward
  gif_atk.src = gif_atk.getAttribute("src");
  gif_ded.src = gif_ded.getAttribute("src");

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
  if (slideIndex != 6) {
    six.style.display = "none";
  }
  if (slideIndex != 7) {
    seven.style.display = "none";
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
  } else if (slideIndex == 6) {
    six.style.display = "block";
  } else if (slideIndex == 7) {
    seven.style.display = "block";
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
