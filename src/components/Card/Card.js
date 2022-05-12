import React from 'react'
import { useNavigate } from "react-router-dom";
import Loading from '../Loading/Loading';
import "./Card.css"

const Card = ({pokemon, loading}) => {

    const navigate = useNavigate();   
    
    return (
        <>
        {        
            loading ? <Loading /> :
            pokemon.map((item) => {

                const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`
     
                
                return(
                    <a onClick={() => navigate(`/${item.id}`)} key={item.id} >      
                        <div className="bg-blue-500 w-52 h-60 m-8 static rounded-lg cursor-pointer">
                            <div className="bg-white text-center w-52 h-60 hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                                {/* <h1 className="m-4 text-2xl font-bold">Wat is Lorem Ipsum?</h1> */}
                                <h1 className="capitalize text-2xl font-medium text-gray-700 pb-2">#{item.id} {item.name}</h1>
                                <hr className="m-4 rounded-2xl border-t-2" />
                                <div className='flex justify-center mt-10'>
                                    <img width={'120px'} src={img} />
                                </div>
                            </div>
                        </div>
                    </a>
                )


            })
        }

    </>
  )
}

export default Card
