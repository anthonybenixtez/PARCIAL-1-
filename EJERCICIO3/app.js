const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const mensaje = ref("Hola y Adios");
    const isVisible = ref(true); // Ref para controlar la visibilidad

    const desplegarMensaje = () => {
      isVisible.value = !isVisible.value;
    };

    return {
      mensaje,
      isVisible,
      desplegarMensaje 
    };
  }
});

app.mount('#app');
