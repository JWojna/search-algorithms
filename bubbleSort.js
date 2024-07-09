const swap = require('../swap')
const  largeArrGen  = require("../largArrGen");
//* Bubble Sort



/*
 ^ input: An unsorted array - [5, 1, 4, -3]
 ^ expected outpu: Sorted array - [ -3, 1, 4, 5]

 ^ what is the time complexity of bubble sort?  Bubble sort is always O(n²)
*/





//! create function

const bblSort = arr => {
    let swapped = true;
    //! while swapped is false interate through input array
    while(swapped){
        startTime = Date.now();
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            //! if current value is greater than its neighbor to the right (+1)
            if (arr[i] > arr[i + 1]){
            //! swap the current element with its neighbor to the right
            swap(arr, i, i + 1);
            //! swapped equals true
            swapped = true;
            };
        };
        endTime = Date.now();
        console.log(`${endTime - startTime}`);
    };
    //! if no swaps have occured return the sorted array
    return arr;
}


let arr = [5, 1, 4, -3];
let largeArr = largeArrGen(1000)


// console.log(bblSort(arr)); //^ [ -3, 1, 4, 5]
// console.log(bblSort(largeArr));


let sorted = bblSort(largeArr);


console.log(sorted);
