import React, { useState } from 'react'

/**
 * Datos validos:
 * User: Ash
 * Password: test
 **/

const LoginForm = ({ onSuccess }) => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    function handleClick() {
      if (user === "Ash") {
        if (password === "test") {
          setError("");
  
          window.localStorage.setItem("isLogged", true);
  
          onSuccess();
  
          return ;
        }
      }
  
      window.localStorage.setItem("isLogged", false);
      setError("Datos Incorrectos");
    }
  
    function onUserChange(event) {
      setUser(event.target.value);
    }
  
    function onPasswordChange(event) {
      setPassword(event.target.value);
    }

  return (

    <div class="bg-gradient-to-tr from-sky-200 to-sky-500">
      <section id="login" class="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
        <div class="p-6 bg-sky-100 rounded">
          <div class="flex items-center justify-center text-4xl font-black text-sky-900 m-3">
            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokeApi" />          
          </div>

            <form id="login_form" action="" method="POST" class="flex flex-col justify-center">
              <label class="text-sm font-medium">Username</label>
              <input class="mb-3 px-2 py-1.5
              mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none
              focus:border-sky-500
              focus:ring-1
              focus:ring-sky-500
              focus:invalid:border-red-500 focus:invalid:ring-red-500" type="text" name="username" placeholder="Ash Ketchum" required value={user} onChange={onUserChange}/>
              <label class="text-sm font-medium">Password</label>
              <input class="
              mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none
              focus:border-sky-500
              focus:ring-1
              focus:ring-sky-500
              focus:invalid:border-red-500 focus:invalid:ring-red-500" type="password" name="password" placeholder="********" required value={password} onChange={onPasswordChange}/>
              <button class="px-4 py-1.5 rounded-md shadow-lg bg-sky-600 font-medium text-gray-100 block hover:bg-sky-700 transition duration-300" type="submit" onClick={handleClick}>
                <span id="login_process_state" class="hidden">Checking ...</span>
                <span id="login_default_state">Login</span></button>
            </form>

        </div>
      </section>

  {/*     <script>
        document.getElementById("login_form").onsubmit = function() {
          event.preventDefault()
          // animation
          document.getElementById("login_process_state").classList.remove("hidden")
          document.getElementById("login_process_state").classList.add("animate-pulse")

          document.getElementById("login_default_state").classList.add("hidden")
        }
      </script> */}
    </div>


  )
}

export default LoginForm