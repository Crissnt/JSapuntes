let cifras;

/* Ordena de mayor a menor las cifras
del número que se le pasa como argumento 
dividir(1234) => 4321 */
function dividir(num){
    
    return parseInt(String(num).split('').sort().reverse().join(''));
}

cifras = dividir(1234);

console.log(cifras);