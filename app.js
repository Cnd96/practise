
const fs=require('fs');
let qqq=0
let originalData;
let pizzaData=[];
let reversePizza=[];
let maxSlicesNeed;
let typeOfPizza;

let file="A"
let bestMatchingSlices=0;
let bestMatch;
fs.readFile(file+'.in',(err,res)=>{
  // let firstTextWithLineBreaker=data.slice(0, data.indexOf('\n')+1);
  //   data=data.replace(firstTextWithLineBreaker,'');
  //   firstTextWithLineBreaker=firstTextWithLineBreaker.replace(/\n/g,"");
  originalData=res.toString();
  extractFileData(res.toString())
  // console.log(pizzaData)
  reversePizza = pizzaData.slice().reverse();
  // console.log(reversePizza)
  combinations2(reversePizza)
  // console.log(bestMatch,bestMatchingSlices,'\n',qqq,'\n')
  let originalMatchArrayReverse=[];
  bestMatch.forEach(match=>{
    let originalIndex=pizzaData.findIndex(data=>data==match)
    originalMatchArrayReverse.push(originalIndex)
  })

  console.log(originalMatchArrayReverse.slice().reverse(),originalMatchArrayReverse.length)
  // for(let )

  
  // for(let i=0;i<10000;i++){
  //   let total=0;
  //   pizzaData.forEach(data=>{
  //     total+= parseInt(data)
  //   })
  //   // console.log(total,i)
  // }
  fs.writeFileSync(file+'AA.in',originalMatchArrayReverse.length+"\n"+originalMatchArrayReverse.slice().reverse(), function (err) {
      if (err) throw err;
  });
  // let aa=pizzaData.reduce( (accumulator, slices)=> {return accumulator + parseInt(slices)}, 0);
 
})


let totalSlices1;
let totalSlices2;
function combinations2(str) {
  let matchingPizzaSet;
  var fn = function(active, rest,totalAA) {
    qqq++;
      if (!active && !rest)
          return;
      if (rest.length==0) {
        if(!matchingPizzaSet){
         let temp=[...active];
         totalSlices1=0;
         temp.forEach(data=>{
          totalSlices1+= parseInt(data)
         })
        //  totalSlices1 = temp.reduce( (accumulator, slices)=> {return accumulator + parseInt(slices)}, 0);
         if(maxSlicesNeed==totalSlices1){
            matchingPizzaSet=[...temp];
            bestMatchingSlices=totalSlices1;
            bestMatch=temp;
            fs.writeFileSync(file+'r.in',temp+"\n win total "+totalSlices1, function (err) {
              if (err) throw err;
            });
         }
         else if(maxSlicesNeed>totalSlices1){
           if(totalSlices1>bestMatchingSlices){
            bestMatchingSlices=totalSlices1;
            bestMatch=temp;
            fs.writeFileSync(file+'r.in',temp+"\n best total "+totalSlices1, function (err) {
              if (err) throw err;
            });
           }
         }
        }
      } else {
        if(!matchingPizzaSet){
          active.push(rest[0])
          totalAA+=rest[0];
          // totalSlices2=0
          // active.forEach(data=>{
          //   totalSlices2+= parseInt(data)
          // })
          // console.log(rest.length)
        // totalSlices2 = active.reduce( (accumulator, slices)=> {return accumulator + parseInt(slices)}, 0);
          if(totalAA<=maxSlicesNeed){
            // setImmediate(() => fn(active, [...rest.slice(1)],totalAA))
            // process.nextTick(() => fn(active, [...rest.slice(1)],totalAA))
            // setTimeout(() =>fn(active, [...rest.slice(1)],totalAA), 0)
            fn(active, [...rest.slice(1)],totalAA)
          }

          let aa=active.pop()
          totalAA-=aa;
          // setImmediate(() => fn(active, [...rest.slice(1)],totalAA))
          // process.nextTick(() => fn(active, [...rest.slice(1)],totalAA))
          // setTimeout(() =>fn(active,[...rest.slice(1)],totalAA), 0)
          fn(active, [...rest.slice(1)],totalAA)
          
        }
      }
      // return bestMatch
  }
  return fn([], str,0);
}
function extractFileData(tempData){
  let firstTextWithLineBreaker=tempData.slice(0, tempData.indexOf('\n')+1)
  tempData=tempData.replace(firstTextWithLineBreaker,'');
  firstTextWithLineBreaker=firstTextWithLineBreaker.replace(/\n/g,"")
  maxSlicesNeed=firstTextWithLineBreaker.slice(0,firstTextWithLineBreaker.indexOf(' ')).trim()
  typeOfPizza=firstTextWithLineBreaker.replace(maxSlicesNeed,'').trim()
  while(tempData.indexOf(' ')>0){
      let dataToPush=tempData.slice(0,tempData.indexOf(' ')).trim()
      tempData=tempData.replace(dataToPush,'').trim()
      pizzaData.push(parseInt(dataToPush))
  }

  pizzaData.push(parseInt(tempData))
}


