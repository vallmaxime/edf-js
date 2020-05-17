const[nd, sc, c1] = process.argv;

let res = ""
const space = " "
var tab = c1.split('')

function alt(tab){
  for (i = 0; i < c1.length; i++){
      if (tab[i] % 2 ==0) {
        res += tab[i].toLowerCase();
      } else {
        res += tab[i].toUpperCase();
      }
    }
}

console.log(alt(res))

//......
