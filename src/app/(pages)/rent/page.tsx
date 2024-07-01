import { advantages, contactList, taxiPark } from "@/app/constants"
import { CarCard, ContactForm, List, PageHeading, Sale } from "@/app/components"

const Rent = () => {

    const rentPageList = [
        'Стаж по правам более трех лет',
        'Российские, белорусские, киргизские и казахстанские водительские права категории «B»',
        'Отсутствие судимости'
    ]

    return (
        <article className='grid grid-cols-1 gap-y-6'>
            <section className='lg:w-full'>
                <PageHeading heading="Аренда авто для работы в такси" />
            </section>
            <section>
                <Sale sale={true} price={1300} />
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 lg:gap-x-6">
                <List title="Преимущества таксопарка" list={advantages} />
                <ContactForm />
            </section>
            <section className="grid grid-cols-1 gap-y-6">
                <div className='lg:w-full'>
                    <PageHeading heading='Таксопарк' />
                </div>
                <div>
                    <List title="Требования для аренды" list={rentPageList} />
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">

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

                </div>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {contactList.map((info, index) => (
                    <List key={index} title={info.title} list={info.list} tel={info.tel} />
                ))}

            </section>

        </article>
    )
}

export default Rent