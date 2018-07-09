<template>
  <v-toolbar fixed class="cyan">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="mr-4">Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  name: 'Header',
  methods: {
  }
}
</script>
