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
    <q-btn
      color="positive"
      style="font-size: 12px; float: left; margin-left: 20px"
      glossy
      label="Comprar agora"
      @click="addCarrinho(item)"
    />
  </div>
</template>
<script setup>
import { adicionarAoCarrinho } from "src/store/showcase/actions";
import { computed, defineProps } from "vue";
const props = defineProps({
  item: {
    type: Object,
  },
});
const imgItem = computed(() => {
  return (
    props.item.img ??
    "https://m.media-amazon.com/images/I/41I-kHZbEaL._AC_UL320_.jpg"
  );
});
const precoLabel = computed(() => {
  if (props.item.descontoValor) return "Por";
  if (!props.item.descontoPorCento) return "Preço";
  props.item.descontoPorCento;
  return "Por";
});
const precoOriginal = computed(() => {
  // se tiver desconto retorna valor original
  if (props.item.descontoPorCento || props.item.descontoValor) {
    return props.item.preco;
  }
  // se não tiver desconto retorna nada
  return "";
});
const precoCalculado = computed(() => {
  // se tiver desconto por cento calcular porcentagem
  if (props.item.descontoPorCento) {
    return Math.round(props.item.descontoPorCento * props.item.preco) / 100;
  }
  // se tiver descontoValor retorna
  if (props.item.descontoValor) {
    return props.item.descontoValor;
  }
  // se não tiver desconto retorna valor original
  return props.item.preco;
});

const addCarrinho = () => {
  adicionarAoCarrinho();
};
</script>

<style></style>
