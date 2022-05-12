import { useContext } from "react";
import { PokeContext } from "../contexts/PokeContext";

export function usePokeContext() {
  const pokeContext = useContext(PokeContext);

  if (pokeContext === undefined) {
    throw new Error("usePokeContext esta fuera del proveedor PokeContextProvider");
  }

  return pokeContext;
}