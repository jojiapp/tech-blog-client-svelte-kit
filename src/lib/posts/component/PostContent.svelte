<script lang="ts">
	import MarkdownConvertor from '$lib/posts/component/markdown/MarkdownConvertor.svelte';
	import { post } from '$lib/posts/store/post-stores.js';
</script>

<article class="prose max-w-none">
	<MarkdownConvertor markdown={$post.getContent()} />
</article>
