

string1 = "11=";
string2 = "1160.00+";
string3 = "-699+";
string4 = "-699+-4";
string5 = "9665+655";
string6 = "-9545--333";
string7 = "-954.5+-333=";

string8 = "-0.0000+-0.000010=";

let number1 = "";
let number2 = "";
let operator = "";
let operatorIndex;

let currentString1 = string8;
console.log("current string " +currentString1)

let numOpArray = getNumbersAndOperator(currentString1);


console.log("N1ST " +(numOpArray[0]))
console.log("OPST " +(numOpArray[1]))
console.log("N2ST " +(numOpArray[2]))


console.log("N1 " +Number(numOpArray[0]))
console.log("OP " +(numOpArray[1]))
console.log("N2 " +Number(numOpArray[2]))



/*

if(currentString.includes("=")){
    currentString = currentString.slice(0, currentString.length-1)
    //console.log(currentString)
}else{
    currentString = currentString
    }

    if(currentString[0]=="-"){
        number1 = currentString[0];
        currentString = currentString.slice(1, currentString.length)
      
    }

    for (let i = 0; i < currentString.length; i++) {
       // const paragraph ="123"
        const regex = /[0-9]/g;
      //  const found = paragraph.match(regex);
        
         if(currentString[i].match(regex) || currentString[i] == "."  && operator ==""){
            number1 = number1.concat(currentString[i])
          //  console.log(number1)
          //  console.log(operator)
            
            
        } 

        if(currentString[i] == "+" || currentString[i] == "-" || currentString[i] == "x" || currentString[i] == "/"){
            operator = currentString[i];
            operatorIndex = i;
            break
        }
    }



//console.log(currentString)
let Num1L = number1.length;
console.log(Num1L)
number2 = currentString.slice(Num1L);

*/



/*
console.log("NUm1 " + number1)
console.log("num2 " +number2)
console.log("Oper " +operator)*/

//console.log(Number(number2))

function getNumbersAndOperator(currentString) {
  

if(currentString.includes("=")){
    currentString = currentString.slice(0, currentString.length-1)
    //console.log(currentString)
}else{
    currentString = currentString
    }

    if(currentString[0]=="-"){
        number1 = currentString[0];
        currentString = currentString.slice(1, currentString.length)
      
    }

    for (let i = 0; i < currentString.length; i++) {
       // const paragraph ="123"
        const regex = /[0-9]/g;
      //  const found = paragraph.match(regex);
        
         if(currentString[i].match(regex) || currentString[i] == "."  && operator ==""){
            number1 = number1.concat(currentString[i])
          //  console.log(number1)
          //  console.log(operator)
            
            
        } 

        if(currentString[i] == "+" || currentString[i] == "-" || currentString[i] == "x" || currentString[i] == "/"){
            operator = currentString[i];
            operatorIndex = i;
            break
        }
    }



//console.log(currentString)
let Num1L = number1.length;
console.log(Num1L)
number2 = currentString.slice(Num1L);

    return [number1, operator, number2];
}
