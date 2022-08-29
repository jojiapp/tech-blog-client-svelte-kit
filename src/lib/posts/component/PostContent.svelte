<script lang="ts">
	import 'github-markdown-css/github-markdown-dark.css';
	import MarkdownConvertor from '$lib/posts/component/markdown/MarkdownConvertor.svelte';
	import { postMarkdown } from '$lib/posts/store/post-create-stores.js';
</script>

<div id="markdown-body-custom" class="markdown-body bg-neutral-900 text-white">
	<MarkdownConvertor markdown={$postMarkdown.getContent()} />
</div>
