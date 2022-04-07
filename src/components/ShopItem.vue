<template>
  <div
    class="bg-white shadow-2 q-pa-lg"
    style="text-align: center; width: 400px"
  >
    <img style="height: 250px" :src="imgItem" />
    <div
      style="
        text-align: start;
        font-size: 20px;
        inline-size: max-content;
        text-overflow: ellipsis;
      "
    >
      {{ item.nome }}
    </div>
    <div
      v-if="precoOriginal"
      style="text-align: left; text-decoration: line-through; color: grey"
    >
      De: R${{ precoOriginal }}
    </div>
    <div v-if="precoLabel" style="text-align: left">
      Preço: R$ {{ precoLabel }}
    </div>
    <div v-if="precoCalculado" style="text-align: left">
      Por: R${{ precoCalculado }}
    </div>
    <div style="text-align: left" v-else>Produto indisponível</div>
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
    precoLabel() {},
    precoOriginal() {
      // se não tiver De: retorna nada
      return this.item.descontoValor ?? this.item.preco;
    },
    // se tiver desconto retorna valor original
    precoCalculado() {
      // se tiver desconto por cento calcular porcentagem
      this.descontoPorCento =
        Math.round(this.item.descontoPorCento * this.item.preco) / 100;
      // se tiver descontoValor retorna
      return this.descontoPorCento ?? this.item.preco;
      // se não tiver desconto retorna valor original
    },
  },
});
</script>

<style>
</style>