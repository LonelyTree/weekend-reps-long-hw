////////////////////// B. STRINGS /////////////////////////
/*
var firstVariable = "Hello World";
firstVariable = 1;
var secondVariable = firstVariable;
console.log(secondVariable);

var yourName = "Alex Hughes";

var concantate = "Hello, my name is " + yourName;
console.log(concantate);
*/
////////////////////// C. BOOLEANS /////////////////////////
/*

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name'==='Name');
  console.log(true != false);
  console.log(false === false === false === false === false === false === true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a < b < c);
  console.log((a === a) < d);
  console.log(48 == '48');

*/
////////////////////// D. THE FARM /////////////////////////
/*

var animal1 = "cow";

function whatDoesTheCowSay(x){
    if(x==="cow"){
        console.log("Shazooooooooo")
        //^Famlily Guy ref. watch it, its hilarious.
    } else {
        console.log("Hey! You're not a cow.")
    }
}

*/
////////////////////// E. DRIVER'S ED /////////////////////////
/*

var personAge = 16;

function legalToDrive(x){
    if(x < 16){
        console.log("Sorry, you're too young.")
    }
}

legalToDrive(personAge);

*/
////////////////////// II. LOOPS /////////////////////////

////////////////////// A. THE BASICS /////////////////////////
// 1. 

/*
let t=0
while(t <= 10){
    console.log(t)
    t++
}

// 2.
for(let i=10; i <= 400; i++){
    console.log(i);
}

// 3. 
for(let i=12; i < 400; i += 3){
    console.log(i)
}
*/
////////////////////// B. GET EVEN /////////////////////////

for(let i = 1; i <= 100; i++){
    if(i%2===0){
        console.log(i + " <-- is an even number.");
    };
}
