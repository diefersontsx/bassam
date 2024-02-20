import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (

        <div className="mx-5 flex h-2 max-w-screen-xl items-center justify-between w-full">
            <Link href="/" className="flex items-center font-display text-2xl">
                <Image
                    src="/logo.png"
                    alt="Bassam logo"
                    width="245"
                    height="57"
                    className="mr-2 rounded-sm"
                ></Image>

            </Link>

            <div className="flex lg:flex-1">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <ul className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                        <li className="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            <Link href='/'>
                                Home
                            </Link>

                        </li>
                        <li className="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            <Link href='/'>
                                Sobre
                            </Link>

                        </li>
                        <li className="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            <Link href='/'>
                                Aulas
                            </Link>

                        </li>
                        <li className="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            <Link href='/'>
                                Contato
                            </Link>

                        </li>
                        <li className="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            <Link href='/'>
                                Atletas
                            </Link>

                        </li>
                    </ul>
                </nav>
            </div>
            <button className="rounded-full border border-black bg-black p-2 px-6 text-sm text-white transition-all hover:bg-white hover:text-black">
                Entrar
            </button>
        </div>
    )
}