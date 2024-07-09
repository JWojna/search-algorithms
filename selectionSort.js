const swap = require('../swap')

//time complexity is O(n²)

const selectionSort = arr => {

    for (let i = 0; i < arr.length - 1; i++) {
        // set min to index 0
        let min = i
        //search for min element in list
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        //swap with vale at location min
        swap(arr, i, min)

    }
    return arr;
}


let arr =  [5, 10, 11, 15, 2, 4, 25]

console.log(selectionSort(arr)); // [2, 4, 5, 10, 11, 15, 25]
