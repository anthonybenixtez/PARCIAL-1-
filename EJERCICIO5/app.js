const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const tareas = ref([]); // Lista de tareas, inicialmente vacía
    const nuevaTarea = ref(''); // Tarea nueva a agregar
    const modoOscuro = ref(false); // Controla si está en modo oscuro

    // Función para agregar una tarea
    const addTarea = () => {
      if (nuevaTarea.value.trim() !== '') { // Asegura que la tarea no esté vacía
        tareas.value.push(nuevaTarea.value.trim());
        nuevaTarea.value = ''; // Limpia el campo después de agregar la tarea
      }
    };

    // Función para eliminar una tarea por índice
    const borrarTareas = (index) => {
      tareas.value.splice(index, 1);
    };

    // Función para alternar entre modo oscuro y claro
    const DesplegarDarkMode = () => {
      modoOscuro.value = !modoOscuro.value;
      document.body.className = modoOscuro.value ? 'modo-oscuro' : 'modo-claro';
    };

    return {
      tareas,
      nuevaTarea,
      addTarea,
      borrarTareas,
      modoOscuro,
      DesplegarDarkMode
    };
  }
});

app.mount('#app');
