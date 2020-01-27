/* Given Code, don't edit */

function handleClick(e) {
  //1 Get the time that was entered in the form
  const timeString = document.getElementById('time').value;

                //2. Run greet() using time string from
                // 1 above.  This will give me the
                // greeting I want

  //#3. Now run display message and update the node.              
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let splitTime = time.split(':');
  let hour = parseInt(splitTime[0])
  if (hour > 18) {
    return "Good Evening"
  } else if (hour >12) {
    return "Good Afternoon"
  } else {
    return "Good Morning"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(str) {
  document.querySelector("#greeting").innerText = str;
}