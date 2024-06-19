'use client'

import { CarPageProps } from '@/app/types'
import { useEffect, useState } from 'react'
import { ContactForm, List, PageHeading } from '@/app/components'

const Car = ({ params }: CarPageProps) => {
    const [brand, setBrand] = useState<string>('')
    const [type, setType] = useState<string>('')
    const [price, setPrice] = useState<number>()
    const [text, setText] = useState<string>('')
    const [sale, setSale] = useState<boolean>(false)

    const CAR_URL = params.car

    const carPageList = [
        {
            title: 'Преимущества аренды',
            list: ['Моментальные выплаты', 'Без депозита и без залога', 'Первый день аренды бесплатно', 'Скидка 50% на выходные', 'Большой выбор машин', 'Техническое обслуживание и страховка', 'Официальный партнер «Яндекс Go Такси»'],
        },
        {
            title: 'Требования для аренды',
            list: ['Стаж по правам более трех лет', 'Российские, белорусские, киргизские и казахстанские водительские права категории «B»', 'Отсутствие судимости'],
        }
    ]

    const fetchData = async (car: string) => {
        try {
            const response = await fetch(`/api/cars/${car}`)

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
        if (CAR_URL) fetchData(CAR_URL)
    }, [])

    return (
        <article className='grid grid-cols-1 gap-6'>
            <section className='flex justify-between items-center'>

                {brand
                    ? (
                        <PageHeading heading={`Аренда ${brand} для работы в такси`} />
                    )
                    : null
                }

                {sale
                    ? (<div className='flex justify-center items-center p-3 font-bold text-4xl text-neutral-100 tracking-wide bg-red-600 rounded-xl shadow'>
                        <p>Акция</p>
                    </div>)
                    : null
                }

            </section>
            <section>

                {text
                    ? (
                        <p className='p-3 text-center text-xl lg:text-2xl text-neutral-100 tracking-wide leading-relaxed bg-dark-chocolate rounded-xl shadow'>{text}</p>
                    )
                    : null
                }

            </section>
            <section className='grid grid-cols-1 lg:grid-cols-2 justify-center gap-6'>

                {carPageList.map((info, index) => (
                    <List key={index} title={info.title} list={info.list} />
                ))}

            </section>
            <section className='flex justify-center items-center'>
                <ContactForm />
            </section>
        </article>
    )
}

export default Car