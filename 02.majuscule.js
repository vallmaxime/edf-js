const arg = process.argv[2];
var tab = arg.split('');
let res = "";
let j = 0;


for (i = 0; i < arg.length; i++){
  if (tab[i] != " ") {
    j += 1;
    if ( j % 2 == 0) {
      res += tab[i].toLowerCase();}
    else {
      res += tab[i].toUpperCase();}
    }
  else {
    res += " ";
  }
}

console.log(res)
