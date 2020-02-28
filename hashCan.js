let readline = require('readline');
const fs = require('fs');
let books=0;
let libraries=0;
let days=0;
let data=[];
let lineCount=1;
let totalLineCount=0;
let booksData=[];
let tempLibMetaData=[];
let maxScoreIndexes=[];
let maxScoreIndexesLength=0;
let tempLibBooksData=[];
let sortedtempLibBooksData=[];
let librariesData=[];
let libIndex=0;
let resultString="";
let pushedBooks=[];
// a_example.txt
// b_read_on.txt
// c_incunabula.txt
// d_tough_choices.txt
// e_so_many_books.txt
// f_libraries_of_the_world.txt


const fileName="f_libraries_of_the_world";
const outPutFile="";
const readInterface = readline.createInterface({
    input: fs.createReadStream(fileName+".txt"),
    // output: process.stdout,
    console: false
})
readInterface.on('line', function(line) {
    
    if(lineCount==1){
        // line=line.map(l=>l.split(" "))
        line=line.split(" ").map(l=>parseInt(l));
        books=(line[0]);
        libraries=(line[1]);
        days=(line[2]);
        totalLineCount=(libraries*2)+2
        // console.log(books,libraries,days,totalLineCount);
    }
    else if(lineCount==2){
        line=line.split(" ");
        booksData=line.map((l,index)=>{return {index,score: parseInt(l)}})
        booksData.sort((a,b) => (b.score > a.score) ? 1 : ((a.score > b.score) ? -1 : 0)); 
        maxScoreIndexes=booksData.map(l=>l.index)
        maxScoreIndexesLength=maxScoreIndexes.length;
        // console.log(booksData)
    }
    else if(lineCount%2==1){
        tempLibMetaData=line.split(" ").map(l=>parseInt(l))
        // console.log("lib data",tempLibMetaData);
    }
    else if(lineCount%2==0){
        tempLibBooksData=line.split(" ").map(l=>parseInt(l)); 

        // let maxScoreIndexes=booksData.map(l=>l.index)
       
        for(let i=0;i<maxScoreIndexesLength;i++){
           
            const matchingIndex=tempLibBooksData.indexOf(maxScoreIndexes[i]);
    
            if(matchingIndex>-1){
                sortedtempLibBooksData.push(tempLibBooksData[matchingIndex])
                // console.log(tempLibBooksData[matchingIndex])
            }
           
        }
 
        let libDataTopush={
            libIndex,
            signUpDate:tempLibMetaData[1],
            canShipDays:tempLibMetaData[2],
            booksInLib:sortedtempLibBooksData
        }
        libIndex++;
        librariesData.push(libDataTopush);
        // console.log(libDataTopush);
        sortedtempLibBooksData=[];
        
        // console.log("lib book dat",tempLibBooksData);
    }
    if(lineCount==totalLineCount){
        // console.log("calcukate")
      calculate();
    }
    lineCount++;
    // console.log(lineCount)
}).on('close',function(){
    process.exit(0);
});

function calculate(){
    librariesData.sort((a,b) => (a.canShipDays < b.canShipDays) ? 1 : ((b.canShipDays < a.canShipDays) ? -1 : 0)); 
    // const lineOne=librariesData.length+"\n"
    // resultString+=lineOne
    const noOfLibraries=librariesData.length;
    let tempresultString="";

    let noOfLibrariesPushed=0;
    // console.log(librariesData);
    for(let i=0;i<noOfLibraries;i++){
        //  console.log(pushedBooks)
        // console.log(librariesData[i].booksInLib)
        
        let newBooksInLab=[]
        for(let j=0;j<librariesData[i].booksInLib.length;j++){
            const matchingIndex=pushedBooks.indexOf(librariesData[i].booksInLib[j]);
    
            if(matchingIndex<0){
                newBooksInLab.push(librariesData[i].booksInLib[j])
                // console.log(tempLibBooksData[matchingIndex])
            }
            // if()
            // console.log(librariesData[i].booksInLib[j],matchingIndex)
        }
        pushedBooks=[...new Set([...pushedBooks, ...newBooksInLab])];
        // console.log(newBooksInLab)
        if(newBooksInLab.length>0){
            noOfLibrariesPushed++;
            let tempString=librariesData[i].libIndex+" "+newBooksInLab.length+"\n";
            tempresultString+=tempString
            tempString=newBooksInLab.join(" ")+"\n"
            tempresultString+=tempString
        }
        // console.log(tempString
    }
    // console.log(pushedBooks)
//     // resultString = resultString.slice(0, -1); 
resultString=noOfLibrariesPushed+"\n";
resultString+=tempresultString;
resultString = resultString.slice(0, -1); 
//     // console.log(resultString)
//     // console.log(pushedBooks)
    printAnswer()
    // data=data.map(l=>l.split(" "))
    
}
function printAnswer(){
    // let answerString=bestMatch.slice().reverse().toString().split(',').join(' ');
    fs.writeFileSync(fileName+'canship_answer.txt',resultString, function (err) {
        if (err) throw err;
    });
}
