<script lang="ts">
	import { categoryChoice, postMarkdown, post } from '../../../../../lib/posts/store/post-stores';
	import postAPI from '../../../../../lib/posts/api/post-api';
	import PostWriter from '../../../../../lib/posts/component/writer/PostWriter.svelte';

	export let data;
	categoryChoice.set(data.postCategory);
	postMarkdown.set(data.postMarkdown);
	post.set($postMarkdown.toPostMarkdown());

	const handleSubmit = () => {
		$postMarkdown.setUpdatedAt(new Date());
		postAPI.updatePost($postMarkdown);
	};
</script>

<PostWriter {handleSubmit} />
