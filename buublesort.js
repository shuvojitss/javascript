function bubblesort(arr){
    const n = arr.lenght;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
}
const n = parseInt(prompt("Enter the number of variables:"));
let arr = [];
for(let i=0;i<n;i++){
    arr[i]= parseInt(prompt("Enter the value"));
}
console.log("The array is:");
console.log(arr.join(" "));
bubblesort(arr);
console.log("The sorted array is:");
console.log(arr.join(" "));
