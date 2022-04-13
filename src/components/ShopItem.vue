<template>
  <div
    class="bg-white shadow-2 q-pl-xs q-pb-lg"
    style="text-align: center; width: 365px"
  >
    <img style="height: 250px" :src="imgItem" />
    <div style="text-align: start; font-size: 20px" class="ellipsis q-pa-xs">
      {{ item.nome }}
    </div>
    <div
      v-if="precoOriginal"
      style="
        text-align: left;
        text-decoration: line-through;
        color: grey;
        padding-left: 5px;
      "
    >
      De: R${{ precoOriginal }}
    </div>
    <div v-if="precoCalculado" style="text-align: left; padding-left: 5px">
      {{ precoLabel }}: R${{ precoCalculado }}
    </div>
    <div v-else style="text-align: left; padding-left: 5px">
      Produto indisponível
    </div>
    <q-btn
      color="negative"
      style="font-size: 12px"
      glossy
      label="Adicionar ao carrinho"
      @click="addCarrinho(item)"
    />
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
  computed: {
    imgItem() {
      return (
        this.item.img ??
        "https://m.media-amazon.com/images/I/41I-kHZbEaL._AC_UL320_.jpg"
      );
    },
    precoLabel() {
      if (this.item.descontoValor) return "Por";
      if (!this.item.descontoPorCento) return "Preço";
      this.item.descontoPorCento;
      return "Por";
    },
    precoOriginal() {
      // se tiver desconto retorna valor original
      if (this.item.descontoPorCento || this.item.descontoValor) {
        return this.item.preco;
      }
      // se não tiver desconto retorna nada
      return "";
    },
    precoCalculado() {
      // se tiver desconto por cento calcular porcentagem
      if (this.item.descontoPorCento) {
        return Math.round(this.item.descontoPorCento * this.item.preco) / 100;
      }
      // se tiver descontoValor retorna
      if (this.item.descontoValor) {
        return this.item.descontoValor;
      }
      // se não tiver desconto retorna valor original
      return this.item.preco;
    },
  },
  methods: {
    addCarrinho(item) {
      this.$store.dispatch("store/adicionarAoCarrinho", item.id);
    },
  },
});
</script>

<style>
</style>