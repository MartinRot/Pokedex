import React, { useRef, useState } from 'react'

/**
 * Datos validos:
 * User: Ash
 * Password: test
 **/

/* Formulario NO controlado - useRef */

const LoginForm = ({ onSuccess }) => {

  const userRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('')

/* 
  function handleSubmit(e){
    e.preventDefault()

    if (userRef.current.value === "Ash") {
      if (passwordRef.current.value === "test") {
        setError("");

        window.localStorage.setItem("isLogged", true);

        onSuccess();

        return ;
      }
    }

    window.localStorage.setItem("isLogged", false);
    setError("Datos Incorrectos!"); 

    console.log(error)       
  }
 */

  function handleSubmit(e){
    e.preventDefault()

    if (userRef.current.value === "Ash") {
      if (passwordRef.current.value === "test") {
        setError("");

        window.localStorage.setItem("isLogged", true);

        onSuccess();

        return ;
      }
    } else {

      window.localStorage.setItem("isLogged", true);    
      onSuccess();
      setError("Datos Incorrectos!"); 
      console.log(error)
      return ;
    }


  }

  return (

    <div className="bg-gradient-to-tr from-sky-200 to-sky-600">

      <section id="login" className="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
        <div className="p-6 bg-sky-100 rounded">
          <div className="flex items-center justify-center text-4xl font-black text-sky-900 m-3">
            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokeApi" />          
          </div>

            <form id="login_form" action="" method="POST" className="flex flex-col justify-center" onSubmit={handleSubmit}>
              
              {/* User */}
              <label className="text-sm font-medium">Username</label>
              <input               
                className="mb-3 px-2 py-1.5 mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                type="text" 
                name="username" 
                placeholder="Ash Ketchum" 
                id="username"
                ref={userRef}
                autoComplete='on'
               />
              
              {/* Password */}
              <label className="text-sm font-medium">Password</label>
              <input className="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none
                focus:border-sky-500
                focus:ring-1
                focus:ring-sky-500
                focus:invalid:border-red-500 focus:invalid:ring-red-500"
                type="password" 
                name="password" 
                id="password"
                placeholder="********" 
                ref={passwordRef}                
                autoComplete='on'
                />
              
              {/* Boton login */}
              <button className="px-4 py-1.5 rounded-md shadow-lg bg-sky-600 font-medium text-gray-100 block hover:bg-sky-700 transition duration-300" type="submit">
                <span id="login_process_state" className="hidden">Checking ...</span>
                <span id="login_default_state">Login</span></button>               
              
                {error.length > 0 ? (
                  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                  {error}
                  </span> 
                ) : null} 

            </form>

        </div>
      </section>
    </div>

  )
}

export default LoginForm