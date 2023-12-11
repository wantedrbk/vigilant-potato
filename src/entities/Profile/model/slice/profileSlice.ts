import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Profile, ProfileSchema} from '../types/profile'
import {fetchProfileData} from '../services/fetchProfileData/fetchProfileData'
import {updateProfileData} from '../services/updateProfileData/updateProfileData'

const initialState: ProfileSchema = {
	readonly: true,
	loading: 'idle',
	error: undefined,
	data: undefined
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setReadOnly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload
		},
		cancelEdit: (state) => {
			state.readonly = true
			state.form = state.data
			state.validateErrors = undefined
		},
		updateProfile: (state, action: PayloadAction<Profile>) => {
			state.form = {
				...state.form,
				...action.payload
			}
		},
		submitForm: (state) => {
			state.readonly = true
			state.data = {
				...state.data,
				...state.form
			}
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileData.pending, (state) => {
				if (state.loading === 'idle') {
					state.error = undefined
					state.loading = 'pending'
					// state.currentRequestId = action.meta.requestId
				}
			})
			.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.loading = 'succeeded'
				state.data = action.payload
				state.form = action.payload
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				// const {requestId} = action.meta
				if (state.loading === 'pending') {
					state.loading = 'idle'
					state.error = action.payload
					// state.currentRequestId = undefined
				}
			})
			.addCase(updateProfileData.pending, (state) => {
				state.validateErrors = undefined
				state.loading = 'pending'
				// state.currentRequestId = action.meta.requestId
			})
			.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.loading = 'succeeded'
				state.data = action.payload
				state.form = action.payload
				state.readonly = true
				state.validateErrors = undefined
			})
			.addCase(updateProfileData.rejected, (state, action) => {
				state.loading = 'idle'
				state.validateErrors = action.payload
				// state.currentRequestId = undefined
			})
	}
})

export const {actions: profileActions} = profileSlice
export const {reducer: profileReducer} = profileSlice
