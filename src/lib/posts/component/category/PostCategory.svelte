<script lang='ts'>

	import { postCategories } from '../../store/post-create-stores';

	let isActive = false;
	const handleCategoryClick = (category: string) => {
		$postCategories = $postCategories.setChoice(category);
		handleIsActiveToggle();
	};

	const handleIsActiveToggle = () => (isActive = !isActive);

</script>

<div class='relative z-10 w-48'>
	<div class='border-2 border-neutral-800 p-2'
			 on:click={handleIsActiveToggle}>
		<div class='flex cursor-pointer items-center'>
			{$postCategories.getChoice()}
		</div>
	</div>
	<div class='absolute top-14 w-48 border-2 border-neutral-800 bg-neutral-900 py-3 px-2'
			 class:hidden={!isActive}>
		{#each $postCategories.getCategories() as category, index}
			<div class='cursor-pointer p-3'
					 on:click={() => handleCategoryClick(category)}>
				{category}
			</div>
		{/each}
	</div>
</div>
