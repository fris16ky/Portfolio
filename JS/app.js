//Importing div container for the contact info
var scroller = document.getElementById("contact_info");

//Import button
const contact_btn = document.querySelector(".contact_btn button");

//Display info when the Contact Me button is clicked
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
