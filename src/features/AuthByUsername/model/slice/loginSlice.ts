import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {LoginSchema} from '../types/loginSchema'
import {loginByUsername} from '../services/loginByUsername/loginByUsername'

const initialState: LoginSchema = {
	username: '',
	password: '',
	loading: 'idle',
	currentRequestId: ''
}

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginByUsername.pending, (state, action) => {
				if (state.loading === 'idle') {
					state.loading = 'pending'
					state.currentRequestId = action.meta.requestId
				}
			})
			.addCase(loginByUsername.fulfilled, (state, action) => {
				const {requestId} = action.meta
				if (
					state.loading === 'pending' &&
					state.currentRequestId === requestId
				) {
					state.loading = 'idle'
					state.currentRequestId = undefined
				}
			})
			.addCase(loginByUsername.rejected, (state, action) => {
				const {requestId} = action.meta
				if (
					state.loading === 'pending' &&
					state.currentRequestId === requestId
				) {
					state.loading = 'idle'
					state.error = action.payload
					state.currentRequestId = undefined
				}
			})
	}
})

export const {actions: loginActions} = loginSlice
export const {reducer: loginReducer} = loginSlice

// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// export const selectCount = state => state.counter.value
