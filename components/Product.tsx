import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

interface ProductProps {
    href: string,
    name: string,
    content: string,
    target?: string
}

export default function Product(props: ProductProps) {
    const { href, name, content, target="" } = props

    return (
        <Link
            href={href}
            scroll={false}
            className="group border px-5 py-4 w-screen lg:w-full transition-colors bg-white border-gray-300 hover:bg-gray-100"
            rel="noopener noreferrer"
            target={target}
            >
            <h2 className={`${inter.className} mb-2 h-16 text-2xl font-semibold`}>
                {name}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
                </span>
            </h2>
            <p
                className={`${inter.className} mb-4 max-w-[30ch] text-sm opacity-50`}
            >
                {content}
            </p>
        </Link>
    )
}