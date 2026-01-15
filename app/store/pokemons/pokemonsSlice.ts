import { SimplePokemon } from '@/app/pokemons'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
  [key: string]: SimplePokemon, 
}

const initialState: PokemonsState = {
  // '1': {id: '1', name: 'bulbasaur'},
  // '2': {id: '2', name: 'chamaleon'},
  // '3': {id: '3', name: 'superturtle'},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    toogleFavorite(state, action:PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const {id} = pokemon;

      if(!!state[id]) {
        delete state[id];
        //return;
      }
      else {
         state[id] = pokemon;
      }

      localStorage.setItem('pokemons-favoritos', JSON.stringify(state))
    }

  },
})

// Action creators are generated for each case reducer function
export const { toogleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer