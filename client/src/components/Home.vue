<template>
  <v-layout>
    <v-flex xs4 v-if="isUserLoggedIn">
      You are logged in.
    </v-flex>
    <v-flex xs8>
      <div class="danger-alert" v-if="error">
        {{error}}
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  }
}
</script>

<style scoped>
</style>
