/*2. Dado el arreglo [ [ ["%", 7, true, "#"] ], [ [false, 0, 99, "?"] ], [ [44, 55, 66, 77] ] ] 
a) Usar tres índices para leer e imprimir el elemento ?
b) Usar tres índices para leer e imprimir el elemento 66
c) Usar tres índices para leer e imprimir el elemento true
d) Usar tres índices para leer e imprimir el elemento % 
*/


let contenedor =  [ [ ["%", 7, true, "#"] ], [ [false, 0, 99, "?"] ], [ [44, 55, 66, 77] ] ] 
console.log(contenedor[1][0][3]);

let contenedor1 =  [ [ ["%", 7, true, "#"] ], [ [false, 0, 99, "?"] ], [ [44, 55, 66, 77] ] ] 
console.log(contenedor1[2][0][2]);

let contenedor2 =  [ [ ["%", 7, true, "#"] ], [ [false, 0, 99, "?"] ], [ [44, 55, 66, 77] ] ] 
console.log(contenedor2[0][0][2]);

let contenedor3 =  [ [ ["%", 7, true, "#"] ], [ [false, 0, 99, "?"] ], [ [44, 55, 66, 77] ] ] 
console.log(contenedor3[0][0][0]);


/*
e) arreglo[0][0][2] devolverá TRUE
f) arreglo[2][0][0] devolverá 44
g) arreglo[1][0][3] devolverá ?
h) arreglo[0][1][1] devolverá 0  
*/
