const [nd, sc, num] = process.argv;

var facto = function(x) {
    if (x < 1) {
      console.log("Il faut donner un chiffre au moins de 1 pour avoir l'effet de ce script");
    } else if (x == 1) {
        return 1;
    } else {
        return (x * facto(x - 1));
    }
}

res = facto(num);
console.log(res);
