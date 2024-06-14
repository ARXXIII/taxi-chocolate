import Link from "next/link"
import { nav } from '@/app/constants'

const Navbar = () => {
    return (
        <nav className="flex justify-center items-center gap-x-6 p-3 font-bold text-xl text-taxi bg-chocolate rounded-full">
            {nav.map((link) => (
                <Link key={link} href='/cars'>{link}</Link>
            ))}
        </nav>
    )
}

export default Navbar