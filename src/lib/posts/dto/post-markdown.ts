import dayjs from 'dayjs';

class PostMarkdown {
	private markdown: string;
	private category: string;
	private readonly createdAt: Date;
	private readonly updatedAt: Date;

	private static readonly DATE_FORMAT = 'YYYY년 MM월 DD일';

	constructor(title: string, markdown: string, category: string, createdAt: Date, updatedAt: Date) {
		this.markdown = markdown;
		this.category = category;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public static init(category: string) {
		return new PostMarkdown('', '', category, new Date(), new Date());
	}

	public getTitle(): string {
		const title = this.markdown
			.match(/^#\s.*\n/gi)
			?.join('')
			.replace('# ', '');
		return title ? title : '';
	}

	public getContent(): string {
		return this.markdown.replace(`# ${this.getTitle()}`, '');
	}

	public setMarkdown(markdown: string): PostMarkdown {
		this.markdown = markdown;
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
