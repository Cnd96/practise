let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
let lineno = 0;
let totalCases=0;
let currentN=0;
let currentP=0;
let currentData=[];
let totalHours;

function getEqualSkills(arr,numberOfPlayers) {        
    let c;        
    const len = arr.length;    
    let obj = {}; 
    let found=false;               
    for (c = 0; c<len; c++)  {  
        if(!obj[arr[c]] )obj[arr[c]] = 0; 
        obj[arr[c]] +=1;     
        if( obj[arr[c]]==numberOfPlayers){
            found=true;
            break;
        }   
    }  
    if(found){
        return true;
    }          
    return false;      
 }      

rl.on('line', function(number) {
    if(lineno==0){
        totalCases=number;
    }
    else if(lineno%2==1){
        number=number.split(" ");
        currentN=parseInt(number[0]);
        currentP=parseInt(number[1]);
        // currnetN=parseInt(number)
    }
    else if(lineno%2==0){
        totalHours=Number.MAX_SAFE_INTEGER;
        currentData=number.split(" ");
        currentData=currentData.map(l=>parseInt(l));
        currentData.sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0)); 

        let equalSkillsPlayers=getEqualSkills(currentData,currentP);
        if(equalSkillsPlayers){
            totalHours=0;
        }
        else{
            for(let i=0;i<(currentN-currentP+1);i++){
                let currentSet=currentData.slice(i,i+currentP);
                let currentMaximumSkill=currentSet[currentSet.length-1];
                let currentSetHours=0;
    
                for(let j=0;j<currentSet.length-1;j++){
                    currentSetHours+=(currentMaximumSkill-currentSet[j]);
                    if(currentSetHours>totalHours){
                        break;
                    }
                }
             
                if(currentSetHours<totalHours){
                    totalHours=currentSetHours;
                } 
                // console.log(totalHours)
                if(currentSetHours==1){
                    break;
                }
            }
        }
       
        console.log("Case #"+ (parseInt(lineno)/2)+": "+totalHours)
        if(lineno==totalCases*2){
            return rl.close(); 
        }
    }
   
    lineno++;
}).on('close',function(){
    process.exit(0);
});