import { rates } from "@/app/constants"
import { PageHeading, RateCard } from "@/app/components"

const Rates = () => {
    return (
        <article className='grid grid-cols-1 gap-y-6'>
            <section className='lg:w-full'>
                <PageHeading heading="Тарифы" />
            </section>
            <section className="grid grid-cols-1 gap-6">
                {rates.map((rate) => (
                    <RateCard key={rate.url} url={rate.url} rate={rate.rate} description={rate.description} />
                ))}
            </section>
        </article>
    )
}

export default Rates