import {MiniProfile} from 'entities/Profile'

export interface MiniProfilesSchema {
	profile?: MiniProfile
	loading: boolean
	error: string | null
}
