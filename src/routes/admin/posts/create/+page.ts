import type { PageLoad } from '../../../../../.svelte-kit/types/src/routes/admin/posts/create/$types';
import type { PostCreatePage } from '$lib/posts/type/post-page-types';
import PostMarkdown from '../../../../lib/posts/component/markdown/post-markdown';
import PostCategory from '../../../../lib/posts/component/category/post-category';

export const load: PageLoad<PostCreatePage> = () => {
	const categories = ['Java', 'Spring', 'Junit'];
	return {
		postMarkdown: PostMarkdown.init(categories[0]),
		postCategory: new PostCategory(categories)
	};
};
