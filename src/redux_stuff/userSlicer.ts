import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface UserState {
  name:string,
  email:string,
  username:string,
  password:string
}

// Define the initial state using that type
export const initialState: UserState = {
    name:'',
    email:'',
    username:'',
    password:''
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addUser: (state,action:PayloadAction<UserState>) => {
      state.name=action.payload.name
      state.email=action.payload.email
      state.username=action.payload.username
      state.password=action.payload.password
    },
    removeUser: (state,action:PayloadAction<UserState>) => {
        state.name=action.payload.name
        state.email=action.payload.email
        state.username=action.payload.username
        state.password=action.payload.password
    }
  },
})

export const { addUser, removeUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer