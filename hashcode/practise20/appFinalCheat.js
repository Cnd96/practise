const fs=require('fs');
let pizzaData=[];
let reversePizza=[];
let maxSlicesNeed;
const fileName="e_also_big";
let bestMatchingSlices=0;
let bestMatch;
fs.readFile(fileName+'.in',(err,res)=>{
  originalData=res.toString();
  extractFileData(res.toString())
  reversePizza = pizzaData.slice().reverse();
  calculate(reversePizza);
  let answerString=bestMatch.slice().reverse().toString().split(',').join(' ');
  fs.writeFileSync(fileName+'_answer.in',bestMatch.length+"\n"+answerString, function (err) {
      if (err) throw err;
  });
})


function calculate(pizzaData) {
  let matchingPizzaSet;
  var fn = function(active, rest) {
      if (!active && !rest)
          return;
      if (rest.length==0) {
        if(!matchingPizzaSet){
         let temp=[...active];
         let totalSlices1 = temp.reduce( (accumulator, slices)=> {return accumulator + parseInt(slices.slicesData)}, 0);
         
         if(maxSlicesNeed==totalSlices1){
            matchingPizzaSet=[...temp];
            bestMatchingSlices=totalSlices1;
            bestMatch=temp.map(line=>line.index);
         }
         else if(maxSlicesNeed>totalSlices1){
           if(totalSlices1>bestMatchingSlices){
            bestMatchingSlices=totalSlices1;
            bestMatch=temp.map(line=>line.index);
           }
         }
        }
      } else {
        if(!matchingPizzaSet){
          active.push(rest[0])
          let totalSlices2 = active.reduce( (accumulator, slices)=> {return accumulator + parseInt(slices.slicesData)}, 0);
         
          if(totalSlices2<=maxSlicesNeed){
            bestMatch=active.map(line=>line.index);
            let answerString=bestMatch.slice().reverse().toString().split(',').join(' ');
            fs.writeFileSync(fileName+'_answer.in',bestMatch.length+"\n"+answerString, function (err) {
                if (err) throw err;
            });
            fn(active, [...rest.slice(1)])
          }
          active.pop()
          fn(active, [...rest.slice(1)])
          
        }
      }
  }
  return fn([], pizzaData);
}
function extractFileData(tempData){
  let index=0;
  let firstTextWithLineBreaker=tempData.slice(0, tempData.indexOf('\n')+1)
  tempData=tempData.replace(firstTextWithLineBreaker,'');
  firstTextWithLineBreaker=firstTextWithLineBreaker.replace(/\n/g,"")
  maxSlicesNeed=firstTextWithLineBreaker.slice(0,firstTextWithLineBreaker.indexOf(' ')).trim()
  typeOfPizza=firstTextWithLineBreaker.replace(maxSlicesNeed,'').trim()
  while(tempData.indexOf(' ')>0){
      let dataToPush=tempData.slice(0,tempData.indexOf(' ')).trim()
      tempData=tempData.replace(dataToPush,'').trim()
      pizzaData.push({slicesData:parseInt(dataToPush),index})
      index++
  }

  pizzaData.push({slicesData:parseInt(tempData),index})
}


