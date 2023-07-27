
//Binary Search

function binarySearch(arr,target){
  let high = arr.length - 1 
  let low = 0


  while(low<=high){
    const mid = Math.floor((low+high)/2)

    if(arr[mid]==target){
      return mid
    }
    else if(arr[mid]<target){
      low = mid + 1
    }
    else{
      high = mid - 1
    }
  }
  return -1
}

const arr = [1,2,3,5,9,13,16,17,21]
const target = 13

const binSearch = binarySearch(arr)

const index = binarySearch(arr,target);
if (index !== -1) {
  console.log(`Element ${target} found at index ${index}.`);
} else {
  console.log(`Element ${target} not found in the array.`);
}


//Merge Sort

function mergeSort(arr){
  if(arr.length<=1) return arr
  const middle = Math.floor(arr.length/2)
  const left = arr.slice(0,middle)
  const right = arr.slice(middle)
  return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
  let result = []
  let leftIndex = 0
  let rightIndex = 0

  while(leftIndex<left.length && rightIndex<right.length){
    if(left[leftIndex]<right[rightIndex]){
      result.push(left[leftIndex])
      leftIndex++
    }
    else{
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}
const mergeSortedArray = mergeSort([234,23,53,14,45])
console.log(` Mergesort ${mergeSortedArray}`)


//Quick Sort

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)]; 
  const left = [];
  const middle = [];
  const right = [];
  for (const element of arr) {
    if (element < pivot) {
      left.push(element);
    } else if (element === pivot) {
      middle.push(element);
    } else {
      right.push(element);
    }
  }

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const quicksortedArray = quickSort(unsortedArray);
console.log(`Quick sorting ${quicksortedArray}`); 


//Insertion Sort

function insertionSort(arr){
  const m = arr.length 
  for(let i=1;i<m;i++){
    const current = arr[i]
    let j =i-1

    while(j>=0 && arr[j]>current){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = current
  }
  return arr
}

const insertionSortedarray = insertionSort([32,35,23,6,21,4,15])
console.log(`Insertion Sorting ${insertionSortedarray}`)


//Sorting the list of strings

function stringSort(arr){
  for(let i=0;i<arr.length;i++){
    const now = arr[i]
    for(let j=0;j<arr.length;j++){
      if(arr[i]<arr[j]){
        const temp = arr[j]
        arr[j] = arr[i] 
        arr[i] = temp
      }
    }
  }
  return arr
}

const unsortedString = ["Sachin","Dhoni","Albie","Virat","Jadeja","Rohit"]
const sortedStrings = stringSort(unsortedString)
console.log(`sorting of strings ${sortedStrings}`)

