<script lang="ts">
	import { postCategory, postMarkdown } from '$lib/posts/store/post-create-stores';
	import MarkdownEditor from '../../../../lib/posts/component/markdown/editor/MarkdownEditor.svelte';
	import Category from '$lib/posts/component/category/PostCategory.svelte';
	import PostButton from '../../../../lib/posts/component/button/PostButton.svelte';
	import Post from '$lib/posts/component/Post.svelte';

	export let data;
	postCategory.set(data.postCategory);
	postMarkdown.set(data.postMarkdown);

	let isPreview = false;

	const handleSubmit = () => {
		console.log('api 전송1');
		console.log($postMarkdown.getContent());
	};

	const handlePreviewToggle = () => (isPreview = !isPreview);
</script>

{#if !isPreview}
	<div class="mb-4 flex justify-between">
		<Category />
		<div class="flex items-center justify-center gap-2">
			<PostButton handleOnClick={handlePreviewToggle} text="미리보기" />
			<PostButton handleOnClick={handleSubmit} text="저장" />
		</div>
	</div>

	<MarkdownEditor />
{:else}
	<Post />
{/if}
