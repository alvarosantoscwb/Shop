<template>
  <q-page class="bg-grey-4 q-ma-xs q-pl-xl q-pr-lg flex flex-center">
    <q-spinner v-if="loading" size="50px"></q-spinner>
    <div class="q-ma-xl">
      <div
        class="q-gutter-lg q-mt-lg bg-white q-pl-xs"
        style="
          display: flex;
          margin-top: -50px;
          flex-wrap: wrap;
          align-items: center;
        "
      >
        <ShopItem v-for="item in itens" :key="item.id" :item="item" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ShopItem from "../components/ShopItem.vue";

const itens = ref([]);
const loading = ref(true);

onMounted(() => {
  loadItens();
});

const loadItens = () => {
  setTimeout(() => {
    itens.value = [
      {
        id: "293102321",
        img: "https://m.media-amazon.com/images/I/413Ngax60kL.jpg",
        nome: "Balança Digital de Cozinha, SF-400, Até 10kg, Escala 1 grama",
      },
      {
        id: "230918230",
        descontoPorCento: 43,
        img: "https://m.media-amazon.com/images/I/519Sd9PIe5L.jpg",
        nome: "Box Peter Pan: 3 livros + pôster + marcadores e cards",
        preco: 69.9,
      },
      {
        id: "29381029",
        img: "https://images-na.ssl-images-amazon.com/images/I/216fk+yUMjS._AC_SX184_.jpg",
        nome: "Câmera interna inteligente intelbras",
        preco: 236.99,
      },
      {
        id: "64182310",
        descontoPorCento: 36,
        img: "https://images-na.ssl-images-amazon.com/images/I/31x-kDIshoL._AC_SR400,600_.jpg",
        nome: "Daily Slip Rain Tênis, Masculino",
        preco: 178.9,
      },
      {
        id: "30129381",
        nome: "Dungeons & Dragons - Feras & Colossos",
        preco: 103.02,
      },
      {
        id: "31029381",
        descontoValor: 399,
        img: "https://m.media-amazon.com/images/I/51wGRUFPmKL.jpg",
        nome: "Echo Dot (4ª Geração): Smart Speaker com Relógio e Alexa",
        preco: 499,
      },
      {
        id: "302183109",
        img: "https://images-na.ssl-images-amazon.com/images/I/51pUqQm1kgL._AC_UL450_SR450,320_.jpg",
        nome: "Loréal Eléseve Creme Tratamento Leave in Cicatri Renov, Branco",
        preco: 9.9,
      },
      {
        id: "398102938",
        descontoValor: 399.0,
        img: "https://m.media-amazon.com/images/I/41WH-cjC+xL.jpg",
        nome: "Robô Aspirador Mondial Bivolt",
        preco: 499.0,
      },
      {
        id: "2830129381",
        img: "https://images-na.ssl-images-amazon.com/images/I/510DdqAE8dS._AC_UL450_SR450,320_.jpg",
        nome: "Wd-40 Spray Produto Multiusos 300 ML",
        preco: 32.99,
      },
    ];
    loading.value = false;
  }, 1000);
};
</script>
