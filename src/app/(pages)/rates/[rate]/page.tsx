'use client'

import { useEffect, useState } from "react"
import { RatePageProps } from "@/app/types"
import { CarCard, ContactForm, PageHeading } from "@/app/components"

interface Provider {
    url: string;
    brand: string;
    rate: string;
    price: number;
    text: string;
    sale: boolean;
}

const Rate = ({ params }: RatePageProps) => {
    const [cars, setCars] = useState<Provider[]>()
    const [rate, setRate] = useState<string>()

    const RATE_URL = params.rate

    const fetchData = async (rate: string) => {
        try {
            const response = await fetch(`/api/rates/${rate}`)

            if (response) {
                const data = await response.json()

                setCars(data)
                setRate(data[0].rateDescription)
            }

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (RATE_URL) fetchData(RATE_URL)
    }, [])

    return (
        <article className='grid grid-cols-1 gap-6'>
            <section className="lg:w-full capitalize">

                {rate
                    ? (<PageHeading heading={`автомобили «${rate}» класса`} />)
                    : null
                }

            </section>
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">

                {cars?.map((car, index) => (
                    <CarCard
                        key={car.url}
                        url={car.url}
                        brand={car.brand}
                        rate={rate}
                        price={car.price}
                        text={car.text}
                        sale={car.sale}
                    />
                ))}

            </section>
            <section className='flex justify-center items-center'>
                <ContactForm />
            </section>
        </article>
    )
}

export default Rate