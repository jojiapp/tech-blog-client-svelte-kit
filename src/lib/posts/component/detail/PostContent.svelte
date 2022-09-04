<script lang="ts">
	import MarkdownConvertor from '../../../markdown/MarkdownConvertor.svelte';
	import { post } from '../../store/post-stores.js';
	import 'prismjs/themes/prism-dark.css';
	import '../../css/prism';
	import '../../css/prism.css';
	import '../../css/post.css';
</script>

<article class="prose max-w-none">
	<MarkdownConvertor markdown={$post.getContent()} />
</article>
