let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
let lineno = 0;
let totalCases=0;
function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

rl.on('line', function(number) {
    if(lineno==0){
        totalCases=number;
    }
    else{
        if(totalCases>0){
            let numberString=number.toString();
            let numberLength=numberString.length;
            let num1=Array(numberLength+1).join('0');
            for(let i in numberString){
                i=parseInt(i);
                if(numberString[i]==4){
                    numberString=replaceAt(numberString,i,2);
                    num1=replaceAt(num1,i,2);
                }
            }
            console.log("Case #"+lineno+": "+ num1+" "+numberString)
            totalCases--;
            if(totalCases==0){
                return rl.close();
            }
        }
        else{
            return rl.close();
        }
    }
    lineno++;
}).on('close',function(){
    process.exit(0);
});