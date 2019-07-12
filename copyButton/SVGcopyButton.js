let copyButton = document.getElementById("copy-button");

copyButton.addEventListener("click", () => {
    fallbackCopyTextToClipboard(); 
});

let buttonPosition = () => {
  document.getElementById("copy-button").style.right = "100px";
}

// THIS ENTIRE SECTION NEEDS TO CHANGE FOR COPYING AN SVG
// change parameters from type "text" to type "SVG" [OR] "img"?
let fallbackCopyTextToClipboard = (text) => {
    let textArea = document.createElement("text-area");
    document.body.appendChild(textArea);
    textArea.focus();
    document.getElementById("text-area").select();

    try {
        let successful = document.execCommand("copy");
        let msg = successful ? "successful" : "unsuccessful";
        console.log("Copying text command was " + msg);
    }   

    catch (err) {
        console.error("Something went wrong, unable to copy", err);
        document.body.removeChild(textArea);
    }
}

let copyTextToClipboard = (text) => {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }

    navigator.clipboard.writeText(text).then(() => {
        console.log("Copying to clipboard was successful!");
    }, function(err) {
        console.error("Could not copy text: ", err);
    });
}

