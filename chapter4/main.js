const arr = [10, 20, 30];
for (var i = 0; i < arr.length - 1; i++) {
  setTimeout(() => console.log(arr[i]), 1000)
}