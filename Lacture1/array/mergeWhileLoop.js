let data1 =[2,7,12,45,90,100];
let data2=[4,9,15,50];
let data3=[];

let d1=0; // jb data 1 ki value d3 me push kreenge to d1 ka use krenge  // ye data1 ki position denote krega
let d2=0; //jb data2 ki value d3 me push kreenge to d2 ka use krenge 
let d3=0; // yha d3 pe har bar value badhegi shorting ke sath sath // ye index btayega
 
while(d1<data1.length && d2<data2.length){ 
    // esme d1 ki value tb tk chlegi tb tk data.length ke brabar na ho jye
    if(data1[d1]<data2[d2]){ //eska mtlub ye hua ki (data1)ki[d1] value  ager (data2)ki[d2] se choti hai to next line
        data3[d3]=data1[d1]; //tb data3[d3] me value store ho jayegi like(3);
        d1++ //jaise data1[i+1] -(7) se data2[i+1]- (4) se comapre kregi //agr d2 chota hai to d2 print hoga or ye asie hi chlta hrega

    }else{ // agr upar wali condition false hogi tb ye wali chlega jha 4 store hona hai
        data3[d3]=data2[d2]; //tb data3[d3] me value store ho jayegi like(4);
        d2++  //eske ek line next pe jayegi
    }
    d3++ // eska mtlub ab d3 ek line aage jayegi 
}
    while(d1<data1.length){ // d1 data1 ki length se chota hai tb ye condition chlega
        data3[d3]=data1[d1]; //tb data3[d3] me value store ho jayegi like(3);
        d1++;
        d3++
    }

console.log(data3)