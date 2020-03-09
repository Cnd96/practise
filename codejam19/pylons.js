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
let resultLength=0;
let result=[];
let found=false;

function getResult(aArrays){
    for(let i=0;i<aArrays.length;i++){
        let indexR=result.findIndex(l=>JSON.stringify(l)==JSON.stringify(aArrays[i]));
        if(indexR<0){
            result.push(aArrays[i]);
            if(result.length==resultLength){
                found=true;
                break;
            }
            else{
                let indexC=solutionMain.findIndex(l=>JSON.stringify(l)==JSON.stringify(aArrays[i]));
                getResult(solutionData[indexC]);
                if(found){
                    break;
                }
            }
        }
    }
    if(found){
        return ;
    }
    result.pop();
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
                    solutionData.push([]);
                    solutionMain.push([i,j]);
                }
            }

            for(let i=0;i<matrix.length;i++){
                for(let j=i+1;j<matrix.length;j++){
                    if(matrix[i][0]!=matrix[j][0]&&
                       matrix[i][1]!=matrix[j][1]&&
                       ((matrix[i][0]+matrix[i][1])!=(matrix[j][0]+matrix[j][1]))&&
                       ((matrix[i][0]-matrix[i][1])!=(matrix[j][0]-matrix[j][1]))
                    ){
                        let indexi=solutionMain.findIndex(l=>JSON.stringify(l)==JSON.stringify(matrix[i]));
                        let indexj=solutionMain.findIndex(l=>JSON.stringify(l)==JSON.stringify(matrix[j]));

                        solutionData[indexi].push(matrix[j]);
                        solutionData[indexj].push(matrix[i]);
                    }
                }
            }
            if(solutionData[0].length>0){
                result.push(solutionMain[0]);
                getResult(solutionData[0]);
                if(found){
                    console.log("Case #"+lineno+": POSSIBLE");
                    result.forEach(line=>{
                        console.log(line[0],line[1])
                    }) 
                }
                else{
                    console.log("Case #"+lineno+": IMPOSSIBLE");
                }
            }
            else{
                console.log("Case #"+lineno+": IMPOSSIBLE");
            }
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

