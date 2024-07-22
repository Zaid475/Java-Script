
console.log("Addition")
function addition1(starting, ending){
    var count=0;
    for(var i=starting; i<=ending; i++){
        count=count + i;
     }
     console.log(count);

}
addition1(10,30);


console.log("factorial");

function factorial(starting,ending){
    count=1;
    for(var i=starting; i>=ending;i--){
        count=count*i;
     }
     console.log(count);

}
factorial(5,1);




console.log( "Q Given a string find is string palindrome or not" )
function palindromechecker(string){
    for(var i=0; i<Math.floor(string.length/2); i++){
        if(string[i] != string[string.length-1-i]){
            return false;
           
        }
        
           
          
            
      
    }
   return true;

}

console.log(palindromechecker("mazdmm"));
console.log(palindromechecker("madam"));
console.log(palindromechecker("rotor"));






  











