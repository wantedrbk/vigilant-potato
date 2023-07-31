import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../types/user'

const initialState: UserSchema = {}

export const userSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {},
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice

// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// export const selectCount = state => state.counter.value
