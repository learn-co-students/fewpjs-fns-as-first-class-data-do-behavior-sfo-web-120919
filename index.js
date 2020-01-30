/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  const splitString = string.split(':')
  const hour = splitString[0]
  const hourInt = parseInt(hour)
  if (hourInt < 12) {
    return "Good Morning"
  } else if (hourInt >= 12 && hourInt < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(string){
  const greetBox = document.getElementById('greeting');
  greetBox.innerText = string;
}




// - If the time is earlier than 12pm, return "Good Morning".
// - If the time is between 12pm and 5pm, return "Good Afternoon".
// - If the time is later than 5pm, return "Good Evening".