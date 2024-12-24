function Reverse(ele) {
  let arr = typeof ele === "string" ? Array.from(ele) : ele;

  for (let start = 0, end = arr.length - 1; start < end; start++, end--) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
  }

  return typeof ele === "string" ? arr.join("") : arr;
}

console.log(Reverse([1, 2, 3, 4, 5]));
console.log(Reverse("hello"));
