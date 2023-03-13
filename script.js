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