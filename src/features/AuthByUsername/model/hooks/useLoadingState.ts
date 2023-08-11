import {useSelector} from 'react-redux'
import {getLoginLoading} from '../../model/selectors/getLoginLoading/getLoginLoading'

export function useLoadingState(): boolean {
	const loading = useSelector(getLoginLoading)
	return loading === 'pending'
}
