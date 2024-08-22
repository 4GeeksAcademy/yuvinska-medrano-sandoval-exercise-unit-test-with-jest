// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});





test ("one euro should be 1.07 dollars", function(){
    const {fromEuroToDollar} = require ("./app.js") 
    expect (fromEuroToDollar(3.5)).toBe(3.745);
})

test ("1.07 dollar should be 156.5 yen", function(){
    const {fromDollarToYen} = require ("./app.js")
    expect (fromDollarToYen(3.5)).toBe(511.915888);
})


test("156.5 yen should be 0.87 pound", function(){
    const {fromYenToPound} = require ("./app.js")
    expect (fromYenToPound(3.5)).toBe(0.01945687)
})