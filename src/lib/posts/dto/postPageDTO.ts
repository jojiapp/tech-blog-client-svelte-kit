class PostPageDTO {
	private readonly page: number;
	private readonly size: number;

	constructor(page: number) {
		this.page = page > 0 ? page : 1;
		this.size = 10;
	}

	public getPage(): number {
		return this.page;
	}

	public getSize(): number {
		return this.size;
	}
}

export default PostPageDTO;
