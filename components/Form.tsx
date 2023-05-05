import { useState } from "react";

export default function Form() {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [message, setMessage] = useState("")
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        grecaptcha.ready(() => {
            grecaptcha.execute(siteKey, { action: "submit" })
            .then(async (token) => {
                const body = {
                    name,
                    email,
                    phone,
                    message,
                    token,
                };
    
                try {
                    const response = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json;charset=utf-8" },
                        body: JSON.stringify(body),
                    });
                    if (response.ok) {
                        const json = await response.json();
                        setSubmitted(true)
                    } else {
                        throw new Error(response.statusText);
                    }
                } catch (error) {
                    console.error(error)
                }
            })
        });
    };

    const handleInputChange = function(e: React.FormEvent<HTMLInputElement>) {
        switch(e.currentTarget.name) {
            case "name":
                setName(e.currentTarget.value)
                break
            case "email":
                setEmail(e.currentTarget.value)
                break
            case "phone":
                setPhone(e.currentTarget.value)
                break
            default:
                break
        }
    }

    const handleMessageChange = function(e: React.FormEvent<HTMLTextAreaElement>) {
        setMessage(e.currentTarget.value)
    }
    if(submitted) {
        return (
            <div id="form" className="mb-32 p-4 lg:p-16 drop-shadow-lg rounded-lg mx-auto bg-white border-gray-300 text-center lg:text-left">
                <h2 className="mb-16 text-center text-blue-900 text-3xl font-bold leading-none tracking-tight md:text-4xl lg:text-5xl">
                    Inquiry
                </h2>
                <div className="text-center">
                    <h3 className="mb-4 text-2xl font-bold">Thank you</h3>
                    <p>We will get back to you as soon as we can.</p>
                </div>
            </div>
        )
    } else {
        return (
            <div id="form" className="mb-32 p-4 lg:p-16 drop-shadow-lg rounded-lg mx-auto bg-white border-gray-300 text-center lg:text-left">
                <h2 className="mb-16 text-center text-blue-900 text-3xl font-bold leading-none tracking-tight md:text-4xl lg:text-5xl">
                    Inquiry
                </h2>
                <form className="grid grid-cols-3" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <div className="px-3 mb-6 col-span-1">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
                                Name
                            </label>
                            <input name="name" onChange={handleInputChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white valid:bg-white invalid:border-red-500" id="grid-name" type="text" required placeholder="Jane"/>
                        </div>
                    </div>
                    <div className="mb-6 col-span-1">
                        <div className="px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                                Email
                            </label>
                            <input name="email" onChange={handleInputChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white valid:bg-white invalid:border-red-500" id="grid-email" type="email" required placeholder="jane@xyz.com"/>
                        </div>
                    </div>
                    <div className="mb-6 col-span-1">
                        <div className="px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-contact">
                                Contact Number
                            </label>
                            <input name="phone" onChange={handleInputChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white valid:bg-white invalid:border-red-500" id="grid-contact" type="tel" required placeholder="555-555-5555"/>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                                Message
                            </label>
                            <textarea name="message" onChange={handleMessageChange} className="h-48 appearance-none block w-full transition duration-300 ease-in-out bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white valid:bg-white invalid:border-red-500 resize-none" required id="grid-message"></textarea>
                        </div>
                    </div>
                    <div className="text-gray-300 text-xs col-span-3 mb-6 ">
                        This site is protected by reCAPTCHA and the Google&nbsp;
                        <a className="text-blue-300" href="https://policies.google.com/privacy">Privacy Policy</a> and&nbsp;
                        <a className="text-blue-300" href="https://policies.google.com/terms">Terms of Service</a> apply.
                    </div>
                    <div className="col-start-3 items-right place-self-end">
                        <button type="submit" className="w-20 h-10 rounded-sm transition duration-300 ease-in-out bg-blue-900 hover:bg-blue-800 active:bg-blue-500 lg:active:translate-x-px lg:active:translate-y-px text-white">Send</button>
                    </div>
                </form>
            </div>
        )
    }
}