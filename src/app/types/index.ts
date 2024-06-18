export interface CarCardProps {
	url?: string;
	brand: string;
	type: string;
	price: number;
	text?: string;
	sale?: boolean;
	ransom?: boolean;
	contribution?: number;
	term?: string;
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

export interface ListProps {
	title: string;
	list?: string[];
	tel?: string;
}

export interface InfoProps {
	title: string;
	subTitle?: string;
	list?: string[];
	subList?: string[];
	tel?: string;
}
