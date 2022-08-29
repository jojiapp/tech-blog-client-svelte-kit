import type { PageLoad } from '../../../../../.svelte-kit/types/src/routes/admin/posts/create/$types';
import PostMarkdown from '../../../../lib/posts/dto/post-markdown';
import PostCategory from '../../../../lib/posts/dto/post-category';

export type PostCreatePage = {
	postMarkdown: PostMarkdown;
	postCategory: PostCategory;
};

export const load: PageLoad<PostCreatePage> = () => {
	const categories = ['Java', 'Spring', 'Junit'];
	return {
		postMarkdown: PostMarkdown.init(categories[0]),
		postCategory: new PostCategory(categories)
	};
};
