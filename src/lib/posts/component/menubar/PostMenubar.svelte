<script lang="ts">
	import PostCategoryChoice from '$lib/posts/component/menubar/PostCategoryChoice.svelte';
	import SubmitButton from '$lib/common/component/button/SimpleButton.svelte';

	export let handlePreview;
</script>

<div class="mb-4 flex justify-between">
	<PostCategoryChoice />
	<SubmitButton handleOnClick={handlePreview} text="미리보기" />
</div>
