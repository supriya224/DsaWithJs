let arr= [23, 67, 12, 3, 9, 20];
function insertionSort(data){
  let i, current, j;
  for(i=1 ;i<data.length; i++){
    console.log(data[i]);
    current=arr[i] // current means kisko compare krna hai data[i] means kisse compare krna hai
    j=i-1; //means i-1 =0 to index 0 ho jayega qki start to 1 se hua hai
    while(j>=0 && data[j]>current){
        
        data[j+1]=data[j]
        j=j-1
    }
    data[j+1]=current
  }
} 
insertionSort(arr);
console.log(arr)