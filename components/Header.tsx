import Image from 'next/image'
import Link from 'next/link'
import './Header'

export default function Header() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Image
                    className="relative"
                    src="/louvre.svg"
                    alt="Louvre Icon"
                    width={30}
                    height={10}
                    priority
                />
                <Link href="./" className="font-semibold px-2 text-xl tracking-tight">Claudineco</Link>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                <Link scroll={false} href="./#services" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
                    Services
                </Link>
                <Link scroll={false} href="./#testimonials" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
                    Testimonials
                </Link>
                <Link scroll={false} href="./#contact" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white">
                    Contact
                </Link>
                </div>
                {/* <div>
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">Customer Portal</a>
                </div> */}
            </div>
        </nav>
    )
}