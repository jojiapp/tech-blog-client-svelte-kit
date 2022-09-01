import type { PageLoad } from '../../../../../.svelte-kit/types/src/routes/admin/posts/create/$types';
import PostCreateMarkdown from '../../../../lib/posts/dto/post-create-markdown';
import PostCategory from '../../../../lib/posts/dto/post-category';
import categoryAPI from '../../../../lib/category/api/category-api';

export type PostCreatePage = {
	postMarkdown: PostCreateMarkdown;
	postCategory: PostCategory;
};

export const load: PageLoad<PostCreatePage> = async () => {
	const categories = await categoryAPI.getCategories();
	return {
		postMarkdown: PostCreateMarkdown.init(categories[0]),
		postCategory: new PostCategory(categories)
	};
};
