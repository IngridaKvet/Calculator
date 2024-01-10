let result = [];
let Number1;
let Number2;
let Operator;
let currentValue = 0;

// populating the display with the values
const inputBtn = document.querySelectorAll('input');

let i = 0;
let k = 0;
let inputArr = [];
document.querySelector(".dotBtn").disabled = true;

disableOpBtn()

inputBtn.forEach(input => input.addEventListener('click', (e) => {
  const paragraph = document.querySelector('p')

 console.log(currentValue)
  
  if (e.target.value == "AC"){
    paragraph.textContent = "";
    currentValue = 0;
    inputArr = [];
  } 
  
  /*
  else if (e.target.value == "DEL") {
 
   //str.slice(0, -1);

   paragraph.textContent = charArr.slice(0,-1);
   
    console.log("hi")
  } 
  */

  
  else if (e.target.value != "AC" && e.target.value != "DEL"){

  enableOpBtn()

  inputArr[i] = e.target.value; 

  let charArr;
  paragraph.textContent = inputArr.join("");

  if(i>8){
    let slicedArray = inputArr.slice(i-8,i+1);
    paragraph.textContent = slicedArray.join("");
  }


  let string = inputArr.toString();
  charArr =string.replace(/,/g, "");

  console.log(charArr)

// Getting Numbers

Number1 = parseFloat(charArr);
let lengthToCut = Number1.toString().length+1;
Number2 = parseFloat(charArr.slice(lengthToCut));  




// Decimal places

if(Number1 >= 0){
  document.querySelector(".dotBtn").disabled = false;

  if(charArr.toString().includes(".")){
  document.querySelector(".dotBtn").disabled = true;
} 



if(charArr.includes("+") ||charArr.includes("-") || charArr.includes("x") ||charArr.includes("/")  ){
  document.querySelector(".dotBtn").disabled = true;
  if(Number2 >= 0){
    document.querySelector(".dotBtn").disabled = false;
    
  }
}

}

if(Number2>=0){
  disableOpBtn()
}

if(charArr.slice(lengthToCut).includes(".")){
  document.querySelector(".dotBtn").disabled = true;
}

}

//DEL
else if (e.target.value == "DEL") {
  let stringToDisplay= inputArr.toString().replace(/,/g, "").slice(0,-1)
  inputArr.pop();

  paragraph.textContent = stringToDisplay;
  
  
   console.log("hi")
 } 
 

// Assign operator

if (e.target.value == "+"){
  Operator = "+";
  disableOpBtn();
}

if (e.target.value == "/"){
  Operator = "/";
  disableOpBtn();
}

if (e.target.value == "-"){
  Operator = "-";
  disableOpBtn();
}

if (e.target.value == "x"){
  Operator = "x";
  disableOpBtn();
}


// Do operations 

  if (e.target.value == "="){

    

    if(Operator == "+"){
      let OpResult = Add(Number1,Number2);
      const paragraph = document. querySelector('p');
      paragraph.textContent = OpResult;
      currentValue = currentValue+OpResult;
      inputArr = [];
      inputArr[0] = OpResult;



    }

    if(Operator == "-"){
      let OpResult = Substract(Number1,Number2);
      const paragraph = document. querySelector('p')
      paragraph.textContent = OpResult;
      
    }
  
    if(Operator == "/"){
      let OpResult = Divide(Number1,Number2);
      const paragraph = document. querySelector('p')
      paragraph.textContent = OpResult;
    }
    
    if(Operator == "x"){
      let OpResult = Multiply(Number1,Number2);
      const paragraph = document. querySelector('p')
      paragraph.textContent = OpResult;  
    }

    enableOpBtn()
    
  }


  







  i++;
}))








// Function Block
function disableOpBtn(){
  var disabledBtn = document.querySelectorAll(".operationBtn");
  disabledBtn.forEach(operationBtn => {
  operationBtn.disabled = true;
  })
}

function enableOpBtn(){
  var disabledBtn = document.querySelectorAll(".operationBtn");
  disabledBtn.forEach(operationBtn => {
  operationBtn.disabled = false;
  })
}


function Add(Number1,Number2) {
  let num1Digits = Number1.toString().split('').length;
  let num2Digits = Number2.toString().split('').length;

  let DigitMultiplier

  if(num1Digits>num2Digits){
    DigitMultiplier = num1Digits 
  } else{
    DigitMultiplier = num2Digits
    };

  let sum = Number(Math.round(Number1+Number2+'e'+DigitMultiplier)+'e-'+DigitMultiplier)
  return sum; 
}


function Substract(Number1,Number2){
  let num1Digits = Number1.toString().split('').length;
  let num2Digits = Number2.toString().split('').length;

  let DigitMultiplier

  if(num1Digits>num2Digits){
    DigitMultiplier = num1Digits 
  } else{
     DigitMultiplier = num2Digits
    };

  let diff = Number(Math.round(Number1-Number2+'e'+DigitMultiplier)+'e-'+DigitMultiplier)
  return diff;
}

function Multiply(Number1,Number2) {
  let num1Digits = Number1.toString().split('').length;
  let num2Digits = Number2.toString().split('').length;

  let DigitMultiplier

  if(num1Digits>num2Digits){
    DigitMultiplier = num1Digits 
  } else{
     DigitMultiplier = num2Digits
    };

  let product = Number(Math.round(Number1*Number2+'e'+DigitMultiplier)+'e-'+DigitMultiplier)
  return product;
}

function Divide(Number1,Number2) {
  let num1Digits = Number1.toString().split('').length;
  let num2Digits = Number2.toString().split('').length;

  let DigitMultiplier

  if(num1Digits>num2Digits){
    DigitMultiplier = num1Digits 
  } else{
     DigitMultiplier = num2Digits
    };

  let division = Number(Math.round(Number1/Number2+'e'+DigitMultiplier)+'e-'+DigitMultiplier)
  return division;
}





  

