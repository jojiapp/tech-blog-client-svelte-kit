class PostCategory {
	private readonly categories: string[];
	private choice: number;

	constructor (categories: string[]) {
		this.categories = categories;
		this.choice = 0;
	}

	public getCategories (): string[] {
		return [...this.categories];
	}

	public getChoice (): string {
		return this.categories[this.choice];
	}

	public setChoice (choice: number): void {
		this.choice = choice;
	}
}

export default PostCategory;
