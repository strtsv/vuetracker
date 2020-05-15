<template>
  <panel title="Закладки">
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
          Редактировать
        </v-btn>
        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          dark
          class="cyan"
          @click="setAsBookmark"
        >
          Set As Bookmark
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && bookmark"
          dark
          class="cyan"
          @click="unsetAsBookmark"
        >
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

export default {
  props: ["song"],
  data() {
    return {
      bookmark: null
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user"])
  },
  watch: {
    async song() {
      if (!this.isUserLoggedIn) {
        return;
      }
      try {
        const bookmarks = (
          await BookmarksService.index({
            songId: this.song.id
          })
        ).data;
        if (bookmarks.length) {
          this.bookmark = bookmarks[0];
        }
      } catch (err) {
        console.log(err);
      }
    }
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
    }
  }
};
</script>

<style>
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
</style>
