import { taxiPark } from '@/app/constants';
import { NextResponse } from 'next/server';

export const GET = async (req: Request, context: any) => {
	const { params } = context;

	const tip: string = params.rate;
	const data = taxiPark.filter((car) => car.rate === tip);

	return NextResponse.json(data);
};
