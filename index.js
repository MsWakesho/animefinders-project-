/*

DOM Manipulation is basically the adding and removing of Html elements using Jac

const body = document.body
const div = document.createElement("div")

div.innerText = "Hello World" (better alternative)
div.textContent = "Hello"

body.append(div)

---------------------------------------------
This prints it on the DOM

const div = document.querySelector("div")

console.log( div.textContent)
console.log(div.innerText)


------------------------------------
This helps writing html code in js:

const body = document.body
const div = document.createElement("div")
div.innerHTML = "<strong>Hello World 2</strong>"

----------------------------------------------
A Stronger way of making sure it is secure:


const body = document.body
const div = document.createElement("div")
const strong = document.createElement("strong")
strong.innerText = "Hello World"

div.append(strong)

body.append(div)

----------------------------------------
To add elements to the DOM  and website:

const body = document.body 
const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector(#bye)

spanBye.remove()       (This will remove it from the DOM and website)
div.apppend(spanBye)    (This will add it right back.)

--------------------
To print the lements on the code using their id

console.log(spanHi.title)/ console.log(spanHi.getAttribute())


title is the id of the element.


------------------------------- 
 In order to change the id of an attribute we use:

 console.log(spanHi.setAttribute("id", "fggg"))

 This will change the id  

 -----------------------------
 How to remove attributes of elements:

 spanHi.removeAttribute("title")



 ---------------------------------

Dataset

HTML ILLUSTRATION:

With dataset we can tweak the properties of an element as welll as set the properties of an element.

-How to print it out on the Console:
<span id="hi" data-test= "this is a test data-longer-name="ghhhhhhh">Hello</span>
<span id = "bye">Bye</span>

JS ILLUSTRATION:

console.log(spanHi.dataset.test)
console.log(spanHi.dataset.longerName)


How to set new properties:

spanHi.dataset.newName = "hi"

------------------------------------------------------

How to add and modify classes

Adding A new class:
spanHi.classList.add(new-class)

Removing A Class:
spanHi.classList.remove("new-class")

NB: Toggle can remove the class when it already exists or add the class if it doesn't exist

spanHi.classList.toggle("new-class", true)

This would automatically add the class

spanHi.classList.toggle("new-class", false)

This would automatically remove the class

 -------------------------------

 Modifying the Style property of an element :

 spanHi.style.backgroundColor="red"

*/



