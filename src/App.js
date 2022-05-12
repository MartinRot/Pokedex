//import { Dashboard, Login, Landing, NoMatch } from "./pages/"
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import './App.css';
import { useState } from "react";
import Login from "./pages/Login/Login"
import Dashboard from "./pages/Dashboard/Dashboard"
import Landing from "./pages/Landing/Landing"
import NoMatch from "./pages/NoMatch/NoMatch"
import { DashboardProvider } from "./contexts/DashboardContext";
import PokeDetails from "./components/PokeDetails/PokeDetails";

function App() {

  const [isLogged, setIsLogged] = useState(
    window.localStorage.getItem("isLogged") === "true"
  );

  function onSuccess(){
    setIsLogged(true)
  }

  function onLogout(){
    setIsLogged(false)
    window.localStorage.removeItem("isLogged")
  }

  return (
    <div className="App">

    <BrowserRouter>
      <DashboardProvider value={{onLogout, onSuccess, isLogged}}>

        <Routes>

          <Route path="/" >
            <Route index element={isLogged ? <Dashboard /> : <Landing /> } />

            <Route path=":id" element={ isLogged ? < PokeDetails /> : <Landing /> } />           
          </Route>

          {isLogged ? null : (
            <Route path="/login" element={ <Login /> } />
          )}          

          {/* 404 not found / nomatch */}
          <Route path="*" element={<NoMatch />} />
          
        </Routes>

      </DashboardProvider>
    </BrowserRouter>

    </div>
  );
}

export default App;
