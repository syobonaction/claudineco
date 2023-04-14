import Image from 'next/image'

interface ServiceProps {
    imageUrl: string,
    imageAlt: string,
    title: string,
    content: string,
    orientRight?: boolean
}

export default function Service(props: ServiceProps) {
    const { orientRight=false } = props

    return (
        <>            
            {!orientRight && (
                <div className="mb-0 lg:mb-16 p-4 rounded-lg lg:mx-32 grid grid-rows-4 grid-flow-col gap-y-4 gap-x-16 lg:bg-gradient-to-r lg:to-gray-200/80 lg:from-transparent">
                    <ImageSection {...props} />
                    <ContentSection {...props} />
                </div>
            )}
            {orientRight && (
                <div className="mb-0 lg:mb-16 p-4 rounded-lg lg:mx-32 grid grid-rows-4 grid-flow-col gap-y-4 gap-x-16 lg:bg-gradient-to-r lg:from-gray-200/80 lg:to-transparent">
                    <ContentSection {...props} />
                    <ImageSection {...props} />
                </div>
            )}
        </>
    )
}

function ImageSection(props: ServiceProps) {
    const { imageUrl, imageAlt } = props

    return (
        <Image
            className="relative m-auto rounded-full hidden xl:inline row-span-4"
            src={imageUrl}
            alt={imageAlt}
            width={300}
            height={300}
            priority
        />
    )
}

function ContentSection(props: ServiceProps) {
    const { title, content } = props

    return (
        <>
            <h3 className="mb-4 row-span-1 text-2xl font-bold leading-none tracking-tight md:text-3xl lg:text-4xl">
                {title}
            </h3>
            <div className="row-span-3">
                <p className="text-justify">{content}</p>
            </div>
        </>
    )
}