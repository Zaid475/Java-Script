var inp=[3,2,-1,-3,4,6]
var n=6  

function temp(inp,n){
    let currenttemp=0;
    let maxtemp=0;
    for(var i=0; i<n; i++){
        currenttemp=currenttemp+inp[i];
        if(currenttemp>maxtemp){
            maxtemp=currenttemp;
        }
    }
    return maxtemp;

}
console.log(temp(inp,n))