let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
let lineno = 0;
let totalCases=0;
let currnetN=0;
let currentL=0;
// let currentData;
let currentSolution=[];
// let letterData
function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
};
function getLetter(number) {
    // number=parseInt(number)
   return  number==0?"A":number==1?"B":number==2?"C":number==3?"D":
           number==4?"E":number==5?"F":number==6?"G":number==7?"H":
           number==8?"I":number==9?"J":number==10?"K":number==11?"L":
           number==12?"M":number==13?"N":number==14?"O":number==15?"P":
           number==16?"Q":number==17?"R":number==18?"S":number==19?"T":
           number==20?"U":number==21?"V":number==22?"W":number==23?"X":
           number==24?"Y":"Z"
};
function getIndexOfOtherArray(arr1,arr2) {
    let indexArray=[]
    arr1.forEach(element => {
        indexArray.push(arr2.indexOf(element));
    });
    return indexArray
 };
 function getIndexOfOtherArray2(arr1,arr2) {
    return arr1.map(line=>arr2.indexOf(line));
    // let indexArray=[]
    // arr1.forEach(element => {
    //     indexArray.push(arr2.indexOf(element));
    // });
    // return indexArray
 };


//  let a=getIndexOfOtherArray([4,3,41,5,6],[3,5,6,4,41,42,43])
 
//  let b=getIndexOfOtherArray2([4,3,41,5,6],[3,5,6,4,41,42,43])

// console.log(a)
// console.log(b)
 
function replaceAt(string, index, replace) {
    return string.substring(0,(index)) + replace + string.substring((index) + 1);
}
function factors(n)
{
 let num_factors = [], i;
 
 for (i = 2; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
   num_factors.push(i);
   if (n / i !== i)
    num_factors.push(n / i);
  }
  num_factors.sort(function(x, y){return x - y;});  // numeric sort
  return num_factors;
}
rl.on('line', function(number) {
    if(lineno==0){
        totalCases=number;
    }
    else if(lineno%2==1){
        let lineData=number.split(' ')
        currnetN=parseInt(lineData[0])
        currnetL=parseInt(lineData[1])
        // currnetN=parseInt(number)
    }
    else if(lineno%2==0){
        let currentSolutionLetters=Array(currnetL+1).join('A');
        let currentSolution=[];
        let currentData=number.split(' ').map(line=>parseInt(line));
        let factorsOfData=[];
        let currentDataNumber=2;
        factorsOfData[0]=factors(currentData[0])
        factorsOfData[1]=factors(currentData[1])
        if(factorsOfData[0].length==1){
            currentSolution.push(factorsOfData[0][0])
            currentSolution.push(factorsOfData[0][0])
        }
        else{
            while((JSON.stringify(factorsOfData[0])==JSON.stringify(factorsOfData[factorsOfData.length-1]))){
                factorsOfData.push(factors(currentData[currentDataNumber]))
                currentDataNumber++; 
            }
            let latestAddedNumber=1;
            if(factorsOfData[factorsOfData.length-1].length==1){
                latestAddedNumber=(factorsOfData[factorsOfData.length-1][0]);
                currentSolution[factorsOfData.length]=(factorsOfData[factorsOfData.length-1][0])
                currentSolution[factorsOfData.length-1]=(factorsOfData[factorsOfData.length-1][0])
            }
            else{
                if(factorsOfData[factorsOfData.length-1][0]!=factorsOfData[factorsOfData.length-2][0]&&factorsOfData[factorsOfData.length-1][0]!=factorsOfData[factorsOfData.length-2][1]){
                    currentSolution[factorsOfData.length]=(factorsOfData[factorsOfData.length-1][0])
                    currentSolution[factorsOfData.length-1]=(factorsOfData[factorsOfData.length-1][1])
                    latestAddedNumber=(factorsOfData[factorsOfData.length-1][1])
                }
                else{
                    currentSolution[factorsOfData.length]=(factorsOfData[factorsOfData.length-1][1])
                    currentSolution[factorsOfData.length-1]=(factorsOfData[factorsOfData.length-1][0])
                    latestAddedNumber=(factorsOfData[factorsOfData.length-1][0])
                }
            }
            for(let i=factorsOfData.length-2;i>=0;i--){
                currentSolution[i]=currentData[i]/latestAddedNumber;
                latestAddedNumber=currentData[i]/latestAddedNumber;
            }
        }
        let currentSolutionLength=currentSolution.length;
        for(let i=currentSolutionLength-1;i<currentData.length;i++){
            currentSolution.push(currentData[i]/currentSolution[currentSolution.length-1])
        }
        let cloneOfCurrentSolution=[...currentSolution];
        cloneOfCurrentSolution.sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0)); 
        cloneOfCurrentSolution=removeDuplicates(cloneOfCurrentSolution);
     
        // let sollutionInAlphabetNumbers=getIndexOfOtherArray(currentSolution,cloneOfCurrentSolution)
        let sollutionInAlphabetNumbers= currentSolution.map(line=>cloneOfCurrentSolution.indexOf(line));
        for(let i in sollutionInAlphabetNumbers){
            i=parseInt(i)
            // let letter=getLetter(sollutionInAlphabetNumbers[i]);
            currentSolutionLetters=replaceAt(currentSolutionLetters,i,getLetter(sollutionInAlphabetNumbers[i]));
        }
        // console.log(currentData)
        // console.log(currentSolution)
        // console.log(cloneOfCurrentSolution)
        // console.log(currentSolutionLetters);
        // console.log(sollutionInAlphabetNumbers);

        // console.log(factorsOfFirst,factorsOfSecond);

        // let rivalPath=number;
        // let myPath=Array((currnetN*2-2)+1).join('S');
        // for(let i=0;i<(currnetN*2-2);i++){
        //     if(rivalPath[i].toLowerCase()=='s'){
        //         // console.log(i,myPath[i])
        //         myPath=replaceAt(myPath,i,'E');
        //     }
        //     else if(rivalPath[i].toLowerCase()=='e'){
        //         // console.log(i,myPath[i])
        //         myPath=replaceAt(myPath,i,'S');
        //     }
            
        // }
        console.log("Case #"+ (parseInt(lineno)/2)+": "+currentSolutionLetters)
        if(lineno==totalCases*2){
            return rl.close(); 
        }
    }
   
    lineno++;
}).on('close',function(){
    process.exit(0);
});

// let a="SUBDERMATOGLYPHICFJKNQVWXZ"
// console.log(a.length)
function primeFactorsTo(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}


// console.log(factors(4729181))