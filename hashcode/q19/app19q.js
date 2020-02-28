const fs=require('fs');
let originalData;
let transitionScore=0;
let totalPhotos;
let verticalPhotos=[];
let horizontalPhotos=[];
let filteredPhotos=[];
let originalPhotos;
let slideShow=[];
let qqq=0;
fs.readFile('f.txt',(err,res)=>{
  originalData=res.toString();
  extractFileData(res.toString());
  filteredPhotos=verticalPhotos;
  console.log(filteredPhotos.length)
  let highestNoOfTags=0;
  let highestNoOfTagsIndex;
  filteredPhotos.forEach((p,index)=>{
      if(p.noOfTags>highestNoOfTags){
          highestNoOfTags=p.noOfTags;
          highestNoOfTagsIndex=index
      }
    //   console.log(p.noOfTags)
  })
  slideShow.push({...filteredPhotos[highestNoOfTagsIndex]});
//   slideShow.forEach(line=>console.log(line.index));
//   console.log('\n')
  filteredPhotos.splice(highestNoOfTagsIndex,1);
//   console.log(slideShow.length)
  let {highestTransitionIndexInFilteredPhotos,highestTransitionValue,highestTransitionElement} = getHighestTransitionPhoto(slideShow.length-1);
  transitionScore+=highestTransitionValue;
  slideShow.push({...highestTransitionElement})
//   slideShow.forEach(line=>console.log(line.index));
//   console.log('\n')
  filteredPhotos.splice(highestTransitionIndexInFilteredPhotos,1);
// //   console.log(highestTransitionIndexInFilteredPhotos);
//   console.log(highestTransitionIndexInFilteredPhotos,highestTransitionElement)


    while(slideShow.length<totalPhotos){
    // while(i<50){
        const obj0= getHighestTransitionPhoto(0);
        const objLast= getHighestTransitionPhoto(slideShow.length-1);
        
        if(obj0.highestTransitionIndexInFilteredPhotos==objLast.highestTransitionIndexInFilteredPhotos){
            // console.log(obj0.highestTransitionIndexInFilteredPhotos,objLast.highestTransitionIndexInFilteredPhotos);
            // console.log("priority")
            transitionScore+=objLast.highestTransitionValue;
            slideShow.push(objLast.highestTransitionElement)
            filteredPhotos.splice(objLast.highestTransitionIndexInFilteredPhotos,1);
        }else{
            if(objLast.highestTransitionValue>obj0.highestTransitionValue){
                // console.log("both")
                transitionScore+=objLast.highestTransitionValue;
                slideShow.push(objLast.highestTransitionElement)
                filteredPhotos.splice(objLast.highestTransitionIndexInFilteredPhotos,1);
                // console.log(objLast.highestTransitionIndexInFilteredPhotos)
            }
            else{
                // console.log("www");
            }
            transitionScore+=obj0.highestTransitionValue;
            slideShow.unshift(obj0.highestTransitionElement)
            filteredPhotos.splice(obj0.highestTransitionIndexInFilteredPhotos,1); 
        }
        // slideShow.forEach(line=>console.log(line.index));
        // console.log('\n')
        // console.log(obj0)
        // console.log(objLast.highestTransitionValue)
        // console.log(slideShow.length)
        // i++;
    }
  console.log(slideShow[99])
  console.log(qqq)
//   console.log(filteredPhotos.length)
//   console.log(transitionScore)

// //   console.log(slideShow[slideShow.length-1])
//   const matchingTagsArray=getMatchingTags([...slideShow[0].data],[...highestTransitionElement.data])
//   let noOfMatchingTagsWithLastElement=matchingTagsArray.length;
//   let s1minusS2LastElement=slideShow[0].noOfTags- matchingTagsArray.length;
//   let s2minusS1LastElement=filteredPhotos[highestTransitionIndexInFilteredPhotos].noOfTags- matchingTagsArray.length;
 
//   console.log(matchingTagsArray, Math.min(noOfMatchingTagsWithLastElement,s1minusS2LastElement,s2minusS1LastElement))
        
})

function extractFileData(data){
  totalPhotos=data.slice(0, data.indexOf('\n')+1)
  data=data.replace(totalPhotos,'');
  totalPhotos=parseInt(totalPhotos.replace(/\n/g,""));
  let index=0;
  while(data.indexOf('\n')>0){
    let textLineBreaker=data.slice(0, data.indexOf('\n')+1);
    data=data.replace(textLineBreaker,'');
    textLineBreaker=textLineBreaker.replace(/\n/g,"");
    
    if(textLineBreaker[0]=="H"){
        horizontalPhotos.push({index,data:textLineBreaker});
    }
    else if(textLineBreaker[0]=="V"){
        textLineBreaker=textLineBreaker.replace("V","").trim()
        let tempData=textLineBreaker.split(" ");
        let noOfTags=parseInt(tempData[0]);
        verticalPhotos.push({index,data:tempData.slice(1),noOfTags});
    }
    index++;
   }
   data=data.replace(/\n/g,"");
   data=data.trim();
   if(data.length>0){
    if(data[0]=="H"){
        horizontalPhotos.push({index,data});
    }
    else if(data[0]=="V"){
        data=data.replace("V","").trim();
        let tempData=data.split(" ");
        let noOfTags=parseInt(tempData[0]);
        verticalPhotos.push({index,data:tempData.slice(1),noOfTags});
    }
   }
}

function getHighestTransitionPhoto(slideShowIndex){
    let lastElement=slideShow[slideShowIndex]
    let highestTransitionValue=-1;
    let highestTransitionElement;
    let highestTransitionIndexInFilteredPhotos=-1;
    // console.log(lastElement)
    // console.log(filteredPhotos[0])
    // const matchingTagsArray=getMatchingTags([...lastElement.data],[...filteredPhotos[1].data])
    // let noOfMatchingTagsWithLastElement=matchingTagsArray.length;
    // let s1minusS2LastElement=lastElement.noOfTags- matchingTagsArray.length;
    // let s2minusS1LastElement=filteredPhotos[0].noOfTags- matchingTagsArray.length;
    // console.log(matchingTagsArray);
    // console.log(noOfMatchingTagsWithLastElement,s1minusS2LastElement,s2minusS1LastElement,Math.min(noOfMatchingTagsWithLastElement,s1minusS2LastElement,s2minusS1LastElement))
    // console.log(filteredPhotos[0])
    let ll=filteredPhotos.length;
    // console.log(lastElement)
    const dataToSearch=[...lastElement.data];
    for(let i=0;i<ll;i++){
       
        // const matchingTagsArray=getMatchingTags([...lastElement.data],[...filteredPhotos[i].data])
        let matches=0;
        for(let j in dataToSearch) {
            qqq++;
            if(filteredPhotos[i].data.length>highestTransitionValue*2){
                if(filteredPhotos[i].data.indexOf(dataToSearch[j]) > -1){
                    // ret.push(arr1[j]);
                    matches++;
                }
                // 
                // 
            }
            else{
                // console.log(filteredPhotos[i].data.length,highestTransitionValue,i) 
                break;   
            }
        }
        let noOfMatchingTagsWithLastElement=matches;
        let s1minusS2LastElement=lastElement.noOfTags- matches;
        let s2minusS1LastElement=filteredPhotos[i].noOfTags- matches;
        const miniMum=Math.min(noOfMatchingTagsWithLastElement,s1minusS2LastElement,s2minusS1LastElement)
        if(miniMum>highestTransitionValue){
            highestTransitionValue=miniMum;
            highestTransitionElement=filteredPhotos[i];
            highestTransitionIndexInFilteredPhotos=i
            // console.log(matchingTagsArray)
        }
        // console.log(noOfMatchingTagsWithLastElement,s1minusS2LastElement,s2minusS1LastElement,Math.min(noOfMatchingTagsWithLastElement,s1minusS2LastElement,s2minusS1LastElement))
    }
    return {highestTransitionValue,highestTransitionElement,highestTransitionIndexInFilteredPhotos};   
}

function getMatchingTags(arr1,arr2) {
    let ret = [];
    for(var i in arr1) {   
        if(arr2.indexOf(arr1[i]) > -1){
            ret.push(arr1[i]);
        }
    }
    return ret;
};
