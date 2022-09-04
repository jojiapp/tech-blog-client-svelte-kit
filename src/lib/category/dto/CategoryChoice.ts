class CategoryChoice {
	private readonly categories: string[];
	private choice: string;

	constructor(categories: string[]) {
		this.categories = categories;
		this.choice = categories[0];
	}

	public getCategories(): string[] {
		return [...this.categories];
	}

	public getChoice(): string {
		return this.choice;
	}

	public setChoice(choice: string): CategoryChoice {
		this.choice = choice;
		return this;
	}
}

export default CategoryChoice;
