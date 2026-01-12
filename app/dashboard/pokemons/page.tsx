import { PokemonsResponse, SimplePokemon } from "@/app/pokemons/";
import { PokemonGrid } from "@/app/pokemons/components/PokemonGrid";

import Image from 'next/image';

const getPokemons = async(limit = 20, offset = 0):Promise<SimplePokemon[]> =>{

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data: PokemonsResponse = await res.json();
  
  const resultado = data.results.map(p => ({
    id: p.url.split('/').at(-2)!,
    name: p.name
  }));

  //throw new Error('Esto es un error que no debiera suceder');
  
  return resultado;
  
}

export default async function PokemonsPage() {

  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">

      <span className="text-5xl my-3">Listado Pokemons <small>estático</small></span>
      
      <PokemonGrid pokemons={pokemons}></PokemonGrid>   

    </div>
  );
}