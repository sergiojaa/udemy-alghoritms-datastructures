function swap(array,firstIndex,secondIndex){
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}
function pivot(array, pivotIndex = 0, endIndex = array.length - 1){
    let swapIndex = pivotIndex;
    for(let i = pivotIndex+1;i<=endIndex;i++){
        if(array[i] < array[pivotIndex]){
            swapIndex++;
            swap(array,swapIndex,i);
        }
    }
    swap(array,pivotIndex,swapIndex);
    return swapIndex;
}
let myArray = [3, 6, 1, 5, 2, 4];
console.log(pivot(myArray)); // [2, 1, 3, 5, 6, 4]
