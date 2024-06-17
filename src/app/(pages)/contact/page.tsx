import { CiRoute } from "react-icons/ci";
import { SlCallIn } from "react-icons/sl";
import { SiMoscowmetro } from "react-icons/si";
import { IoTimeOutline } from "react-icons/io5";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { ContactForm, PageHeading } from "@/app/components"

const Contact = () => {
    return (
        <article>
            <section className='lg:w-full'>
                <PageHeading heading='Контакты' />
            </section>
            <section className="flex flex-col lg:flex-row justify-center gap-6 mt-6 lg:mt-12">
                <div>
                    <h1 className="font-bold text-4xl">Где нас найти</h1>
                    <div className="flex flex-col justify-center gap-y-6 mt-3 p-3 lg:w-fit text-xl text-neutral-100 bg-dark-chocolate rounded-xl shadow">
                        <p className="flex lg:items-center gap-x-3">
                            <LiaMapMarkerAltSolid className="text-3xl text-taxi" />1-й Нагатинский проезд, д. 15
                        </p>
                        <p className="flex lg:items-center gap-x-3">
                            <LiaMapMarkerAltSolid className="text-3xl text-taxi" />18-й таксомоторный парк
                        </p>
                        <p className="flex lg:items-center gap-x-3">
                            <CiRoute className="text-3xl text-taxi" />Второй этаж – отдел кадров
                        </p>
                        <div className="flex flex-col lg:flex-row gap-6">
                            <p className="flex lg:items-center gap-x-3">
                                <SiMoscowmetro className="text-3xl text-taxi" />Нагатинская</p>
                            <p className="flex lg:items-center gap-x-3">
                                <SiMoscowmetro className="text-3xl text-taxi" />Коломенская
                            </p>
                            <p className="flex lg:items-center gap-x-3">
                                <SiMoscowmetro className="text-3xl text-taxi" />Нагорная
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold text-4xl">График работы</h1>
                    <div className="flex flex-col justify-center gap-y-6 mt-3 p-3 lg:w-fit text-xl text-neutral-100 bg-dark-chocolate rounded-xl shadow">
                        <p className="flex lg:items-center gap-x-3 leading-relaxed">
                            <IoTimeOutline className="text-3xl text-taxi" />Ежедневно c 9:00 до 18:00 (без выходных)
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold text-4xl">Звоните</h1>
                    <div className="flex flex-col justify-center gap-y-6 mt-3 p-3 lg:w-fit text-xl text-neutral-100 bg-dark-chocolate rounded-xl shadow">
                        <a href="tel:+7(495)989-42-44" className="flex items-center gap-x-3 tracking-wide">
                            <SlCallIn className="text-taxi" />+7 (495) 989-42-44
                        </a>
                    </div>
                </div>
            </section>
            <section className='flex justify-center items-center mt-6 lg:mt-12'>
                <ContactForm />
            </section>
        </article>
    )
}

export default Contact