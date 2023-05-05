interface ServiceProps {
    imageUrl: string,
    imageAlt: string,
    title: string,
    content: string,
    orientRight?: boolean
}

export default function Service(props: ServiceProps) {
    const { title, content } = props

    return (
        <>            
            <div className={"mb-0 transition duration-300 ease-in-out origin-center hover:lg:-translate-x-1 hover:lg:-translate-y-1 hover:lg:drop-shadow-lg lg:drop-shadow-md bg-white lg:border lg:border-slate-100 lg:mb-16 p-4 lg:p-8 rounded-lg lg:mx-8"}>
                <h3 className="mb-4 text-2xl font-bold leading-none tracking-tight md:text-3xl lg:text-3xl">
                    {title}
                </h3>
                <p className="text-justify">{content}</p>
            </div>
        </>
    )
}