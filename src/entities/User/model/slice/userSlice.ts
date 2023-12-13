import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User, UserSchema} from '../types/user'
import {USER_LOCALSTORAGE_KEY} from 'shared/const/localStorage'

const initialState: UserSchema = {
	_initiated: false
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload
		},
		initAuthData: (state) => {
			const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
			if (user) {
				state.authData = JSON.parse(user)
			}
			state._initiated = true
		},
		logout: (state) => {
			state.authData = undefined
			localStorage.removeItem(USER_LOCALSTORAGE_KEY)
		}
	}
})

export const {actions: userActions} = userSlice
export const {reducer: userReducer} = userSlice

// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// export const selectCount = state => state.counter.value
