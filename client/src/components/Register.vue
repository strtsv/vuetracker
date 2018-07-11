<template>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-5">
      <v-toolbar flat dense class="cyan">
        <v-toolbar-title>Регистрация</v-toolbar-title>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-3 pb-2">
        <form
          name="tab-tracker-form"
          autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          class="cyan"
          @click="register">
          Регистрация
        </v-btn>
      </div>
    </div>
  </v-flex>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: 'abc@abc.com',
      password: '123'
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)
    }
  },
  watch: {
    email (value) {
      console.log('Email was changed!', this.email.value)
    }
  }
}
</script>

<style scoped>

</style>
