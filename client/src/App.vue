<template>
  <v-app>
    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
    >
        <v-list>
          <v-list-tile
            v-for="link of links"
            :key="link.title"
            :to="link.url"
          >
            <v-list-tile-action>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-text="link.title"></v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark color="grey darken-4">
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="font-weight-bold">
        <router-link to="/" tag="span" class="pointer">CodeHTML</router-link>
      </v-toolbar-title>
      <img src="./assets/logo.svg" alt="" class="logo">
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          class="text-none"
          v-for="link in links"
          :key="link.title"
          :to="link.url"
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
        <v-btn
          flat
          class="text-none"
          v-if="isLoggedIn"
          :to="'/categories'"
        >
          Категории
        </v-btn>
        <v-btn
          flat
          class="text-none"
          v-if="isLoggedIn"
          :to="'/works'"
        >
          Работы
        </v-btn>
        <v-btn
          flat
          class="text-none"
          v-if="isLoggedIn"
          :to="'/technologies'"
        >
          Технологии
        </v-btn>
        <v-btn
          flat
          class="text-none"
          v-if="isLoggedIn"
          @click="logout"
        >
          Выход
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <!-- <v-footer app>
    </v-footer> -->
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      drawer: false,
      links: [
        { title: 'Цены', icon: 'local_atm', url: '/price' },
        { title: 'Портфолио', icon: 'party_mode', url: '/portfoliolist' },
        { title: 'Контакты', icon: 'mail', url: '/contacts' }
      ]
    }
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './assets/css/main.css';
  .logo {
    width: 30px;
    height: 30px;
    margin-left: 20px;
  }
  .pointer {
    cursor: pointer;
  }
</style>
