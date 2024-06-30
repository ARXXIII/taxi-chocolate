'use client'

import Link from "next/link"
import Navbar from "./Navbar"
import Image from "next/image"
import MobileNav from "./MobileNav"
import Logo from '/public/cropped-cropped-cropped-favicon-taxi-shokolad-webp.webp'

import { useState } from "react"
import { nav } from '@/app/constants'
import { FiMenu } from "react-icons/fi"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    return (
        <header className="flex justify-between items-center gap-x-12 relative">
            <Link href='/' className="flex items-center gap-x-3">
                <Image
                    src={Logo}
                    alt="logo"
                    width={50}
                    height={50}
                    className="p-1 bg-taxi rounded-full shadow"
                />
                <h1 className="hidden lg:block font-black text-4xl bg-gradient-to-r from-dark-chocolate via-chocolate to-taxi text-transparent bg-clip-text">Таксопарк Шоколад</h1>
            </Link>
            <Navbar data={nav} />
            <section className="lg:hidden">
                <FiMenu
                    size={50}
                    onClick={() => setMenuOpen(true)}
                    className="fixed top-3 right-3 p-2.5 text-dark-chocolate bg-taxi rounded-full shadow cursor-pointer z-20"
                />
                <MobileNav
                    data={nav}
                    isOpen={menuOpen}
                    onClose={() => setMenuOpen(false)}
                />
            </section>
        </header>
    )
}

export default Header