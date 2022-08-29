<script lang="ts">
	import { postCategory, postMarkdown } from '../store/post-create-stores';

	let isActive = false;
	const handleCategoryClick = (category: string) => {
		$postCategory = $postCategory.setChoice(category);
		$postMarkdown = $postMarkdown.setCategory(category);
		handleIsActiveToggle();
	};

	const handleIsActiveToggle = () => (isActive = !isActive);
</script>

<div class="relative z-10 w-48">
	<div class="rounded border-2 border-neutral-800 p-2" on:click={handleIsActiveToggle}>
		<div class="flex cursor-pointer items-center">
			{$postCategory.getChoice()}
		</div>
	</div>
	<div
		class="absolute top-14 w-48 rounded border-2 border-neutral-800 bg-neutral-900 py-3 px-2"
		class:hidden={!isActive}
	>
		{#each $postCategory.getCategories() as category, index}
			<div class="cursor-pointer p-3" on:click={() => handleCategoryClick(category)}>
				{category}
			</div>
		{/each}
	</div>
</div>
