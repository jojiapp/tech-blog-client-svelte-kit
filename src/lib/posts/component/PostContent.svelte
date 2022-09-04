<script lang="ts">
	import MarkdownConvertor from '$lib/posts/component/markdown/MarkdownConvertor.svelte';
	import { post } from '$lib/posts/store/post-stores.js';
	import 'prismjs/themes/prism-dark.css';
	import '$lib/posts/css/prism';
	import '$lib/posts/css/prism.css';
	import '$lib/posts/css/post.css';
</script>

<article class="prose max-w-none">
	<MarkdownConvertor markdown={$post.getContent()} />
</article>
