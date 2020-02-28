let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
let lineno = 0;
let totalCases=0;
let matrix=[];
let matrixSizes;
let rows;
let columns;
let solutionMain=[];
let solutionData=[];
let solutionHeader=[];
let solutionAA=[];
let resultLength=0;
let result=[];
let found=false;
let q=0
function getResult(aArrays,solutionArray){
  //  let solutionAAClone=[...solutionArray];
    for(let j in solutionArray){              
     let rIndex=solutionArray[j].indexOf(result[result.length-1])
    //  console.log(result[result.length-1],rIndex)
     if(rIndex>-1){
      solutionArray[j].splice(rIndex,1)
     }
    } 
    for(let i=0;i<aArrays.length;i++){
        q++;
        // console.log(aArrays[i])
        let numberToInsert=aArrays[i]
        // console.log("in ",numberToInsert,solutionArray[numberToInsert-1])
        let indexR=result.indexOf(numberToInsert);
        if(indexR<0){
            
            result.push(aArrays[i]);
  
            if(result.length==resultLength){
                found=true;
                break;
            }
            else{
                // console.log(solutionAAClone,(numberToInsert-1))
                getResult([...solutionArray[numberToInsert-1]],JSON.parse(JSON.stringify(solutionArray)));
                if(found){
                     break;
                }
            }
        }
        // console.log(aArrays)
    }
    if(found){
        return ;
    }
    let a=result.pop();
    // console.log(a)
}
rl.on('line', function(number) {
    if(lineno==0){
        totalCases=number;
    }
    else{
        if(totalCases>0){
            found=false;
            solutionData=[];
            solutionMain=[];
            result=[];
            matrix=[];
            matrixSizes=number.split(" ")
            rows=parseInt(matrixSizes[0]);
            columns=parseInt(matrixSizes[1]);
            resultLength=rows*columns
            for(let i=1;i<=rows;i++){
                for(let j=1;j<=columns;j++){
                    matrix.push([i,j]);
                    solutionHeader.push(((i-1)*columns+j));
                    solutionAA.push([]);
                }
            }

            for(let i=0;i<matrix.length;i++){
                for(let j=i+1;j<matrix.length;j++){
                    if(matrix[i][0]!=matrix[j][0]&&
                       matrix[i][1]!=matrix[j][1]&&
                       ((matrix[i][0]+matrix[i][1])!=(matrix[j][0]+matrix[j][1]))&&
                       ((matrix[i][0]-matrix[i][1])!=(matrix[j][0]-matrix[j][1]))
                    ){
                        solutionAA[i].push(j+1);
                        solutionAA[j].push(i+1);
                    }
                }
            }
            // for(let i in solutionAA){
            //     let rIndex=solutionAA[i].indexOf(solutionHeader[0])
             
            //     if(rIndex>-1){
            //       solutionAA[i].splice(rIndex,1)
            //     }
               
            // } 
            console.log(solutionAA)
            // console.log()

            // if(solutionAA[0].length>0){
            //     result.push(solutionHeader[0]);
            //     getResult([...solutionAA[0]],JSON.parse(JSON.stringify(solutionAA)));
            //     if(found){
            //         console.log("Case #"+lineno+": POSSIBLE");
            //         console.log(result)
            //         // result.forEach(line=>{
            //         //     console.log(line[0],line[1])
            //         // }) 
            //     }
            //     else{
            //         console.log("Case #"+lineno+": IMPOSSIBLE");
            //     }
            // }
            // else{
            //     console.log("Case #"+lineno+": IMPOSSIBLE");
            // }
            // console.log(q)
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

