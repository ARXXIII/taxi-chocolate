import { ListProps } from "../types"

const List = ({ title, list, tel }: ListProps) => {
    return (
        <div className='flex flex-col gap-y-3 p-3 border-2 border-dark-chocolate rounded-xl shadow'>
            <h1 className='p-3 text-center font-bold text-2xl text-taxi bg-dark-chocolate rounded-xl tracking-wide'>{title}</h1>
            <div className='grid grid-cols-1 gap-y-3 text-xl'>

                {list
                    ? (
                        list.map((item, index) => (
                            <div key={index} className='flex items-center gap-x-3'>
                                <div>
                                    <div className='w-2 h-2 bg-taxi rounded-full'></div>
                                </div>
                                <p>{item}</p>
                            </div>
                        ))
                    ) : null
                }

                {tel
                    ? (
                        <a href={`tel:${tel}`} className='flex items-center gap-x-3'>
                            <div>
                                <div className='w-2 h-2 bg-taxi rounded-full'></div>
                            </div>
                            <p>{tel}</p>
                        </a>
                    ) : null
                }

            </div>
        </div>
    )
}

export default List