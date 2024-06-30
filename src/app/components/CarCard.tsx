import Link from "next/link"

import { cn } from "@/lib/utils"
import { CarCardProps } from "../types"

const CarCard = ({ url, brand, price, rate, sale, ransom, contribution, term }: CarCardProps) => {
    return (
        <>
            {ransom
                ? (
                    <div className="relative w-full pt-12 pb-6 lg:py-12 text-center bg-dark-chocolate rounded-xl shadow">
                        <div className="absolute top-3 left-3 px-2 text-center text-base lg:text-xl text-neutral-100 bg-red-500/80 rounded-lg shadow">Взнос {contribution} &#8381;</div>
                        <section className="flex flex-col items-center gap-y-3 lg:gap-y-6 text-neutral-100">
                            <h1 className="font-bold text-xl lg:text-3xl text-taxi shrink-0">{brand}</h1>
                            <h2 className="hidden lg:block text-2xl shrink-0">Класс <span className="capitalize">&#171;{rate}&#187;</span> АКПП</h2>
                            <h2 className="lg:hidden text-2xl capitalize shrink-0">&#171;{rate}&#187;</h2>
                            <p className="text-xl lg:text-3xl shrink-0">Б/У <strong className="text-taxi">{price}</strong> &#8381; {term}</p>
                        </section>
                    </div>
                ) : (
                    <Link href={`/cars/${url}`} className={cn("relative w-full py-6 lg:py-12 text-center bg-dark-chocolate rounded-xl shadow",
                        sale && 'pt-12'
                    )}>
                        {sale
                            ? (<div className="absolute top-3 left-3 px-2 text-center text-base lg:text-xl text-neutral-100 bg-red-500/80 rounded-lg shadow">Акция</div>)
                            : null
                        }
                        <section className="flex flex-col items-center gap-y-3 lg:gap-y-6 text-neutral-100">
                            <h1 className="font-bold text-lg lg:text-3xl text-taxi shrink-0">{brand}</h1>
                            <h2 className="hidden lg:block text-lg lg:text-2xl shrink-0">Класс <span className="capitalize">&#171;{rate}&#187;</span> АКПП</h2>
                            <h2 className="lg:hidden text-lg capitalize shrink-0">&#171;{rate}&#187;</h2>
                            <p className="hidden lg:block text-lg lg:text-3xl shrink-0">Аренда от <strong className="text-taxi">{price}</strong> &#8381;</p>
                            <p className="lg:hidden text-xl text-taxi shrink-0">{price} &#8381;</p>
                            <p className="hidden lg:block text-2xl shrink-0">-50% + 8 выходных</p>
                        </section>
                    </Link>
                )
            }
        </>
    )
}

export default CarCard