/*2. Dado el arreglo [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, “@”, "¡"] ], [ [44, 55, 66, 77], [1, 2, 3, 4] ] ]
a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for
b) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach */


let arregloTridimensional = [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55, 66, 77], [1, 2, 3, 4] ] ];

for (let index = 0; index < arregloTridimensional.length; index++) {
     for (let i = 0; i < arregloTridimensional[index].length; i++) {
        for (let j = 0; j < arregloTridimensional[i].length; j++) {
                console.log(arregloTridimensional[index][i][j]); 

            }
        }
     }

arregloTridimensional.forEach(index => {
  index.forEach( i=> {
    i.forEach(j => {
       console.log([j]);
        });
    });
  });


