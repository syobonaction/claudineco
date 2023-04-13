import Image from 'next/image'
import Link from 'next/link'
import './Header'

export default function Footer() {
    return (
        <div className="bg-blue-500 p-6 grid grid-cols-2 justify-between">
            <p className="text-white">Designed by{' '}
                <a href="#" className="text-blue-200 hover:text-white">Akesvi</a>
            </p>
            <p className="text-right text-white">Copyright Claudine Tulod 2023</p>
        </div>
    )
}