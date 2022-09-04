<script lang="ts">
	import { postMarkdown, post } from '../../store/post-stores';
	import MarkdownEditor from '../../../markdown/MarkdownEditor.svelte';
	import Post from '../detail/Post.svelte';
	import SimpleButton from '../../../common/component/button/SimpleButton.svelte';
	import PostMenubar from './menubar/PostMenubar.svelte';

	export let handleSubmit;

	let isPreview = false;

	const handlePreviewToggle = () => (isPreview = !isPreview);

	const handlePreview = () => {
		$post = $postMarkdown.toPostMarkdown();
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
