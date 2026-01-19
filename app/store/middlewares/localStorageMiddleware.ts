import { RootState } from '@reduxjs/toolkit/query';

export const localStorageMiddleware =
  (store: { getState: () => any; }) => (next: (arg0: any) => any) => (action: any) => {
    const result = next(action);
    console.log("localStorageMiddleware result", result);
    console.log("localStorageMiddleware action", action);
    if (typeof window !== "undefined") {
      const state = store.getState();
      //localStorage.setItem("reduxState", JSON.stringify(state));
      console.log("localStorageMiddleware state", state);
    }
    if(action.type === 'pokemons/toogleFavorite') {
        console.log("ALMACENAMOS EN LOCAL STORAGE");
        const {pokemons} = store.getState();
        localStorage.setItem('pokemons-favoritos', JSON.stringify(pokemons)); 
        return;
    }

    return result;
  };
