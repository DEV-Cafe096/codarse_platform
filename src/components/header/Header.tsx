'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOpenInNew } from "react-icons/md";



export const Header = () => {
    const currentPath = usePathname();


    return (
        <nav className="flex items-center justify-center bg-primary py-4">
            <ul className="flex gap-4 items-center">

                <li className="my-2">
                    <Link href="/" className="border-2 rounded-md py-2 px-2 font-bold">CODARSE</Link>
                </li>

                <li>
                    <Link href="/" data-active={currentPath === '/'} className="data-[active=true]:underline">Pagina Inicial</Link>
                </li>

                <li>
                    <Link href="cursos" data-active={currentPath === '/cursos'} className="data-[active=true]:underline">
                    Cursos</Link>
                </li>

                <li>
                    <Link href="https://blog.codarse.com" target="_blank"
                    className="flex gap-1 items-center" >
                    Blog
                    <MdOpenInNew  />
                    </Link>
                </li>
                
            </ul>
            
        </nav>
    );
};
