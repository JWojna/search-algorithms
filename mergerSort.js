
//time complexity : O(n log n)
//space complexity : O(n)

const merge = (leftArr, rightArr) => {
    const mergedArr = []
    let l = 0;
    let r = 0;

    while (l < leftArr.length && r < rightArr.length) {
        if (leftArr[l] <= rightArr[r]) {
            mergedArr.push(leftArr[l]);
            l++;
        } else {
            mergedArr.push(rightArr[r]);
            r++;
        }
    }

    return mergedArr
    .concat(leftArr.slice(l)
    .concat(rightArr.slice(r)));
}


const mergeSort = arr => {
    //base case
    if (arr.length <= 1) return arr;

    // split arr in half
    let mid = Math.floor(arr.length / 2)
    let leftArr = mergeSort(arr.slice(0, mid))
    let rightArr = mergeSort(arr.slice(mid));


    return merge(leftArr, rightArr);
}


let evenArr = [1, 2, 3, 4];
let oddArr = [3, 1, 2, 4, 6, 5, 7];

console.log(mergeSort(evenArr));
console.log(mergeSort(oddArr));
