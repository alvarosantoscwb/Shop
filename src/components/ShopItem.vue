<template>
  <div
    class="shadow-3 q-pl-xs q-pb-lg"
    style="text-align: center; width: 365px; border-radius: 12px"
  >
    <img class="q-pt-md" style="height: 150px" :src="imgItem" />
    <div style="text-align: start; font-size: 20px" class="ellipsis q-pa-xs">
      {{ item.nome }}
    </div>
    <div v-if="precoOriginal" class="text-strike">
      De: R${{ precoOriginal }}
    </div>
    <div
      v-if="precoCalculado"
      :style="precoLabel === 'Preço' ? 'padding-bottom: 21px' : ''"
    >
      {{ precoLabel }}: R${{ precoCalculado }}
    </div>
    <div
      class="q-pl-sm text-center text-grey-9"
      style="padding-bottom: 21px"
      v-else
    >
      Produto indisponível
    </div>
    <div class="q-gutter-sm">
      <q-btn
        color="positive"
        glossy
        label="Comprar agora"
        @click="addCarrinho(item)"
        :disable="!precoCalculado"
      />
      <q-btn
        color="negative"
        glossy
        label="Adicionar ao carrinho"
        @click="addCarrinho(item)"
        :disable="!precoCalculado"
      />
    </div>
  </div>
</template>
<script setup>
import { computed, defineProps } from "vue";
import { useStore } from "vuex";

const store = useStore();

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

const addCarrinho = (item) => {
  store.dispatch("showcase/adicionarAoCarrinho", item.id);
};
</script>

<style></style>
