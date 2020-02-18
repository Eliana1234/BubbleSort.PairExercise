
function swap(arr, i){
if (arr[i] > arr[i+1]){
 let temp = arr[i]
  arr[i] = arr[i+1]
  arr[i+1] = temp
  }
}

function bubbleSort(arr){
if (arr.length === 0 || arr.length === 1){
    return arr 
}
else {
 for (let i = 0; i < arr.length; i++){
  swap(arr, i)
}
return arr;
}
}