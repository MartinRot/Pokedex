import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemons } from '../../services/pokemons'
import { useNavigate } from "react-router-dom";
import Loading from '../Loading/Loading';
import { Pokeball } from '../../components/Pokeball/Pokeball';
import { useDashboard } from '../../hooks/useDashboard';

const PokeDetails = () => {

    const {id} = useParams()
    const navigate = useNavigate();  

    const [ pokemon, setPokemon ] = useState([])
    const [ loading, setLoading ] = useState(false)    
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const [ prevId, setPrevId ] = useState()
    const [ nextId, setNextId ] = useState()      
    const pokeWidth='20%' 

    useEffect(() => {  
        
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
    const { onLogout } = useDashboard()

  return (          

    <div className='flex h-screen items-center justify-center bg-gradient-to-tr from-sky-200 to-sky-600 flex-col'> 
    
    {/* Logout */}      
    <div className='flex self-end'>
        <button onClick={onLogout} className="flex self-end items-center w-28 justify-end rounded px-3 py-1 mr-4 border-b-4 border-l-2 shadow-lg bg-sky-700 hover:bg-blue-700 border-blue-800" href="">
            <Pokeball maxWidth={pokeWidth} /> <span className='ml-2 capitalize text-xl font-medium text-white'>Logout</span>
        </button>    
    </div>
    {/* Logout */}  

    <div className="flex justify-center">
        <img className='mb-10' src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokeApi" />          
    </div> 

    {/* Buttons */}
    <div className='flex mb-5'>
        { prevId && 
        <button onClick={prevClick} type="button" className="bg-sky-700 text-white mr-10 rounded-l-md  py-2 hover:bg-blue-700 hover:text-white px-3">
            <div className="flex flex-row align-middle">
            <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
            </svg>
            <p className="ml-2">Prev</p>
            </div>
        </button> }

        <button className='bg-sky-700 text-white mr-10 rounded-md min-w-0 py-2 hover:bg-blue-700 hover:text-white px-3' onClick={() => navigate('/')}>List</button>        

        <button onClick={nextClick} type="button" className="bg-sky-700 text-white rounded-r-md py-2  hover:bg-blue-700 hover:text-white px-3">
            <div className="flex flex-row align-middle">
            <span className="mr-2">Next</span>
            <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
            </div>
        </button> 
    </div>
    {/* Fin Buttons */}

    { loading ? <Loading /> :
        /* Card  */
        <div className="w-80 rounded-2xl shadow px-6 box-border bg-[#f3f3f3] h-[36rem] space-y-4 flex-col">

            {/* IMG */}                                   
            <img className="w-full h-64 rounded-md" src={img} alt={pokemon.name} /> 

            {/* Descripton */}
            <div className="space-y-4">
                <h2 className="text-[#1b1b1b] text-center font-bold text-2xl transition hover:text-cyan-600 capitalize select-none">
                    {pokemon.name} #{pokemon.id}
                </h2> 
                
                {/* Stats */}
                <h2 className="text-[#1b1b1b] font-bold text-xl transition hover:text-cyan-600 capitalize select-none mt-5">
                    Stats
                </h2>
                <div className='flex flex-wrap'>
                {
                    pokemon.stats?.map(poke => {
                        return(
                            <div key={poke.stat.name}>
                                <p className='text-[#1b1b1b] font-semibold capitalize mr-2 '>{poke.stat.name}: {poke.base_stat}</p>
                                {/* <button disabled class="px-1 py-1.5 rounded-md cursor-default text-xs font-medium text-blue-800 bg-slate-200 capitalize" >{poke.stat.name}: {poke.base_stat}</button> */}
                            </div>
                        )
                    })
                }
                </div>

                {/* Abilities */}
                <h2 className="text-[#1b1b1b] font-bold text-xl transition hover:text-cyan-600 capitalize select-none mt-5">
                    Abilities
                </h2>
                <div className='flex items-center justify-around mt-24'>
                {
                    pokemon.abilities?.map(poke => {
                    return(
                        <div key={poke.ability.name}>
                            <button className="capitalize border-2 border-blue-600 text-[#1b1b1b] px-2 py-1 rounded-md text-1xl font-medium hover:bg-blue-600 transition duration-300">{poke.ability.name}</button>
                        </div>
                        )
                    }) 
                } 

                </div>    
            </div> 
            {/* Fin description */}  
            
        </div>  
    }
    {/* Fin Card */}        

    </div>

  )
}

export default PokeDetails