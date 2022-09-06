import PostItemDTO from '../../lib/posts/dto/postItemDTO';
import type { PageLoad } from '../../../.svelte-kit/types/src/routes/blog/$types';
import PostPageDTO from '../../lib/posts/dto/postPageDTO';
import PostPaginationDTO from '../../lib/posts/dto/postPaginationDTO';

export type PostsPage = {
	postItems: PostItemDTO[];
	postPagination: PostPaginationDTO;
};

export const load: PageLoad<PostsPage> = async ({ url, routeId }) => {
	const postPage = new PostPageDTO(Number(url.searchParams.get('page')));
	// todo: 게시글 목록조회

	const postPagination = new PostPaginationDTO(postPage.getPage(), 10, routeId ? routeId : 'blog');

	return {
		postItems: [
			new PostItemDTO(
				'1',
				'Chapter 10. 람다를 이용한 도메인 전용 언어',
				'언어의 주요 목표는 메시지를 명확하고, 안정적인 방식으로 전달하는 것 입니다.' +
					'개발팀과 도메인 전문가가 공유하고 이해할 수 있는 코드는 생산성과 직결되기 때문에 특히 중요....',
				'Modern Java In Action',
				'https://jojiapp.github.io/static/images/logo.png',
				new Date()
			),
			new PostItemDTO(
				'2',
				'Chapter 11. 람다를 이용한 도메인 전용 언어',
				'언어의 주요 목표는 메시지를 명확하고, 안정적인 방식으로 전달하는 것 입니다.',
				'Modern Java In Action',
				'https://jojiapp.github.io/static/images/logo.png',
				new Date()
			),
			new PostItemDTO(
				'1',
				'Chapter 10. 람다를 이용한 도메인 전용 언어',
				'언어의 주요 목표는 메시지를 명확하고, 안정적인 방식으로 전달하는 것 입니다.' +
					'개발팀과 도메인 전문가가 공유하고 이해할 수 있는 코드는 생산성과 직결되기 때문에 특히 중요....',
				'Modern Java In Action',
				'https://jojiapp.github.io/static/images/logo.png',
				new Date()
			),
			new PostItemDTO(
				'1',
				'Chapter 10. 람다를 이용한 도메인 전용 언어',
				'언어의 주요 목표는 메시지를 명확하고, 안정적인 방식으로 전달하는 것 입니다.' +
					'개발팀과 도메인 전문가가 공유하고 이해할 수 있는 코드는 생산성과 직결되기 때문에 특히 중요....',
				'Modern Java In Action',
				'https://jojiapp.github.io/static/images/logo.png',
				new Date()
			),
			new PostItemDTO(
				'1',
				'Chapter 10. 람다를 이용한 도메인 전용 언어',
				'언어의 주요 목표는 메시지를 명확하고, 안정적인 방식으로 전달하는 것 입니다.' +
					'개발팀과 도메인 전문가가 공유하고 이해할 수 있는 코드는 생산성과 직결되기 때문에 특히 중요....',
				'Modern Java In Action',
				'https://jojiapp.github.io/static/images/logo.png',
				new Date()
			),
			new PostItemDTO(
				'1',
				'Chapter 10. 람다를 이용한 도메인 전용 언어',
				'언어의 주요 목표는 메시지를 명확하고, 안정적인 방식으로 전달하는 것 입니다.' +
					'개발팀과 도메인 전문가가 공유하고 이해할 수 있는 코드는 생산성과 직결되기 때문에 특히 중요....',
				'Modern Java In Action',
				'https://jojiapp.github.io/static/images/logo.png',
				new Date()
			),
			new PostItemDTO(
				'1',
				'Chapter 10. 람다를 이용한 도메인 전용 언어',
				'언어의 주요 목표는 메시지를 명확하고, 안정적인 방식으로 전달하는 것 입니다.' +
					'개발팀과 도메인 전문가가 공유하고 이해할 수 있는 코드는 생산성과 직결되기 때문에 특히 중요....',
				'Modern Java In Action',
				'https://jojiapp.github.io/static/images/logo.png',
				new Date()
			),
			new PostItemDTO(
				'1',
				'Chapter 10. 람다를 이용한 도메인 전용 언어',
				'언어의 주요 목표는 메시지를 명확하고, 안정적인 방식으로 전달하는 것 입니다.' +
					'개발팀과 도메인 전문가가 공유하고 이해할 수 있는 코드는 생산성과 직결되기 때문에 특히 중요....',
				'Modern Java In Action',
				'https://jojiapp.github.io/static/images/logo.png',
				new Date()
			),
			new PostItemDTO(
				'1',
				'Chapter 10. 람다를 이용한 도메인 전용 언어',
				'언어의 주요 목표는 메시지를 명확하고, 안정적인 방식으로 전달하는 것 입니다.' +
					'개발팀과 도메인 전문가가 공유하고 이해할 수 있는 코드는 생산성과 직결되기 때문에 특히 중요....',
				'Modern Java In Action',
				'https://jojiapp.github.io/static/images/logo.png',
				new Date()
			),
			new PostItemDTO(
				'1',
				'Chapter 10. 람다를 이용한 도메인 전용 언어',
				'언어의 주요 목표는 메시지를 명확하고, 안정적인 방식으로 전달하는 것 입니다.' +
					'개발팀과 도메인 전문가가 공유하고 이해할 수 있는 코드는 생산성과 직결되기 때문에 특히 중요....',
				'Modern Java In Action',
				'https://jojiapp.github.io/static/images/logo.png',
				new Date()
			)
		],
		postPagination
	};
};
