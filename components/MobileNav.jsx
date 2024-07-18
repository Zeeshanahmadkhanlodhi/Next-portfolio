"use client";
import React from 'react'
import { Sheet, SheetContent , SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries} from "react-icons/ci";


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



const MobileNav = () => {
const pathnames =  usePathname();
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-32px text-accent-hover' />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-28 mb-20 text-center text-2xl">
            <Link href="/">
            <h1 className='text-4xl font-semibold'>Zeeshan <span className='text-accent-hover'>.</span></h1>
            </Link>
        </div>
            <nav className='flex flex-col justify-center items-center gap-8'>
                {links.map((link,index) => {
                    return(
                        <Link href={link.path} key={index} className={`${link.path === pathnames && "text-accent-hover border-b-2 border-accent-hover"} text-xl capitalize hover:text-accent-hover transition-all`}>
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
        
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
