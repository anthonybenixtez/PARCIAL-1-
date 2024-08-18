const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const mensaje = ref('');
    function Enviar(event) {
      alert(`Hola ${mensaje.value}!`)
      if (event) {
        alert(event.target.tagName)
      }
    
    };
    return {
      mensaje,
      Enviar
    };
  }
});


app.mount('#app');
