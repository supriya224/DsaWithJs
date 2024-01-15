let data= new Map([
    ['name', 'supriya'],
    [true, 'boolean'],
    [100, 'supriya'],
]);
data.set('color', 'red')
console.log(data.size)
console.log(data.has)
console.log(data.get)
// data.clear()
console.log(data)

for(x of data){
    console.log(x[1])
}

data.forEach((val, key)=>{
    console.log(key)
})