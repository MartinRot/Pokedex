import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import "./List.css"
import axios from "axios";
import { getPokemons } from '../../services/pokemons'

const List = () => {
        
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState()
    const [prevUrl, setPrevUrl] = useState()

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
    
  return (

    <>    
    
      <div className='bg-indigo-500'>

        <div className="flex justify-center">
            <img className='mt-8' src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokeApi" />          
        </div> 

        <div className="max-w-lg p-6 container flex justify-center mx-auto mt-8">
          <div className="flex flex-row mx-auto">

            <button onClick={prevClick} type="button" className="bg-gray-900 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-blue-700 hover:text-white px-3">
              <div className="flex flex-row align-middle">
                <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                </svg>
                <p className="ml-2">Prev</p>
              </div>
            </button>

            <button onClick={nextClick} type="button" className="bg-gray-900 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-blue-700 hover:text-white px-3">
              <div className="flex flex-row align-middle">
                <span className="mr-2">Next</span>
                <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
            </button>            
          </div>
        </div>

        <div className="flex justify-center align-baseline content-center flex-wrap">
            <Card pokemon={pokemons} loading={loading}/> 
        </div>
        
      </div>
    </>
  )
}

export default List



