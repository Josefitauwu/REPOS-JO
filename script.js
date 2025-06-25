

 function mostrarSeccion(id) {
      const secciones = document.querySelectorAll('section');
      secciones.forEach(sec => sec.style.display = 'none');
      document.getElementById(id).style.display = 'block';
    }

    
    document.getElementById("fecha").valueAsDate = new Date();

    
    document.getElementById("formulario").addEventListener("submit", function(e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
      const edad = document.getElementById("edad").value;
      const area = document.getElementById("area").value;
      const acepta = document.getElementById("acepta").checked;
      const fecha = document.getElementById("fecha").value;

      if (!nombre || !email || !edad || !area || !acepta) {
        alert("Por favor, complete todos los campos.");
        return;
      }

      const trabajador = {
        nombre,
        email,
        edad,
        area,
        acepta,
        fechaRegistro: fecha
      };

      console.log("Trabajador registrado:", trabajador);
      document.getElementById("mensaje").textContent = "Formulario enviado correctamente ✅";
    });



const trabajadores = [
  {
    nombre: "Rebeca Peñaloza",
    diasTrabajados: 120,
    vacaciones: 10,
    licencias: 2
  },
  {
    nombre: "Hilda Troncoso",
    diasTrabajados: 150,
    vacaciones: 5,
    licencias: 0
  }
];


function cargarDatos() {
  const tabla = document.getElementById("tablaDatos");
  const cuerpo = document.getElementById("contenidoTabla");
  cuerpo.innerHTML = "Datos"; 

  trabajadores.forEach(trabajador => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${trabajador.nombre}</td>
      <td>${trabajador.diasTrabajados}</td>
      <td>${trabajador.vacaciones}</td>
      <td>${trabajador.licencias}</td>
    `;
    cuerpo.appendChild(fila);
  });

  tabla.style.display = "table"; 
}
