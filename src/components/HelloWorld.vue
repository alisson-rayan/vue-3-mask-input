<template>
  <div id="app">
    <h1>Exemplo de uso do vue-3-mask-input</h1>
    <MaskInput v-model="phone" mask="(##) ####-####" />
    <p>Valor do telefone: {{ phone }}</p>
  </div>
</template>

<script>
import MaskInput from "../lib/index.js";

export default {
  components: {
    MaskInput,
  },
  data() {
    return {
      phone: "",
    };
  },

  mounted() {
    console.log(MaskInput)
  }
};
</script>
