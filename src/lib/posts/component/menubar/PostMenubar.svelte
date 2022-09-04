<script lang="ts">
	import PostCategoryChoice from '$lib/posts/component/menubar/PostCategoryChoice.svelte';
	import SubmitButton from '$lib/common/component/button/SimpleButton.svelte';
	import { postCreateMarkdown } from '$lib/posts/store/post-stores.js';

	export let handlePreview;

	const handleCreatedAtOnChange = (date: string) => {
		$postCreateMarkdown.setCreatedAt(date);
	};
</script>

<div class="mb-4 flex justify-between">
	<PostCategoryChoice />
	<div class="flex gap-2">
		<input
			type="text"
			class="w-60"
			placeholder="등록일: yyyy-MM-dd HH:mm"
			value={$postCreateMarkdown.getCreatedAt()}
			on:change={(e) => handleCreatedAtOnChange(e.currentTarget.value)}
		/>
		<SubmitButton handleOnClick={handlePreview} text="미리보기" />
	</div>
</div>
