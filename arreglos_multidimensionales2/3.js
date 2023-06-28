/*3. Dado el arreglo [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ]:
a) Recorrer todos sus elementos más internos y mostrar los números que sean impares. Use cualquier ciclo, for o forEach.
b) Recorrer todos sus elementos más internos y mostrar la suma de estos. Como sugerencia use una variable para acumular
la suma, declarela antes del ciclo. Use cualquier ciclo, for o forEach. */



let array = [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ];


/*array.forEach(index => {
   index.forEach(i => {
    if (!(i % 2 == 0)) {
        console.log([i])
    }
   });
});*/


let array2 = [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ];
let acu = 0;

array2.forEach(index => {
    index.forEach(i => {
       acu = acu + i;
    });
    console.log("la suma es de:"+acu);
});