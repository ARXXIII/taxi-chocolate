import Link from "next/link"
import { CarCardProps } from "../types"

const CarCard = ({ url, brand, price, type, sale, ransom, contribution, term }: CarCardProps) => {
    return (
        <>
            {ransom
                ? (
                    <div className="relative w-full py-12 text-center bg-dark-chocolate rounded-xl shadow">
                        <div className="absolute top-3 left-3 px-2 text-center text-xl text-neutral-100 bg-red-500/80 rounded-lg shadow">Взнос {contribution} &#8381;</div>
                        <section className="flex flex-col items-center gap-y-6 text-neutral-100">
                            <h1 className="font-bold text-3xl text-taxi shrink-0">{brand}</h1>
                            <h2 className="text-2xl shrink-0">Класс &#171;{type}&#187; АКПП</h2>
                            <p className="text-3xl shrink-0">Б/У <strong className="text-taxi">{price}</strong> &#8381; {term}</p>
                        </section>
                    </div>
                ) : (
                    <Link href={`/cars/${url}`} className="relative w-full py-12 text-center bg-dark-chocolate rounded-xl shadow">
                        {sale
                            ? (<div className="absolute top-3 left-3 px-2 text-center text-xl text-neutral-100 bg-red-500/80 rounded-lg shadow">Акция</div>)
                            : null
                        }
                        <section className="flex flex-col items-center gap-y-6 text-neutral-100">
                            <h1 className="font-bold text-3xl text-taxi shrink-0">{brand}</h1>
                            <h2 className="text-2xl shrink-0">Класс &#171;{type}&#187; АКПП</h2>
                            <p className="text-3xl shrink-0">Аренда от <strong className="text-taxi">{price}</strong> &#8381;</p>
                            <p className="text-2xl shrink-0">-50% + 8 выходных</p>
                        </section>
                    </Link>
                )
            }
        </>
    )
}

export default CarCard