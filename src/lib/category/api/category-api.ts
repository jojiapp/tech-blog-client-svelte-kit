class CategoryAPI {
	getCategories = async () => {
		// todo 카테고리 전체 조회
		return ['Java', 'Spring', 'Junit'];
	};
}

const categoryAPI = new CategoryAPI();

export default categoryAPI;
