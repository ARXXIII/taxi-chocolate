import Link from "next/link"

import { NavProps } from "../types"

const Navbar = ({ data }: NavProps) => {
    return (
        <>
            <nav>
                <section className="hidden lg:flex justify-center items-center gap-x-6 p-3 font-bold text-2xl bg-gradient-to-r from-dark-chocolate via-chocolate to-taxi text-transparent bg-clip-text rounded-full">

                    {data.map((link) => (
                        <Link key={link.name} href={link.address}>{link.name}</Link>
                    ))}

                </section>
            </nav>
        </>
    )
}

export default Navbar