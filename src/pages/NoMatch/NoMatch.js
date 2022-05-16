import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoMatch = () => {

  const navigate = useNavigate()

  return (


    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Pokemon Not Found
      </div>
      <button className="mt-5">
          <a
            className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
          >
            <span onClick={() => navigate('/')} className=" block px-8 py-3  border border-current  translate-x-0.5 translate-y-0.5 group-hover:translate-y-0 group-hover:translate-x-0">
            Go Home
          </span>          
          </a>
        </button>
    </main>    

    
    
  )
}

export default NoMatch