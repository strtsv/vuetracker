<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <tab :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import SongsService from '@/services/SongsService'
import Tab from './Tab'

export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  components: {
    Tab
  },
  async mounted () {
    const songId = this.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style>

</style>
