'use client'

import { cn } from "@/lib/utils"
import { useState } from "react"
import { useMask } from "@react-input/mask"

const ContactForm = () => {
    const [fullName, setFullName] = useState<string>()
    const [tel, setTel] = useState<string>()
    const [inputError, setInputError] = useState<string>()

    const inputRef = useMask({ mask: '+7 (___) ___-__-__', replacement: { _: /\d/ } });

    const send = () => {
        if (!fullName) {
            setTimeout(() => {
                setInputError('')
            }, 1300, setInputError('Введите имя'))

            return
        }

        if (!tel || tel.length < 18) {
            setTimeout(() => {
                setInputError('')
            }, 1300, setInputError('Введите номер'))

            return
        }
    }

    return (
        <form className="flex flex-col justify-between gap-y-3 lg:gap-y-6 p-3 w-full bg-dark-chocolate rounded-xl shadow">
            <section className="flex flex-col items-center gap-y-3 lg:gap-y-6">
                <h1 className="text-center font-bold text-xl lg:text-3xl text-taxi tracking-wide leading-relaxed uppercase">Заполни и получи скидку</h1>
                <p className="text-center text-lg lg:text-2xl text-neutral-100 leading-relaxed">Таксопарк Шоколад - лучшие условия аренды авто для такси!</p>
            </section>
            <section className="flex flex-col gap-y-3 lg:gap-y-6 relative">
                <input
                    type="text"
                    placeholder="ФИО"
                    value={fullName}
                    autoComplete="given-name"
                    required
                    onChange={(e) => setFullName(e.target.value)}
                    className="px-3 py-1 text-lg lg:text-xl text-neutral-100 border-b-2 border-neutral-100 focus:border-taxi bg-transparent duration-200 ease-in"
                />
                <input
                    type="tel"
                    placeholder="Телефон"
                    value={tel}
                    autoComplete="tel"
                    ref={inputRef}
                    required
                    onChange={(e) => setTel(e.target.value)}
                    className="px-3 py-1 text-lg lg:text-xl text-neutral-100 border-b-2 border-neutral-100 focus:border-taxi bg-transparent duration-200 ease-in"
                />
            </section>
            <button
                onClick={send}
                type="button"
                className={cn("p-3 w-full text-center font-bold text-xl lg:text-2xl bg-taxi rounded-lg active:scale-[0.96] duration-200 ease-in shadow",
                    inputError?.length && 'text-neutral-100 bg-rose-500'
                )}
            >
                {inputError ? inputError : 'Отправить'}
            </button>
        </form>
    )
}

export default ContactForm