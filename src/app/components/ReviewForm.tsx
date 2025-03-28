'use client'

import { cn } from "@/lib/utils"
import { useState } from "react"

const ReviewForm = () => {
    const [name, setName] = useState<string>('')
    const [review, setReview] = useState<string>('')
    const [inputError, setInputError] = useState<string>()

    const send = () => {
        if (!name) {
            setTimeout(() => {
                setInputError('')
            }, 1300, setInputError('Введите имя'))

            return
        }

        if (!review) {
            setTimeout(() => {
                setInputError('')
            }, 1300, setInputError('Напишите отзыв'))

            return
        }
    }

    return (
        <form className="flex flex-col justify-between gap-y-3 lg:gap-y-6 p-3 lg:min-w-0 bg-dark-chocolate rounded-xl shadow">
            <h1 className="text-center font-bold text-xl lg:text-3xl text-taxi tracking-wide">Оставьте отзыв!</h1>
            <div className="flex flex-col gap-y-3 lg:gap-y-6">
                <input
                    type="text"
                    placeholder="Введите имя"
                    autoComplete="given-name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="px-3 py-1 text-lg lg:text-xl text-neutral-100 border-b-2 border-neutral-100 focus:border-taxi bg-transparent duration-200 ease-in"
                />
                <textarea
                    placeholder="Ваш отзыв"
                    autoComplete="off"
                    cols={5}
                    rows={5}
                    value={review}
                    onChange={e => setReview(e.target.value)}
                    className="px-3 py-1 text-lg lg:text-xl text-neutral-100 border-b-2 border-neutral-100 focus:border-taxi bg-transparent duration-200 ease-in resize-none"
                />
            </div>
            <button
                onClick={send}
                type="button"
                className={cn("p-3 w-full text-center font-bold text-xl lg:text-2xl bg-taxi rounded-lg active:scale-[0.96] duration-200 ease-in shadow",
                    inputError?.length && 'text-neutral-100 bg-rose-500'
                )}
            >
                {inputError ? inputError : 'Оставить отзыв'}
            </button>
        </form>
    )
}

export default ReviewForm