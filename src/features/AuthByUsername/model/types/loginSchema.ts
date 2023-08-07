export type Loading = 'idle' | 'pending' | 'succeeded' | 'failed'

export interface LoginSchema {
	username: string
	password: string
	loading?: Loading
	rememberMe?: string
	error?: string | null
	currentRequestId?: string
}
