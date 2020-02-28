let a="2234324124";
function replaceAt(string, index, replace) {
    return string.substring(0, parseInt(index)) + replace + string.substring(parseInt(index) + 1);
  }
  function replaceAt2(string, index, replace) {
    return string.substring(0, (index)) + replace + string.substring((index) + 1);
  }
//  a= replaceAt(a,3,2);
//  console.log(a)
let number=4234324
let numberString=number.toString();
let numberLength=numberString.length;
let num1=Array(numberLength+1).join('0');
// console.log(num1[5])
// console.log(numberString[5])
for(let i in numberString){
    i=parseInt(i)
    // console.log(parseInt(i))
    if(numberString[i]==4){
        // console.log(numberString,i)
        numberString=replaceAt2(numberString,i,'2');
        num1=replaceAt2(num1,i,'2');
        // console.log(numberString)
    }
}
console.log("Case #: "+ num1+" "+numberString)
