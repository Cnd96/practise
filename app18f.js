let readline = require('readline');
const fs = require('fs');
let lineCount=0;
let totalData=0;
let data=[];
const readInterface = readline.createInterface({
    input: fs.createReadStream('b.txt'),
    // output: process.stdout,
    console: false
})
readInterface.on('line', function(line) {
   
    if(lineCount==0){
        totalData=parseInt(line);
        console.log(totalData);
    }
    else{
        data.push(line);
    }
    if(lineCount==totalData){
      calculate();
    }
    lineCount++;
}).on('close',function(){
    process.exit(0);
});

function calculate(){
    data=data.map(l=>l.split(" "))
    console.log(data[0])
}

