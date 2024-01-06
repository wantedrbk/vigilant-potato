import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {AddCommentSchema} from '../types/AddCommentSchema'


const initialState: AddCommentSchema = {
	text: '',
}

export const addCommentFormSlice = createSlice({
	name: 'addCommentForm',
	initialState,
	reducers: {
		setText: (state, action: PayloadAction<string>) => {
			state.text = action.payload
		},
	},
	// extraReducers: (builder) => {
	// 	builder
	// 		.addCase(loginByUsername.pending, (state, action) => {
	// 			if (state.loading === 'idle') {
	// 				state.loading = 'pending'
	// 				state.currentRequestId = action.meta.requestId
	// 			}
	// 		})
	// 		.addCase(loginByUsername.fulfilled, (state, action) => {
	// 			const {requestId} = action.meta
	// 			if (
	// 				state.loading === 'pending' &&
	// 				state.currentRequestId === requestId
	// 			) {
	// 				state.loading = 'idle'
	// 				state.currentRequestId = undefined
	// 			}
	// 		})
	// 		.addCase(loginByUsername.rejected, (state, action) => {
	// 			const {requestId} = action.meta
	// 			if (
	// 				state.loading === 'pending' &&
	// 				state.currentRequestId === requestId
	// 			) {
	// 				state.loading = 'idle'
	// 				state.error = action.payload
	// 				state.currentRequestId = undefined
	// 			}
	// 		})
	// }
})

export const {actions: addCommentFormAction} = addCommentFormSlice
export const {reducer: addCommentFormReducer} = addCommentFormSlice