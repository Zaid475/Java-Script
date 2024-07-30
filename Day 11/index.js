// Objects


// var data={name:"zaid",id:1,age:24};

// accessing the object values using keys:::
// console.log(data.name);
// console.log(data.id);
// console.log(data.age);

// console.log(data['name']);
// console.log(data['id']);
// console.log(data['age']);

// // adding new key value pair into the object:::
// data.gender="male";
// data['location']='mira road'
// console.log(data);
// data.marks=[20,30,40,50,60];
// console.log(data);

// accesing the last element of the array present in object 
// console.log(data.marks[data.marks.length-1]);
// console.log(data.marks[data.marks.length-2]);

// another way of creating object:::

// var ob=new Object();
// ob.name="zaid";
// ob.age=24;
// ob['gender']="male";
// console.log(ob);

// accesing object(keys and values) through loop
// var data={name:"zaid",id:1,age:24};
// for(let key in data){
//     console.log(key,data[key]);
// }






// returning all the keys and values of an object
// var ob={name:"zaid",age:24,gender:"male"};
// console.log(Object.keys(ob));
// console.log(Object.values(ob));


// Q Given an string find out numbers of repetation for single lette.

// v : 1
// i : 1
// n : 1
// a : 2
// y : 1
var string = "miscellaneous";
var op={};

function lengthfinder(string,op){
    // var maxcount=2;
    for(i=0; i<=string.length-1; i++){
        if(op[string[i]]==undefined){
            op[string[i]]=1;
        }
        else{
            op[string[i]]++;
        }

    }
    return op;



}

// function maxcount(op,string){
//     for(i=0;i<=string.length-1; i++){
//         console.log();
//     }

// }

console.log(lengthfinder(string,op));
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


   







