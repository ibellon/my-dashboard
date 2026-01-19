'use client'

import { useAppSelector } from "@/app/store"
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { SimplePokemon } from "../interfaces/simple-pokemon";

export const FavoritePokemons = () => {

    const todos = useAppSelector(state => Object.values(state.pokemons.favorites));
    var [favoritos, setFavoritos] = useState<SimplePokemon[]>([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('pokemons-favoritos') ?? "{}");
        setFavoritos(Object.values(storedFavorites));
        favoritos = (Object.values(storedFavorites));
    }, [])

    return (
        todos.length == 0
        ? <NoFavorites></NoFavorites>
        : <PokemonGrid pokemons={favoritos}></PokemonGrid>
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


