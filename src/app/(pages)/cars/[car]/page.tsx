'use client'

import { ContactForm } from '@/app/components'
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
            <section className='flex flex-col-reverse lg:flex-row justify-center items-center gap-y-6 lg:gap-x-6 font-bold text-2xl lg:text-4xl text-neutral-100'>

                {brand
                    ? (
                        <h1 className='p-3 text-center bg-dark-chocolate rounded-xl shadow'>
                            Аренда <span className='text-taxi'>{brand}</span> для работы в такси от <span className='text-taxi'>{price} &#8381;</span>
                        </h1>
                    )
                    : null
                }

                {sale
                    ? (<div className='p-3 w-full lg:w-fit text-center bg-red-600 rounded-xl shadow'>Акция</div>)
                    : null
                }

            </section>
            <section className='flex justify-center'>

                {text
                    ? (
                        <p className='mt-6 lg:mt-12 lg:w-[850px] p-3 text-center text-xl lg:text-2xl text-neutral-100 tracking-wide leading-relaxed bg-dark-chocolate rounded-xl shadow'>{text}</p>
                    )
                    : null
                }

            </section>
            <section className='flex flex-col lg:flex-row justify-center gap-y-6 lg:gap-x-12 mt-6 lg:mt-12'>
                <div className='flex flex-col items-center p-6 lg:min-w-[560px] w-fit bg-dark-chocolate rounded-xl'>
                    <h1 className='font-bold text-2xl lg:text-4xl text-taxi'>Преимущества аренды:</h1>
                    <div className='mt-6 grid grid-cols-1 gap-y-6 text-xl lg:text-2xl text-neutral-100'>
                        <div className='flex items-center gap-x-6'>
                            <div className='w-2 h-2 bg-taxi rounded-full'></div>
                            <p>Моментальные выплаты</p>
                        </div>
                        <div className='flex items-center gap-x-6'>
                            <div className='w-2 h-2 bg-taxi rounded-full'></div>
                            <p>Без депозита, без залога</p>
                        </div>
                        <div className='flex items-center gap-x-6'>
                            <div className='w-2 h-2 bg-taxi rounded-full'></div>
                            <p>Первый день аренды бесплатно</p>
                        </div>
                        <div className='flex items-center gap-x-6'>
                            <div className='w-2 h-2 bg-taxi rounded-full'></div>
                            <p>Скидка 50% на выходные</p>
                        </div>
                        <div className='flex items-center gap-x-6'>
                            <div className='w-2 h-2 bg-taxi rounded-full'></div>
                            <p>Большой выбор машин</p>
                        </div>
                        <div className='flex items-center gap-x-6'>
                            <div className='w-2 h-2 bg-taxi rounded-full'></div>
                            <p>ТО + страховка</p>
                        </div>
                        <div className='flex items-center gap-x-6'>
                            <div className='w-2 h-2 bg-taxi rounded-full'></div>
                            <p>Официальный партнер &#171;Яндекс Go Такси&#187;</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center p-6 lg:min-w-[560px] w-fit bg-dark-chocolate rounded-xl'>
                    <h1 className='font-bold text-2xl lg:text-4xl text-taxi'>Требования для аренды:</h1>
                    <div className='mt-6 grid grid-cols-1 gap-y-6 text-xl lg:text-2xl text-neutral-100'>
                        <div className='flex items-center gap-x-6'>
                            <div className='w-2 h-2 bg-taxi rounded-full'></div>
                            <p>Стаж по правам более 3-х лет</p>
                        </div>
                        <div className='flex items-center gap-x-6'>
                            <div className='w-2 h-2 bg-taxi rounded-full'></div>
                            <p className='w-[400px]'>Российские, белорусские, киргизские и казахстанские водительские права категории &#171;B&#187;</p>
                        </div>
                        <div className='flex items-center gap-x-6'>
                            <div className='w-2 h-2 bg-taxi rounded-full'></div>
                            <p>Отсутствие судимости</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex justify-center items-center mt-6 lg:mt-12'>
                <ContactForm />
            </section>
        </article>
    )
}

export default Car