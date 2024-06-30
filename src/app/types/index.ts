export interface CarCardProps {
	url?: string;
	brand: string;
	rate: string | undefined;
	price: number;
	text?: string;
	sale?: boolean;
	ransom?: object;
	contribution?: number;
	term?: string;
}

export interface RateCardProps {
	url: string;
	rate: string;
	description: string;
}

export interface CarPageProps {
	params: any;
}

export interface RatePageProps {
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

interface NavTypes {
	name: string;
	address: string;
}

export interface NavProps {
	data: NavTypes[];
}

export interface MobileNavProps {
	data: NavTypes[];
	isOpen: boolean;
	onClose: () => void;
}
