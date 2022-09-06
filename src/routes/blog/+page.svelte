<script lang="ts">
	import Posts from '$lib/posts/component/list/Posts.svelte';

	export let data;
	let postItems = data.postItems;
</script>

<Posts {postItems} />
