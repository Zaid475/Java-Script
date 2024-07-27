// 1. Create an array with the numbers 1 through 10. Write a function to remove all even
// numbers from this array and return the new array.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: [1, 3, 5, 7, 9]

// var data=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function evenremover(array){
//     for(var i=0; i<=array.length-1; i++){
//         if(array[i]%2==0){
//             array.splice(i,1);
//         }
//     }
//     return array;

// }

// console.log(evenremover(data));

// -------------------------------------------------------------------------------------------------------

// 2.Write a function that takes a string as an argument and returns the number of
// vowels in the string. Ignore case sensitivity.
// Input: "Hello World"
// Output: 3

// var str="Hello World";
// var first="a";
// var second="e";
// var third="i";
// var fourth="o";
// var fifth="u";


// function vowelfinder(string){
//     var count=0;
//     for(var i=0; i<=string.length-1; i++ ){
//         if(string[i]=="a" || string[i]=="e" || string[i]=="i" || string[i]=="o" || string[i]=="u"){
//             count++;
//         }
//     }
//     return count;



// }

// console.log(vowelfinder(str));

// ---------------------------------------------------------------------------------------------------



// 5. Write a function that takes an array of numbers and returns a new array with only
// the prime numbers from the original array.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: [2, 3, 5, 7]


// 6. Write a function that takes three numbers and returns the largest of the three
// without using the Math.max() method.
// Input: 3, 5, 1
// Output: 5


// function largestnumber(a,b,c){
//     if(a>b && a>c){
//         console.log("the greatest is",a);
//     }

//    else if(b>a && b>c){
//         console.log("the greatest is",b);
//     }

//     else{
//         console.log("The greatest is",c) ;
//     }

// }
// (largestnumber(3,5,1))


// 7. Write a function that takes an array of numbers and returns the product of all the
// numbers in the array.
// Input: [1, 2, 3, 4]
// Output: 24


//  var input= [1, 2, 3, 4];

//  function arrayproduct(inp){
//     var count=1;
//     for(var i=0;i<=inp.length-1;i++){
//         count=count*inp[i];
//     }
//     return count;


//  }
//  console.log(arrayproduct(input));


//  Write a function that takes a string and an optional character. The function should
// return the number of times the character appears in the string. If the character is
// not provided, count the number of spaces in the string.
// Input: ("Hello World", "o")
// Output: 2
// Input: ("Hello World")
// Output: 1

   
// var string1="Hello World"
//   var string2="o";

//   function returnnumber(str1,str2){
//     var count=0;
    
//     for(var i=0; i<=str1.length-1; i++){
//         if(str1[i]==str2){
//             count++;
//         }
//     }
//     return count;


//   }
//   console.log(returnnumber(string1,string2));


// var string1="Hello World"
//   var string2=" ";

//   function returnnumber(str1,str2){
//     var count=0;
    
//     for(var i=0; i<=str1.length-1; i++){
//         if(str1[i]==str2){
//             count++;
//         }
//     }
//     return count;


//   }
//   console.log(returnnumber(string1,string2));






//   var favplayer="cristiano";

// switch(favplayer){
//     case "messi":
//         console.log("wrong player");
//         break;

//     case "neymar":
//         console.log("wrong player");
//         break;

//     case "cristiano":
//         console.log("right player");
//         break;
        
//     default:
//         console.log("no such player");
// }


// Write a function that takes a score (0-100) and returns the corresponding grade (A,
//     B, C, D, F) based on standard grading scale. Use a switch statement with a default
//     case for invalid scores.
//     Input: 85
//     Output: B


// function grading(num){
  
//     switch (true){
//         case (num>=0 && num<=20):
//             return "A";
//             break;

//         case (num>=21 && num<=40):
//             return "B";
//             break;

//         case (num>=41 && num<=60):
//             return "C";
//             break;

//         case (num>=61 && num<=80):
//             return "B";
//             break;
        
//         case (num>=81 && num<=100):
//             return "A";
           
        
//             break;
        
//         default:
//             console.log("Invalid Scores")
        
    

//     }
// }
// console.log(grading(85));



// 10. Write a function that takes an array of strings and returns an object where the
// keys are the strings and the values are the lengths of those strings. The function
// should exclude strings that have a length of 3 or less.
// Input: ["apple", "bat", "car", "dolphin"]
// Output: {"apple": 5, "dolphin": 7}


// var array=["apple", "bat", "car", "dolphin"];
// var newarray=[];
// function length(arr,newarr){
//     for(i=0; i<=arr.length-1; i++){
//         if(arr[i].length > 3){
//             newarr.push(arr[i], arr[i].length)

           
//         }
//     }
//     return newarr;

// }
// console.log(length(array,newarray));


// 4. Write a function that takes a month as an argument (e.g., "January") and returns
// the number of days in that month. Consider leap years for February. Use a switch
// statement.
// Input: "February"
// Output: 28 or 29 (depending on whether it's a leap year)


// var moonth="February";
// function dayfinder(month) {
// 	switch (month) {
// 		case "January":
// 			return 31;
// 			break;

// 		case "February":
// 			return 28;
// 			break;
// 		case "March":
// 			return 31;
// 			break;
// 		case "April":
// 			return 30;
// 			break;
// 		case "May":
// 			return 31;
// 			break;
// 		case "June":
// 			return 30;
// 			break;
// 		case "July":
// 			return 31;
// 			break;
// 		case "August":
// 			return 31;
// 			break;
// 		case "September":
// 			return 30;
// 			break;
// 		case "October":
// 			return 31;
// 			break;
// 		case "November":
// 			return 30;
// 			break;
// 		case "December":
// 			return 31;
// 			break;

// 		default:
// 			break;
// 	}
// }
// console.log(dayfinder(moonth));


// 2. Write a function that takes a string as an argument and returns the number of
// vowels in the string. Ignore case sensitivity.
// Input: "Hello World"
// Output: 3
// 3. Write a for loop that prints the first 10 Fibonacci numbers.
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34


// function fibo(){
//     var a=0;
//     var b=1;
//     console.log(a);
//     console.log(b);

//     for(var i=0; i<=7; i++){
//         var temp=a+b;
//         console.log(temp);
//         a=b;
//         b=temp;

//     }
// }
// fibo();