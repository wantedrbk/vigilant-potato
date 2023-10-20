import {USER_LOCALSTORAGE_KEY} from 'shared/const/localStorage'
import axios from 'axios'

// const baseUrl = __IS_DEV__ ? 'http://localhost:8000' : 'https://api.example.com'

export const $api = axios.create({
	baseURL: __API__,
	headers: {
		authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
	}
})
