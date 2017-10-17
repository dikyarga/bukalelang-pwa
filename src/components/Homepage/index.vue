<template>
<section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12>
            <div class="text-xs-center">
              <img src="../../assets/bukalelang-logo.png" alt="BukaLelang Logo" class="mb-1"  width="150">

              <h2 class="headline">BukaLelang</h2>
              <span class="subheading">
                Lelang Online jadi Mudah dan Terpercaya
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="red--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">No Bid & Run</div>
                    </v-card-title>
                    <v-card-text class="text-xs-center">
                      Terintegrasi dengan Buka Dompet dari Buka Lapak, memungkinkan hanya yang memiliki saldo cukuplah yang bisa melakukan bid
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="red--text text--lighten-2">timer</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Realtime</div>
                    </v-card-title>
                    <v-card-text class="text-xs-center">
                      Karena lelang serunya di detik-detik akhir!
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="red--text text--lighten-2">directions_car</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Simple & Easy to use</div>
                    </v-card-title>
                    <v-card-text class="text-xs-center">
                      Tanpa birokrasi yang berbelit, hanya lelang online.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
</section>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
