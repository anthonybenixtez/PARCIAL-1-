const { createApp, ref } = Vue



  const app = createApp({
    
    setup() {

       const mensaje = ref ("Mensaje de Prueba");

        return {
            mensaje,
           }
    }

  });

  app.mount('#app')
