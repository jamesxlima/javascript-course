// DOM: Document Object Model
const view1 = document.getElementById("view1"); // Select Element by ID
console.log(view1);

// The querySelector() method returns the first element that matches a CSS selector. You must speicfy if it is a class(.) or ID(#)
const view2 = document.querySelector("#view2");
console.log(view2);

// Change the CSS property by accesing the style porperty in JavaScript
// view1.style.display = "none";
// view2.style.display = "flex";

const views = document.getElementsByClassName("view"); // By class name
console.log(views);
const sameViews = document.querySelectorAll(".view")
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "darkblue";
  evenDivs[i].style.width = "200px";
  evenDivs[i].style.height = "200px";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hey World!";
const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hey!</h1> <p>This should align right.`;