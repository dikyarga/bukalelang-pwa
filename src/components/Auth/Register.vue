<template>
<section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                    <h2>Register</h2>
                    <v-form ref="form">
                        <v-text-field
                            label="E-mail"
                            v-model="email"
                            required
                        ></v-text-field>
                        <v-text-field
                            label="Username"
                            v-model="username"
                            required
                        ></v-text-field>
                        <v-text-field
                            label="Phone"
                            v-model="phone"
                            required
                        ></v-text-field>
                        <v-text-field
                            label="Image URL"
                            v-model="imageUrl"
                            required
                        ></v-text-field>
                        <v-text-field
                            label="Password"
                            v-model="password"
                            required
                        ></v-text-field>
                        <v-btn
                            @click="register"
                        >
                            submit
                        </v-btn>
                        <v-btn @click="clear">clear</v-btn>
                    </v-form>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
</section>
</template>

<script>
export default {
    data: () => {
        return {
            email: '',
            password: '',
            phone: '',
            imageUrl: '',
            username: '',
        }
    },
    methods: {
        register () {
            this.$store.dispatch('registerUser', {
                email: this.email,
                password: this.password,
                username: this.username,
                phone: this.phone,
                imageUrl: this.imageUrl,
            })

        },
        clear () {
            this.$refs.form.reset()
        }
    }
}
</script>

<style lang="css">
</style>
