<template>
  <div id="app">
    <h1>Exemplo de uso do vue-3-mask-input</h1>
    <p>
      Telefone:
      <MaskInput v-model="phone" mask="(##) ####-####" />

      <MaskInput v-model="cpf" mask="###.###.###-##" />
    </p>
    <p>Valor do telefone: {{ phone }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      cpf: ""
    };
  },
};
</script>
