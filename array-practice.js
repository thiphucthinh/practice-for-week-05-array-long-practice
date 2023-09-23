const findMinimum = arr => {
  let minIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }
  return arr[minIndex];
};

const runningSum = arr => {
  let sum = 0;
  let sumArr = [];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    sumArr.push(sum);
  }
  return sumArr;
};

const evenNumOfChars = arr => {
  let count = 0;
  for (let word of arr) {
    if (word.split("").length % 2 === 0) {
      count++;
    }
  }
  return count++;
};

const smallerThanCurr = arr => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;

      }
    }
    newArr.push(count);
  }
  return newArr;
};

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }

  return false;
};

const secondLargest = arr => {
  let maxIndex = findLargestIndex(arr);

  arr.splice(maxIndex, 1);
  return (arr[findLargestIndex(arr)]);
};

// Helper function
function findLargestIndex(arr) {
  let maxIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[maxIndex] < arr[i]) {
      maxIndex = i;
    }
  }

  return maxIndex;
}

const shuffle = (arr) => {
  let newArr = deepDup(arr);

  for (let i = 0; i < newArr.length; i++) {
    let j = Math.floor(Math.random() * newArr.length);

    let placeHolder = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = placeHolder;
  }
  return newArr;
};

// Helper function to deep copy an array
function deepDup(arr) {
  if (arr.length === 0) {
    return [];
  }

  let firstElement = arr[0];
  if (Array.isArray(firstElement)) {
    return [deepDup(firstElement), ...deepDup(arr.slice(1))];
  }
  else {
    return [firstElement, ...deepDup(arr.slice(1))];
  }

}


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
