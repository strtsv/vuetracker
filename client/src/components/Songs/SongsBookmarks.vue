<template>
  <panel title="Закладки">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="bookmarks"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">
          {{ props.item.title }}
        </td>
        <td class="text-xs-right">
          {{ props.item.artist }}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import { mapState } from "vuex";
import BookmarksService from "@/services/BookmarksService";

export default {
  data() {
    return {
      headers: [
        {
          text: "Заголовок",
          value: "title"
        },
        {
          text: "Артист",
          value: "artist"
        }
      ],
      pagination: {
        sortBy: "createdAt",
        descending: true
      },
      bookmarks: []
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user"])
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarksService.index()).data;
    }
    console.log(this.props);
    // console.log(this.bookmarks[0].title);
  }
};
</script>

<style></style>
