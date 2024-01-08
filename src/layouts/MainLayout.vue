<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-space></q-space>
        <q-btn flat stretch icon="mdi-cart" style="margin-top: 5px" label="">
          <q-badge color="red" style="margin-bottom: 30px">{{
            itensCarrinho
          }}</q-badge>
          <q-menu>
            <div class="bg-white q-pa-md" style="height: 600px; width: 450px">
              <div
                style="
                  text-align: center;
                  border-bottom: inset;
                  font-weight: 500;
                  font-family: monospace;
                "
              >
                Carrinho de compras
              </div>
              <q-item
                v-for="item of carrinhoDetail"
                :key="item.id"
                style="
                  margin-left: -25px;
                  border-bottom: inset;
                  display: list-item;
                  text-align: center;
                "
                >{{ item }}
                <img class="item" style="width: 50px" :src="item.img" />
                <q-item-section class="ellipsis q-pa-xs">{{
                  item.nome
                }}</q-item-section>
                <q-item-section style="font-weight: 500"
                  >qtd: {{ item.qtde }}</q-item-section
                >
                <q-btn
                  flat
                  stretch
                  style="font-size: 10px"
                  icon="mdi-minus"
                  @click="diminuirNoCarrinho, item.id"
                >
                </q-btn>
                <q-btn
                  flat
                  stretch
                  style="font-size: 10px"
                  icon="mdi-plus"
                  @click="incrementarNoCarrinho, item.id"
                ></q-btn>
                <q-btn
                  flat
                  stretch
                  style="font-size: 10px"
                  icon="mdi-delete"
                  @click="removerDoCarrinho, item.id"
                ></q-btn>
              </q-item>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed, ref } from "vue";
import {
  quantidadeItensCarrinho,
  carrinhoDetalhado,
} from "src/store/showcase/getters";
import {
  removerDoCarrinho,
  incrementarNoCarrinho,
  diminuirNoCarrinho,
} from "src/store/showcase/actions";

const leftDrawerOpen = ref(false);
const itensCarrinho = computed(() => quantidadeItensCarrinho.length);
const carrinhoDetail = computed(() => carrinhoDetalhado);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
