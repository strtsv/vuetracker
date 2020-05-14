<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
          {{ song.title }}
        </div>
        <div class="song-artist">
          {{ song.artist }}
        </div>
        <div class="song-genre">
          {{ song.genre }}
        </div>

        <v-btn
          dark
          class="cyan"
          :to="{
            name: 'song-edit',
            params() {
              return {
                songId: song.id
              };
            }
          }"
        >
          Edit
        </v-btn>

        <v-btn v-if="isUserLoggedIn" dark @click="setAsBookmark" class="cyan">
          Set As Bookmark
        </v-btn>

        <v-btn v-if="isUserLoggedIn" dark @click="unsetAsBookmark" class="cyan">
          Unset As Bookmark
        </v-btn>
      </v-flex>

      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl" />
        <br />
        {{ song.album }}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import { mapState } from "vuex";
import BookmarksService from "@/services/BookmarksService";
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
  components: {
    Tab
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
