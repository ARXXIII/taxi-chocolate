import { SlSocialVkontakte } from "react-icons/sl";
import { PiTelegramLogoThin } from "react-icons/pi";

const Footer = () => {
    return (
        <footer>
            <section className="flex justify-between items-center gap-x-12">
                <div>
                    <h2 className="font-bold uppercase">version</h2>
                    <p className="mt-3 text-xl">2024 Edition</p>
                </div>
                <div>
                    <h2 className="font-bold uppercase">Социальные сети</h2>
                    <div className="flex justify-start items-center gap-x-3 mt-3 text-3xl">
                        <a href="https://telegram.me/shokoinfo" target="_blanc">
                            <PiTelegramLogoThin />
                        </a>
                        <a href="https://vk.com/taxichocolatemsk" target="_blanc">
                            <SlSocialVkontakte />
                        </a>
                    </div>
                </div>
            </section>
            <div className="mt-12 text-center">
                <a
                    href="https://github.com/PICKLEGENT"
                    title='Best frontend developer'
                    target="_blanc"
                    className="text-center text-sm text-gray-500"
                >
                    Code by<br />Andrew Romanov
                </a>
            </div>
        </footer>
    )
}

export default Footer