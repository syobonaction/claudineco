import Map from "./Map"

export default function Contact() {
    return (
        <div id="contact" className="mb-32 p-4 lg:p-16 drop-shadow-lg rounded-lg mx-auto w-full bg-white border-gray-300 text-center lg:text-left">
            <h2 className="mb-16 text-center text-blue-900 text-3xl font-bold leading-none tracking-tight md:text-4xl lg:text-5xl">
                Contact
            </h2>
            <div className="mb-0 lg:mb-16 p-4 rounded-lg w-fit grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="mb-16">
                    <h3 className="mb-4 text-2xl font-bold leading-none tracking-tight md:text-3xl lg:text-4xl">
                        Our Location
                    </h3>
                    <p className="text-justify">We are located in the heart of the 19th arrondissment of Paris. If you&apos;d like to meet up nearby for a coffee and a chat, please feel free to book an appointment.</p>
                </div>
                <Map 
                    lat={48.87467792279505}
                    lng={2.3788118973043173}
                    marker={true}
                />
            </div>
        </div>
    )
}