import type { PageLoad } from '../../../../../.svelte-kit/types/src/routes/admin/posts/create/$types';
import PostMarkdownDTO from '$lib/posts/dto/postMarkdownDTO';
import CategoryChoice from '$lib/category/dto/CategoryChoice';
import categoryAPI from '$lib/category/api/category-api';

export type PostCreatePage = {
	postMarkdown: PostMarkdownDTO;
	categoryChoice: CategoryChoice;
};

export const load: PageLoad<PostCreatePage> = async () => {
	const categories = await categoryAPI.getCategories();
	return {
		postMarkdown: PostMarkdownDTO.init(categories[0]),
		categoryChoice: new CategoryChoice(categories)
	};
};
