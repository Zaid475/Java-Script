



// Q Given an string find out numbers of repetation for single lette.

// v : 1
// i : 1
// n : 1
// a : 2
// y : 1
// var string = "miscellaneous";
// var op={};

// function lengthfinder(string,op){
   
//     for(i=0; i<=string.length-1; i++){
//         if(op[string[i]]==undefined){
//             op[string[i]]=1;
//         }
//         else{
//             op[string[i]]++;
//         }

//     }
    

//     var count=0;
//     var character=" ";
//     for(let key in op){
//         if(op[key]>count){
//             character=key;
//             count=op[key];

//         }
//     }
//     console.log(op);

//   console.log(`the most repeated letter is ${character} having count of ${count}`);



// }



// (lengthfinder(string,op));
// maxcount(op,string);

//  
// console.log(array.includes(3));

// function including(array,target){
//     if(array.includes(target)){
//         console.log( 'target found');
//     }


// }

// including(arra,targe);

//using arrow function for array methods
// syntax of arrow function
// const name=() =>{};
// var array1=[1,2,3,4,5,6,7,8,9,10];

// find array method
// find method
// const name=array1.find((num)=>num>5);
// console.log(name);

// filter method
// const index=array1.filter((num)=>num>4)
// console.log(index);



// var ages=[10,20,7,25,55,14,17];
// function elgbtchecker(ages){
//     ages.forEach(age => {
//         if(age>=18){
//             console.log(`${age}: is eligible`);
//         }
//         else{
//             console.log(`${age}: is not eligible`);
//         }
        
//     });


// }

// elgbtchecker(ages);


// var ages=[10,20,7,25,55,14,17];

// const agechecker=(ages1)=>{
//     ages.forEach(age=>{
//         if(age>=18){
//                         console.log(`${age}: is eligible`);
//                     }
//                     else{
//                         console.log(`${age}: is not eligible`);
//                     }

//     });


// }
// agechecker(ages);


// var abc="zaid";

// function nameeee(naam){
//     console.log(`${naam} is clever`);

// }

// nameeee(abc);


// // Q Give an aray, do addition of numbers by using while loop .

// var array = [2, 4, 5, 6, 7, 8, 3, 2];
// // // ouput : 120

// function addition(arr){
// var count=0;
// var i=0;
// while(i<=arr.length-1){
//     count=count +arr[i];
//     i++;

// }
// console.log(count);


// }
// addition(array);


// try catch

// try{

//     console.log("zaid");

//     throw new Error("gaalt");
    
    
 
    

// }
// catch(error){
//     console.log(error)

// }
// finally{
//     console.log("code ends here")
// }


// console.log("1");
// console.log("2");
// setTimeout(()=>{
//     console.log("33");

// },2000)

// console.log("4")


// const dhaval=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        reject(console.log("chutiya"))

//     },2000);

// })

// dhaval.catch((resolv)=>{
//     console.log("reso");


// })




