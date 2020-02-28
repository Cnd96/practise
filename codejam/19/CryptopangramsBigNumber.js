let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
const BigNumber = require('bignumber.js');
let lineno = 0;
let totalCases=0;
let currnetN=0;
let currentL=0;

function getLetter(number) {
   return  number==0?"A":number==1?"B":number==2?"C":number==3?"D":
           number==4?"E":number==5?"F":number==6?"G":number==7?"H":
           number==8?"I":number==9?"J":number==10?"K":number==11?"L":
           number==12?"M":number==13?"N":number==14?"O":number==15?"P":
           number==16?"Q":number==17?"R":number==18?"S":number==19?"T":
           number==20?"U":number==21?"V":number==22?"W":number==23?"X":
           number==24?"Y":"Z"
};
function getFactors(num) {
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
        let currentData=number.split(' ').map(line=> new BigNumber(line));
        // 
        let factorsOfData=[];
        let currentDataNumber=2;
        factorsOfData[0]=getFactors(currentData[0])
        // console.log(factorsOfData[0])
        factorsOfData[1]=getFactors(currentData[1])
        if(factorsOfData[0][0].isEqualTo(factorsOfData[0][1])){
            currentSolution.push(factorsOfData[0][0])
            currentSolution.push(factorsOfData[0][0])
        }
        else{
            
            while((JSON.stringify(factorsOfData[0])==JSON.stringify(factorsOfData[factorsOfData.length-1]))){
                factorsOfData.push(getFactors(currentData[currentDataNumber]))
                currentDataNumber++; 
            }
            let latestAddedNumber=new BigNumber('1');
            if(factorsOfData[factorsOfData.length-1][0].isEqualTo(factorsOfData[factorsOfData.length-1][1])){
                latestAddedNumber=(factorsOfData[factorsOfData.length-1][0]);
                currentSolution[factorsOfData.length]=(factorsOfData[factorsOfData.length-1][0])
                currentSolution[factorsOfData.length-1]=(factorsOfData[factorsOfData.length-1][0])
            }
            else{
              
                if(factorsOfData[factorsOfData.length-1][0].isEqualTo(factorsOfData[factorsOfData.length-2][0])||factorsOfData[factorsOfData.length-1][0].isEqualTo(factorsOfData[factorsOfData.length-2][1])){
                    currentSolution[factorsOfData.length]=(factorsOfData[factorsOfData.length-1][1])
                    currentSolution[factorsOfData.length-1]=(factorsOfData[factorsOfData.length-1][0])
                    latestAddedNumber=(factorsOfData[factorsOfData.length-1][0])
                }
                else{
                    currentSolution[factorsOfData.length]=(factorsOfData[factorsOfData.length-1][0])
                    currentSolution[factorsOfData.length-1]=(factorsOfData[factorsOfData.length-1][1])
                    latestAddedNumber=(factorsOfData[factorsOfData.length-1][1])
                }
            }
            for(let i=factorsOfData.length-2;i>=0;i--){
                let tempNumber= currentData[i].dividedBy(latestAddedNumber);
                currentSolution[i]=tempNumber
                latestAddedNumber=tempNumber
            }
        }
        let currentSolutionLength=currentSolution.length;
        for(let i=currentSolutionLength-1;i<currentData.length;i++){
            currentSolution.push(currentData[i].dividedBy(currentSolution[currentSolution.length-1]))
        }
        let cloneOfCurrentSolution=[...currentSolution];
        
        cloneOfCurrentSolution.sort((a,b) => (a.isGreaterThan(b)) ? 1 : ((b.isGreaterThan(a)) ? -1 : 0)); 
        cloneOfCurrentSolution=cloneOfCurrentSolution.map(line=>line.toFixed());
        cloneOfCurrentSolution=cloneOfCurrentSolution.filter((a, b) => cloneOfCurrentSolution.indexOf(a) === b)

        let sollutionInAlphabetNumbers= currentSolution.map(line=>cloneOfCurrentSolution.indexOf(line.toFixed()));
        for(let i in sollutionInAlphabetNumbers){
            i=parseInt(i)
            currentSolutionLetters=currentSolutionLetters.substring(0,(i)) + getLetter(sollutionInAlphabetNumbers[i]) + currentSolutionLetters.substring((i) + 1);
        }
        console.log("Case #"+ (parseInt(lineno)/2)+": "+currentSolutionLetters)
        if(lineno==totalCases*2){
            return rl.close(); 
        }
    }
    lineno++;
}).on('close',function(){
    process.exit(0);
});
