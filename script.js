
// let's declare a variable that will hold a text that will be put into to the section
// 1 - Select the section with an id of container without using querySelector.
const selectSection= document.getElementById("container")
selectSection.innerHTML="I have selected a whole section"

// 2 - Select the section with an id of container using querySelector.
const selectSectionUsingQuery= document.querySelector("#container");
selectSectionUsingQuery.innerHTML= "I have selected a whole section using QuerySelector"

// 3 - Select all of the list items with a class of "second".
// 2 - Select the section with an id of container using querySelector.
let selectList= document.getElementsByClassName('second');
selectList.innerHTML= "select all with class second"

for(let i=0; i<2;i++){
    selectList= document.getElementsByClassName('second')[i];
    selectList.innerHTML= "select all with class second"

}


//4 - Select a list item with a class of third, but only the list item inside of the ol tag.

let selectList= document.getElementsByClassName('third')[1];
selectList.innerHTML= "I have selected a list item in the ol tag"



//5 - Give the section with an id of container the text "Hello!".
const selectSection= document.getElementById("container")
selectSection.innerHTML="Hello!"



//6 - Add the class main to the div with a class of footer.
// the html file has a class footer with <h1>who got the best team?</h1>
// so we will change it by using our new class called main
// the div will have 2 classes: main and footer
var element = document.querySelector(".footer");
element.classList.add("main");
element = document.querySelector(".main");
element.innerHTML="We have the best team"


//7 - Remove the class main on the div with a class of footer.
// we will only have the class footer for the div. class main will be removed
const divRemove = document .querySelector ( 'div' ); 
divRemove.classList.remove ( 'main' );



// 8 - Create a new li element.
// we will add a new list item to our list
// specifically the ordered list with id add
var ol = document.getElementById("add");
var li = document.createElement("li");
li.appendChild(document.createTextNode("Four"));
ol.appendChild(li);


//9 - Give the li the text "four".
var ol = document.getElementById("add");
var li = document.createElement("li");
li.appendChild(document.createTextNode("four"));
ol.appendChild(li);



//10 - Append the li to the ul element.
// we will use the method appendChild() to append the li to the ul
var ul = document.getElementById("add_more");
var li = document.createElement("li");
li.appendChild(document.createTextNode("four"));
ul.appendChild(li);



//12 - Loop over all of the lis inside the ol tag and give them a background color of "green".
//Select all the list items using querySelectorAll and put into an array first
//iterate the array and give a backgroundcolor to every single list item
const orderedListIteration = document.querySelectorAll("ol li"); 

for(let i = 0 ; i < orderedListIteration.length; i++){ 

    orderedListIteration[i].style.backgroundColor = "green";
}



//13 - Remove the div with a class of footer.
// first select the div using querySelector and its class name 
// then remove it using the remove() method.
const remov = document.querySelector(".footer");
console.log(remov.remove());