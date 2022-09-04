<script lang="ts">
	import PostCategoryChoice from './PostCategoryChoice.svelte';
	import SubmitButton from '../../../../common/component/button/SimpleButton.svelte';
	import { postMarkdown } from '../../../store/post-stores.js';

	export let handlePreview;

	const handleCreatedAtOnChange = (date: string) => {
		$postMarkdown.setCreatedAt(date);
	};
</script>

<div class="mb-4 flex justify-between">
	<PostCategoryChoice />
	<div class="flex gap-2">
		<input
			type="text"
			class="w-60"
			placeholder="등록일: yyyy-MM-dd HH:mm"
			value={$postMarkdown.getCreatedAt()}
			on:change={(e) => handleCreatedAtOnChange(e.currentTarget.value)}
		/>
		<SubmitButton handleOnClick={handlePreview} text="미리보기" />
	</div>
</div>
