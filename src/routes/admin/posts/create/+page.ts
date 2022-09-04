import type { PageLoad } from '../../../../../.svelte-kit/types/src/routes/admin/posts/create/$types';
import PostMarkdown from '../../../../lib/posts/dto/post-markdown';
import CategoryChoice from '../../../../lib/category/dto/CategoryChoice';
import categoryAPI from '../../../../lib/category/api/category-api';

export type PostCreatePage = {
	postMarkdown: PostMarkdown;
	categoryChoice: CategoryChoice;
};

export const load: PageLoad<PostCreatePage> = async () => {
	const categories = await categoryAPI.getCategories();
	return {
		postMarkdown: PostMarkdown.init(categories[0]),
		categoryChoice: new CategoryChoice(categories)
	};
};
