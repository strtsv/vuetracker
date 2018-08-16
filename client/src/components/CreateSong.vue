<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Метаданные">
        <v-text-field
          label="Заголовок"
          required
          :rules="[required]"
          v-model="song.title"
        ></v-text-field>

        <v-text-field
          label="Артист"
          required
          :rules="[required]"
          v-model="song.artist"
        ></v-text-field>

        <v-text-field
          label="Жанр"
          required
          :rules="[required]"
          v-model="song.genre"
        ></v-text-field>

        <v-text-field
          label="Альбом"
          required
          :rules="[required]"
          v-model="song.album"
        ></v-text-field>

        <v-text-field
          label="Картинка альбома"
          required
          :rules="[required]"
          v-model="song.albumImageUrl"
        ></v-text-field>

        <v-text-field
          label="YouTube ID"
          required
          :rules="[required]"
          v-model="song.youtubeId"
        ></v-text-field>
      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Структура" class="ml-2">
        <v-text-field
          label="Tab"
          multi-line
          required
          :rules="[required]"
          v-model="song.tab"
        ></v-text-field>

        <v-text-field
          label="Текст песни"
          multi-line
          required
          :rules="[required]"
          v-model="song.lyrics"
        ></v-text-field>
      </panel>

      <div class="danger-alert" v-if="error">
        {{error}}
      </div>

      <v-btn
        dark
        class="cyan"
        @click="create">
        Создать запись
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Обязательно для заполнения.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }

      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
