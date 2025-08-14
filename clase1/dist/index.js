"use strict";
// EJERCICIO 2
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const submitBtn = document.getElementById("submit");
function helloName(nombre) {
    console.log(`Hola ${nombre}`);
}
function helloAge(edad) {
    console.log(`Tu edad son ${edad} años`);
}
submitBtn.addEventListener("click", () => {
    const nameValue = nameInput.value;
    const ageValue = Number(ageInput.value);
    helloName(nameValue);
    helloAge(ageValue);
    nameInput.value = "";
    ageInput.value = "";
});
// EJERCICIO 3
function alignHTMLElement(alignment) {
    console.log(`El elemento se alineara a la ${alignment}`);
}
// EJERCICIO 4
function calcularPrecioConImpuesto(precio, impuesto = 21) {
    return precio + (precio * impuesto / 100);
}
console.log(`Ejercicio 4: ${calcularPrecioConImpuesto(100, 10)}`);
// EJERCICIO 5
function addNumbers(num1, num2, ...rest) {
    let total = num1 + num2;
    total += rest.reduce((accumulator, current) => accumulator + current, 0); //Reduce vale para recorrer el array e ir sumando y actuaizando el resultado
    return total;
}
console.log(`Ejercicio 5: ${addNumbers(2, 2, 2, 2, 2)}`);
// EJERCICIO 6
function printHumanReadableDate(fecha) {
    let dateObj;
    if (typeof fecha === "string") {
        dateObj = new Date(fecha);
    }
    else {
        dateObj = fecha;
    }
    const opciones = { weekday: 'long', day: 'numeric', month: 'long' };
    return dateObj.toLocaleDateString('es-ES', opciones);
}
const fecha = new Date();
const fechaString = "2025-01-15T11:56:03.673Z";
console.log(`Ejercicio 6: tu fecha es: ${printHumanReadableDate(fecha)}`);
console.log(`Ejercicio 6: tu fecha es: ${printHumanReadableDate(fechaString)}`);
// EJERCICIO 7
const formE7 = document.getElementById("formE7");
const inputE7 = document.getElementById("inputE7");
if (!formE7 || !inputE7) {
    throw new Error("No se encontró el formulario o el input en el DOM");
}
formE7.addEventListener("submit", (event) => {
    const valor = inputE7.value.trim();
    ;
    if (valor === "") {
        console.warn("El campo de texto esta vacio");
        ;
        return;
    }
    console.log(`valor enviado: ${valor}`);
});
const Roberto = {
    name: "Roberto",
    birthYear: 1996,
    city: "Sartaguda"
};
function getPersonInfo(currentYear, persona) {
    const edad = currentYear - persona.birthYear;
    return [persona.name, edad];
}
const resultadoE8 = getPersonInfo(2025, Roberto);
console.log(resultadoE8);
//EJERCICIO 9 
var Medallas;
(function (Medallas) {
    Medallas["First"] = "Oro";
    Medallas["Second"] = "Plata";
    Medallas["Third"] = "Bronce";
})(Medallas || (Medallas = {}));
function showMedal(clasificacion, medallas) {
    console.log(`Has ganado la medalla de ${medallas[clasificacion].toLowerCase()}`);
}
showMedal("First", Medallas);
showMedal("Second", Medallas);
showMedal("Third", Medallas);
