
document.addEventListener("DOMContentLoaded", () => {
    class Paciente {
        constructor(nombre, edad, historiaMedica) {
            this._nombre = nombre;
            this._edad = edad;
            this._historiaMedica = historiaMedica;
        }

        get nombre() {
            return this._nombre;
        }

        set nombre(value) {
            this._nombre = value;
        }

        get edad() {
            return this._edad;
        }

        set edad(value) {
            if (typeof value === 'number' && value > 0) {
                this._edad = value;
            } else {
                console.error("Edad debe ser un número positivo.");
            }
        }

        get historiaMedica() {
            return this._historiaMedica;
        }

        set historiaMedica(value) {
            this._historiaMedica = value;
        }

        mostrarDatos() {
            return `Nombre: ${this._nombre}, Edad: ${this._edad}, Historia Médica: ${this._historiaMedica}`;
        }
    }

    const pacientes = [];

    function agregarPaciente(nombre, edad, historiaMedica) {
        const nuevoPaciente = new Paciente(nombre, edad, historiaMedica);
        pacientes.push(nuevoPaciente);
        return nuevoPaciente;
    }

    window.agregarPacienteDesdeUI = function () {
        const nombre = document.getElementById('inputNombre').value;
        const edad = parseInt(document.getElementById('inputEdad').value);
        const historiaMedica = document.getElementById('inputHistoriaMedica').value;

        if (!nombre || isNaN(edad) || !historiaMedica) {
            alert('Por favor, completa todos los campos correctamente.');
            return;
        }

        const paciente = agregarPaciente(nombre, edad, historiaMedica);
        alert(`Paciente agregado: ${paciente.mostrarDatos()}`);
        document.getElementById('inputNombre').value = '';
        document.getElementById('inputEdad').value = '';
        document.getElementById('inputHistoriaMedica').value = '';
        mostrarPacientes();
    };

    window.mostrarPacientes = function () {
        const output = document.getElementById('output');
        output.innerHTML = '';
        if (pacientes.length === 0) {
            output.innerHTML = 'No hay pacientes registrados.';
        } else {
            pacientes.forEach(paciente => {
                const p = document.createElement('p');
                p.textContent = paciente.mostrarDatos();
                output.appendChild(p);
            });
        }
    };
});
