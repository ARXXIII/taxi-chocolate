import { PageHeadingProps } from "../types"

const PageHeading = ({ heading }: PageHeadingProps) => {
    return (
        <div className="flex justify-center lg:justify-start items-center">
            <div className='w-fit'>
                <h1 className='font-black text-center lg:text-left text-3xl lg:text-6xl bg-gradient-to-r from-dark-chocolate via-chocolate to-taxi text-transparent bg-clip-text'>{heading}</h1>
            </div>
        </div>
    )
}

export default PageHeading