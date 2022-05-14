import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import axios from "axios";
import { getPokemons } from '../../services/pokemons'
import "./List.css"
import { Pokeball } from '../../components/Pokeball/Pokeball';
import { useDashboard } from '../../hooks/useDashboard';

const List = () => {
        
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState()
    const [prevUrl, setPrevUrl] = useState()    
    const pokeWidth='20%'     
  
    const getPokemon = async (results) => {   
      results.map(async(item) => {
        const result = await axios.get(item.url)             
        
        setPokemons(state => {

          state=[...state, result.data]
          state.sort((a,b) => a.id > b.id ? 1: -1)

          return state;
        })         
      })
    } 

    useEffect(() => {

      const fetchPokemons = async() => {

        try{
        setLoading(true)
  
        const { next, previous, results } = await getPokemons(url);
        
        setNextUrl(next)
        setPrevUrl(previous)    
        getPokemon(results)
        setLoading(false) 
  
      } catch (error) {
        console.log(error.message);
      }
      
    }

      fetchPokemons();       
      //console.log("mounted")       
    }, [url]);

    const prevClick = () => {  
      setPokemons([])  
      setUrl(prevUrl)
    }  

    const nextClick = () => {
      setPokemons([])  
      setUrl(nextUrl)
    }

    const { onLogout } = useDashboard()

    
  return (

    <>   
      <div className="bg-gradient-to-tr from-sky-200 to-sky-600">

      {/* Logout */}      
        <div className="flex flex-row-reverse">   
          <button onClick={onLogout} className="flex items-center w-28 justify-end rounded px-3 py-1 m-4 border-b-4 border-l-2 shadow-lg bg-sky-700 hover:bg-blue-700 border-blue-800" href="">
            <Pokeball maxWidth={pokeWidth} /> <span className='ml-2 capitalize text-xl font-medium text-white'>Logout</span>
          </button>          
        </div>
      {/* Logout */}      

        <div className="flex justify-center">
            <img className='mt-8' src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokeApi" />          
        </div> 

        {/* Buttons */}
        <div className="max-w-lg p-6 container flex justify-center mx-auto mt-8">
          <div className="flex flex-row mx-auto">

            { prevUrl && 
            <button onClick={prevClick} type="button" className="bg-sky-700 text-white mr-10 rounded-l-md  py-2 hover:bg-blue-700 hover:text-white px-3">
              <div className="flex flex-row align-middle">
                <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                </svg>
                <p className="ml-2">Prev</p>
              </div>
            </button> }

            <button onClick={nextClick} type="button" className="bg-sky-700 text-white rounded-r-md py-2  hover:bg-blue-700 hover:text-white px-3">
              <div className="flex flex-row align-middle">
                <span className="mr-2">Next</span>
                <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
            </button>            
          </div>
        </div>
        {/* Buttons */}


        {/* Cards */}
        <div className="flex justify-center align-baseline content-center flex-wrap">
            <Card pokemon={pokemons} loading={loading}/> 
        </div>
        
      </div>
    </>
  )
}

export default List



