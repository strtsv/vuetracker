<template>
  <v-layout>
    <v-flex xs6 v-if="isUserLoggedIn">
      <v-btn
        slot="action"
        :to="{
          name: 'songs-create'
        }"
        class="cyan accent-4"
        light
        medium
        absolute
        right
        middle
        fab>
        <v-icon></v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>

.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
