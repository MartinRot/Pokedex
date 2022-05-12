import { useNavigate } from "react-router-dom"
import { Pokeball } from "../Pokeball/Pokeball"
import "./LandingComponent.css"

const LandingComponent = () => {    

    const navigate = useNavigate()
    const width='50%'

    function onClick(){
        navigate("/login")
    }

  return (

    <section class="homescreen m-0 flex flex-col w-screen justify-center bg-gray-800 h-screen text-gray-100 ">
        <nav>
            <ul class="flex justify-between text-xl py-8 px-8 md:px-48 ">
            <li>
                <Pokeball maxWidth={width} />
            </li>
            <li className="text-teal-400	">
                Made with 💚 by Martin Rotelli
            </li>
            </ul>
        </nav>

        <h1 class="text-6xl my-auto mx-24 md:mx-48 ">
            Pokedex App <br />
            <span class="text-4xl text-orange-400">En este proyecto usamos una Pokedex para mostrar una lista de Pokemon y la informacion detallada de cada uno. Para obtener esta informacion, utilizamos una API para traer los datos. <a href="https://pokeapi.co/">PokeApi</a></span>
        </h1>
        
        <button class="text-5xl underline hover:underline-offset-4 my-10 mx-10 md:mx-48 justify-center text-orange-400	font-medium" onClick={onClick}>ENTRAR</button>

    </section>

    /* 
    <div className='container mx-auto mt-5'>
        
        <h1 className='text-3xl font-bold underline'>Landing</h1>
        <h1>H1 asd</h1>
        <h2>H2 asd</h2>
        <h3>H3 asd</h3>
        <h4>H4 asdgfdg</h4>

        <button className='btn btn-blue btn-blue:hover border' onClick={onClick}>Login</button>
    
    </div> */


  )
}

export default LandingComponent