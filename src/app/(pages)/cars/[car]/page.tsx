'use client'

import { CarPageProps } from '@/app/types'
import { useEffect, useState } from 'react'

const Car = ({ params }: CarPageProps) => {
    const [brand, setBrand] = useState<string>('')
    const [type, setType] = useState<string>('')
    const [price, setPrice] = useState<number>()
    const [text, setText] = useState<string>('')
    const [sale, setSale] = useState<boolean>(false)

    const car_url = params.car

    const fetchData = async (car_url: string) => {
        try {
            const response = await fetch(`/api/cars/${car_url}`)

            if (response) {
                const data = await response.json()

                setBrand(data.brand)
                setType(data.type)
                setPrice(data.price)
                setText(data.text)
                setSale(data.sale)
            }

        } catch (error) {
            console.error(error)
        }

    }

    useEffect(() => {
        if (car_url) fetchData(car_url)
    }, [])

    return (
        <article>
            <section className='flex items-center gap-x-3 lg:gap-x-6 font-bold text-2xl lg:text-4xl'>
                <h1 className='p-3 text-neutral-100 bg-chocolate rounded-full shadow'
                >
                    Аренда <span className='text-taxi'>{brand}</span> для работы в такси от <span className='text-taxi'>{price} &#8381;</span>
                </h1>
            </section>
        </article>
    )
}

export default Car