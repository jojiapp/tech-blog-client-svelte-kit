import type PostMarkdownDTO from '../dto/postMarkdownDTO';

class PostAPI {
	createPost = async (postMarkdown: PostMarkdownDTO) => {
		console.log('저장');
		// todo: 게시글 등록
		return '1';
	};

	updatePost = async (postMarkdown: PostMarkdownDTO) => {
		console.log('수정');
		// todo 게시글 수정
		return '1';
	};

	saveImage = async (file: File) => {
		console.log('파일저장');
		// todo: 파일저장
		return 'https://jojiapp.github.io/static/images/logo.png';
	};
}

const postAPI = new PostAPI();

export default postAPI;
