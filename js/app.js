////////////////////// A. Q+A /////////////////////////
// ON README.md

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
/*

for(let i = 1; i <= 100; i++){
    if(i%2===0){
        console.log(i + " <-- is an even number.");
    };
}

*/
////////////////////// C.  GIVE ME FIVE /////////////////////////
/*

for(let i=0; i<= 100; i++){
    if(i%5===0){
        console.log("I found a " + i + ". High five!");
    } else if(i%3===0){
        console.log("I found a " + i +". Three is a crowd.")
    }
}

*/
////////////////////// D. SAVINGS ACCOUNT /////////////////////////
/*

let bank_account=0;


for(let i = 0; i <=10; i ++){
bank_account = bank_account + i;
} 
console.log("$" + bank_account)

////////// RAISE /////////////

for(let i = 0; i<=100;i++){
    bank_account= bank_account + (i*2)
}
console.log("$"+bank_account)

*/
////////////////////// E. MULTIPLES OF 3 & 5 /////////////////////////
/*

let euler = 0;
for(let i=0; i <1000; i++){
    if(i%3===0){
        euler = euler + i
    }
    else if(i%5===0){
        euler = euler + i
    }
}
console.log(euler)

*/
////////////////////// III. ARRAYS & CONTROL FLOW /////////////////////////

////////////////////// A. TALK ABOUT IT /////////////////////////

// ON README.md

////////////////////// B. EASY DOES IT /////////////////////////

var quotes = ["To be, or not to be?", "This is my swamp!", "I think, therefore I am"];

////////////////////// C. ACCESSING ELEMENTS /////////////////////////
// & ON README.md
/*

const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]);
randomThings[2]="World";
console.log(randomThings);

*/
////////////////////// D. CHANGE VALUES /////////////////////////
// & ON README
/*

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
ourClass[2]
ourClass[4]="Octocat"
ourClass.push("Cloud City")
console.log(ourClass)

*/
////////////////////// E. MIX IT UP /////////////////////////
/*

const myArray = [5, 10, 500, 20]
myArray.push("Egon","String");
console.log(myArray);
myArray.shift();
console.log(myArray);
myArray.unshift("Bob Marley");
console.log(myArray);
myArray.pop();
console.log(myArray.reverse())

*/
////////////////////// F. BIGGIE SMALLS /////////////////////////

var incInt = 100;

if(incInt < 100){
    console.log("little number")
} else if(incInt >= 100){
    console.log("big number")
}


