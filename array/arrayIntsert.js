
function insertEle(){
let data =[34,56,1,67,9,0,47];
let newEl=document.getElementById('newEl').value
let position=document.getElementById('position').value
console.log(data);
for (let i=data.length-1; i>=0; i--){
    if(i>=position){
        data[i+1]=data[i]
        if(i==position){
            data[i]=newEl;
        }
    }
    
}
console.log(data);  
}