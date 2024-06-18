import { SiMoscowmetro } from "react-icons/si"
import { IoTimeOutline } from "react-icons/io5"
import { CiRoute, CiPhone } from "react-icons/ci"
import { LiaMapMarkerAltSolid } from "react-icons/lia"
import { ContactForm, List, PageHeading } from "@/app/components"

const Contact = () => {
    const contactPageList = [
        {
            title: 'Где нас найти',
            list: [
                '1-й Нагатинский проезд, д.15',
                '18-й таксомоторный парк',
                'Второй этаж - отдел кадров',
                'м.Нагатинская',
                'м.Коломенская',
                'м.Нагорная',
            ],
        },
        {
            title: 'График работы офиса',
            list: ['Ежедневно c 9:00 до 18:00 (без выходных)'],
        },
        {
            title: 'Звоните',
            tel: '+74959894244'
        },
    ]

    return (
        <article className='grid grid-cols-1 gap-y-6'>
            <section className='lg:w-full'>
                <PageHeading heading='Контакты' />
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {contactPageList.map((info, index) => (
                    <List key={index} title={info.title} list={info.list} tel={info.tel} />
                ))}

            </section>
            <section className='flex justify-center items-center'>
                <ContactForm />
            </section>
        </article>
    )
}

export default Contact