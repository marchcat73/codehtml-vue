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
      ></v-toolbar-side-icon>
      <v-toolbar-title class="font-weight-bold">CodeHTML</v-toolbar-title>
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
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
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
        {title: 'Главная', icon: 'home', url: '/'},
        {title: 'Цены', icon: 'local_atm', url: '/price'},
        {title: 'Портфолио', icon: 'party_mode', url: '/portfolio'},
        {title: 'Контакты', icon: 'mail', url: '/contacts'},
      ]
    }
  }
}
</script>

<style lang="scss">
  .logo {
    width: 30px;
    height: 30px;
    margin-left: 20px;
  }
</style>
