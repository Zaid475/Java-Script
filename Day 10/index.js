
// give an array find two numbers whose addition equal to target .

 var array = [1,2,3,4,5,6,7,8,9,10];
 var empty=[];
 var target = 8;

 function targetfinder(arr,targ,emp){
    for(var i=0; i<=arr.length-1; i++){
        for(var z=0; z<=arr.length-1;z++){
            if(arr[i] + arr[z]== targ){
               (emp.push([arr[i],arr[z]]));
            }
        }

    }
    return emp;
 }
 console.log(targetfinder(array,target,empty));
 

 













 // var todos = ["eat breakfast", "eat lunch", "eat dinner"];

// function updating(array,index,data){
//     array.splice(index,1,data);
//     return array;

// }

// console.log(updating(todos,2,"dont eat"));