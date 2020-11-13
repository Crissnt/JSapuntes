var num = 123;
var array = [];
function persistence(num) {
  for (ele of num) {
    array[ele] = num[ele];
  }
  console.log(array);
}

persistence(num);
