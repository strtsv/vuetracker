<template>
  <div>
    <h1>Register</h1>
    <input type="email" placeholder="email" name="email" v-model="email" />
    <br>
    <input type="password" placeholder="password" name="password" v-model="password" />
    <button>Register</button>
  </div>
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
