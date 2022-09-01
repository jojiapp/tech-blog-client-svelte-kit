<script lang="ts">
	import {
		postCategoryChoice,
		postCreateMarkdown,
		post
	} from '../../../../lib/posts/store/post-stores';
	import MarkdownEditor from '../../../../lib/posts/component/markdown/MarkdownEditor.svelte';
	import Category from '../../../../lib/posts/component/PostCategoryChoice.svelte';
	import Post from '$lib/posts/component/Post.svelte';
	import SubmitButton from '../../../../lib/common/component/button/SimpleButton.svelte';
	import SimpleButton from '$lib/common/component/button/SimpleButton.svelte';
	import postAPI from '../../../../lib/posts/api/post-api';

	export let data;
	postCategoryChoice.set(data.postCategory);
	postCreateMarkdown.set(data.postMarkdown);
	post.set($postCreateMarkdown.toPostMarkdown());

	let isPreview = false;

	const handleSubmit = () => {
		postAPI.createPost($postCreateMarkdown);
	};

	const handlePreviewToggle = () => (isPreview = !isPreview);

	const handlePreview = () => {
		$post = $postCreateMarkdown.toPostMarkdown();
		handlePreviewToggle();
	};
</script>

{#if !isPreview}
	<div class="mb-4 flex justify-between">
		<Category />
		<SubmitButton handleOnClick={handlePreview} text="미리보기" />
	</div>

	<MarkdownEditor />
{:else}
	<Post />
	<div class="mt-16 flex justify-between">
		<SimpleButton handleOnClick={handlePreviewToggle} text="뒤로가기" />
		<SimpleButton handleOnClick={handleSubmit} text="저장" />
	</div>
{/if}
