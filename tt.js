// // for(let i=0;i<10;i++){
// //     console.log(i);
// //     if(i==5){
// //         break;
// //     }
// //     for(let j=0;j<4;j++){
// //         console.log("j ",j)
// //         if(j==2){
// //             break;
// //         }
// //     }
// // }

// // console.log("fin")
// function removeDuplicate(arr) {        
//     var c;        
//     var len = arr.length;        
//     var result = [];        
//     var obj = {};                
//     for (c = 0; c<len; c++)  {  
//         if(!obj[arr[c]] )obj[arr[c]] = 0; 
//         obj[arr[c]] +=1;        
//     }  
    
//     // for (c in obj) {            
//     //    result.push(c);        
//     // }            
//     return result;      
//  }              
//  var myArr = [10, 20, 30, 40, 10, 40, 70, 80, 70, 90];  

//  console.log(removeDuplicate(myArr))

let aa=[]
console.log(aa);
const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
const array3 = [2, 3, 4,6]
aa=[...new Set([...aa, ...array2])];
aa=[...new Set([...aa, ...array1])];
console.log(aa);
aa=[...new Set([...aa, ...array3])];

console.log(aa);