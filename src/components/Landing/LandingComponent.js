import { useNavigate } from "react-router-dom"
import { Pokeball } from "../Pokeball/Pokeball"
import "./LandingComponent.css"

const LandingComponent = () => {    

    const navigate = useNavigate()
    const pokeWidth='50%'
    function onClick(){
        navigate("/login")
    }

  return (

    <section className="homescreen m-0 flex flex-col w-screen justify-center bg-gray-800 h-screen text-gray-100 ">
        <nav>
            <ul className="flex justify-between text-xl py-8 px-8 md:px-48 ">
            <li>
                <Pokeball maxWidth={pokeWidth} />
            </li>
            <li className="text-teal-400	">
                Made with 💚 by Martin Rotelli
            </li>
            </ul>
        </nav>

        <h1 className="text-6xl my-auto mx-24 md:mx-48 ">
            Pokedex App <br />
            <span className="text-4xl text-orange-400">En este proyecto se creo una <span className="font-semibold">Pokedex APP</span> para mostrar la lista de Pokemon y la información detallada de cada uno. <br />
                Para obtener esta informacion utilicé una <a href="https://pokeapi.co/" className="underline underline-offset-1">PokeApi.</a><br />
                Para ingresar primero debes logearte con estos datos de acceso <br />
                <span className="font-semibold">User: Ash<br />Password: test</span>
            </span>
        </h1>
        
        <button className="text-5xl underline hover:underline-offset-4 my-10 mx-10 md:mx-48 justify-center text-orange-400	font-medium" onClick={onClick}>ENTRAR</button>

    </section>

  )
}

export default LandingComponent