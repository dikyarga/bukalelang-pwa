<template>
<section>
        <v-layout
          row
          align-center
        >
        <landing-page v-if="!isLoggedIn"/>
        <aution-list v-else/>

        </v-layout>
</section>
</template>

<script>
import LandingPage from './Landing'
import Auction from './Auction'
export default {
  computed: {
    isLoggedIn() {
      return !!this.$store.getters.user
    }
  },
  components: {
    'landing-page': LandingPage,
    'aution-list': Auction
  }
}
</script>

<style lang="css">
</style>
