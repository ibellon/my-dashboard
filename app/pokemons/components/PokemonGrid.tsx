import { SimplePokemon } from "../interfaces/simple-pokemon"
import { PokemonCard } from "./PokemonCard";

interface Props {
    pokemons: SimplePokemon[];
}


export const PokemonGrid = ({pokemons}: Props) => {
  
    return (
       
             <div className="flex flex-wrap gap-10 items-center justify-center">
               
               {
                 pokemons.map(p => (
                    <PokemonCard key={p.id} pokemon={p}></PokemonCard>
                //    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${p.id}.svg`}
                //      width={100}
                //      height={100}
                //      alt={p.name}></Image>
                        //<span key={p.id}>PATATA</span>
                 ))
               }
       
             </div>
    )
}

