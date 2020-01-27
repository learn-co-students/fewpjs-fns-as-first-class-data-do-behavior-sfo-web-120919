/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string) {
  let hour = string.split(':')
  
  if (parseInt(hour[0]) < 12) {
    return "Good Morning"
  } 
  else if (parseInt(hour[0]) >= 12 && parseInt(hour[0]) <= 17){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(string) {
  document.getElementById('greeting').innerText = string
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
