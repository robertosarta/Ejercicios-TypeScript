declare const nameInput: HTMLInputElement;
declare const ageInput: HTMLInputElement;
declare const submitBtn: HTMLInputElement;
declare function helloName(nombre: string): void;
declare function helloAge(edad: number): void;
declare function alignHTMLElement(alignment: "center" | "left" | "right"): void;
declare function calcularPrecioConImpuesto(precio: number, impuesto?: number): number;
declare function addNumbers(num1: number, num2: number, ...rest: number[]): number;
declare function printHumanReadableDate(fecha: string | Date): string;
declare const fecha: Date;
declare const fechaString: string;
declare const formE7: HTMLFormElement | null;
declare const inputE7: HTMLInputElement | null;
type Persona = {
    name: string;
    birthYear: number;
    city?: string;
};
declare const Roberto: Persona;
declare function getPersonInfo(currentYear: number, persona: Persona): [string, number];
declare const resultadoE8: [string, number];
declare enum Medallas {
    First = "Oro",
    Second = "Plata",
    Third = "Bronce"
}
type MedalsType = typeof Medallas;
declare function showMedal(clasificacion: keyof MedalsType, medallas: MedalsType): void;
