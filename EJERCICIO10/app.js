const { createApp, ref, watch } = Vue;

// Definición del componente AlertaCambio
const AlertaCambio = {
  props: ['valor'],
  watch: {
    valor(newVal, oldVal) {
      if (newVal !== oldVal) {
        alert(`El valor cambió a: ${newVal}`);
      }
    }
  },
  template: `<div></div>`
};

// Aplicación Vue
const app = createApp({
  components: {
    AlertaCambio
  },
  data() {
    return {
      valor: 0 // Valor inicial de la variable predefinido en 0
    };
  }
});

app.mount('#app');
