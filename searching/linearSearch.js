

let data=[23,45,12,67,89,0,30,50,20];
let item=89;
index=undefined
for(let i=0;i<data.length-1; i++){
    // console.log(data[i]);    

if(data[i]===item){
    index=i

}
}
// with the help of splice we can =easily delete items
data.splice(4,2);
console.log(data)
