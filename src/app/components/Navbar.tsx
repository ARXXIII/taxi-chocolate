'use client'

import Link from "next/link"
import { nav } from '@/app/constants'
import { useWindowSize } from "react-use"
import { useEffect, useState } from "react"
import { elastic as Menu } from 'react-burger-menu'

const Navbar = () => {
    const [isMobile, setMobile] = useState<boolean>(false)

    const width = useWindowSize()

    const checkIsMobile = (width: number) => {
        if (width < 1024) {
            setMobile(true)
        }
    }

    useEffect(() => {
        checkIsMobile(width.width)
    }, [])

    return (
        <>
            <nav>
                {isMobile ? (
                    <section className="absolute top-0 right-0">
                        <Menu
                            right
                        >
                            {nav.map((link) => (
                                <Link key={link.name} href={link.address} className="mt-6 text-xl">{link.name}</Link>
                            ))}
                        </Menu>
                    </section>
                ) : (
                    <section className="hidden lg:flex justify-center items-center gap-x-6 p-3 font-bold text-xl text-dark-chocolate border-2 border-dark-chocolate bg-taxi rounded-full">
                        {nav.map((link) => (
                            <Link key={link.name} href={link.address}>{link.name}</Link>
                        ))}
                    </section>
                )}
            </nav>
        </>
    )
}

export default Navbar