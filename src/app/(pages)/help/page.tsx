'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { rentInfo, questionsAnswers } from "@/app/constants"
import Link from "next/link"

const Help = () => {
    return (
        <article>
            <section>
                <h1 className="p-3 text-center font-bold text-2xl lg:text-4xl text-taxi tracking-wide bg-dark-chocolate rounded-xl shadow">Подробно об аренде</h1>
                <div className="grid grid-cols-1 gap-y-6 mt-6 text-xl">

                    {rentInfo.map((rent, index) => (
                        <p key={index} className="leading-relaxed">{rent}</p>
                    ))}

                </div>
            </section>
            <section className="mt-6 lg:mt-12">
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
            <section className="mt-6 lg:mt-12 text-center">
                <Link href='/contact' className="p-3 font-bold text-4xl text-taxi bg-dark-chocolate rounded-xl shadow">Свяжитесь с нами для дополнительной информации</Link>
            </section>
        </article>
    )
}

export default Help