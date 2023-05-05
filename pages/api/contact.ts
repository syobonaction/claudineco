import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    status: string
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY || ""
    const { name, email, phone, message, token } = req.body
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`

    try {
        const recaptcharRes = await fetch(verifyUrl, { method: "POST" })
        const recaptchaJson = await recaptcharRes.json();

        if(recaptchaJson.success) {
            if(recaptchaJson.score > 0.5) {
                console.log("Recaptcha Success")
            } else {
                console.log("Recaptcha Failed")
            }
        } else {
            console.error("submission error")
        }

        res.status(200).json({ name, email, phone, message, ...recaptchaJson });
    } catch(error) {
        console.error(error)
        res.status(400);
    }
}