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
            quantidadeItensCarrinho
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
                v-for="item in carrinhoDetalhado"
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
                <q-item-section style="font-weight: 500"
                  >qtd: {{ item.qtde }}</q-item-section
                >
                <q-btn
                  flat
                  stretch
                  style="font-size: 10px"
                  icon="mdi-minus"
                  @click="$store.dispatch('store/diminuirNoCarrinho', item.id)"
                >
                </q-btn>
                <q-btn
                  flat
                  stretch
                  style="font-size: 10px"
                  icon="mdi-plus"
                  @click="
                    $store.dispatch('store/incrementarNoCarrinho', item.id)
                  "
                ></q-btn>
                <q-btn
                  flat
                  stretch
                  style="font-size: 10px"
                  icon="mdi-delete"
                  @click="$store.dispatch('store/removerDoCarrinho', item.id)"
                ></q-btn>
              </q-item>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { mapGetters } from "vuex";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  computed: {
    ...mapGetters("store", ["quantidadeItensCarrinho", "carrinhoDetalhado"]),
  },
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>