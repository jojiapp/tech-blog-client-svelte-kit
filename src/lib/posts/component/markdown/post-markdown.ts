class PostMarkdown {
	private title: string;
	private content: string;
	private createdAt: Date;
	private updatedAt: Date;

	constructor(title: string, content: string, createdAt: Date, updatedAt: Date) {
		this.title = title;
		this.content = content;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public getContent(): string {
		return this.content;
	}

	public setContent(content: string): PostMarkdown {
		this.content = content;
		return this;
	}
}

export default PostMarkdown;
