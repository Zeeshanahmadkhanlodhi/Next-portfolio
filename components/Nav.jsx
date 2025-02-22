"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
    {
        name:"home",
        path:"/",
    },
    {
        name:"about",
        path:"/about",
    },
    {
        name:"services",
        path:"/services",
    },
    {
        name:"resume",
        path:"/resume",
    },
    {
        name:"Projects",
        path:"/projects",
    },
    // {
    //     name:"contact",
    //     path:"/contact",
    // },
    {
        name:"blog",
        path:"/blog",
    },
    {
        name:"papers",
        path:"/papers",
    },
    {
        name:"Products",
        path:"/products",
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