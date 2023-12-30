let data =[100,90,20,4,10];

for(let i=0; i<data.length; i++){ // 1-[0], 2-[1] ,3[2],4[3], 5[4]
    for(let j=0; j<data.length; j++){  // when 1-[0] then (0,1,2,3,4) all will be run
         // when 2-[1] then (0,1,2,3,4) all will be run
          // when 3-[2] then (0,1,2,3,4) all will be run
           // when 4-[5] then (0,1,2,3,4) all will be run
        console.log(data)
        if(data[j]>data[j+1]){ //agr data[j] bada hoga to 
            let temp=data[j];  //temp me data[j] ki value store hogi
            data[j] =data[j+1]; // fir data[j] me data[j+1]
            data[j+1]=temp; // data[j+1] =temp
        }
    }
}
console.log(data);