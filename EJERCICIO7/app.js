const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const modoOscuro = ref(false); // Controla si está en modo oscuro

    // Función para alternar entre modo oscuro y claro
    const DesplegarDarkMode = () => {
      modoOscuro.value = !modoOscuro.value;
      document.body.className = modoOscuro.value ? 'modo-oscuro' : 'modo-claro';
    };

    return {
      modoOscuro,
      DesplegarDarkMode
    };
  }
});

app.mount('#app');
