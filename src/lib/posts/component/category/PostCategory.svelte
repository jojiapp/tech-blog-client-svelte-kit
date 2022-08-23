<script lang='ts'>

	import { categoriesStore } from '../../store/post-create-stores';
	import PostCategory from './post-category';

	let categories: PostCategory;
	categoriesStore.subscribe(categoriesStore =>
		categories = categoriesStore
	);

	let isActive = false;
	const handleCategoryClick = (index: number) => {
		categories.setChoice(index);
		handleIsActiveToggle();
		categoriesStore.update(value => value);
	};

	const handleIsActiveToggle = () => (isActive = !isActive);

</script>

<div class='relative z-10 w-48'>
	<div class='border-2 border-neutral-800 p-2'
			 on:click={handleIsActiveToggle}>
		<div class='flex cursor-pointer items-center'>
			{categories.getChoice()}
		</div>
	</div>
	<div class='absolute top-14 w-48 border-2 border-neutral-800 bg-neutral-900 py-3 px-2'
			 class:hidden={!isActive}>
		{#each categories.getCategories() as category, index}
			<div class='cursor-pointer p-3'
					 on:click={() => handleCategoryClick(index)}>
				{category}
			</div>
		{/each}
	</div>
</div>
