import { PageHeadingProps } from "../types"

const PageHeading = ({ heading }: PageHeadingProps) => {
    return (
        <div className='w-fit'>
            <h1 className='font-black text-4xl lg:text-6xl bg-gradient-to-r from-dark-chocolate via-chocolate to-taxi text-transparent bg-clip-text'>{heading}</h1>
        </div>
    )
}

export default PageHeading