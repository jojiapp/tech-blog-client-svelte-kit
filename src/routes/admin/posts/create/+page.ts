import type { PageLoad } from '../../../../../.svelte-kit/types/src/routes/admin/posts/create/$types';
import PostMarkdown from '../../../../lib/posts/dto/post-markdown';
import PostCategory from '../../../../lib/category/dto/post-category';
import categoryAPI from '../../../../lib/category/api/category-api';

export type PostCreatePage = {
	postMarkdown: PostMarkdown;
	postCategory: PostCategory;
};

export const load: PageLoad<PostCreatePage> = async () => {
	const categories = await categoryAPI.getCategories();
	return {
		postMarkdown: PostMarkdown.init(categories[0]),
		postCategory: new PostCategory(categories)
	};
};
