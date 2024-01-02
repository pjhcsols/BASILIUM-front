/* create Slices */
import { createSlice } from '@reduxjs/toolkit';

/* Communicate with Basilium Server */
import BasiliumAPI from '../utils/Axios';

/* User Slice */
export const BasiliumSlice = createSlice({
    name: 'User',
    initialState:{
        Id: '',
        Email: '',
        Password: '',
        Liked: [],
        Shopcart: [],
        IsLogin: false,
        IsMemberout: false,
        IsTryToModify: false,
    },
    reducers:{
        ADD: (state, action) => {
            if(action.IsLogin === false){
                return state;   
            }
            state.Id = action.Id;
            state.Email = action.Email;
            state.Password = action.Password;
            state.Liked = action.Liked;
            state.Shopcart = action.Shopcart;
            BasiliumAPI.post("/user", state)
                .then(data => {
                    console.log(data);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        DELETE: (state, action) => {
            if(action.IsMemberout === false){
                return state;
            }
            BasiliumAPI.delete("/user", state)
                .then(data => {
                    console.log("Deleted the user");
                })
                .catch(err => {
                    console.log(err);
                });
        },
        UPDATE: (state, action) => {
            if(action.IsTryToModify === false){
                return state;
            }
            state.Id = action.Id;
            state.Email = action.Email;
            state.Password = action.Password;
            state.Liked = action.Liked;
            state.Shopcart = action.Shopcart;
            BasiliumAPI.post("/user", state)
                .then(data => {
                    console.log("Modified the user's information");
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
});

export const {ADD, DELETE, UPDATE} = BasiliumSlice.actions;

export default BasiliumSlice.reducer;