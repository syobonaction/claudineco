import Image from "next/image"

export default function Contact() {
    return (
        <div id="contact" className="mb-32 p-4 lg:p-16 drop-shadow-lg rounded-lg mx-auto w-full bg-white border-gray-300 grid text-center lg:text-left">
            <h2 className="mb-24 text-center text-blue-900 text-3xl font-bold leading-none tracking-tight md:text-4xl lg:text-5xl">
                Contact
            </h2>
            <div className="mb-0 lg:mb-16 p-4 rounded-lg lg:mx-32 grid grid-rows-4 grid-flow-col gap-y-4 gap-x-16">
                <h3 className="mb-4 row-span-1 text-2xl font-bold leading-none tracking-tight md:text-3xl lg:text-4xl">
                    Our Location
                </h3>
                <div className="row-span-3">
                    <p className="text-justify">We are located in the heart of the 19th arrondissment of Paris. If you&apos;d like to meet up nearby for a coffee and a chat, please feel free to book an appointment.</p>
                </div>
                <Image
                    className="relative m-auto rounded-lg block xl:inline row-span-4"
                    src="/map.png"
                    alt="a map displaying the location of the Claudineco office in the 19th arrondissment of Paris"
                    width={400}
                    height={400}
                    priority
                />
            </div>
        </div>
    )
}