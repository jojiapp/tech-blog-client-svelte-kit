import dayjs from 'dayjs';

class PostMarkdown {
	private title: string;
	private content: string;
	private category: string;
	private readonly createdAt: Date;
	private readonly updatedAt: Date;

	private static readonly DATE_FORMAT = 'YYYY년 MM월 DD일';

	constructor(title: string, content: string, category: string, createdAt: Date, updatedAt: Date) {
		this.title = title;
		this.content = content;
		this.category = category;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public static init(category: string) {
		return new PostMarkdown('', '', category, new Date(), new Date());
	}

	private extraTitle(content: string): string {
		const title = content
			.match(/^#\s.*\n/gi)
			?.join('')
			.replace('# ', '');
		return title ? title : '';
	}

	public getTitle(): string {
		return this.title;
	}

	public getContent(): string {
		return this.content;
	}

	public setContent(content: string): PostMarkdown {
		this.title = this.extraTitle(content);
		this.content = content;
		return this;
	}

	public getCategory(): string {
		return this.category;
	}

	public setCategory(category: string): PostMarkdown {
		this.category = category;
		return this;
	}

	public getCreatedAt() {
		return dayjs(this.createdAt).format(PostMarkdown.DATE_FORMAT);
	}

	public getUpdateAt() {
		return dayjs(this.updatedAt).format(PostMarkdown.DATE_FORMAT);
	}
}

export default PostMarkdown;
