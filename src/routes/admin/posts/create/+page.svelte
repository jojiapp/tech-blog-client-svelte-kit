<script lang='ts'>
	import { postCategories } from '$lib/posts/store/post-create-stores';
	import MarkdownEditor from '$lib/posts/component/markdown-editor/MarkdownEditor.svelte';
	import Category from '$lib/posts/component/category/PostCategory.svelte';
	import PostCategory from '$lib/posts/component/category/post-category';

	export let data;
	postCategories.set(new PostCategory(data.categories));

</script>

<div class='mb-4'>
	<Category />
</div>
<MarkdownEditor markdown='# 제목' />
