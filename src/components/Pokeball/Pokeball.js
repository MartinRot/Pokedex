import pokeball from "../../img/pokeball.svg"

export function Pokeball(width) {
    
    return (
        <img width={width.maxWidth}  src={pokeball} alt="Pokeball" />
    )
}