<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      floating
      color="indigo lighten-5"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">Web Programming</v-list-item-title>
          <v-list-item-subtitle> NPM: 1234567890 </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav shaped>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          link
          :to="item.path"
          color="indigo"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark clipped-left color="indigo">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Applikasi Data Mahasiswa</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid class="pa-4 pa-sm-6 pa-md-8">
        <router-view />
        <aho-nerd />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AhoNerd from "@/components/AhoNerd.vue";

export default {
  components: {
    AhoNerd,
  },
  data: () => ({
    drawer: null,
    navItems: [
      { title: "Dashboard", path: "/", icon: "mdi-view-dashboard" },
      { title: "Mahasiswa", path: "/Mahasiswa", icon: "mdi-account-school" },
      { title: "About", path: "/about", icon: "mdi-help-box" },
    ],
  }),
};
</script>
