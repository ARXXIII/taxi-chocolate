'use client'

import { useState } from "react"
import { useMask } from "@react-input/mask"
import { cn } from "@/lib/utils"

const ContactForm = () => {
    const [fullName, setFullName] = useState<string>()
    const [tel, setTel] = useState<string>()
    const [inputError, setInputError] = useState<string>()

    const inputRef = useMask({ mask: '+7 (___) ___-__-__', replacement: { _: /\d/ } });

    const send = () => {
        if (!fullName) {
            setTimeout(() => {
                setInputError('')
            }, 1300, setInputError('Заполните имя'))

            return
        }

        if (!tel || tel.length < 18) {
            setTimeout(() => {
                setInputError('')
            }, 1300, setInputError('Введите номер'))

            return
        }

        console.log(fullName, tel)
    }

    return (
        <form className="p-3 lg:p-6 max-w-[800px] bg-dark-chocolate rounded-xl shadow">
            <section className="flex flex-col items-center gap-y-6">
                <h1 className="text-center font-bold text-2xl lg:text-4xl text-taxi uppercase leading-relaxed">заполни и получи скидку</h1>
                <p className="text-center text-xl lg:text-2xl text-neutral-100 leading-relaxed">Таксопарк Шоколад - лучшие условия аренды авто для такси!</p>
            </section>
            <section className="flex flex-col gap-y-6 relative mt-6">
                <input
                    type="text"
                    placeholder="ФИО"
                    value={fullName}
                    autoComplete="given-name"
                    required
                    onChange={(e) => setFullName(e.target.value)}
                    className="p-3 text-2xl text-neutral-100 border-b-2 border-neutral-100 focus:border-taxi bg-transparent duration-200 ease-in"
                />
                <input
                    type="tel"
                    placeholder="Телефон"
                    value={tel}
                    autoComplete="tel"
                    ref={inputRef}
                    required
                    onChange={(e) => setTel(e.target.value)}
                    className="p-3 text-2xl text-neutral-100 border-b-2 border-neutral-100 focus:border-taxi bg-transparent duration-200 ease-in"
                />
            </section>
            <button
                onClick={send}
                type="button"
                className={cn("mt-6 p-3 w-full text-center font-bold text-2xl bg-taxi rounded-xl active:scale-[0.96] duration-200 ease-in shadow",
                    inputError?.length && 'text-neutral-100 bg-rose-500'
                )}
            >
                {inputError ? inputError : 'Отправить'}
            </button>
        </form>
    )
}

export default ContactForm