export const localStorageMiddleware =
  (store: { getState: () => any; }) => (next: (arg0: any) => any) => (action: any) => {
    const result = next(action);
    console.log("localStorageMiddleware result", result);
    if (typeof window !== "undefined") {
      const state = store.getState();
      //localStorage.setItem("reduxState", JSON.stringify(state));
      console.log("localStorageMiddleware state", state);
    }

    return result;
  };
