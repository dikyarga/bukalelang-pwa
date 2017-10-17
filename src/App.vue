<template>
  <v-app light>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in menuItems"
          :key="i"
          value="true"
          router
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          value="true"
          @click="logout"
          v-if="isLoggedInMenu"
        >
          <v-list-tile-action>
            <v-icon light>bubble_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Log Out</v-list-tile-title>
          </v-list-tile-content> 
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-xs-and-up"></v-toolbar-side-icon>

      <v-toolbar-title>
        <!-- <router-link :to="homeOrDashboard" tag="span" style="cursor: pointer">{{ title }}</router-link> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
        class="hidden-sm-and-down"
      >
        <v-btn flat
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.link">{{ item.title }}
        </v-btn>
        <v-btn flat
          v-if="isLoggedIn"
          @click="logout"
        >Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
    <v-footer :fixed="fixed">
      <span>&copy; 2017 : {{ title }}  </span>
    </v-footer>
  </v-app>
</template>

<script>
const menuItems = [
  { icon: 'bubble_chart', title: 'Login', link: '/login' },
  { icon: 'bubble_chart', title: 'Sign Up', link: '/register' },
]
  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: true,
        menuItems: [],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Si Sigap'
      }
    },
    created() {

    },
    computed: {
      isLoggedInMenu() {
        if (!this.$store.getters.user) {
          this.isLoggedIn = false
          this.menuItems = menuItems
          console.log('belom login')
          return false
        } else {
          console.log('udah login')
          this.isLoggedIn = true
          this.menuItems = []
          return true
        }
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
        this.menuItems = menuItems
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main.styl'
</style>
