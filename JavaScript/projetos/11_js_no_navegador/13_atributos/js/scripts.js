let a = document.querySelector("footer a");

console.log(a.getAttribute("href"));

let link = "https://www.github.com/WesleyFerreir4";

a.setAttribute("href", link);

console.log(a.getAttribute("href"));