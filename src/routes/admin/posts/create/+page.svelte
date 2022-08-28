<script lang="ts">
	import { postCategories, postMarkdown } from '$lib/posts/store/post-create-stores';
	import MarkdownEditor from '../../../../lib/posts/component/markdown/editor/MarkdownEditor.svelte';
	import Category from '$lib/posts/component/category/PostCategory.svelte';
	import PostCategory from '$lib/posts/component/category/post-category';
	import PostSubmitButton from '$lib/posts/component/button/PostSubmitButton.svelte';
	import PostMarkdown from '../../../../lib/posts/component/markdown/post-markdown';

	export let data;
	postCategories.set(new PostCategory(data.categories));
	postMarkdown.set(new PostMarkdown('', '', new Date(), new Date()));

	let handleSubmit = () => {
		console.log('api 전송1');
		console.log($postMarkdown.getContent());
	};
</script>

<div class="mb-4 flex justify-between">
	<Category />
	<PostSubmitButton {handleSubmit} />
</div>

<MarkdownEditor />
