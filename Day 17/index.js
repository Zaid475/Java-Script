// try catch throw


// try{
//     function new1(){
//     if(5-3==3){
//         console.log("correct")
//     }
//     else{
//         throw new Error("Mathematical error");

//     }
// }
// new1();
// }
// catch(error){
//     console.log("The error is",error)
// }
// finally{
//     console.log("The code is done here")
// }



// async await

//  function new1 (){
//     console.log("1");
//     console.log("2");
//      new2();
//     console.log("4");
// }

// function new2(){
//    setTimeout(()=>{
//     console.log("zaid");


//   },2000)


// }
// new1();


function timeConsumingFunction() {
    const output = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hello");
      }, 5000);
    });
    return output;
  }
  
  async function myasyncFunction() {
    console.log(1);
    const output = await timeConsumingFunction(); // api call
    console.log(3, output);
  }
  
  myasyncFunction();
  