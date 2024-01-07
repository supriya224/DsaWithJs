const isPalindrom = function (x) {
  return x === +x.toString().split("").reverse().join("");
  //   toString() === convert in to string
  // split() == convert in to array
  // reverse()== do reverse
  // join()== join with (.)
  //121==> "121"=> ["1","2","1"]=>["1","2","1"]=>1.2.1=>121
};
const res = isPalindrom(121);
console.log(res);
