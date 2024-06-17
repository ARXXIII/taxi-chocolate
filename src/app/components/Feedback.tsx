import { FeedbackProps } from '../types'

const Feedback = ({ name, review }: FeedbackProps) => {
    return (
        <div className='flex flex-col gap-y-3 p-3 lg:max-w-[600px] bg-dark-chocolate rounded-xl shadow'>
            <h3 className='font-bold text-2xl text-taxi'>{name}</h3>
            <p className='text-xl text-neutral-100 tracking-wide leading-relaxed'>{review}</p>
        </div>
    )
}

export default Feedback