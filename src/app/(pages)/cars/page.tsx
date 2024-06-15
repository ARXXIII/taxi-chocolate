import { CarCard } from "@/app/components"
import { taxiPark } from "@/app/constants"

const Cars = () => {
    return (
        <article>
            <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
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