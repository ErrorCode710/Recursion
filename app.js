function fibs(ELementInArray) {
  console.log("Running");
  let storage = [0, 1]; // Initialize the storage array with the first two Fibonacci numbers
  let sum = 0;

  for (let i = 2; storage.length < ELementInArray; i++) {
    let firstPrev = storage[storage.length - 1];
    let secondPrev = storage[storage.length - 2];
    sum = firstPrev + secondPrev;
    storage.push(sum);
  }

  console.log(storage); // Output the Fibonacci sequence
}

function fibsRec(ELementInArray) {
  if (ELementInArray === 0) return [];
  if (ELementInArray === 1) return [0];
  if (ELementInArray === 2) return [0, 1];

  let prevSequence = fibsRec(ELementInArray - 1); // Get the previous Fibonacci sequence
  let nextNumber = prevSequence[prevSequence.length - 1] + prevSequence[prevSequence.length - 2]; // Calculate the next number
  prevSequence.push(nextNumber); // Append the next number to the sequence

  return prevSequence;
}

// Merge Sort Algorithm
function mergesort(array) {
  if (array.length <= 1) return array; // Base case: arrays with 0 or 1 element are already sorted

  let mid = Math.floor(array.length / 2); // Find the middle index
  let left = array.slice(0, mid); // Divide the array into left half
  let right = array.slice(mid); // Divide the array into right half

  let subArrayLeft = mergesort(left); // Recursively sort the left half
  let subArrayRight = mergesort(right); // Recursively sort the right half

  let tempArr = [];
  let i = 0;
  let j = 0;

  // Merge the sorted halves
  while (i < subArrayLeft.length && j < subArrayRight.length) {
    if (subArrayLeft[i] < subArrayRight[j]) {
      tempArr.push(subArrayLeft[i]);
      i++;
    } else {
      tempArr.push(subArrayRight[j]);
      j++;
    }
  }
  while (i < subArrayLeft.length) {
    tempArr.push(subArrayLeft[i]);
    i++;
  }
  while (j < subArrayRight.length) {
    tempArr.push(subArrayRight[j]);
    j++;
  }

  return tempArr;
}

const arr1 = [2, 3, 5, 4, 8, 4, 44, 675, 42];
const arr2 = [3, 2];

console.log(mergesort(arr1)); // Output the sorted array
