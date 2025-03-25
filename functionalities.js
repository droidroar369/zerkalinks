//Prevents a default click
function prev_default(e) {
  e.preventDefault();
  alert("This page currenlty does not exist!!!");
}



//Copy the text of the element clicked
function copy_text(e) { //e=event
  e.preventDefault(); //Prevent link redirection
  var el= e.target; //Element that dispatched the click
  el= (el.tagName=="a")? el:el.parentNode;
  
  el.style.pointerEvents= "none"; //Do the link button unclickable
  
  //Copy to clipboard
  navigator.clipboard.writeText(el.innerText);
  
  //Create a sign to tell the user the text was copied
  var sign= document.createElement("span");
  sign.classList.add("copy-sign");
  sign.innerText= "Copied!";
  el.appendChild(sign);
  
  //After 2 seconds, remove the "Clicked" sign and do the link button clickable again
  setTimeout(()=> {
    el.removeChild(sign);
    el.style.pointerEvents= "auto";
  }, 2000);
}

