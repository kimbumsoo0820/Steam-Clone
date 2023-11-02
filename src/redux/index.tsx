import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./modules/game";
import options from "./modules/favoritSort"

const store = configureStore({
    reducer: {
      // game:counterSlice.reducer,
      favoritSort: options.reducer,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;


  export default store;