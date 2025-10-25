//your JS code here. If required.
// Get the element with id="level"
let element = document.getElementById("level");

// Initialize level counter
let level = 0;

// Traverse up the DOM tree until there are no more parent nodes
while (element) {
    level++;
    element = element.parentElement;
}

// Display the result
alert("The level of the element is: " + level);
