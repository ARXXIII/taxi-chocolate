import { reviews } from '@/app/constants'
import { ContactForm, Feedback, PageHeading, ReviewForm } from '@/app/components'

const Reviews = () => {
    return (
        <article className='flex flex-col items-center gap-y-6'>
            <section className='lg:w-full'>
                <PageHeading heading='Отзывы' />
            </section>
            {reviews
                ? (
                    <section className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                        {reviews.map((review, index) => (
                            <Feedback key={index} name={review.name} review={review.review} />
                        ))}
                    </section>
                )
                : (null)}

            <section className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <ReviewForm />
                <ContactForm />
            </section>
        </article>
    )
}

export default Reviews