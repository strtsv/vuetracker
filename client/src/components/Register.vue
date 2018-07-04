<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
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
        dark
        class="cyan"
        @click="register">
        Регистрация
      </v-btn>
    </v-flex>
  </v-layout>
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
      console.log(response.email)
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
