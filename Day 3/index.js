// Conditional statements
var age=10;
if(age<18){
    console.log("you are not an adult yet")
}
else if(age==0){
    console.log("not born yet")
}
else{
    console.log("you are an adult")
}

// Logical operators
var person1="zaid";
var person2="ritesh"
var person3="zaid";
var person4="ritesh"
//&& operator
// if(person1==person3 && person2==person4){
//     console.log("Person1 and Person3 are equal --Person2 and Person4 are equal")
// }
//  ||operator
if(person1==person3 || person1==person2){
    console.log("Person1 and Person3 are equal --Person1 and Person2 are not equal")
}

//switch 

var favplayer="cristiano";

switch(favplayer){
    case "messi":
        console.log("wrong player");
        break;

    case "neymar":
        console.log("wrong player");
        break;

    case "cristiano":
        console.log("right player");
        break;
        
    default:
        console.log("no such player");
}