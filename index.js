/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

// The `greet` function should take one argument, a `String` which specifies the
// 24-hour time in the format `HH:MM`.

// - If the time is earlier than 12pm, return "Good Morning".
// - If the time is between 12pm and 5pm, return "Good Afternoon".
// - If the time is later than 5pm, return "Good Evening".

function greet(time) {
  const time_parts = time.split(":");
  const hours = parseInt(time_parts[0]);
  if (hours < 12) return "Good Morning";
  else if (hours <= 17) return "Good Afternoon";
  else return "Good Evening"; 
}

/* Write your implementation of displayMessage() */
// The `displayMessage` function should take one argument, a `String`.

// When the function runs it should update the text inside the `#greeting` node
// with the content of the first argument.

// It does not return anything.

function displayMessage(message) {
  const greetingNode = document.querySelector("#greeting");
  greetingNode.innerText = message;
}