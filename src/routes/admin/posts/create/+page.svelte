<script lang="ts">
	import {
		postCategoryChoice,
		postCreateMarkdown,
		post
	} from '../../../../lib/posts/store/post-stores';
	import MarkdownEditor from '../../../../lib/posts/component/markdown/MarkdownEditor.svelte';
	import Post from '$lib/posts/component/Post.svelte';
	import SimpleButton from '$lib/common/component/button/SimpleButton.svelte';
	import postAPI from '../../../../lib/posts/api/post-api';
	import PostMenubar from '../../../../lib/posts/component/menubar/PostMenubar.svelte';

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
	<PostMenubar {handlePreview} />
	<MarkdownEditor />
{:else}
	<Post {handlePreview} />
	<div class="mt-16 flex justify-between">
		<SimpleButton handleOnClick={handlePreviewToggle} text="뒤로가기" />
		<SimpleButton handleOnClick={handleSubmit} text="저장" />
	</div>
{/if}
