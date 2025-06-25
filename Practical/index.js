let arr=[2,3,4,5,6]

function square(curr,i){
    arr[i] = curr * curr;
}

arr.forEach(square)

console.log(arr);
