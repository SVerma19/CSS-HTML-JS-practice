let solidButton = document.getElementById("solid-button");

solidButton.addEventListener("click", () => {
    Option1();
});

let Option1 = () => {
  var text = document.getElementById("blank");
  // the element property innerHTML gets or sets the HTML/XML markup contained within the element
  if (text.innerHTML === " ") {
    text.innerHTML = "fas";
  } else {
    text.innerHTML = " ";
  }
}


let lightButton = document.getElementById("light-button");

document.getElementById("light-button").style.left = "80px";

lightButton.addEventListener("click", () => {
    Option2();
});


// ALLOWING THE USER TO RESIZE AN ELEMENT MANUALLY w/ VANILLA JAVASCRIPT.. can do it much easier with libraries like jQuery
let Option2 = () => {
  var text = document.getElementById("blank");
  // the element property innerHTML gets or sets the HTML/XML markup contained within the element
  if (text.innerHTML === " ") {
    text.innerHTML = "fal";
  } else {
    text.innerHTML = " ";
  }
}


let regularButton = document.getElementById("regular-button");

document.getElementById("regular-button").style.left = "160px";

regularButton.addEventListener("click", () => {
    Option2();
});


// ALLOWING THE USER TO RESIZE AN ELEMENT MANUALLY w/ VANILLA JAVASCRIPT.. can do it much easier with libraries like jQuery
let Option3 = () => {
  var text = document.getElementById("blank");
  // the element property innerHTML gets or sets the HTML/XML markup contained within the element
  if (text.innerHTML === " ") {
    text.innerHTML = "far";
  } else {
    text.innerHTML = " ";
  }
}