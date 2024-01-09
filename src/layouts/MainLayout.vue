<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-space></q-space>
        <q-icon name="mdi-cart cursor-pointer q-pr-md" size="25px">
          <q-badge color="red" style="margin-bottom: 25px">{{
            itensCarrinho
          }}</q-badge>
          <q-menu>
            <div
              class="bg-white q-pa-md"
              style="
                height: 600px;
                width: 400px;
                border-radius: 12px;
                overflow-x: hidden;
              "
            >
              <div
                class="q-pb-md"
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
                v-for="item in carrinhoDetail"
                :key="item.id"
                style="
                  margin-left: -25px;
                  border-bottom: inset;
                  display: list-item;
                  text-align: center;
                "
              >
                <img class="item" style="width: 50px" :src="item.img" />
                <q-item-section class="ellipsis q-pa-xs">{{
                  item.nome
                }}</q-item-section>
                <q-item-section class="q-pb-md" style="font-weight: 500"
                  >quantidade: {{ item.qtde }}</q-item-section
                >
                <div class="q-gutter-md">
                  <q-btn
                    flat
                    stretch
                    style="font-size: 10px"
                    icon="mdi-minus"
                    round
                    @click="
                      store.dispatch('showcase/diminuirNoCarrinho', item.id)
                    "
                  >
                  </q-btn>
                  <q-btn
                    flat
                    stretch
                    round
                    style="font-size: 10px"
                    icon="mdi-plus"
                    @click="
                      store.dispatch('showcase/incrementarNoCarrinho', item.id)
                    "
                  ></q-btn>
                  <q-btn
                    flat
                    stretch
                    round
                    style="font-size: 10px"
                    icon="mdi-delete"
                    @click="
                      store.dispatch('showcase/removerDoCarrinho', item.id)
                    "
                  ></q-btn>
                </div>
              </q-item>
            </div>
          </q-menu>
        </q-icon>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const leftDrawerOpen = ref(false);
const itensCarrinho = computed(
  () => store.getters["showcase/quantidadeItensCarrinho"]
);

const carrinhoDetail = computed(
  () => store.getters["showcase/carrinhoDetalhado"]
);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
<style>
.q-position-engi {
  overflow-x: hidden;
}
</style>
