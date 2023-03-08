import React from 'react'
import { useLocation } from 'react-router-dom'

function pathMatchRoute(route){
    if(route === location.pathname){
        return true
    }
}

export default function header() {
    const location = useLocation()
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <img src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg' alt='logo' className='h-5 cursor-pointer'/>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-500"}`}>Home</li>
                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3] border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}>Offers</li>
                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3] border-b-transparent ${pathMatchRoute("/sign-in") && "text-black border-b-red-500"}`}>Sign In</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
