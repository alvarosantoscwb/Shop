<template>
  <div
    class="bg-white shadow-2 q-pa-lg"
    style="text-align: center; width: 400px; flex-wrap: wrap"
  >
    <img style="height: 250px" :src="item.img" />
    <div>{{ item.nome }}</div>
    <div class="preco" style="text-decoration: line-through; color: grey">
      De: R${{ item.preco }}
    </div>
    <div>Por: R${{ item.descontoPorCento }}</div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "shopItem",
  props: {
    item: {
      type: Object,
    },
  },
});
</script>

<style>
</style>