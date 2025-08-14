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

// EJERCICIO 7
const formE7 = document.getElementById("formE7") as HTMLFormElement | null;
const inputE7 = document.getElementById("inputE7") as HTMLInputElement | null;

if (!formE7 || !inputE7) {
	throw new Error("No se encontró el formulario o el input en el DOM");
}

formE7.addEventListener("submit", (event: SubmitEvent) => {
	const valor: string = inputE7.value.trim();;
	if (valor === "") {
		console.warn("El campo de texto esta vacio");;
		return;
	}

	console.log(`valor enviado: ${valor}`);
})

// EJERCICIO 8
type Persona = {
	name: string;
	birthYear: number;
	city?: string;
};

const Roberto: Persona = {
	name: "Roberto",
	birthYear: 1996,
	city: "Sartaguda"
} as const;
function getPersonInfo(currentYear: number, persona: Persona): [string, number] {
const edad = currentYear - persona.birthYear;
return [persona.name, edad];
}

const resultadoE8 = getPersonInfo(2025, Roberto);
console.log(resultadoE8);

//EJERCICIO 9 
enum Medallas {
	First = "Oro",
	Second = "Plata",
	Third = "Bronce",
}

type MedalsType = typeof Medallas;

function showMedal(clasificacion: keyof MedalsType, medallas: MedalsType): void{
	console.log(`Has ganado la medalla de ${medallas[clasificacion].toLowerCase()}`)
}
showMedal("First", Medallas);
showMedal("Second", Medallas);
showMedal("Third", Medallas);