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
fs.readFile('e.txt',(err,res)=>{
  originalData=res.toString();
  extractFileData(res.toString());
  filteredPhotos=verticalPhotos;
//   originalPhotos=[...verticalPhotos];
//   let highestNoOfTags=0;
//   let highestNoOfTagsIndex;
  filteredPhotos.sort((a,b) => (b.noOfTags > a.noOfTags) ? 1 : ((a.noOfTags > b.noOfTags) ? -1 : 0)); 
//   filteredPhotos=filteredPhotos.splice(0,40000)
//   for(let i in filteredPhotos){
//     console.log(i,filteredPhotos[i].data.length)
//   }
  slideShow.push({...filteredPhotos[0]});
  filteredPhotos.splice(0,1);
  let {highestTransitionIndexInFilteredPhotos,highestTransitionValue,highestTransitionElement} = getHighestTransitionPhoto(slideShow.length-1);

  slideShow.push(highestTransitionElement)
//   slideShow.forEach(line=>console.log(line.index));
//   console.log(highestTransitionIndexInFilteredPhotos)
  filteredPhotos.splice(highestTransitionIndexInFilteredPhotos,1);
// //   console.log(highestTransitionIndexInFilteredPhotos);
// //   console.log(highestTransitionIndexInFilteredPhotos,highestTransitionElement)


    while(slideShow.length<totalPhotos){
        // console.log(qqq)
    // while(i<50){
        const obj0= getHighestTransitionPhoto(0);
        const objLast= getHighestTransitionPhoto(slideShow.length-1);
        
        if(obj0.highestTransitionIndexInFilteredPhotos==objLast.highestTransitionIndexInFilteredPhotos){
            // console.log("priority")
            slideShow.push(objLast.highestTransitionElement)
            filteredPhotos.splice(objLast.highestTransitionIndexInFilteredPhotos,1);
        }else{
            if(objLast.highestTransitionValue>obj0.highestTransitionValue){
                // console.log("both")
                slideShow.push(objLast.highestTransitionElement)
                filteredPhotos.splice(objLast.highestTransitionIndexInFilteredPhotos,1);
            }
            else{
                // console.log("www");
            }
            slideShow.unshift(obj0.highestTransitionElement)
            filteredPhotos.splice(obj0.highestTransitionIndexInFilteredPhotos,1); 
        }
        // slideShow.forEach(line=>console.log(line.index));
        // console.log('\n')
        // console.log(obj0)
        // console.log(objLast.highestTransitionValue)
        console.log(filteredPhotos.length)
        // i++;
    }
//   console.log(slideShow.length)
 
//   console.log(filteredPhotos.length)
//   console.log(transitionScore)
        
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
    // let ll=filteredPhotos.length;
    // console.log(lastElement)
    const dataToSearch=[...lastElement.data];
    for(let i in filteredPhotos){
       
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
                // console.log(filteredPhotos[i].data.length,highestTransitionValue,i,dataToSearch.length) 
                return {highestTransitionValue,highestTransitionElement,highestTransitionIndexInFilteredPhotos};     
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
