import { SalePageProps } from "../types"

const Sale = ({ sale, price }: SalePageProps) => {
    return (
        <>
            {sale
                ? (
                    <div className="flex flex-col justify-center items-center gap-y-6 p-3 lg:p-6 text-neutral-100 bg-red-600 rounded-xl shadow">
                        <h1 className="font-bold text-4xl lg:text-6xl uppercase">Акция</h1>
                        <h2 className="w-3/4 lg:w-full text-center text-2xl lg:text-4xl leading-relaxed">Аренда от <strong className="text-taxi">{price} &#8381;</strong> без комиссии парка!</h2>
                    </div>
                )
                : null
            }
        </>
    )
}

export default Sale