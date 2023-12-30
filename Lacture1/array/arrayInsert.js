    // insert element in any position
let data= [2,5,7,9,2];
let newEle= 4;
let position =3;
for(let i=data.length-1; i>=0; i--){
    console.log(data);  //before data insert 
    if(i>=position){ // yha par (i>=position) ka mtlub hai jb tk i ki value position se badi ya equal ni ho  jati tb tk chlega 
        data[i+1]=data[i]; // data [i+1] eska mtlub h ki data ke next position ki value rhegi usme data [i] current data ko dalna hai
// console.log(data) 
    }
    if(i==position){
        data[i] =newEle; // yha pe hmare data [i] jo current value hai uss positon me usme new element ko push kr dega 
    }
    // console.log(data);
}
console.log(data)
 // after data insert

