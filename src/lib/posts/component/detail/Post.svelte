<script lang="ts">
	import 'prismjs/themes/prism.css';
	import PostTitle from './PostTitle.svelte';
	import PostContent from './PostContent.svelte';

	export let post;
</script>

<PostTitle {post} />
<PostContent {post} />
