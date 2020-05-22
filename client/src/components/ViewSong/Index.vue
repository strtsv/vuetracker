<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>
      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>
    <v-layout class="mt-2">
      <v-flex xs6>
        <tab :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SongMetadata from "./SongMetadata";
import YouTube from "./YouTube";
import SongsService from "@/services/SongsService";
import Tab from "./Tab";

export default {
  data() {
    return {
      song: {}
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user", "route"])
  },
  async mounted() {
    const songId = this.route.params.songId;
    this.song = (await SongsService.show(songId)).data;
  },
  components: {
    Tab,
    YouTube,
    SongMetadata
  }
};
</script>

<style></style>
