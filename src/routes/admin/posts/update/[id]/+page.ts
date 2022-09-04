import type { PageLoad } from '../../../../../../.svelte-kit/types/src/routes/admin/posts/create/$types';
import PostMarkdown from '$lib/posts/dto/post-markdown';
import CategoryChoice from '../../../../../lib/category/dto/CategoryChoice';
import categoryAPI from '$lib/category/api/category-api';
import { error } from '@sveltejs/kit';

export type PostUpdatePage = {
	postMarkdown: PostMarkdown;
	postCategory: CategoryChoice;
};

export const load: PageLoad<PostUpdatePage> = async ({ params }) => {
	const categories = await categoryAPI.getCategories();

	if (!params.id) {
		error(404, 'Not found');
	}

	// todo: 게시글 조회
	return {
		postMarkdown: PostMarkdown.from(params.id!, '# 제목', categories[0], new Date()),
		postCategory: new CategoryChoice(categories)
	};
};
