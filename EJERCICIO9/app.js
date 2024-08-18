const { createApp, ref, computed } = Vue;

const app = createApp({
  setup() {
    const nombre1 = ref('');
    const apellido1 = ref('');
    
    const nombreCompleto = computed(() => {
      return `${nombre1.value} ${apellido1.value}`;
    });

    function Enviar(event) {
      alert(`Hola ${nombreCompleto.value}!`);
    };

    return {
      nombre1,
      apellido1,
      nombreCompleto,
      Enviar
    };
  }
});

app.mount('#app');
