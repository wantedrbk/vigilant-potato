export {getUserAuthData} from '../selectors/getUserAuthData/getUserAuthData'

export {getUserInitiated} from '../selectors/getUserInitiated/getUserInitiated'

export interface User {
	id: string
	username: string
	avatar?: string
	firstname?: string
	lastname?: string;
}

export interface UserSchema {
	authData?: User
	_initiated: boolean
}
