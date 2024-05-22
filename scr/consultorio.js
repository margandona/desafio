import { Paciente } from "paciente.js";

export class Consultorio {
    constructor(nombre, ubicacion) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.pacientes = [];
    }

    agregarPaciente(nombre, edad, historiaMedica) {
        const nuevoPaciente = new Paciente(nombre, edad, historiaMedica);
        this.pacientes.push(nuevoPaciente);
        return nuevoPaciente;
    }

    mostrarPacientes() {
        if (this.pacientes.length === 0) {
            return 'No hay pacientes registrados.';
        } else {
            return this.pacientes.map(paciente => paciente.mostrarDatos()).join('<br>');
        }
    }
}
