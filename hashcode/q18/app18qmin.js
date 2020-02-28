const fs=require('fs');
let rows;
let colomuns;
let vehicles;
let rides;
let bonus;
let bontt=0;
let tot=0;
let steps;
let originalRidesData=[];
let vehiclesDetails=[];
let cancelledRides=[];
fs.readFile('c.in',(err,res)=>{
  originalData=res.toString();
  extractFileData(res.toString());
  originalRidesData.sort((a,b) => (a.startDistance > b.startDistance) ? 1 : ((b.startDistance > a.startDistance) ? -1 : 0)); 
// originalRidesData.sort((a,b) => (a.earliestStart > b.earliestStart) ? 1 : ((b.earliestStart > a.earliestStart) ? -1 : 0)); 
//   for(let i in originalRidesData){
//     console.log(originalRidesData[i].startDistance)
// }
  firstAllocation();
//   for(let i in vehiclesDetails){
//     console.log(vehiclesDetails[i].currentTime)
// }
//   
  let isOver=vehiclesDetails.filter(vehicle=>vehicle.isOver==false);
//   console.log(isOver.length)
// //   console.log(originalRidesData)
  while(isOver.length>0){
    remainingllocation();
    isOver=vehiclesDetails.filter(vehicle=>vehicle.isOver==false);
  }
  let isCancel=originalRidesData.filter(ride=>ride.isCancel==true);
  console.log(isCancel.length)
  console.log(tot)
//   let ttt=vehiclesDetails
//   console.log(vehiclesDetails[1])

})
function firstAllocation(){
    let allocatingVehicles=originalRidesData.splice(0,vehicles);
    let vehicleIndex=1;
    for(let i=vehicleIndex;i<=vehicles;i++){
        let time=0;
        // if(allocatingVehicles[i-1].isBonus){
        //     time= allocatingVehicles[i-1].earliestStart+allocatingVehicles[i-1].travelDistance;
        //     // console.log(allocatingVehicles[i-1].startDistance>allocatingVehicles[i-1].earliestStart)
        // }
        // else{
        //     time=allocatingVehicles[i-1].startDistance+allocatingVehicles[i-1].travelDistance;
        //     // console.log(allocatingVehicles[i-1].startDistance>allocatingVehicles[i-1].earliestStart)
        // }
        if(allocatingVehicles[i-1].startDistance>allocatingVehicles[i-1].earliestStart){
            time=allocatingVehicles[i-1].startDistance+allocatingVehicles[i-1].travelDistance;
        }
        else{
            time= allocatingVehicles[i-1].earliestStart+allocatingVehicles[i-1].travelDistance;
           bontt++;
            // console.log(time)
        }
        tot+=allocatingVehicles[i-1].totalScore;
        // console.log(allocatingVehicles[i-1].earliestStart,allocatingVehicles[i-1].totalScore)
        vehiclesDetails.push({vehicleNumber:i,isOver:false,currentTime:time,currentX:allocatingVehicles[i-1].endX,currentY:allocatingVehicles[i-1].endY
            ,vehiclesAllocated:[{index:allocatingVehicles[i-1].index,totalScore:allocatingVehicles[i-1].totalScore}]})
    }
}
function remainingllocation(){
    vehiclesDetails.sort((a,b) => (a.currentTime > b.currentTime) ? 1 : ((b.currentTime > a.currentTime) ? -1 : 0)); 
    for(let i in vehiclesDetails){
        // console.log(vehiclesDetails[i].currentTime)
        reCalculateTotalScore(vehiclesDetails[i])
        let notCancelledRides=originalRidesData.filter(data=>data.isCancel==false);
        // console.log(notCancelledRides[0].startDistance,notCancelledRides[0].startX,vehiclesDetails[i].currentX)
        if(notCancelledRides.length>0){
            if(notCancelledRides[0].startDistance+vehiclesDetails[i].currentTime>notCancelledRides[0].earliestStart){
                // console.log(notCancelledRides[0],vehiclesDetails[i].currentTime,i)
                vehiclesDetails[i].currentTime+=notCancelledRides[0].startDistance+notCancelledRides[0].travelDistance;
                // console.log(vehiclesDetails[i].currentTime,i)
            }
            else{
                vehiclesDetails[i].currentTime= notCancelledRides[0].earliestStart+notCancelledRides[0].travelDistance;
                bontt++;
            }
            vehiclesDetails[i].currentX=notCancelledRides[0].endX
            vehiclesDetails[i].currentY=notCancelledRides[0].endY
            tot+=notCancelledRides[0].totalScore;
            vehiclesDetails[i].vehiclesAllocated.push({index:notCancelledRides[0].index,totalScore:notCancelledRides[0].totalScore})
            originalRidesData.splice(0,1);
        }
        else{
            vehiclesDetails[i].isOver=true
        }
    }
}

function reCalculateTotalScore(vehicle){
    // console.log(vehicle)
    for(let i in originalRidesData){
        let newStartDistance=Math.abs(originalRidesData[i].startX-vehicle.currentX)+Math.abs(originalRidesData[i].startY-vehicle.currentY);
        let currentTime=vehicle.currentTime
        let {earliestStart,earliestFinish,travelDistance}=originalRidesData[i]
        if((newStartDistance+currentTime+travelDistance)>earliestFinish){
            originalRidesData[i].isCancel=true;
        }
        else{
            originalRidesData[i].isCancel=false;
            originalRidesData[i].startDistance=newStartDistance;
            if((newStartDistance+currentTime)>earliestStart){
                originalRidesData[i].totalScore=travelDistance
            }
            else{
                originalRidesData[i].totalScore=travelDistance+bonus
            }
        }
    }
    // console.log(originalRidesData[0].startDistance,originalRidesData[0].startX)
    originalRidesData.sort((a,b) => (a.startDistance > b.startDistance) ? 1 : ((b.startDistance > a.startDistance) ? -1 : 0)); 
}

function extractFileData(data){
  let firstLine=data.slice(0, data.indexOf('\n')+1)
  data=data.replace(firstLine,'');
  let firstLineData=firstLine.split(" ");
  rows=parseInt(firstLineData[0]);
  colomuns=parseInt(firstLineData[1]);
  vehicles=parseInt(firstLineData[2]);
  rides=parseInt(firstLineData[3]);
  bonus=parseInt(firstLineData[4]);
  steps=parseInt(firstLineData[5].replace(/\n/g,""));
//   data=data.replace(totalPhotos,'');
//   totalPhotos=parseInt(totalPhotos.replace(/\n/g,""));
  let index=0;
  while(data.indexOf('\n')>0){
    let textLineBreaker=data.slice(0, data.indexOf('\n')+1);
    data=data.replace(textLineBreaker,'');
    textLineBreaker=textLineBreaker.replace(/\n/g,"");
    let tempData=textLineBreaker.split(" ");
    tempData=tempData.map(line=>(parseInt(line)))
    let startDistance=tempData[0]+tempData[1];
    let earliestStart=tempData[4];
    let totalScore=0;
    // let isBonus;
    let travelDistance=Math.abs(tempData[3]-tempData[1])+Math.abs(tempData[0]-tempData[2]);
    if(startDistance>earliestStart){
        totalScore=travelDistance;
        // isBonus=false;
    }
    else{
        totalScore=bonus+travelDistance;
        // isBonus=true;
    }
    let obj={
        startX:tempData[0],
        startY:tempData[1],
        endX:tempData[2],
        endY:tempData[3],
        earliestStart,
        earliestFinish:tempData[5],
        startDistance,
        // isBonus,
        travelDistance,
        totalScore,
        index,
        isCancel:false
    }
    originalRidesData.push(obj);
    // console.log(textLineBreaker,obj)
    index++;
   }
   data=data.replace(/\n/g,"");
   data=data.trim();
   if(data.length>0){
    data=data.replace(/\n/g,"");
    let tempData=data.split(" ");
    tempData=tempData.map(line=>(parseInt(line)))
    let startDistance=tempData[0]+tempData[1];
    let earliestStart=tempData[4];
    let totalScore=0;
    // let isBonus;
    let travelDistance=Math.abs(tempData[3]-tempData[1])+Math.abs(tempData[0]-tempData[2]);
    if(startDistance>earliestStart){
        totalScore=travelDistance;
        // isBonus=false;
    }
    else{
        totalScore=bonus+travelDistance;
        // isBonus=true;
    }
    let obj={
        startX:tempData[0],
        startY:tempData[1],
        endX:tempData[2],
        endY:tempData[3],
        earliestStart,
        earliestFinish:tempData[5],
        startDistance,
        travelDistance,
        // isBonus,
        totalScore,
        index,
        isCancel:false
    }
    originalRidesData.push(obj);
   }
}