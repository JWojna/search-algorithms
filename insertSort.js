


// if it is the first element, it is alread sorted, return 1
//pick the next element
//compare with all elements in the sirted sub-list
//shift all the elements in the sorted sub-list that is greater than the value to be sorted
//insert the value
//repeat untill list is sorted

const insertSort = arr => {

    for (let i = 1; i < arr.length; i++) {
        console.log(arr[i]);
        let temp = arr[i];
        let j = i - 1;
        console.log(arr[j],'--', temp);
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    };

    return arr;
}





let arr = [10, 5, 2, 7]

console.log(insertSort(arr));
