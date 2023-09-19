let result = [];
let Numbers = [];
let Operators = [];

// populating the display with the values
const inputBtn = document.querySelectorAll('input');

let i = 0;
let inputArr = [];

inputBtn.forEach(input => input.addEventListener('click', (e) => {
  const paragraph = document. querySelector('p')

  if (e.target.value == "xʸ"){
    inputArr[i] = "^"; 
  } if (e.target.value == "x!") {
    inputArr[i] = "!"; 
  } else {
    inputArr[i] = e.target.value;
  }



//distinquish the numbers
  let charArr;
  paragraph.textContent = inputArr.join("");






  if(i>10){
    let slicedArray = inputArr.slice(i-10,i+1);
    paragraph.textContent = slicedArray.join("");
  }

  let string = inputArr.toString();
  charArr =string.replace(/,/g, "")


 //kad gauti skaiciu array visus skaicius pakeiciau pliusu ir tada splitinu turbut.bet antra karta paspaudus / neveikia
  //result = charArr.replace('-','+').replace('/','+').split("+");
  result = charArr.split(/[+-/x!^=]/)

 
 console.log(charArr)



 
  k = 0;
  while(k<result.length){
    Numbers[k] = Number(result[k]);
    

    k++;
  }

  console.log(Numbers);

  i++;
}))











/*
let arrayx =  [10, 12, 28];

let resultx = arrayx.reduce((x, y) => {
  return x + y;
}, 10);

console.log(resultx);
*/





function Add(Numbers)
{

    let resultx = Numbers.reduce((x, y) => {
        return x + y;
      }, 0);
      console.log(resultx);
   // return Numbers.reduce((a, b) => a + b, 10)
    
}

  
/*
const outputText = document.querySelector('p');

function updateButton(e) {
    console.log("hi")
    //let btn = document.querySelectorAll(".");
    let val = e.target.value;
    console.log(val)

}

    /*
function updateButton() {
    const val = this.document. querySelector('input'). value



    const divPressed4 = (e) => {

        let divColor = e.target.style.backgroundColor;
//const val = document. querySelector('input'). value;
console.log(val)

    /*
  if (button.value === 'Start machine') {
    button.value = 'Stop machine';
    paragraph.textContent = 'The machine has started!';
  } else {
    button.value = 'Start machine';
    paragraph.textContent = 'The machine is stopped.';
  }*/


  /*




let a;
let b;
function Add(a,b)
{
    return a+b;
}

function Substract(a,b)
{
    return a-b;
}


function Multiply(a,b)
{
    return a*b;
}

function Divide(a,b)
{
    return a/b;
}

function Power(a,b)
{
    return a**b;
}

function factorial(a,b)
{
    return a+b;
}

console.log(Add(5,3))

function operate(num1, num2, operator)
{
   if(operator == '+'){

console.log("OK")
      return Add(num1, num2) 
   } else if(operator == "-"){
       return Substract(num1,num2)
    } else if(operator == "/"){
       return Divide(num1,num2)
    } else if(operator == "*"){
       return Multiply(num1,num2)
    } else if(operator == "^"){
        return Power(num1,num2)
    }


}

console.log(operate(1,2,"^"))
*/
