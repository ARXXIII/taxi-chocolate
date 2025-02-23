import { taxiPark } from "@/app/constants"
import { CarCard, PageHeading } from "@/app/components"

const Cars = () => {
    return (
        <article className="grid grid-cols-1 gap-y-6">
            <section className='lg:w-full'>
                <PageHeading heading='Таксопарк' />
            </section>
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">

                {taxiPark.map((car) => (
                    <CarCard
                        key={car.url}
                        url={car.url}
                        brand={car.brand}
                        rate={car.rateDescription}
                        price={car.price}
                        text={car.text}
                        sale={car.sale}
                    />
                ))}

            </section>
        </article>
    )
}

export default Cars