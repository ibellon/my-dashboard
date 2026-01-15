import { PokemonsResponse, SimplePokemon } from "@/app/pokemons/";
import { PokemonGrid } from "@/app/pokemons/components/PokemonGrid";
import { NoFavorites, FavoritePokemons } from "@/app/pokemons/components/FavoritePokemons";

import Image from 'next/image';
import { IoHeartOutline } from "react-icons/io5";

export const metadata = {
  title: "Pokemons Favoritos",
  descripcion: "Listado con los Pokemons Favoritos"
};

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

export default async function FavoritosPage() {

  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">

      <span className="text-5xl my-3">Pokemons Favoritos <small className="text-blue-500">Global State</small></span>
      
      <FavoritePokemons></FavoritePokemons>
      
    </div>
  );
}

