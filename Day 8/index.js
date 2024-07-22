//print addition of numbers which are odd

function arrayaddition(array){
    var count=0;
    for( var i=0; i<=array.length-1;i++){
        if(array[i]%2 !== 0){
            count=count + array[i];
        }
             


    }
   return count;

}

// var data=[1,2,3,4,5,6,7,8,9];
var data1=[1,2,3,4];

console.log(arrayaddition(data1));
// console.log(arrayaddition(data1));

