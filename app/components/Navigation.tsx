"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navigation = () => {

const pathname = usePathname();
console.log('pathname', pathname)
    return (
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
                <Link href="/" className={pathname === "/" ? "font-bold text-blue-500  mr-4" : "mr-4"}>Home</Link>
            </li>
            <li>
                <Link href="/about" className={pathname === "/about" ? "font-bold text-blue-500  mr-4" : "mr-4"}>About</Link>
            </li>
            <li>
                <Link href="/products/1" className={pathname.startsWith("/products/1") ? "font-bold text-blue-500  mr-4" : "mr-4"}>Product 1</Link>
            </li>
        </ul>
    )
}
 
export default Navigation
