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
/*

var incInt = 100;

if(incInt < 100){
    console.log("little number")
} else if(incInt >= 100){
    console.log("big number")
}

*/
////////////////////// G. MONKEY IN THE MIDDLE /////////////////////////
/*

function monkeyInTheMiddle(x){
    if(x < 5){console.log("little number")}
    else if(x>10){console.log("big number")}
    else {console.log("monkey")}
}

monkeyInTheMiddle(11)

*/
////////////////////// H. WHAT'S IN YOUR CLOSET? /////////////////////////
/*
const kristynsCloset = [
    'left shoe',
    'cowboy boots',
    'right sock',
    'GA hoodie',
    'green pants',
    'yellow knit hat',
    'marshmallow peeps'
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      'grey button-up',
      'dark grey button-up',
      'light blue button-up',
      'blue button-up'
    ],
    [
      // These are Thom's pants
      'grey jeans',
      'jeans',
      'PJs'
    ],
    [
      // Thom's accessories
      'wool mittens',
      'wool scarf',
      'raybans'
    ]
  ];

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
kristynsCloset.splice(6,0,"raybans");
kristynsCloset[5]="stained knit hat";

thomsCloset[0][0];
thomsCloset[1][0];
thomsCloset[2][2];
console.log(`Thom loves repeating himself especialy with this horrible exercise where I have to type "Kristyn"(worlds most annoying name to type) multiple times. But I gues Thom is wearing a ${thomsCloset[0][0]} with some ${thomsCloset[1][1]} and ${thomsCloset[2][2]}.`);
thomsCloset[1][2]="Footie Pajamas";

*/
////////////////////// IV. FUNCTIONS /////////////////////////

////////////////////// A. PRINT GREETING /////////////////////////
/*

function printGreeting(x){
console.log(`Hello there, ${x}`)
}

*/
////////////////////// B. PRINT COOL /////////////////////////
/*

function printCool(name){
    console.log(`Hey, ${name}, I think you're pretty cool!`)
}

printCool("who ever is reading this")

*/
////////////////////// C. CALCULATE CUBE /////////////////////////
/*

function calculateCube(x){
    let answer = Math.pow(x,3);
    console.log(answer)
}

calculateCube(2)

*/
////////////////////// D. IS VOWEL /////////////////////////
/*

function isVowel(letter){
    let absletter = letter.toLowerCase()
    const vowel = ["a","e","i","o","u"]
    for(let i = 0; i < vowel.length; i++){
        if(absletter === vowel[i]){
            return true
        }
    } return false
}
console.log(isVowel("E"));

*/
////////////////////// E. GET TWO LENGTHS /////////////////////////
/*

function getTwoLengths(x,y){
    lengthArray = [];
    lengthArray.push(x.length);
    lengthArray.push(y.length);
    console.log(lengthArray);
}

getTwoLengths("Jalapeno","Three")

*/
////////////////////// F. GET MULTIPLE LENGTHS /////////////////////////
/*

function getMultipleLengths(x){
    lengthArray = [];

    let separate = x.replace(/[?!><."'"'@#$%^&*]/g, "").split(" ");
    for(let i=0; i<separate.length; i++){
    lengthArray.push(separate[i].length);
    } console.log(lengthArray)
}

getMultipleLengths("How man word in har?")

*/
////////////////////// G. MAX OF THREE /////////////////////////
/* 

function maxOfThree(x,y,z){
    if(x === y === z){
        return x;
    }
    truth = Math.max(x,y,z)
    if(truth === x || truth === y || truth === z){
        return truth;
    }
}

console.log(maxOfThree(6,9,11))

*/
////////////////////// H. PRINT LONGEST WORD /////////////////////////
/*

function printLongestWord(finder){
    //finder = string.replace(/[?!><."'"',@#$%^&*]/g, "").split(" ")
    // ^ For non-array strings.

finder.sort(function(a,b){
    return a.length - b.length;});
    console.log(finder.pop());
}
//  |
//  V  // Where my mind was going in the wrong place//

    // let solver = [];
    // finder = string.replace(/[?!><."'"'@#$%^&*]/g, " ").split(" ");
    // for(let i = 0; i<finder.length; i++){
    //     // for(let e = 0; e < finder[i].length; e++)

    //     solver.push(finder[i].length);
    //     solver.sort().toString()
    // }


    // finder2 = finder.length;
    // finder3 = finder2.sort()
    // finder4 = finder3.toString()
    // console.log(finder4.pop())

printLongestWord(['BoJack',
'Princess',
'Diane',
'a',
'Max',
'Peanutbutter',
'big',
'Todd'])

*/
////////////////////// I. TRANSMOGRIFY /////////////////////////
/*

function transmogrify(x,y,z){
    answer = Math.pow((x*y),z)
    console.log(answer);
}

transmogrify(5,3,2)

*/
////////////////////// J. REVERSE WORD ORDER V2 /////////////////////////
/*

function reverseWordOrder(string){
    var answer = [];
    let finalAnswer=[]
    let word = ""
    for(let i=0; i <= string.length-1; i++){
        if(string[i]===" " || i == string.length){
        answer.push(word)
        word = ""
        } else{
            word = word + string[i];
        }
        } 
        if(word.length>0){
        answer.push(word)
        }
        for(let i = answer.length-1; i >=0; i--){
            finalAnswer.push(answer[i])
        }
        console.log(finalAnswer)
    }
//THANK YOU FOR THE HELP CLAYTON. I HAD TO MODIFY THE 
//LAST LITTLE BIT SO IT COULD WORK. SOLID HOUR AND A HALF OF STARING AT CHARACTERS.
//NOW IT LOOKS SO MATTER-OF-FACT....

reverseWordOrder("Words can be reversed");
console.log("Words can be reversed".length)

*/
////////////////////// K. GET DOWN AND DIRTY WITH MATH RANDOM /////////////////////////
// 1-10
function rand1_10(){
    console.log(Math.floor(Math.random() *10) +1);
}
rand1_10();
// 10-100
function rand10_100(){
    console.log(Math.floor(Math.random() *100) +10);
}
rand10_100();
// 532-13267
function rand532_13267(){
    console.log(Math.floor(Math.random() *13267) +532);
}
rand532_13267();
// 1-10 FLOAT
function rand1_10F(){
    console.log((Math.random() *10) +1);
}
rand1_10F();
// RANDOM ELEMENT
function getRandomElement(string){
    var answer = [];
    let finalAnswer=[]
    let word = ""
    for(let i=0; i <= string.length-1; i++){
        if(string[i]===" " || i === string.length){
        answer.push(word)
        word = ""
        } else{
            word = word + string[i];
        }
        } 
        if(word.length>0){
        answer.push(word)
        }
        for(let i = answer.length-1; i >=0; i--){
            finalAnswer.push(answer[i])
        }
        console.log(finalAnswer[Math.floor(Math.random() * finalAnswer.length-1) +1])
}


getRandomElement("1 2 3 4 456 6 6788 876 5432 1")