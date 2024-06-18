import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { questionsAnswers } from "@/app/constants"
import { ContactForm, Info, PageHeading } from "@/app/components"

const Help = () => {
    const rentInfo = [
        {
            title: 'Подробно об аренде',
            list: [
                'Рубрика «Ответы на вопросы» на сайте компании «Такси Шоколад» предлагает подробную информацию, отвечающую на часто задаваемые вопросы о работе и аренде автомобилей для работы в такси, включая аренду с правом выкупа. Этот раздел обеспечивает быстрый доступ к необходимой информации, экономя Ваше время и упрощая процесс поиска ответов в интернете или ожидания ответа от службы поддержки.',
                'Собирая ответы на ключевые вопросы, связанные с арендой и выкупом автомобилей для работы в такси, мы предоставляем комплексную информацию в удобном формате. Наши ответы помогут Вам лучше понять условия аренды и процесс выкупа автомобилей, а также услуги и процессы, связанные с этим.',
                'Наша цель помочь Вам принять обоснованные решения и избежать недоразумений в будущем. Благодаря нашим ответам Вы сможете найти наиболее подходящий вариант аренды или выкупа автомобиля для работы в такси.',
                'Если Вы не нашли ответа на свой вопрос в данном разделе, Вы всегда можете связаться с нами для получения дополнительной информации. Мы всегда готовы помочь нашим клиентам.',
                'Посетите раздел «Ответы на вопросы», чтобы узнать больше об условиях аренды и выкупа автомобилей для работы в такси от компании «Такси Шоколад». Мы здесь, чтобы помочь Вам успешно начать и развивать Ваш бизнес в сфере такси!',
            ],
        },
    ];

    return (
        <article className='grid grid-cols-1 gap-y-6'>
            <section className='lg:w-full'>
                <PageHeading heading='Вопросы и ответы' />
            </section>
            <section>

                {rentInfo.map((info, index) => (
                    <Info key={index} title={info.title} list={info.list} />
                ))}

            </section>
            <section>
                <h1 className="p-3 text-center font-bold text-2xl lg:text-4xl text-taxi tracking-wide bg-dark-chocolate rounded-xl shadow">Частые вопросы</h1>
                <div className="grid grid-cols-1 gap-y-6 mt-6">

                    {questionsAnswers.map((item, index) => (
                        <Accordion key={index} type="single" collapsible>
                            <AccordionItem value={`item-${index}`}>
                                <AccordionTrigger className="text-2xl">{item.question}</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-y-3 text-xl">

                                    {item.answers.map((answer, index) => (
                                        <p key={index} className="leading-relaxed">{answer}</p>
                                    ))}

                                    {item.link ? (<a href={item.link} target="_blanc" className="p-3 w-fit text-taxi bg-dark-chocolate rounded-xl">{item.linkTitle}</a>) : null}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ))}

                </div>
            </section>
            <section className="flex justify-center items-center">
                <ContactForm />
            </section>
        </article>
    )
}

export default Help