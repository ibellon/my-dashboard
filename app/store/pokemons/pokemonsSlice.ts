import { SimplePokemon } from '@/app/pokemons'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
  favorites: {[key: string]: SimplePokemon}, 
}

// const getInitialState = (): PokemonsState => {
//   //if(typeof localStorage === 'undefined') return {};
//   const favorites = JSON.parse(localStorage.getItem('pokemons-favoritos') ?? '{}');
//   return favorites;
// }

const initialState: PokemonsState = {
  favorites: {},
  //...getInitialState(),
  // '1': {id: '1', name: 'bulbasaur'},
  // '2': {id: '2', name: 'chamaleon'},
  // '3': {id: '3', name: 'superturtle'},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<{[key:string]:SimplePokemon}>) {
      state.favorites = action.payload;
    },

    toogleFavorite(state, action:PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const {id} = pokemon;

      if(!!state.favorites[id]) {
        delete state.favorites[id];
        //return;
      }
      else {
         state.favorites[id] = pokemon;
      }

      localStorage.setItem('pokemons-favoritos', JSON.stringify(state.favorites))
    }

  },
})

// Action creators are generated for each case reducer function
export const { toogleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer