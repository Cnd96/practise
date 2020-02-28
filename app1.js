
const fs=require('fs');
let qqq=0
let originalData;
let pizzaData=[];
let maxSlicesNeed;
let typeOfPizza;

let bestMatchingSlices=0;
let bestMatch;
fs.readFile('b.in',(err,res)=>{
  // let firstTextWithLineBreaker=data.slice(0, data.indexOf('\n')+1);
  //   data=data.replace(firstTextWithLineBreaker,'');
  //   firstTextWithLineBreaker=firstTextWithLineBreaker.replace(/\n/g,"");
  originalData=res.toString();
  extractFileData(res.toString())
 
  let aa=[];
  // console.log(pizzaData)

  // for(let i=0;i<pizzaData.length;i++){
  //     let noOfSlicesTemp=0
  //     // while(maxSlicesNeed>noOfSlicesTemp){

  //     // console.log("ww")
  //     // }
  // }
 
  const a= combinations2(pizzaData)
  console.log(a,'\n',qqq,'\n')
  console.log(bestMatch,bestMatchingSlices)
})

function combinations(str) {
    var fn = function(active, rest, a) {
        if (!active && !rest)
            return;
        if (!rest) {
          // console.log(active)
            a.push(active);
        } else {
          // console.log(a)
          // console.log(rest.slice(1),a, rest[0])
            fn(active + rest[0], rest.slice(1), a);
            fn(active, rest.slice(1), a);
        }
        return a;
    }
    return fn("", str, []);
}


function combinations2(str) {
  let matchingPizzaSet;
  var fn = function(active, rest, a) {
      if (!active && !rest)
          return;
      if (rest.length==0) {
        qqq++;
         let temp=[...active];
         let totalSlices = temp.reduce( (accumulator, slices)=> {return accumulator + parseInt(slices)}, 0);
         if(maxSlicesNeed==totalSlices){
            matchingPizzaSet=[...temp];
         }
         else if(maxSlicesNeed>totalSlices){
           if(totalSlices>bestMatchingSlices){
            a.push(temp);
           }
         }
        //  console.log(totalSlices,maxSlicesNeed)
          
      } else {
        // console.log(rest)
        active.push(rest[0])
        let totalSlices = active.reduce( (accumulator, slices)=> {return accumulator + parseInt(slices)}, 0);
      
        // console.log(active,rest.slice(1),a)
        if(!matchingPizzaSet){
          if(totalSlices<=maxSlicesNeed){
            fn(active, rest.slice(1), a);
          }
          // else{
          //   // console.log(active,totalSlices)
          // }
          // fn(active, rest.slice(1), a);
          active.pop()
          // console.log("aaa",temp,"active",active,"rest",rest.slice(1),a,"aaaa")
          fn(active, rest.slice(1), a);
        }
        
      }
      if(matchingPizzaSet){
        return matchingPizzaSet
      }
      return a;
  }
  return fn([], str, []);
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
      pizzaData.push(dataToPush)
  }

  pizzaData.push(tempData)
}


