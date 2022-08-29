<script lang="ts">
	import { postCategory, postMarkdown } from '$lib/posts/store/post-create-stores';
	import MarkdownEditor from '../../../../lib/posts/component/markdown/MarkdownEditor.svelte';
	import Category from '$lib/posts/component/PostCategory.svelte';
	import Post from '$lib/posts/component/Post.svelte';
	import SubmitButton from '../../../../lib/common/button/SimpleButton.svelte';

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
		<SubmitButton handleOnClick={handlePreviewToggle} text="미리보기" />
	</div>

	<MarkdownEditor />
{:else}
	<Post />
{/if}
