import Service from "./Service"

export default function Services() {
    return (
        <div id="services" className="mb-32 p-4 lg:p-16 drop-shadow-lg rounded-lg mx-auto w-full bg-white border-gray-300 grid text-center lg:text-left">
            <h2 className="mb-24 text-center text-blue-900 text-3xl font-bold leading-none tracking-tight md:text-4xl lg:text-5xl">
                Services
            </h2>
            <Service 
                imageUrl="/visa.png"
                imageAlt="display of various passport stamps"
                title="Visa Application Assistance"
                content="Our team provides guidance and support to help you navigate the complex process of applying for a visa. We assist with all types of visa applications and ensure that your paperwork is complete and accurate."
            />
            <Service 
                imageUrl="/flags.png"
                imageAlt="French flags on a blue sky backdrop"
                title="Visa Renewal Assistance"
                content="If you need to renew your visa, we can help you with the process to ensure that you can continue to stay in France legally. Our team will assist with all necessary paperwork and ensure that your renewal application is submitted on time."
                orientRight={true}
            />
            <Service 
                imageUrl="/apt.png"
                imageAlt="outside view of a French flat"
                title="Housing Assistance"
                content="Finding housing in France can be challenging, especially if you're not familiar with the local requirements. We provide assistance in finding a French guarantor, which is often required by landlords to rent an apartment."
            />
            <Service 
                imageUrl="/euro.png"
                imageAlt="a bundle of Euro bills"
                title="CAF Registration"
                content="We assist with the registration process for CAF, which provides housing assistance to eligible individuals. Our team will help you navigate the application process and ensure that you receive the support you need."
                orientRight={true}
            />
            <Service 
                imageUrl="/steth.png"
                imageAlt="a doctor's stethoscope"
                title="Social Security Registration"
                content="Registering for Social Security in France can be complicated, but our team can guide you through the process. We provide assistance with all necessary paperwork and ensure that your registration is complete."
            />
            <Service 
                imageUrl="/phone.png"
                imageAlt="iphone screen displaying the camera app with the eiffel tower in focus"
                title="French SIM Card Registration"
                content="If you need a French SIM card, we can help you get connected. Our team will guide you through the paperwork and ensure that you have a functioning SIM card."
                orientRight={true}
            />
            <Service 
                imageUrl="/docs.png"
                imageAlt="4 binders filled with documents stacked on top of one another"
                title="Translation Services (English to French)"
                content="Our professional translators provide accurate and reliable translation services from English to French. Whether you need to translate official documents or personal correspondence, we can help."
            />
            <Service 
                imageUrl="/app.png"
                imageAlt="girl using her laptop"
                title="Company (start-up) / Self-employed Registration"
                content="Starting a business in France can be complicated, but our team can assist with the registration process. We provide guidance and support to help you navigate the requirements and get your business up and running."
                orientRight={true}
            />
        </div>
    )
}