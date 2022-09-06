<script lang="ts">
	import PostItem from '$lib/posts/component/list/PostItem.svelte';
	import PostPaginationDTO from '../../dto/postPaginationDTO';
	import PostItemDTO from '../../dto/postItemDTO';
	import PostPagination from '$lib/posts/component/list/PostPagination.svelte';

	export let postItems: PostItemDTO[];
	export let postPagination: PostPaginationDTO;
</script>

<section>
	{#each postItems as post}
		<PostItem {post} />
	{/each}
	<PostPagination {postPagination} />
</section>
