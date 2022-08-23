import type { PageLoad } from '../../../../../.svelte-kit/types/src/routes/admin/posts/create/$types';
import type { PostCreatePage } from '$lib/posts/type/post-page-types';

export const load: PageLoad<PostCreatePage> = () => {
	return {
		categories: ['Java', 'Spring', 'Junit']
	};
};

