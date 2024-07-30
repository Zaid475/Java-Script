
  // Q Give an aray, do addition of numbers by using while loop .
    
  var array = [2, 4, 5, 6, 7, 8, 3, 2];
  

  function add(arr){
   var start=0;
   var count=0;

   while(start<=arr.length-1){
    count=count+arr[start];
    start++;
      
      

   }
   return count;

  }
  console.log("the addition of numbers is",add(array));
//   Q Give an aray, find only odd numbers by using while loop .
  
   var array1 = [2, 4, 5, 6, 7, 8, 3, 2];
   var newarray=[];

   function odd(arr1,newarr){
    var start=0;
    while(start<=arr1.length-1){
        if(arr1[start]%2!==0){
            newarr.push(arr1[start]);
          
        }
        start++;

    }
    return newarr;

   }
   console.log("the odd numbers are",odd(array1,newarray));

//   // Q Give an aray, find count of even numbers by using while loop .
  
  var array2 = [2, 4, 5, 6, 7, 8, 3, 2];
  function evencount(arr){
    var count=0;
    var start=0;
    while(start<=arr.length-1){
        if(arr[start]%2==0){
            count++;
        }
        start++;

    }
    return count;

  }
  console.log("the even count is",evencount(array2));
  
  