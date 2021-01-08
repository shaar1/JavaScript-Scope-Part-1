/* global console, alert, prompt*/


/*
var myName = "Abdallah"; //Global Scope

function myNameFunc(){

"use strict"

var myName = "Abdallah"
}
console.log(myName);
*/


/*
var myName = "Abdallah"; //Global Scope

function myNameFunc(){

"use strict"

var myName = "Anton"
}
console.log(myName);
*/
/*
var myName = "Abdallah"; //Global Scope

var myName = "Anton"

function myNameFunc(){

"use strict"

}
console.log(myName);
*/

/*
var myName = "Abdallah"; //Global Scope

var myName = "Anton"

var myName = "Hassan"


function myNameFunc(){

"use strict"

}
console.log(myName);


*/
/*
var myName = "Abdallah"; //Global Scope


function myNameFunc() {

"use strict"

var myName = "Anton" // Local Scope

}
console.log(myName);

*/
/*
//var myName = "Abdallah"; //Global Scope


function myNameFunc() {

"use strict"

var myName = "Anton" // Local Scope

}
*/

//var myName = "Abdallah"; //Global Scope

/*
function myNameFunc() {

    "use strict"

    var myName = "Anton" // Local Scope

    console.log(myName);

}
myNameFunc();
*/
/*
var myName = "Abdallah"; //Global Scope

console.log(myName);

function myNameFunc() {

    "use strict"

    var myName = "Anton" // Local Scope


}
myNameFunc();
*/
/*
var myName = "Abdallah"; //Global Scope

console.log(myName); //1

function myNameFunc() {

    "use strict"

    var myName = "Anton" // Local Scope

    console.log(myName);// 2


}

myNameFunc();
*/

/*
var myName = "Abdallah"; //Global Scope

console.log(myName); //1

function myNameFunc() {

    "use strict"

    var myName = "Anton" // Local Scope

    console.log(myName);//2

}

myNameFunc();

console.log(myName);//3

*/
/*
var myName = "Abdallah"; //Global Scope

console.log(myName); // 1 Global

function myNameFunc() {

    "use strict"

    var myName = "Anton" // Local Scope

    console.log(myName);

}
console.log(myName); //2 Global
myNameFunc(); // 3 Local

console.log(myName); // 4 

*/
/*
var myName = "Abdallah"; //Global Scope

console.log(myName); // 1 Global

function myNameFunc() {

    "use strict"
    console.log(myName);

    var myName = "Anton" // Local Scope


}

console.log(myName); //2 Global

myNameFunc(); // 3 Local

console.log(myName); // 4 
*/
/*
var myName = "Abdallah"; //Global Scope

console.log(myName); // 1 Global

function myNameFunc() {

    "use strict"

    console.log(myName);

    var myName = "Anton" // Local Scope

}
console.log(myName); //2 Global

myNameFunc(); // 3 Local

console.log(myName); // 4 
*/

/*
var myName = "Abdallah"; //Global Scope

console.log(myName); // 1 Global

function myNameFunc() {

    "use strict"

    var myName = "Anton" // Local Scope

    console.log(myName);


}
console.log(myName); //2 Global

myNameFunc(); // 3 Local

console.log(myName); // 4 
*/

/*
var myName = "Abdallah"; //Global Scope

console.log(myName); // 1 Global

function myNameFunc() {

    "use strict"


    console.log(myName);


}
console.log(myName); //2 Global

myNameFunc(); // 3 Local

console.log(myName); // 4 
*/

/*
var myName = "Abdallah"; //Global Scope

console.log(myName); // 1 Global

function myNameFunc() {

    "use strict"

    var myName = "Anton" // Local Scope

    console.log(myName);


}
console.log(myName); //2 Global

myNameFunc(); // 3 Local

console.log(myName); // 4 
*/
/*
var myName = "Abdallah"; //Global Scope

console.log(myName); // 1 Global

function myNameFunc() {

    "use strict"

    myName = "Anton" // Global Scope

    console.log(myName);


}
console.log(myName); //2 Global

myNameFunc(); // 3 Local

console.log(myName); // 4 

*/
/*
var myName = "Abdallah"; //Global Scope

console.log(myName); // 1 Global

function myNameFunc() {

    "use strict"

   var myName = "Anton" // Global Scope

    console.log(myName);


}
console.log(myName); //2 Global

myNameFunc(); // 3 Local

console.log(myName); // 4 
*/

/*
var myName = "Abdallah";

console.log(myName);

function myNameFunc() {

    "use strict"

   var myName = "Anton" 

    console.log(myName);

}

myNameFunc();

console.log(myName);

console.log(myName);
*/

/*
var x = 1;

function changeXto2(){

    "use strict"

    var x = 2;
}
function changeXto3(){

    "use strict"

    var x = 3;
}
console.log(x); // 1

changeXto2();

console.log(x); // 1

changeXto3();

console.log(x); //1 
*/
/*
var x = 1;

function changeXto2() {

    "use strict"

     x = 2;
}

function changeXto3() {

    "use strict"

     var x = 3;
}
console.log(x); // 1

changeXto2();

console.log(x); // 2

changeXto3();

console.log(x); // 2
*/

var x = 1;

function changeXto2() {

    "use strict"

     x = 2;
}

function changeXto3() {

    "use strict"

      x = 3;
}
console.log(x); // 1

changeXto2();

console.log(x); // 2

changeXto3();

console.log(x); // 2

