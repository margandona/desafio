import { Consultorio } from './consultorio.js';

const consultorioActual = new Consultorio('La Chimba', 'Ovalle');

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addPatientButton').addEventListener('click', agregarPaciente);
});

function agregarPaciente() {
    const nombre = document.getElementById('inputNombre').value;
    const edad = parseInt(document.getElementById('inputEdad').value);
    const historiaMedica = document.getElementById('inputHistoriaMedica').value;
    if (nombre && !isNaN(edad) && historiaMedica) {
        const paciente = consultorioActual.agregarPaciente(nombre, edad, historiaMedica);
        alert(`Paciente ${paciente.nombre} agregado.`);
        document.getElementById('output').innerHTML = consultorioActual.mostrarPacientes();
        clearInputs();
    } else {
        alert('Por favor, complete todos los campos correctamente.');
    }
}

function clearInputs() {
    document.getElementById('inputNombre').value = '';
    document.getElementById('inputEdad').value = '';
    document.getElementById('inputHistoriaMedica').value = '';
}
