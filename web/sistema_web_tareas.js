// PONER CONSTANTES DE LOS ELEMENTOS HTML.
const agregarTarea = document.getElementById("tarea");
const hacerTarea = document.getElementById("hacer");
const completaTarea = document.getElementById("completa");
const btnHacerTarea = document.querySelector("[value='Completada']");
const btnEliminarTarea = document.querySelector("[value='Eliminar']");
// Agregamos una función con el objetivo de agregar una tarea.
function agregar() 
{

  // Obtendremos la misma cadena sin los espacios en blanco. 
  const tarea = agregarTarea.value.trim();
  // Se comprueba que no se repitan las tareas.
  const tareasRepetidas = hacerTarea.querySelectorAll("li");
  for (let i = 0; i < tareasRepetidas.length; i++) 
  {
    if (tareasRepetidas[i].textContent === tarea) 
    {
      alert("Tarea repetida!!");
      return;
    }
  }
  // Se muestra una alerta si la cadena agregar tarea esta vacia. 
  if (tarea === "") {
    alert("Agrega otra tarea quitando la casilla y/o poniendole nombre!!");
    return;
  }
  // Se crea una lista de las tareas que se agregaron anteriormente y que se puerdan seleccionar.
  const agregarTareaLista = document.createElement("li");
  const casilla = document.createElement("input");
  casilla.type = "checkbox";
  agregarTareaLista.appendChild(casilla);
  const texto = document.createTextNode(tarea);
  agregarTareaLista.appendChild(texto);
  // Insertar la tarea agregada a la lista de hacer tareas.
  hacerTarea.appendChild(agregarTareaLista);
  // Elimina el texto de agregarTarea despues de insertarlo en la lista. 
  agregarTarea.value = "";
}
// Función que marca la tarea como completada.
function marcarCompletada() 
{
  // Seleccionar las tareas pendientes que no estan completadas.
  const tareasPendientes = hacerTarea.querySelectorAll("li:not(.completada)");
  // Recorrer todas las tareas pendientes
  for (let i = 0; i < tareasPendientes.length; i++) 
  {
    // Sirve para marcar las tareas que ya hemos realizado, y si es así, moverla a la lista de tareas realizadas.
    const casilla = tareasPendientes[i].querySelector("input[type='checkbox']");
    if (casilla.checked) {
      tareasPendientes[i].classList.add("completada");
      completa.appendChild(tareasPendientes[i]);
    }
  }
}
// Función para eliminar las tareas completadas.
function eliminarCompletadas() 
{
  // Seleccionar todas las tareas completadas y así poder eliminarlas. 
  const tareasCompletadas = completa.querySelectorAll("li");
  // Recorrer todas las tareas completadas y eliminarlas.
  for (let i = 0; i < tareasCompletadas.length; i++) 
  {
    tareasCompletadas[i].remove();
  }
}
// Escuchar los diferentes eventos (Agregar tarea, hacer tarea y eliminar tarea completada) del formulario.
const formulario = document.querySelector("form");
formulario.addEventListener("submit", function elEvento(evento) 
{
  evento.preventDefault();
  agregar();
});

btnHacerTarea.addEventListener("click", function elEvento(evento) 
{
  evento.preventDefault();
  marcarCompletada();
});

btnEliminarTarea.addEventListener("click", function elEvento(evento) 
{
  evento.preventDefault();
  eliminarCompletadas();
});