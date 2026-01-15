'use client'

import { useAppSelector } from "@/app/store"
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { SimplePokemon } from "../interfaces/simple-pokemon";

export const FavoritePokemons = () => {

    //const favoritos = useAppSelector(state => Object.values(state.pokemons));
    //const [pokemons] = useState(favoritos);
    const [pokemons, setPokemons] = useState<SimplePokemon[]>([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('pokemons-favoritos') ?? "{}");
        setPokemons(Object.values(storedFavorites));
        console.log("storedFavorites: ", pokemons);
    }, [])

    return (
        pokemons.length == 0
        ? <NoFavorites></NoFavorites>
        : <PokemonGrid pokemons={pokemons}></PokemonGrid>
    )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500"></IoHeartOutline>
      <span>No hay favoritos</span>
    </div>
  )
}


