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
                    <h2>Login</h2>
                    <v-form v-model="valid" ref="form" lazy-validation>
                        <v-text-field
                            label="E-mail"
                            v-model="email"
                            :rules="emailRules"
                            required
                        ></v-text-field>
                        <v-text-field
                            label="Password"
                            v-model="password"
                            :rules="passwordRules"
                            required
                        ></v-text-field>
                        <v-btn
                            @click="signIn"
                            :disabled="!valid"
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
            valid: true,
            emailRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            passwordRules: [
                (v) => !!v || 'Name is required'
            ]
        }
    },
    methods: {
        signIn () {
            this.$store.dispatch('loginUser', {
                email: this.email,
                password: this.password
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
