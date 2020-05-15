<template>
  <panel title="Метаданные">
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>
    </v-layout>
    <v-layout class="mt-2">
      <v-flex xs6>
        <tab :song="song" />
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import { mapState } from "vuex";
import BookmarksService from "@/services/BookmarksService";
import SongMetadata from "./SongMetadata";
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
  async mounted () {
    const songId = this.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    Tab,
    SongMetadata
  },
  methods: {
    async setAsBookmark() {
      try {
        this.bookmark = (
          await BookmarksService.post({
            songId: this.song.id
          })
        ).data;
      } catch (err) {
        console.log(err);
      }
    },
    async unsetAsBookmark() {
      try {
        await BookmarksService.delete(this.bookmark.id);
        this.bookmark = null;
      } catch (err) {
        console.log(err);
      }
    },
    async mounted() {
      const songId = this.route.params.songId;
      this.song = (await SongsService.show(songId)).data;
    }
  }
};
</script>

<style></style>
