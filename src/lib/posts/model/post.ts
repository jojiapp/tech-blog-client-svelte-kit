import DateFormatter from '../../common/formatter/DateFormatter';

class Post {
	private readonly title: string;
	private readonly content: string;
	private readonly category: string;
	private readonly createdAt: Date;
	private readonly updatedAt: Date;

	constructor(title: string, content: string, category: string, createdAt: Date, updatedAt: Date) {
		this.title = title;
		this.content = content;
		this.category = category;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public getTitle(): string {
		return this.title;
	}

	public getContent(): string {
		return this.content;
	}

	public getCategory(): string {
		return this.category;
	}

	public getCreatedAt(): string {
		return DateFormatter.getKOYYYYMMDD(this.createdAt);
	}

	public getUpdatedAt(): string {
		return DateFormatter.getKOYYYYMMDD(this.createdAt);
	}
}

export default Post;
