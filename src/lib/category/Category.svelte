<script lang='ts'>
	export let categories: string[];
	const CATEGORIES_LAST_INDEX = categories.length - 1;

	let selectCategory = categories[0];

	let isActive = false;

	const handleIsActiveToggle = () => (isActive = !isActive);

	const handleCategoryClick = (category) => {
		selectCategory = category;
		handleIsActiveToggle();
	};
</script>

<div class='relative z-10 w-48'>
	<div class='border-2 border-neutral-800 p-2'
			 on:click={handleIsActiveToggle}>
		<div class='flex cursor-pointer items-center'>
			{selectCategory}
		</div>
	</div>
	<div class='absolute top-14 w-48 border-2 border-neutral-800 bg-neutral-900 py-3 px-2'
			 class:hidden={!isActive}>
		{#each categories as category, index}
			<div class='cursor-pointer p-3'
					 on:click={() => handleCategoryClick(category)}>
				{category}
			</div>
		{/each}
	</div>
</div>
