import {useCallback, useRef} from 'react'
// help me with interface and fix other mistakes

interface UseThrottleProps {
	callback: (...args: any[]) => void
	delay: number
}

export const useThrottle = ({callback, delay}: UseThrottleProps) => {
	const isThrottled = useRef(false)

	const throttledCallback = useCallback(
		async (...args: any[]) => {
			if (isThrottled.current) {
				return
			}
			isThrottled.current = true;
			callback(...args);
			
			setTimeout(() => {
				isThrottled.current = false
			}, delay)
		},
		[callback, delay]
	)

	return throttledCallback
}
