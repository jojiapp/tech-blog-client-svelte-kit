<script lang="ts">
	import Post from '$lib/posts/component/detail/Post.svelte';

	export let data;
	let post = data.post;
</script>

<Post {post} />
