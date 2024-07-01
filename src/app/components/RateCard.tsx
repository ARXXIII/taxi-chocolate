import Link from "next/link"

import { RateCardProps } from "../types"

const RateCard = ({ url, rate, description }: RateCardProps) => {
    return (
        <Link href={`/rates/${url}`}>
            <section className="space-y-3 lg:space-y-6 p-3 bg-dark-chocolate rounded-xl">
                <h1 className="text-center font-bold text-2xl lg:text-4xl text-taxi shrink-0">{rate}</h1>
                <p className="text-base lg:text-2xl text-neutral-100 leading-relaxed">{description}</p>
            </section>
        </Link>
    )
}

export default RateCard