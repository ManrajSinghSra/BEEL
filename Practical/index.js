let arr=["apple"]

function square(curr,i,arr){
    arr[i]=curr.charAt(0).toLocaleUpperCase()+curr.slice(1)
}

arr.forEach(square)

console.log(arr);


// let a="apple"
// a[0]=