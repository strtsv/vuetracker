<template>
  <v-layout>
    <v-flex xs4>
    </v-flex>
    <v-flex xs8>
      <div class="danger-alert" v-if="error">
        {{error}}
      </div>

      <v-toolbar-items>
        <v-btn
          dark
          :to="{
            name: 'register'
          }">
          Регистрация
        </v-btn>
        &nbsp;
        <v-btn
          dark
          :to="{
            name: 'login'
          }">
          Войти
        </v-btn>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <v-btn
          dark
          @click="logout">
          Выйти
        </v-btn>
      </v-toolbar-items>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
</style>
