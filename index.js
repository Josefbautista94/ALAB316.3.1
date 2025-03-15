// Menu data structure
let menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
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
subMenuEl.classList.add("flex-around")
subMenuEl.style.position = "absolute"
subMenuEl.style.top = "0" // hides the subMenu

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


//Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
let topMenuLinks = document.querySelectorAll("#top-menu a") // selects all ellements that match a css selector unlike query selector that only selects the first match
// querySelectorAll returns a NodeList aka a collection of Elements
//#top-menu finds the element with the id = "top-menu"
//a selects all <a> elements links inside of #top-menu 

// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click", function (event) { // listening for any clicks in the topMenuEl, whem any element inside of the topMenuEl is clicked the functon runs
    event.preventDefault();  // Prevents default link behavior, we do this so you can handle the menu interaction yourself (highlighting, showing submenus, etc.), The browser does not navigate away

    //The second line of code of the function should immediately return if the element clicked was not an <a> element.
    if (!event.target.matches('a')) { //event.target represents the exact element that was clicked, .matches(a) checks if the clicked element was an anchor tag <a>
        return; //This check makes sure the event only runs for actual menu links
    }
    console.log(event.target.textContent) // it works!

    topMenuLinks.forEach(link => link.classList.remove("active")); // Before adding "active" to the clicked link, remove it from all links to prevent multiple highlights!

    let clickedOn = event.target // makes life easier
    clickedOn.classList.add("active"); // Adds "active" class to what ever link is being clicked on

    let linkData = menuLinks.find(link => link.text === clickedOn.textContent) // using .find to loop through each item in the array of items if link.text matches what was clicked on it returns that object


    if (linkData && linkData.subLinks) {//If the clicked anchor or item i mean has sub links show the sub menu!
        subMenuEl.style.top = "100%"; // put top to 100 %
        buildSubmenu(linkData.subLinks);

    } else {
        subMenuEl.style.top = "0"; // we'll hide the submenu if no sublinks exist, we'll but the top back to 0
    }

if(clickedOn.textContent=== "about"){
    mainEl.innerHTML = `<h1>${clickedOn.textContent}</h1>`;
    subMenuEl.style.top = 0;
}
})

function buildSubmenu(subLinks) {

    subMenuEl.innerHTML = "";

    subLinks.forEach(link => {
        let a = document.createElement('a') // we're creating new anchor elements
        a.setAttribute("href", link.href);  // setting Href
        a.textContent = link.text; //setting link to text
        subMenuEl.appendChild(a); // appending Link to subMenu
    })

}
// basically repeating the process from before
subMenuEl.addEventListener("click", function (event) { 
    event.preventDefault(); // Just like before for the top menu

    if (!event.target.matches("a")) return; // Ignore non-links

    console.log("Submenu item clicked:", event.target.textContent); // yay

    subMenuEl.style.top = "0"; // Hides submenu

    topMenuLinks.forEach(link => link.classList.remove("active")); // Remove active from main menu

    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`; // Update mainEL html content <h1>
})