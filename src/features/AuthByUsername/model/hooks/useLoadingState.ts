import {useSelector} from 'react-redux'
import {getLoginState} from '../selectors/getLoginState/getLoginState'

export function useLoadingState(): boolean {
	const {loading} = useSelector(getLoginState)
	return loading === 'pending'
}
