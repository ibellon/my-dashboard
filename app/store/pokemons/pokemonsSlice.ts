import { SimplePokemon } from '@/app/pokemons'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
  [key: string]: SimplePokemon, 
}

const initialState: PokemonsState = {
  '1': {id: '1', name: 'bulbasaur'},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const { } = pokemonsSlice.actions

export default pokemonsSlice.reducer