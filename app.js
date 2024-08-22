// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos ok
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}



const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.07
    let valueInYen = valueInEuro * 156.5;
   return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / 156.5
    let valueInPound = valueInEuro * 0.87;
    return valueInPound;
}
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

