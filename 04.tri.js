const str = process.argv.slice(2);
const int = str.map(v => parseInt(v, 10));

const tri = function(num) {
  var turn = false;
  while (!turn) {
    turn = true;
    for (var i = 1; i < num.length; i += 1) {
      if (num[i - 1] > num[i]) {
        turn = false;
        var stock = num[i - 1];
        num[i - 1] = num[i];
        num[i] = stock;
      }
    }
  }
  return num;
}

tri(int)

let res = "";
for (i = 0; i < int.length; i++) {
  res += int[i] + " ";
}

console.log(res);
