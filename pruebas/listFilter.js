let lista = ['b', 3, null, 123];

/* Devuelve un array cuyos elementos son únicamente
los elementos numéricos del array recibido */

function listFilter(list){
    return list.filter((e) => typeof e == 'number');
}

console.log(listFilter(lista));