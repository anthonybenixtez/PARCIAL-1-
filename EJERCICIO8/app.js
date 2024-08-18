// Definición del componente MensajeCondicional
const MensajeCondicional = {
  props: ['numero'],
  template: `
    <div>
      <p>{{ numero % 2 === 0 ? 'El número es par' : 'El número es impar' }}</p>
    </div>
  `
};

// Aplicación Vue
const app = Vue.createApp({
  components: {
    MensajeCondicional
  },
  data() {
    return {
      numero: 0 // Valor inicial del número
    };
  }
});

// Montar la aplicación en el elemento con id "app"
app.mount('#app');
