<script lang="ts">
	import { postMarkdown } from '../../store/post-stores';
	import MarkdownEditor from '../../../markdown/MarkdownEditor.svelte';
	import Post from '../detail/Post.svelte';
	import SimpleButton from '../../../common/component/button/SimpleButton.svelte';
	import PostMenubar from './menubar/PostMenubar.svelte';

	export let handleSubmit;

	let isPreview = false;

	const handlePreviewToggle = () => (isPreview = !isPreview);
</script>

{#if !isPreview}
	<PostMenubar {handlePreviewToggle} />
	<MarkdownEditor />
{:else}
	<Post post={$postMarkdown.toPostMarkdown()} />
	<div class="mt-16 flex justify-between">
		<SimpleButton handleOnClick={handlePreviewToggle} text="뒤로가기" />
		<SimpleButton handleOnClick={handleSubmit} text="저장" />
	</div>
{/if}
