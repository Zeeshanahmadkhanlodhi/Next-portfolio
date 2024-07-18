"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
    {
        name:"home",
        path:"/",
    },
    {
        name:"services",
        path:"/services",
    },
    {
        name:"about",
        path:"/about",
    },
    {
        name:"contact",
        path:"/contact",
    },
    {
        name:"resume",
        path:"/resume",
    },
    {
        name:"work",
        path:"/work",
    }
]

const Nav = () => {

    const pathname = usePathname();



    return (
        <nav className="flex gap-8">
            {
                links.map((link, index) => (
                    <Link href={link.path} key={index} 
                    className={`${link.path === pathname && "text-accent-hover border-b-2 border-accent-hover"} capitalize font-medium hover:text-accent-hover transition-all`} >
                       {link.name}
                    </Link>
                ))
            }
        </nav>
    )
};

export default Nav;