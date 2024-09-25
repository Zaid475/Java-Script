
// give an array find two numbers whose addition equal to target .

//  var array = [1,2,3,4,5,6,7,8,9,10];
//  var empty=[];
//  var target = 8;
//  12345678910--i
//  12345678910--j

//  function targetfinder(arr,targ,emp){
//     for(var i=0; i<=arr.length-1; i++){
//         for(var z=0; z<=arr.length-1; z++){
//             if(arr[i]+ arr[z] ==targ){
//                 emp.push([arr[i],arr[z]]);

//             }




//         }
//     }
//     return emp;
   
//  }
//  console.log(targetfinder(array,target,empty));
 

 













 // var todos = ["eat breakfast", "eat lunch", "eat dinner"];

// function updating(array,index,data){
//     array.splice(index,1,data);
//     return array;

// }

// console.log(updating(todos,2,"dont eat"));


// var array=[10,20,30,40,50,60];


// const abc=(arr)=>{
//     arr.forEach((ary)=>{
//       if (ary>30){
//        console.log(ary);
//       }

//     })

// }
// abc(array);


// 1. Create an array with the numbers 1 through 10. Write a function to remove all even
// numbers from this array and return the new array.
// var Input= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(){
//   if{
//     splice(i,0)
//   }
// }



// 2.Write a function that takes a string as an argument and returns the number of
// vowels in the string. Ignore case sensitivity.
// Input: "Hello World"
// Output: 3


// 10. Write a function that takes an array of strings and returns an object where the
// keys are the strings and the values are the lengths of those strings. The function
// should exclude strings that have a length of 3 or less.
var input= ["apple", "bat", "car", "dolphin"];
// Output: {"apple": 5, "dolphin": 7}
var ob={}


// function dede(inp,ob){
//   for(var i=0; i<=inp.length-1; i++){
//    if(inp[i].length>3){
//      ob[input[i]]=inp[i].length;

    

//     }

//   }
//   return ob;
// }
//   console.log(dede(input,ob));



// 3. Write a for loop that prints the first 10 Fibonacci numbers.

    a  b
//  0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function fibonacci(){
  console.log(0);
  console.log(1);
  var a=0;
  var b=1;
  for(var i=0; i<8; i++){

    var temp;
    var temp=a+b;
    console.log(temp);
    var a=b;
    var b=temp;


  }



}
fibonacci();