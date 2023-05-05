import { ReCaptchaProvider } from "next-recaptcha-v3";
import type { AppProps } from 'next/app'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""

    return (
      <>
        <ReCaptchaProvider reCaptchaKey={siteKey}>
            <Component {...pageProps} />
        </ReCaptchaProvider>,
      </>
    )
}
