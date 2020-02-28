let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
let lineno = 0;
let totalCases=0;
let currnetN=0;

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}
rl.on('line', function(number) {
    if(lineno==0){
        totalCases=number;
    }
    else if(lineno%2==1){
        currnetN=parseInt(number)
    }
    else if(lineno%2==0){
        let rivalPath=number;
        let myPath=Array((currnetN*2-2)+1).join('S');
        for(let i=0;i<(currnetN*2-2);i++){
            if(rivalPath[i].toLowerCase()=='s'){
                // console.log(i,myPath[i])
                myPath=replaceAt(myPath,i,'E');
            }
            else if(rivalPath[i].toLowerCase()=='e'){
                // console.log(i,myPath[i])
                myPath=replaceAt(myPath,i,'S');
            }
            
        }
        console.log("Case #"+ (parseInt(lineno)/2)+": "+myPath)
        if(lineno==totalCases*2){
            return rl.close(); 
        }
    }
   
    lineno++;
}).on('close',function(){
    process.exit(0);
});