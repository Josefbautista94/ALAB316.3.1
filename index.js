

// Menu data structure
let menuLinks = [
  // menu links that we're going to implement in a for loop later to put on the navbar

  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

let mainEl = document.querySelector("main"); //caching the main element into a variable named mainEl
mainEl.style.backgroundColor = "var(--main-bg)"; // setting the color for mainEL
mainEl.innerHTML = "<h1>DOM Manipulation</h1>"; // giving mainEl a h1
mainEl.classList.add("flex-ctr"); //adding a css class "flex-ctr"

let topMenuEl = document.getElementById("top-menu"); // caching  the nav and calling it topMenuEl
topMenuEl.style.height = "100%"; //giving it a height of 100%
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"; // giving it that teal bg color
topMenuEl.classList.add("flex-around"); // adding a CSS class called "flex-around" to topMenuEl

let subMenuEl = document.getElementById("sub-menu")
subMenuEl.style.height = "100%"
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
subMenuEl.classList("flex-around")
subMenuEl.style.position = "absolute"
subMenuEl.style.top ="0"
// for (let i = 0; i < menuLinks.length; i++) { //looping through menusLink
//   console.log(menuLinks[i]);
//   let a = document.createElement("a"); // creating an anchor element
//   a.setAttribute("href", menuLinks[i].href); // Retrieves the href value from the menuLinks array
//   a.textContent = menuLinks[i].text; //retriving text value from menu array
//   topMenuEl.appendChild(a); //adding the anchor elements to topMenuEl
// }

menuLinks.forEach((stuff) => {
  //decided to do it for a for each instead
  let a = document.createElement("a"); // creating the anchor tags
  a.setAttribute("href", stuff.href); // retriving the href from menuLinks array
  a.textContent = stuff.text; //retriving text value from menu array
  topMenuEl.appendChild(a); //adding the anchor elements to topMenuEl
});

