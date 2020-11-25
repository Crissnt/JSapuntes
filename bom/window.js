window.innerWidth //Inner width of the window
innerHeight
outerWidth //Outer width of the window
outerHeight

screenX
screenLeft //Distance from the window to the left corner of the screen

screenY
screenTop

scrollX
scrollY

status

event //Deprecated

fullScreen //Returns boolean

localStorage

getSelection() //Returns a Selection type object.
getSelection().toString() //Returns a string of the cursor selected text

scroll(x, y) //Scrolls the site
scroll({
    top: 1000,
    left: 0,
    behavior: "smooth"
})

scrollBy(x, y) //Scrolls the site relatively to the current position
scroll({
    top: innerHeight,
    left: 0,
    behavior: "smooth"
})

scrollTo(x, y) //Its parameters are coordinates, not pixels

stop() //Stops the page load

find(String) //Returns true if it finds the text within the page

getComputedStyle(element) //Returns the CSS properties information of an element

open(URL, windowName, settings) //Opens a window with the specified settings