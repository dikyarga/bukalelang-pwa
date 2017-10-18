<template>
  <v-layout>
    <v-flex xs12 sm12 lg12>
      <v-card v-for="(auction, key) in this.$store.getters.userAuctions.auctions" :key="key" style="margin-bottom: 10px;">
        <v-card-media :src="auction.image" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ auction.name }}</h3>
            <div>{{ auction.description_bb }}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange" style="width: 100%;" @click="createAuction('createUserAuction', auction)">Ambil</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return { 
      auctions: this.$store.getters.userAuctions
    }
  },
  mounted() {
    this.$store.dispatch('getUserAuction')
  },
  methods: {
    createAuction(action, auction) {
      this.$store.dispatch(action, auction)
    }
  }
}
</script>
