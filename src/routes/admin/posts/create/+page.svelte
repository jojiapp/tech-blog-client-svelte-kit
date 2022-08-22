<script lang='ts'>
	import MarkdownEditor from '../../../../lib/markdown-editor/MarkdownEditor.svelte';
	import Category from '$lib/category/Category.svelte';

	let categories = ['Java', 'Spring', 'Junit'];
</script>

<div class='mb-4'>
	<Category categories={categories} />
</div>
<MarkdownEditor markdown='# 제목' />
