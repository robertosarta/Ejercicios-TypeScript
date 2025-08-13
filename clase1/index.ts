
	const myName = "Abel"; 

	//* Inferencia de tipos
	let age: number = 35;

	//* Redeclaración (prohibida) y reasignación
	age = 36;

	//* Booleanos
	let isSummer: boolean = false;
	isSummer = true;

	//* Arrays
	const months: string[] = ["enero", "febrero", "marzo"];
	months.push("junio");
	months.push(2026); //! Error porque el array solo admite strings

	//* Funciones
	//* Una función sencilla, con tipos explícitos
	function sayHello(nombre: string): string {
		return `Hola ${nombre}`;
	}

	console.log(sayHello("Abel"));

	function addNumbers(num1: number, num2: number): number {
		return num1 + num2;
	}

	console.log(addNumbers(3, 5)) // 8
	console.log(addNumbers(3, "15")); // 315
	console.log(addNumbers(15)); // NaN
	
	//* Función que puede devolver un valor undefined, como es el caso si no cumple la condición del if
	function addNumbersOrNot(num1: number, num2: number): number | undefined {
		if (num1 > 5) {
			return num1 + num2;
		}
	}

	//* Type alias
	type numero = number;

	const addNumbersArrowFn = (num1: numero, num2: numero): numero => num1 + num2;

	const toUppercase = (palabra: string) => palabra.toUpperCase();

	console.log(addNumbersOrNot(1, 3));

	// * Type alias con union type
	type stringOrNumber = string | number;

	function logMessage(message: stringOrNumber): stringOrNumber {
		// * Type guards
		// * con typeof y con instanceof 
		if (typeof message === 'string') {
			return message.toUpperCase();
		} else {
			return message.toFixed(2);
		}
	}

	logMessage(123);
	logMessage("Hola");

	//* Type any implícito
	let msg; // tipo any

	//! Tipo any implícito, marcado como error con el flag noImplicitAny
	function fnWithAny(param1) {
		console.log(param1);
	}

	//* En funciones donde sea evidente, no es tan necesario explicitar tipos
	const doubles = [1, 3, 5, 7].map((numero) => numero * 2);

	[1,3,5,6].forEach((number) => {
		console.log(number * 2)
	});

	//* Map y forEach ambos son métodos de arrays, con diferencias en la sintaxis y en que map() ya a su vez devuelve un nuevo array, mientras que forEach solo lo recorre

	console.log(doubles);
