import {StateSchema} from 'app/providers/StoreProvider'
import {ProfileSchema} from 'entities/Profile'

export const getProfileData = (state: StateSchema) => state.profile?.data
