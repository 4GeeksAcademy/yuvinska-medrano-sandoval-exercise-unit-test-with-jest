// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});




test ("10 euros to dollar",() => { 
    const expected = 10 * 1.07;
})
test(" 10 dollars to yen", () => {
    const expected = (10 / 1.07) * 156.5;
});

test("1000 yen to pounds", () => {
    const expected = (1000 / 156.5) * 0.87;
});