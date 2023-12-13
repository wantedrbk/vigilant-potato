export {getUserAuthData} from '../selectors/getUserAuthData/getUserAuthData'

export {getUserInitiated} from '../selectors/getUserInitiated/getUserInitiated'

export interface User {
	id: string
	username: string
}

export interface UserSchema {
	authData?: User
	_initiated: boolean
}
