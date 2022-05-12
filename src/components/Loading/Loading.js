import React from 'react'
import { Pokeball } from '../Pokeball/Pokeball'

const Loading = () => {
    
    const width='20%'

  return (

    <div className="flex items-start justify-center w-full h-screen mt-24">
        <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">            
            <Pokeball maxWidth={width}/>        
            <div className='text-4xl mr-2'>Loading ...</div>
        </div>
    </div>
  )
}

export default Loading