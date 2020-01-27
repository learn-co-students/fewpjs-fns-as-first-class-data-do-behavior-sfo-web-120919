/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time)
{
  let arr = time.split(":");
  if (parseInt(arr[0]) < 12)
  {
    return "Good Morning"
  }
  else
  {
    if (parseInt(arr[0]) > 17)
    {
      return "Good Evening"
    }
    else
    {
      return "Good Afternoon"
    }
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(text)
{
  let ele = document.getElementById("greeting");
  ele.innerText = text
}