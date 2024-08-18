const calculadora = Vue.createApp({
  setup() {
    const numero1 = Vue.ref(0);
    const numero2 = Vue.ref(0);
    const resultado = Vue.ref(0);

    function calcular(operacion) {
      switch (operacion) {
        case '+':
          resultado.value = numero1.value + numero2.value;
          break;
        case '-':
          resultado.value = numero1.value - numero2.value;
          break;
        case '*':
          resultado.value = numero1.value * numero2.value;
          break;
        case '/':
          if (numero2.value !== 0) {
            resultado.value = numero1.value / numero2.value;
          } else {
            window.alert('No se puede dividir por cero');
          }
          break;
      }
    }

    return {
      numero1,
      numero2,
      resultado,
      calcular
    };
  }
});

calculadora.mount('#calculadora');
