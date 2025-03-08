function fibs(ELementInArray) {
  console.log("Running");
  let storage = [0, 1]; // it loop because of this length not the elementInArray ?How do i loop according to the parameters
  let sum = 0;

  for (let i = 2; storage.length < ELementInArray; i++) {
    let firstPrev = storage[storage.length - 1];
    let secondPrev = storage[storage.length - 2];
    sum = firstPrev + secondPrev;
    storage.push(sum);
  }

  // first loop storage array values is [0,1,1]
  console.log(storage);
}

function fibsRec(ELementInArray) {
  if (ELementInArray === 0) return [];
  if (ELementInArray === 1) return [0];
  if (ELementInArray === 2) return [0, 1];

  let prevSequence = fibsRec(ELementInArray - 1); // Get previous Fibonacci sequence
  // [0,1]
  let nextNumber = prevSequence[prevSequence.length - 1] + prevSequence[prevSequence.length - 2]; // Calculate next number
  prevSequence.push(nextNumber); // Append next number to the sequence

  return prevSequence;
}

//

// first 1 recursion
// let prevSequence = fibsRec(ELementInArray - 1)(3) ;
// first 2 recursion let prevSequence = fibsRec(ELementInArray - 1)(2) = [0,1] the return value goes back to the first recursion

// STEPS

// DIVIDE
// CONQUER
// MERGE
let call = 1;
function mergesort(array) {
  //Base case
  debugger;
  // array [2,4,5,6,1,3,]
  // second call LEFT  [2,4,5]
  // third call LEFT  [2]
  if (array.length <= 1) return array; // [2] next step is to go on the previous split so that we can merge it
  let mid = Math.floor(array.length / 2); // divide the array into 2 array
  let left = array.slice(0, mid); // [2,4,5,], [2]
  let right = array.slice(mid); // [6,1,3] , [4,5]

  let subArrayLeft = mergesort(left); // [2,4,5] , [2]
  let subArrayRight = mergesort(right);

  let tempArr = [];

  let i = 0;
  let j = 0;
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

// function sort() {
//   let subArrayLeft = [5];
//   let subArrayRight = [4];

//   let tempArr = [];

//   let i = 0;
//   let j = 0;
//   while (i < subArrayLeft.length && j < subArrayRight.length) {
//     if (subArrayLeft[i] < subArrayRight[j]) {
//       tempArr.push(subArrayLeft[i]);
//       i++;
//     } else {
//       tempArr.push(subArrayRight[j]);
//       j++;
//     }
//   }
//   console.log(`This is the temp Array ${tempArr}`);
//   while (i < subArrayLeft.length) {
//     tempArr.push(subArrayLeft[i]);
//     i++;
//   }
//   while (i < subArrayRight.length) {
//     tempArr.push(subArrayRight[j]);
//     j++;
//   }
// }
// Question: if there is two value returned
const arr1 = [2, 3, 5, 4, 8, 4, 44, 675, 42];
const arr2 = [3, 2];

// sort();
console.log(mergesort(arr1));
