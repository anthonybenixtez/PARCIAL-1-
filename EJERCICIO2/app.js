const { createApp, ref } = Vue



  const app = createApp({
    
    setup() {

       const mensaje = ref ("Contador Incremental");

        return {
            mensaje,
           }
    }

  });

  app.mount('#app')


const contador = createApp ({
  setup() {
    return {
      Cuenta: ref(0)
    }
  }
}).mount('#contador')