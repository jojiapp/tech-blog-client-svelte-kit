<script lang="ts">
	import { postCategoryChoice, postCreateMarkdown } from '../../store/post-stores';

	let isActive = false;
	const handleCategoryClick = (category: string) => {
		$postCategoryChoice = $postCategoryChoice.setChoice(category);
		$postCreateMarkdown = $postCreateMarkdown.setCategory(category);
		handleIsActiveToggle();
	};

	const handleIsActiveToggle = () => (isActive = !isActive);
</script>

<div class="relative z-10 w-48">
	<div class="rounded border-2 border-gray-800 p-2" on:click={handleIsActiveToggle}>
		<div class="flex cursor-pointer items-center">
			{$postCategoryChoice.getChoice()}
		</div>
	</div>
	<div
		class="absolute top-14 w-48 rounded border-2 border-gray-800 bg-gray-900 py-3 px-2"
		class:hidden={!isActive}
	>
		{#each $postCategoryChoice.getCategories() as category, index}
			<div class="cursor-pointer p-3" on:click={() => handleCategoryClick(category)}>
				{category}
			</div>
		{/each}
	</div>
</div>
