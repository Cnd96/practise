const crypto=require('crypto');
const fs=require('fs');
const start=Date.now();
const array =[
    {
        base:"0000000",
        other:["0000110","1011011","1001111","1100110","1101101","1111101","0000111","1111111","1101111"]
    },
    {
        base:"0000001",
        other:["1011011","1001111","1101101","1111101","0000111","1111111","1101111"]
    },
    {
        base:"0000010",
        other:["0000110","1011011","1001111","1100110","0000111","1111111","1101111"]
    },
    {
        base:"0000011",
        other:["1011011","1001111","0000111","1111111","1101111"]
    },
    {
        base:"0000100",
        other:["0000110","1001111","1100110","1101101","1111101","0000111","1111111","1101111"]
    },
    {
        base:"0000101",
        other:["1001111","1101101","1111101","0000111","1111111","1101111"]
    },
    {
        base:"0000110",
        other:["0000110","1001111","1100110","0000111","1111111","1101111"]
    },
    {
        base:"0000111",
        other:["1001111","0000111","1111111","1101111"]
    },
    {
        base:"0001000",
        other:["1011011","1001111","1101101","1111101","1111111","1101111"]
    },
    {
        base:"0001001",
        other:["1011011","1001111","1101101","1111101","1111111","1101111"]
    },
    {
        base:"0001010",
        other:["1011011","1001111","1111111","1101111"]
    },
    {
        base:"0001011",
        other:["1011011","1001111","1111111","1101111"]
    },
    {
        base:"0001100",
        other:["1001111","1101101","1111101","1111111","1101111"]
    },
    {
        base:"0001101",
        other:["1001111","1101101","1111101","1111111","1101111"]
    },
    {
        base:"0001110",
        other:["1001111","1111111","1101111"]
    },
    {
        base:"0001111",
        other:["1001111","1111111","1101111"]
    },
    {
        base:"0010000",
        other:["1011011","1111101","1111111"]
    },
    {
        base:"0010001",
        other:["1011011","1111101","1111111"]
    },
    {
        base:"0010010",
        other:["1011011","1111111"]
    },
    {
        base:"0010011",
        other:["1011011","1111111"]
    },
    {
        base:"0010100",
        other:["1111101","1111111"]
    },
    {
        base:"0010101",
        other:["1111101","1111111"]
    },
    {
        base:"0010110",
        other:["1111111"]
    },
    {
        base:"0010111",
        other:["1111111"]
    },
    {
        base:"0011000",
        other:["1011011","1111101","1111111"]
    },
    {
        base:"0011001",
        other:["1011011","1111101","1111111"]
    },
    {
        base:"0011010",
        other:["1011011","1111111"]
    },
    {
        base:"0011011",
        other:["1011011","1111111"]
    },
    {
        base:"0011100",
        other:["1111101","1111111"]
    },
    {
        base:"0011101",
        other:["1111101","1111111"]
    },
    {
        base:"0011110",
        other:["1111111"]
    },
    {
        base:"0011111",
        other:["1111111"]
    },
    {
        base:"0100000",
        other:["1100110","1101101","1111101","1111111","1101111"]
    },
    {
        base:"0100001",
        other:["1101101","1111101","1111111","1101111"]
    },
    {
        base:"0100010",
        other:["1100110","1111111","1101111"]
    },
    {
        base:"0100011",
        other:["1111111","1101111"]
    },
    {
        base:"0100100",
        other:["1100110","1101101","1111101","1111111","1101111"]
    },
    {
        base:"0100101",
        other:["1101101","1111101","1111111","1101111"]
    },
    {
        base:"0100110",
        other:["1100110","1111111","1101111"]
    },
    {
        base:"0100111",
        other:["1111111","1101111"]
    },
    {
        base:"0101000",
        other:["1101101","1111101","1111111","1101111"]
    },
    {
        base:"0101001",
        other:["1101101","1111101","1111111","1101111"]
    },
    {
        base:"0101010",
        other:["1111111","1101111"]
    },
    {
        base:"0101011",
        other:["1111111","1101111"]
    },
    {
        base:"0101100",
        other:["1101101","1111101","1111111","1101111"]
    },
    {
        base:"0101101",
        other:["1101101","1111101","1111111","1101111"]
    },
    {
        base:"0101110",
        other:["1111111","1101111"]
    },
    {
        base:"0101111",
        other:["1111111","1101111"]
    },
    {
        base:"0110000",
        other:["1111101","1111111"]
    },
    {
        base:"0110001",
        other:["1111101","1111111"]
    },
    {
        base:"0110010",
        other:["1111111"]
    },
    {
        base:"0110011",
        other:["1111111"]
    },
    {
        base:"0110100",
        other:["1111101","1111111"]
    },
    {
        base:"0110101",
        other:["1111101","1111111"]
    },
    {
        base:"0110110",
        other:["1111111"]
    },
    {
        base:"0110111",
        other:["1111111"]
    },
    {
        base:"0111000",
        other:["1111101","1111111"]
    },
    {
        base:"0111001",
        other:["1111101","1111111"]
    },
    {
        base:"0111010",
        other:["1111111"]
    },
    {
        base:"0111011",
        other:["1111111"]
    },
    {
        base:"0111100",
        other:["1111101","1111111"]
    },
    {
        base:"0111101",
        other:["1111101","1111111"]
    },
    {
        base:"0111110",
        other:["1111111"]
    },
    {
        base:"0111111",
        other:["1111101","1111111"]
    },
    {
        base:"1000000",
        other:["1011011","1001111","1100110","1101101","1111101","1111111","1101111"]
    },
    {
        base:"1000001",
        other:["1011011","1001111","1101101","1111101","1111111","1101111"]
    },
    {
        base:"1000010",
        other:["1011011","1001111","1100110","1111111","1101111"]
    },
    {
        base:"1000011",
        other:["1011011","1001111","1111111","1101111"]
    },
    {
        base:"1000100",
        other:["1001111","1100110","1101101","1111101","1111111","1101111"]
    },
    {
        base:"1000101",
        other:["1001111","1101101","1111101","1111111","1101111"]
    },
    {
        base:"1000110",
        other:["1001111","1100110","1111111","1101111"]
    },
    {
        base:"1000111",
        other:["1001111","1111111","1101111"]
    },
    {
        base:"1001000",
        other:["1011011","1001111","1101101","1111101","1111111","1101111"]
    },
    {
        base:"1001001",
        other:["1011011","1001111","1101101","1111101","1111111","1101111"]
    },
    {
        base:"1001010",
        other:["1011011","1001111","1111111","1101111"]
    },
    {
        base:"1001011",
        other:["1011011","1001111","1111111","1101111"]
    },
    {
        base:"1001100",
        other:["1001111","1101101","1111101","1111111","1101111"]
    },
    {
        base:"1001101",
        other:["1001111","1101101","1111101","1111111","1101111"]
    },
    {
        base:"1001110",
        other:["1001111","1111111","1101111"]
    },
    {
        base:"1001111",
        other:["1001111","1111111","1101111"]
    },
    {
        base:"1010000",
        other:["1011011","1111101","1111111"]
    },
    {
        base:"1010001",
        other:["1011011","1111101","1111111"]
    },
    {
        base:"1010010",
        other:["1011011","1111111"]
    },
    {
        base:"1010011",
        other:["1011011","1111111"]
    },
    {
        base:"1010100",
        other:["1111101","1111111"]
    },
    {
        base:"1010101",
        other:["1111101","1111111"]
    },
    {
        base:"1010110",
        other:["1111111"]
    },
    {
        base:"1010111",
        other:["1111111"]
    },
    {
        base:"1011000",
        other:["1011011","1111101","1111111"]
    },
    {
        base:"1011001",
        other:["1011011","1111101","1111111"]
    },
    {
        base:"1011010",
        other:["1011011","1111111"]
    },
    {
        base:"1011011",
        other:["1011011","1111111"]
    },
    {
        base:"1011100",
        other:["1111101","1111111"]
    },
    {
        base:"1011101",
        other:["1111101","1111111"]
    },
    {
        base:"1011110",
        other:["1111111"]
    },
    {
        base:"1011111",
        other:["1111111"]
    },
    {
        base:"1100000",
        other:["1100110","1101101","1111101","1111111","1101111"]
    },
    {
        base:"1100001",
        other:["1101101","1111101","1111111","1101111"]
    },
    {
        base:"1100010",
        other:["1100110","1111111","1101111"]
    },
    {
        base:"1100011",
        other:["1111111","1101111"]
    },
    {
        base:"1100100",
        other:["1100110","1101101","1111101","1111111","1101111"]
    },
    {
        base:"1100101",
        other:["1101101","1111101","1111111","1101111"]
    },
    {
        base:"1100110",
        other:["1100110","1111111","1101111"]
    },
    {
        base:"1100111",
        other:["1111111","1101111"]
    },
    {
        base:"1101000",
        other:["1101101","1111101","1111111","1101111"]
    },
    {
        base:"1101001",
        other:["1101101","1111101","1111111","1101111"]
    },
    {
        base:"1101010",
        other:["1111111","1101111"]
    },
    {
        base:"1101011",
        other:["1111111","1101111"]
    },
    {
        base:"1101100",
        other:["1101101","1111101","1111111","1101111"]
    },
    {
        base:"1101101",
        other:["1101101","1111101","1111111","1101111"]
    },
    {
        base:"1101110",
        other:["1111111","1101111"]
    },
    {
        base:"1101111",
        other:["1111111","1101111"]
    },
    {
        base:"1110000",
        other:["1111101","1111111"]
    },
    {
        base:"1110001",
        other:["1111101","1111111"]
    },
    {
        base:"1110010",
        other:["1111111"]
    },
    {
        base:"1110011",
        other:["1111111"]
    },
    {
        base:"1110100",
        other:["1111101","1111111"]
    },
    {
        base:"1110101",
        other:["1111101","1111111"]
    },
    {
        base:"1110110",
        other:["1111111"]
    },
    {
        base:"1110111",
        other:["1111111"]
    },
    {
        base:"1111000",
        other:["1111101","1111111"]
    },
    {
        base:"1111001",
        other:["1111101","1111111"]
    },
    {
        base:"1111010",
        other:["1111111"]
    },
    {
        base:"1111011",
        other:["1111111"]
    },
    {
        base:"1111100",
        other:["1111101","1111111"]
    },
    {
        base:"1111101",
        other:["1111101","1111111"]
    },
    {
        base:"1111110",
        other:["1111111"]
    },
    {
        base:"1111111",
        other:["1111111"]
    },

]

const arr2=[
    {
        number:9,
        binary:'1101111',
        next:'1111111'
    },
    {
        number:8,
        binary:'1111111',
        next:'0000111'
    },
    {
        number:7,
        binary:'0000111',
        next:'1111101'
    },
    {
        number:6,
        binary:'1111101',
        next:'1101101'
    },
    {
        number:5,
        binary:'1101101',
        next:'1100110'
    },
    {
        number:4,
        binary:'1100110',
        next:'1001111'
    },
    {
        number:3,
        binary:'1001111',
        next:'1011011'
    },
    {
        number:2,
        binary:'1011011',
        next:'0000110'
    },
    {
        number:1,
        binary:'0000110',
        next:'1101111'
    },
]

// crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
//     console.log('1:',Date.now()-start);
// })
// crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
//     console.log('2:',Date.now()-start);
// })
// crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
//     console.log('3:',Date.now()-start);
// })
// crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
//     console.log('4:',Date.now()-start);
// })
let dataLines=[];
fs.readFile('sm.in',(err,res)=>{
    let data=res.toString()
    let firstTextWithLineBreaker=data.slice(0, data.indexOf('\n')+1);
    data=data.replace(firstTextWithLineBreaker,'');
    firstTextWithLineBreaker=firstTextWithLineBreaker.replace(/\n/g,"");
    while(data.indexOf('\n')>0){
        let textLineBreaker=data.slice(0, data.indexOf('\n')+1);
        data=data.replace(textLineBreaker,'');
        textLineBreaker=textLineBreaker.replace(/\n/g,"");
        
        let letterDatas=[]
        let noOfLetters=textLineBreaker.slice(0, textLineBreaker.indexOf(" ")+1);

        textLineBreaker=textLineBreaker.replace(noOfLetters,'').trim();
    
        while(textLineBreaker.indexOf(" ")>0){
            let letterData=textLineBreaker.slice(0, textLineBreaker.indexOf(" ")+1).trim();
            textLineBreaker=textLineBreaker.replace(letterData,'').trim();
            let matchingDataPtrn=array.find(line=>line.base==letterData)
            letterDatas.push({letterData,matchingData:matchingDataPtrn.other})
        }
        let matchingDataPtrn=array.find(line=>line.base==textLineBreaker.trim())
 
        letterDatas.push({letterData:textLineBreaker.trim(),matchingData:matchingDataPtrn.other})
        dataLines.push({noOfLetters,letterDatas})
    }
    recogniseData();
    // dataLines.forEach(line=>{
    //     console.log(line.result,line.matchingPattern)
    // })
    console.log(pad_with_zeroes((parseInt("0101011", 2)&parseInt("0101111", 2)).toString(2)))
})


function recogniseData(){
    dataLines.forEach(line=>{
        if(line.noOfLetters==1){
            const {matchingData,letterData}=line.letterDatas[0];
            if(matchingData.length==1){
                const nextLetterData=arr2.find(line=>line.binary==matchingData[0])
                // console.log(nextLetterData,nextLetterData.next.toString(2),letterData.toString(2),)
                // console.log(nextLetterData.next.toString(2),letterData.toString(2),);
                // line.result=pad_with_zeroes((parseInt(nextLetterData.next, 2)&parseInt(letterData, 2)).toString(2))
                line.result="cdcwd"
                // console.log("0000111".toString(2),"1111111".toString(2))
                
                // console.log(("0000101".toString(2)|"0000000".toString(2)).toString(2));
                // console.log(("0000101".toString(2)|"0000000".toString(2)).toString(2))

                // console.log((parseInt("0000101", 2)|parseInt("0001000", 2)).toString(2))

            }
            else{
                line.result="error";
            }
        }
        else{
            // line.letterDatas.forEach(letterData=>{
            //     console.log(letterData.matchingData)
            // })
           
            // console.log(line.noOfLetters,line.letterDatas[0].matchingData)
            let firstMatchingData=line.letterDatas[0].matchingData;
            let matchingPattern=[];
            let isError=true;
            firstMatchingData.forEach(match=>{
                const nextLetterData=arr2.find(line=>line.binary==match)
                const secondDataMatchIndex=line.letterDatas[1].matchingData.findIndex(data=>data==nextLetterData.next)
                if(secondDataMatchIndex>=0){
                    matchingPattern.push([match,nextLetterData.next])
                    isError=false;
                }
                //console.log( line.letterDatas[1].matchingData)
                // console.log(match,nextLetterData.next,secondDataMatchIndex)
            })
            line.matchingPattern=matchingPattern
            if(isError){
                line.matchingPattern=[];
                line.result="error"
            }
            else{
                let two=1;
                for(let i=two;i<line.noOfLetters;i++){
                    const tempqq=matchingPattern.map(line=>line[i])
                    // console.log(tempqq)
                    for(let j=0;j<tempqq.length;j++){
                        const nextLetterData=arr2.find(line=>line.binary==tempqq[j]);
                        // console.log(nextLetterData)
                        if(nextLetterData){
                            if(line.letterDatas[i+1]){
                                const secondDataMatchIndex=line.letterDatas[i+1].matchingData.findIndex(data=>data==nextLetterData.next)
                                // console.log(tempqq[j],nextLetterData.next,secondDataMatchIndex)
                                if(secondDataMatchIndex>=0){
                                    matchingPattern[j].push(nextLetterData.next)
                                }
                            }
                            
                        }
                    }   
                }

                line.matchingPattern=matchingPattern
            }
            // console.log(isError,matchingPattern)
        }
    })
   
    dataLines.forEach(line=>{
        if(line.noOfLetters==1){}
        else{
            if(line.result!="error"){
                const noOfMatchingPatterns=line.matchingPattern.filter(matchingPatterLine=>matchingPatterLine.length==line.noOfLetters)
                if(noOfMatchingPatterns.length!=1){
                    line.result="error"
                }
                else{
                    const nextLetterData=arr2.find(line=>line.binary==noOfMatchingPatterns[0][noOfMatchingPatterns[0].length-1]);
                    line.result=nextLetterData.next;
                // console.log(line.matchingPattern,line.noOfLetters,noOfMatchingPatterns.length,noOfMatchingPatterns[0][noOfMatchingPatterns[0].length-1],"\n")
                }
            }
            
        }
    })
    
}
function pad_with_zeroes(number) {

    var my_string = '' + number;
    while (my_string.length < 7) {
        my_string = '0' + my_string;
    }

    return my_string;

}
// crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
//     console.log('5:',Date.now()-start);
// })
// crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
//     console.log('6:',Date.now()-start);
// })
// crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
//     console.log('7:',Date.now()-start);
// })
// crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
//     console.log('8:',Date.now()-start);
// })
