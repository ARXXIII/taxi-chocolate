'use client';

import Link from "next/link";
import Image from "next/image";
import { IoHome } from "react-icons/io5";
import Logo from '/public/cropped-cropped-cropped-favicon-taxi-shokolad-webp.webp'

export default function NotFound() {
    return (
        <main className="absolute top-0 left-0 w-full h-screen bg-neutral-200 z-[1001]">
            <article className="flex flex-col justify-center items-center gap-y-12 h-full">
                <Image
                    src={Logo}
                    alt="logo"
                    width={100}
                    height={100}
                    className="rounded-full bg-taxi p-3"
                />
                <h1 className="font-black text-8xl bg-gradient-to-r from-dark-chocolate via-chocolate to-taxi text-transparent bg-clip-text">404</h1>
                <p className="text-center font-bold text-4xl">Страница не найдена</p>
                <Link href='/' className="flex justify-center items-center gap-x-3 px-6 py-3 font-bold text-4xl text-taxi bg-dark-chocolate rounded-full shadow">
                    <IoHome />Домой
                </Link>
            </article>
        </main>
    );
}