import { InfoProps } from '../types'

const Info = ({ title, list, subTitle, subList }: InfoProps) => {
    return (
        <div className='flex flex-col gap-y-3'>
            <h1 className="p-3 text-center font-bold text-xl lg:text-4xl text-taxi tracking-wide bg-dark-chocolate rounded-xl shadow">{title}</h1>
            <div className="grid grid-cols-1 gap-y-3 text-xl">

                {list?.map((info, index) => (
                    <p key={index} className="text-lg lg:text-xl leading-relaxed">{info}</p>
                ))}

                {subTitle
                    ? (
                        <div className="grid grid-cols-1 gap-y-3">
                            <p className='text-lg lg:text-2xl'>{subTitle}</p>
                            <ul className="text-base lg:text-xl leading-relaxed space-y-3">

                                {subList?.map((item, index) => (
                                    <li key={index}>
                                        <span className='mr-3'>{index + 1}.</span>
                                        {item}
                                    </li>
                                ))}

                            </ul>
                        </div>
                    )
                    : null
                }

            </div>
            <div className='text-xl leading-relaxed'>
                <p>
                    Уточняйте подробности в офисе в отделе выкупа (2 этаж) или по телефону <a href="tel:+74959895333" className="p-1 text-taxi bg-dark-chocolate rounded-lg">+7&nbsp;(495)&nbsp;989-53-33</a> по будням с 9:00 до 18:00.
                </p>
            </div>
        </div>
    )
}

export default Info