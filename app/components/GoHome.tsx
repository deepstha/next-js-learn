"use client";

import { useRouter } from "next/navigation";

const GoHome = () => {
    const router = useRouter();
    return (
        <button 
            onClick={()=> router.push("/")} 
            className='bg-blue-500 text-white p-2 rounded-md'
            >
            Go Home
        </button>
    )
}

export default GoHome
