// EJERCICIO 2
const nameInput = document.getElementById("name") as HTMLInputElement;
const ageInput = document.getElementById("age") as HTMLInputElement;
const submitBtn = document.getElementById("submit") as HTMLInputElement;

function helloName(nombre: string): void {
	console.log(`Hola ${nombre}`);
}

function helloAge(edad: number): void{
	console.log(`Tu edad son ${edad} años`);
}

submitBtn.addEventListener("click", () => {
	const nameValue: string = nameInput.value;
	const ageValue: number = Number(ageInput.value);

	helloName(nameValue);
	helloAge(ageValue);
	nameInput.value = "";
	ageInput.value = "";
})

// EJERCICIO 3
function alignHTMLElement(alignment: "center" | "left" | "right"): void {
	console.log(`El elemento se alineara a la ${alignment}`)
}

// EJERCICIO 4
function calcularPrecioConImpuesto(precio: number, impuesto: number = 21): number {
	return precio +(precio * impuesto / 100);
}
console.log(`Ejercicio 4: ${calcularPrecioConImpuesto(100, 10)}`);

// EJERCICIO 5
function addNumbers(num1: number, num2: number, ...rest: number[]): number {
	let total = num1 + num2;
	total += rest.reduce((accumulator, current) => accumulator + current, 0); //Reduce vale para recorrer el array e ir sumando y actuaizando el resultado
	return total;
}
console.log(`Ejercicio 5: ${addNumbers(2, 2, 2, 2, 2)}`);

// EJERCICIO 6
function printHumanReadableDate(fecha: string | Date): string{
	let dateObj: Date;

	if (typeof fecha === "string"){
		dateObj = new Date(fecha);
	}else {
		dateObj = fecha;
	}

	const opciones: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long'};
	return dateObj.toLocaleDateString('es-ES', opciones);
}

const fecha: Date = new Date();
const fechaString: string = "2025-01-15T11:56:03.673Z";
console.log(`Ejercicio 6: tu fecha es: ${printHumanReadableDate(fecha)}`);
console.log(`Ejercicio 6: tu fecha es: ${printHumanReadableDate(fechaString)}`);