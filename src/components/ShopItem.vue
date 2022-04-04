<template>
  <div class="bg-white" v-for="item in itens" :key="item.id">{{ item }}</div>
</template>
<script>
export default {
  name: "shopItem",
  props: {
    item: Object,
    nome: true,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>