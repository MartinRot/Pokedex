/* import { useCallback, useEffect, useState } from "react";
import { getPokemons } from "../services/pokemons";
import axios from "axios";

export function usePoke() {
  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [loading, setLoading] = useState(true)
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()

  const fetchPokemons = async () => {
    try {
      setLoading(true)

      const { results, previous, next } = await getPokemons();
      setPokemons(results);
      
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
        return state
      })
      
      //console.log(result.data)
    })
  } 

  useEffect(() => {
    fetchPokemons(); 
    console.log("se ejecuto")       
  }, [url]);

  return { pokemons, setPokemons, fetchPokemons };
} */