import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Profile, ProfileSchema} from '../types/profile'
import {fetchProfileData} from '../services/fetchProfileData/fetchProfileData'

const initialState: ProfileSchema = {
	readonly: true,
	loading: 'idle',
	error: undefined,
	data: undefined
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileData.pending, (state, action) => {
				if (state.loading === 'idle') {
					state.loading = 'pending'
					state.currentRequestId = action.meta.requestId
				}
			})
			.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.loading = 'succeeded'
				state.data = action.payload
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				const {requestId} = action.meta
				if (state.loading === 'pending' && state.currentRequestId === requestId) {
					state.loading = 'idle'
					state.error = action.payload
					state.currentRequestId = undefined
				}
			})
	}
})

export const {actions: profileActions} = profileSlice
export const {reducer: profileReducer} = profileSlice
