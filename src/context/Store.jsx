import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './AppStateContext';

export default configureStore({
    reducer: { UserReducer },
});