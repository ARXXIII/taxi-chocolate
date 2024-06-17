import { taxiPark } from "@/app/constants"
import { CarCard, PageHeading } from "@/app/components"

const Cars = () => {
    return (
        <article>
            <section className='lg:w-full'>
                <PageHeading heading='Таксопарк' />
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6 lg:mt-12">

                {taxiPark.map((car) => (
                    <CarCard
                        key={car.url}
                        url={car.url}
                        brand={car.brand}
                        type={car.type}
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