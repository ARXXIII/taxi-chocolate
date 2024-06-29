import { contactList } from "@/app/constants"
import { ContactForm, List, PageHeading } from "@/app/components"

const Contact = () => {
    return (
        <article className='grid grid-cols-1 gap-y-6'>
            <section className='lg:w-full'>
                <PageHeading heading='Контакты' />
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {contactList.map((info, index) => (
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