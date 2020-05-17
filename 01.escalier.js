const[nd, sc, c1] = process.argv;

function scale(x) {
      i = 0
      while (i < x) {
        space = x - i
        diese = i + 1
        scale = " ".repeat(space) + "#".repeat(diese);
        console.log(scale)
        i++
      }
    }

scale(c1);
