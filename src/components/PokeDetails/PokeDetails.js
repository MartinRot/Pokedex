import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemons } from '../../services/pokemons'
import { useNavigate } from "react-router-dom";

const PokeDetails = () => {

    const {id} = useParams()
    const navigate = useNavigate();  

    const [ pokemon, setPokemon ] = useState([])
    const [ loading, setLoading ] = useState(false)    
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const [ prevId, setPrevId ] = useState()
    const [ nextId, setNextId ] = useState()


    const fetchPokemons = async() => {
        try{
            setLoading(true)      
            const { name, abilities, stats, id } = await getPokemons(url);
            setPokemon({ name, abilities, stats, id })
            setLoading(false)         
            
            if(id > 1){
                setPrevId(id-1)
            }else{
                setPrevId(null)
            }

            setNextId(id+1)
            
            } catch (error) {
              console.log(error.message);
            }            
    }

    useEffect(() => {        
      fetchPokemons(); 
    }, [url])

    const prevClick = () => {          
        setUrl(`https://pokeapi.co/api/v2/pokemon/${prevId}/`)
        navigate(`/${prevId}`)     
      }  
  
    const nextClick = () => {        
        setUrl(`https://pokeapi.co/api/v2/pokemon/${nextId}/`)
        navigate(`/${nextId}`)
    }

    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

/*     console.log(pokemon.stats[0].base_stat)//HP //ATTACK //DEFENSE //SPECIAL-ATTACK //SPECIAL-DEFENSE //SPEED
    console.log(pokemon.stats) */

  return (    

    <div className='flex h-screen items-center justify-center bg-indigo-500'> 


    <div className="w-80 rounded-2xl shadow px-6 box-border bg-[#242424] h-[32rem] space-y-4 flex-col">
                                  
            <img className="w-full h-64 rounded-md" src={img} alt={pokemon.name} />
        
        <div id="description" className="space-y-4">
            
            <h2 className="text-white font-semibold text-xl transition hover:text-cyan-500 capitalize select-none">
                {pokemon.name} #{pokemon.id}
            </h2>

 
            <div className='flex flex-wrap'>

            {
                pokemon.stats?.map(poke => {
                    return(
                        <div key={poke.stat.name}>
                            <p className='text-slate-200 capitalize mr-2 '>{poke.stat.name}: {poke.base_stat}</p>
                            {/* <button disabled class="px-1 py-1.5 rounded-md cursor-default text-xs font-medium text-blue-800 bg-slate-200 capitalize" >{poke.stat.name}: {poke.base_stat}</button> */}
                        </div>
                    )
                })
            }

            </div>

            <div className='flex items-center justify-around mt-24'>
            
            {
                pokemon.abilities?.map(poke => {
                return(
                    <div key={poke.ability.name}>
                        <button className="capitalize border-2 border-blue-600 text-white px-2 py-1 rounded-md text-1xl font-medium hover:bg-blue-600 transition duration-300">{poke.ability.name}</button>
                    </div>
                    )
                }) 
            } 

            </div>

          

           
        </div>   
    </div>       

    </div>

  )
}

export default PokeDetails


/* container details */
{/* 

<div class="mb-4">
<button disabled class="px-4 py-2 rounded-md cursor-default text-sm font-medium focus:outline-none focus:ring transition text-white bg-blue-300 focus:ring-blue-200" type="submit">Button</button>
</div>

 */}


/* 
<div class="container mx-auto pr-6 pl-6 md:pr-24 md:pl-26 pt-6 pb-6 mt-6">
    <button class="border-2 border-green-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-green-600 transition duration-300">Button 2</button>
</div>

    <img width={'60px'} src={img} alt="" />                            
    <h1>#{pokemon.id} {pokemon.name}</h1>
    
    <div classNameName='abilities'>
        <h1>Type</h1>
            {
                pokemon.abilities?.map(poke => {
                return(
                    <div classNameName='group' key={poke.ability.name}>
                        <h2>{poke.ability.name}</h2>
                    </div>
                )
            }) 
        }  
    </div>

    <div classNameName='base-stat'>
    <h1>Stats</h1>
        {
            pokemon.stats?.map(poke => {
                return(             
                    <div key={poke.stat.name}>
                        <h3>{poke.stat.name}: {poke.base_stat}</h3>                        
                    </div>           
                )
            })
        } 
    </div>

    <div classNameName='btn-group'>           
        { prevId && <button onClick={prevClick}>Previous</button> }
        <button classNameName='btn' onClick={() => navigate('/')}>Home</button>        
        { nextId && <button onClick={nextClick}>Next</button>}
    </div>  



} */