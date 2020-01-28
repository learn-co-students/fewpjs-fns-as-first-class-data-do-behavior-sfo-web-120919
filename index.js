/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(string) {
  var array = string.split(":");
  var num = parseInt(array[0])
  if (num < 12) {
    return "Good Morning";
  } else if (num > 12 && num < 17)  { 
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
    
}

function displayMessage(string) {
  var greeting = document.getElementById("greeting");
  greeting.innerText = string
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
