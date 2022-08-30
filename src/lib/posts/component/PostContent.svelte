<script lang="ts">
	import MarkdownConvertor from '$lib/posts/component/markdown/MarkdownConvertor.svelte';
	import { postMarkdown } from '$lib/posts/store/post-create-stores.js';
</script>

<div class="prose max-w-none">
	<MarkdownConvertor markdown={$postMarkdown.getContent()} />
</div>
