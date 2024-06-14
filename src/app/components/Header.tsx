import Link from "next/link"
import Image from "next/image"

import Logo from '/public/cropped-cropped-cropped-favicon-taxi-shokolad-webp.webp'
import Navbar from "./Navbar"

const Header = () => {
    return (
        <header className="flex justify-between items-center gap-x-12">
            <Link href='/' className="flex items-center gap-x-4">
                <Image
                    src={Logo}
                    alt="logo"
                    width={50}
                    height={50}
                    className="rounded-full bg-taxi p-1"
                />
                <h1 className="font-black text-4xl bg-gradient-to-r from-chocolate to-taxi text-transparent bg-clip-text">Таксопарк Шоколад</h1>
            </Link>
            <Navbar />
        </header>
    )
}

export default Header