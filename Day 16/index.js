// try catch and finally block


// function trycatchfinally(){

// try{
//  function new1(){
//     console.log(zaid);
//  }
//  new1();

// }
// catch(error){
//     console.log("where is zaid")
   


// }
// finally{
//     console.log("code completed");

// }
// }



// trycatchfinally();


// promise


const proms=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        reject(console.log("zaid"));

    },2000)

})

proms
.then(()=>{
    console.log("resolve")


})

proms.catch(()=>{
    
    console.log(error,"error");

})
