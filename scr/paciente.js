export class Paciente {
    constructor(nombre, edad, historiaMedica) {
        this.nombre = nombre;
        this.edad = edad;
        this.historiaMedica = historiaMedica;
    }

    mostrarDatos() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Historia Médica: ${this.historiaMedica}`;
    }
}
