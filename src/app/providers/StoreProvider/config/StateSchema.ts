import {CounterScheme} from 'entities/Counter'
import {UserSchema} from 'entities/User'
import {LoginSchema} from 'features/AuthByUsername'

export interface StateSchema {
	counter: CounterScheme
	user: UserSchema
	loginForm: LoginSchema
}
