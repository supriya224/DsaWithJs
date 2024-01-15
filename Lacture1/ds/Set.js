// duplicate value hold krne  liye set ds ak use krte hai
// set ds object value array value sb kuch hold krta hai
let data =new Set(["surya","neha", "sister"]);
data.add("riya")
data.add({"email":"supiryam224@gmail.com"})
console.log(data)
data.delete("riya")
console.log(data)
console.log(data.has("neha")) // has decide krta hai ki di gyi value exists krti hai ya naho
// console.log(data)