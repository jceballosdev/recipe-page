export interface ListItem {
	id: string;
	position: number;
	name: string;
	description: string;
}

export interface TableItem {
	id: string;
	position: number;
	label: string;
	value: string;
}

export interface Recipe {
	id: string;
	title: string;
	imageSrc: string;
	description: string;
	preparationTime: ListItem[];
	ingredients: ListItem[];
	instructions: ListItem[];
	nutrition: TableItem[];
}