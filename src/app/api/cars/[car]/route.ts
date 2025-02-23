import { taxiPark } from '@/app/constants';
import { NextResponse } from 'next/server';

export const GET = async (req: Request, context: any) => {
	const { params } = context;

	const tip: string = params.car;
	const data = taxiPark.find((car) => car.url === tip);

	return NextResponse.json(data);
};
