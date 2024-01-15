let data={
    name:"supria mauyrya",
    age:23,
    email:"supriyam2245@gmail.com",
    getName:function(){
        return this.name
    }

}   

data.contact=122343

console.log(data)
delete data.name 
console.log(data)

for(x in data){
    console.log(x)
}

console.log(Object.values(data))