export interface CarCardProps {
	url: string;
	brand: string;
	type: string;
	price: number;
	text: string;
	sale: boolean;
}

export interface CarPageProps {
	params: any;
}

export interface SalePageProps {
	sale: boolean;
	price: number;
}

export interface FeedbackProps {
	name: string;
	review: string;
}

export interface PageHeadingProps {
	heading: string;
}
