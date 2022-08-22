<script lang='ts'>
	export let categories: string[];
	const CATEGORIES_LAST_INDEX = categories.length - 1;

	let selectCategory = categories[0];

	let isHidden = true;

	const handleIsHiddenToggle = () => (isHidden = !isHidden);

	const handleCategoryClick = (category) => {
		selectCategory = category;
		handleIsHiddenToggle();
	};
</script>

<div class='relative z-10 w-48'>
	<div class='border-2 border-neutral-800 p-2'
			 on:click={handleIsHiddenToggle}>
		<div class='flex cursor-pointer items-center'>
			{selectCategory}
		</div>
	</div>
	<div class="{isHidden ? 'hidden' : ''}
		absolute top-14 w-48 border-2 border-neutral-800 bg-neutral-900 py-3 px-2">
		{#each categories as category, index}
			<div class="{index === CATEGORIES_LAST_INDEX ? '' : 'pb-4'}
			cursor-pointer"
					 on:click={() => handleCategoryClick(category)}>
				{category}
			</div>
		{/each}
	</div>
</div>
