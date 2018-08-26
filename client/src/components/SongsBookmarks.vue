<template>
	<panel title="Закладки">
		<v-data-table
			:headers="headers"
			:items="bookmarks">
		</v-data-table>
	</panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from "@/services/BookmarksService"

export default {
	data () {
		return {
			headers: [
				{
					text: 'Заголовок',
					value: 'title'
				},
				{
					text: 'Артист',
					value: 'artist'
				}
			],
			pagination: {
				sortBy: 'createdAt',
				descending: true
			},
			bookmakrs: []
		}
	},
	computed: {
		...mapState([
			'isUserLoggedIn',
			'user'
		])
	},
	async mounted () {
		if (this.isUserLoggedIn) {
			this.bookmakrs = (await BookmarksService.index())
		}
	}
}
</script>

<style>

</style>
