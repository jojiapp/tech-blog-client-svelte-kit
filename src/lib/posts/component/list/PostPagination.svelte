<script lang="ts">
	import PostPaginationDTO from '../../dto/postPaginationDTO';

	export let postPagination: PostPaginationDTO;

	const handleLinkOnClick = (href: string) => {
		location.href = href;
	};
</script>

<div class="mt-12 flex justify-center">
	{#if postPagination.isFirstPage()}
		<button class="cursor-default text-gray-400">Previous</button>
	{:else}
		<button on:click={() => handleLinkOnClick(postPagination.getPreviousPage())}>Previous</button>
	{/if}

	<div class="mx-12 flex gap-2">
		<div>{postPagination.getCurrentPage()}</div>
		<div>of</div>
		<div>{postPagination.getLastPage()}</div>
	</div>

	{#if postPagination.isLastPage()}
		<button class="cursor-default text-gray-400">Next</button>
	{:else}
		<button on:click={() => handleLinkOnClick(postPagination.getNextPage())}>Next</button>
	{/if}
</div>
