import type { PageLoad } from '../../../../../../.svelte-kit/types/src/routes/admin/posts/create/$types';
import PostMarkdownDTO from '../../../../../lib/posts/dto/postMarkdownDTO';
import CategoryChoice from '$lib/category/dto/CategoryChoice';
import categoryAPI from '$lib/category/api/category-api';
import { error } from '@sveltejs/kit';

export type PostUpdatePage = {
	postMarkdown: PostMarkdownDTO;
	postCategory: CategoryChoice;
};

export const load: PageLoad<PostUpdatePage> = async ({ params }) => {
	const categories = await categoryAPI.getCategories();

	if (!params.id) {
		error(404, 'Not found');
	}

	// todo: 게시글 조회
	return {
		postMarkdown: PostMarkdownDTO.from(params.id!, '# 제목', categories[0], new Date()),
		postCategory: new CategoryChoice(categories)
	};
};
