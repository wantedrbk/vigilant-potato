import {User} from 'entities/User'

export interface CommentCardType {
	id: number
	user: User
	text: string
}
