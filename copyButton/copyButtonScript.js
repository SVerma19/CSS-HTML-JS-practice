// for the actual copy button
let copyButton = document.getElementById("copy-button");

copyButton.addEventListener("click", () => {
    fallbackCopyTextToClipboard(); 
});

let buttonPosition = () => {
  document.getElementById("copy-button").style.right = "100px";
}

// different syntax to write a function
let fallbackCopyTextToClipboard = (text) => {
     // creates HTML element, "textarea", and sets it equal to text
    let textArea = document.createElement("text-area");
    // appends a node as the last child of a node?
    document.body.appendChild(textArea);
    // gives focus to an element. necessary before selection range will work
    textArea.focus();
    // selects the contents of a field
    document.getElementById("text-area").select();
    // sets the range of the element being copied
    // textArea.setSelectionRange(0, textArea.value.length);

    // the try and catch statement come as a pair
    // the try statement allows you to define a black of code to be tested for errors while it is being executed
    try {
        // .execCommand() method can be used to interact with clipboard and specify a certain command
        let successful = document.execCommand("copy");
        // way to write conditional statement. has the form --> condition ? value-if-true : value-if-false. ? = then; : = else
        let msg = successful ? "successful" : "unsuccessful";
        console.log("Copying text command was " + msg);
    }   
    // the catch statement allows you to define a block of code to be executed, if an error occurs in the try block
    catch (err) {
        // outputs an error message to the web console 
        console.error("Something went wrong, unable to copy", err);
        // method removes a specified child node of the specified element?
        document.body.removeChild(textArea);
    }
}

// copies the text to the clipboard. THIS THE FUNCTION TO REFRENCE WITH THE BUTTON (because it refrences the other function)
let copyTextToClipboard = (text) => {
    // if the "navigator" does not copy text to the clipboard...
    if (!navigator.clipboard) {
        // return what is coded in the fallback function
        fallbackCopyTextToClipboard(text);
        return;
    }

    // navigator object contains information about the browser. the clipboard interface's writeText() property writes the specified text string to the system clipboard
    // then is calls a function with asynchronous execution. determines whether or not the text was copied to the clipboard and informs the user
    navigator.clipboard.writeText(text).then(() => {
        console.log("Copying to clipboard was successful!");
        // determines if there is an error or not and outputs the error message, if so (similar to catch(err))
    }, function(err) {
        console.error("Could not copy text: ", err);
    });
}


let optionOneButton = document.getElementById("TR-button");

optionOneButton.addEventListener("click", () => {
    Option1();
});

let Option1 = () => {
  var text = document.getElementById("blank");
  // the element property innerHTML gets or sets the HTML/XML markup contained within the element
  if (text.innerHTML === " ") {
    text.innerHTML = "Toronto Raptors";
  } else {
    text.innerHTML = " ";
  }
}


let optionTwoButton = document.getElementById("GSW-button");

document.getElementById("GSW-button").style.left = "80px";

optionTwoButton.addEventListener("click", () => {
    Option2();
});


// ALLOWING THE USER TO RESIZE AN ELEMENT MANUALLY w/ VANILLA JAVASCRIPT.. can do it much easier with libraries like jQuery
let Option2 = () => {
  var text = document.getElementById("blank");
  // the element property innerHTML gets or sets the HTML/XML markup contained within the element
  if (text.innerHTML === " ") {
    text.innerHTML = "Golden State Warriors";
  } else {
    text.innerHTML = " ";
  }
}





/* code for dropdown (NOT WORKING)
let dropdownButton = document.getElementsByClassName("dropbtn");

dropdownButton.addEventListener("click", () => {
    Dropdown();
});

let Dropdown = (event) => {
    // decides if the dropdown shows the content if the user clicks on it
    document.getElementClassName("dropdown").classList.toggle("show");
    // the target property of the event interface is a reference to the object that dispatched the event
    // matches() method checks to see if the element would be selected by the provided selectorString — 
    // in other words — checks if the element "is" the selector
    if (event.target.matches("dropbtn")) { 
        var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i]; 
                        // checks if an element contains a class 
                    if (openDropdown.classList.contains("show")) {
                        // removes an element from a class
                       (openDropdown.classList.remove("show"));
                    }
            }
    }   
}
*/

// taken out of code before "if" statement
// this is in order to cose the dropdown if the user clicks outside of it
// window.onclick = (event) => {

// code for a <select> dropdown menu. not a button
/*
    jumpto = (x) => {
        if (document.form1.jumpmenu.value != "null") {
            document.location.href = x
        }
    }
*/






































