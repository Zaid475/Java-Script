console.log("20-40:")
for( var i=20; i<=40; i++){
    console.log(i)
}
console.log("1-100 only odd:")
for( var i=1; i<=100; i+=2){
    console.log(i)
}
console.log("50-150 in seq of 10:")
for( var i=50; i<=150; i+=10){
    console.log(i)
}
console.log("Arrow function:")
const funcname=(num)=>{
    console.log(num+num);
}

funcname(2);

console.log("Template literals:")
var name="zaid";
console.log(`my name is ${name}`);