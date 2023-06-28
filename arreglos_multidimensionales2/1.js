/*1. Dado el arreglo [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ]:
a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for
b) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach*/


let arreglo = [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ]

for (let index = 0; index < arreglo.length; index++) {
    for (let i = 0; i < arreglo.length; i++) {
       console.log(arreglo[index][i])
    }
}

arreglo.forEach(i => {
    
    i.forEach(j => {
        console.log(j);
    });
});
