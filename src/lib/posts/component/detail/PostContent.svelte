<script lang="ts">
	import MarkdownConvertor from '../../../markdown/MarkdownConvertor.svelte';
	import 'prismjs/themes/prism-dark.css';
	import '../../css/prism';
	import '../../css/prism.css';
	import '../../css/post.css';

	export let post;
</script>

<article class="prose max-w-none">
	<MarkdownConvertor markdown={post.getContentMarkdown()} />
</article>
