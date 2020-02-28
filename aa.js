const BigNumber = require('bignumber.js');
function calculate(num) {
    let i=new BigNumber("2");
    let a=[]
    let notFound=true;
    while(notFound){
        if(num.modulo(i).toFixed()==0){
            a.push(i);
            notFound=false;
        }
        else{
            one=new BigNumber("1")
            i=i.plus(one) 
        }
    }
    a.push(num.dividedBy(i))
    return a;
}
let num=new BigNumber("21723456789876543234567896789")
let num2=new BigNumber("25634567897623456789876545675434567897")
console.log(num.isGreaterThan(num2))
// console.log(BigNumber { s: 1, e: 0, c: [ 7 ] })
// let i=new BigNumber("31");
// console.log(num.modulo(i).toFixed(),i.toFixed())
// calculate(num)
// var largeNumber = bigInt("75643564363473453456342378564387956906736546456235345");
// calculate(524287)
// calculate((4*16));
// calculate((212123*9007199254740991));
// console.log( 2*955317063756711600000)
// console.log((212123*9007199254740991).toString())
// console.log(largeNumber.toString())
// console.log(bigInt(51334567842345623456789876543234567897654567567214).multiply(bigInt(7564356436347234567345345634237856438795690123456789098765432123456789009876546736546456235345)).toString())
// console.log(bigInt(bigInt(1000000000000000000000000000)/2))
// console.log(bigInt(500000000000000000000000000000).divide(5).toArray())
// console.log(parseInt("75643564363473453456342378564387956906736546456235345"))
// console.log(bigInt(7.564356436347345e+52).toString())
// calculate(bigInt(9007199254740991));
// let x =new BigNumber("99999914257563499999999999999") 
// x = new BigNumber("500000000000000000000000000000000000000000000000000000000000000000000000000000000")
// y = new BigNumber("500000000000000000000000000000000000000000000000000000000000000000000000000000000")
// z = x.dividedBy(y)  
//  new BigNumber('1111222233312345678909876543212345678934444555566');
// console.log(z.toFixed())
// console.log(z.integerValue().toFixed())
// a = new BigNumber(1)          // "11"
// b = new BigNumber(2)       // "1295.25"
// c = a.plus(b)   
// console.log(c.toFixed())
