function isLargest(array, num){
if(num>array){
    throw new Error("num is not greater than array")
}else{
    let max=0;
    for(let i=0; i<array.length; i++){
        let temp=0;
        for(let j=0; j<num; j++){
            console.log("i" + i + "j", j)
            temp+=array[i+j];
        }
        if(temp>max){
            max=temp
        }
    }
    return max
}
}
const result =isLargest([1,4,1,6,5,2,3,4,8],4)
console.log(result)