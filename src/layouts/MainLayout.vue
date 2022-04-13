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
            <div class="bg-white q-pa-md" style="height: 400px; width: 400px">
              <div style="text-align: center; border-bottom: inset">
                Carrinho de compras
                <q-item
                  v-for="item in carrinho"
                  :key="item.id"
                  style="margin-left: -25px; border-bottom: inset"
                >
                  <img style="width: 60px" :src="item.img" />
                  <q-item-section class="ellipsis">{{
                    item.id
                  }}</q-item-section>
                  <q-item-section>{{ quantidadeItensCarrinho }}</q-item-section>
                  <q-btn
                    flat
                    stretch
                    style="font-size: 10px"
                    icon="mdi-minus"
                    @click="$store.dispatch('store/diminuirNoCarrinho')"
                  >
                  </q-btn>
                  <q-btn
                    flat
                    stretch
                    style="font-size: 10px"
                    icon="mdi-plus"
                    @click="$store.dispatch('store/incrementarNoCarrinho')"
                  ></q-btn>
                  <q-btn
                    flat
                    stretch
                    style="font-size: 10px"
                    icon="mdi-delete"
                    @click="$store.dispatch('store/RemoverDoCarrinho')"
                  ></q-btn>
                </q-item>
              </div>
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
import { mapGetters, mapState } from "vuex";

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
    ...mapState("store", ["contador", "itens"]),
    ...mapGetters("store", ["quantidadeItensCarrinho"]),
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
