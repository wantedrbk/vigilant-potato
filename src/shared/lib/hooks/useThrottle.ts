import {useCallback, useRef} from 'react'
// help me with interface and fix other mistakes

interface UseThrottleProps {
	callback: (...args: any[]) => void
	delay: number
}

export const useThrottle = ({callback, delay}: UseThrottleProps) => {
	const isThrottled = useRef(false)

	const throttledCallback = useCallback(
		(...args: any[]) => {
			if (isThrottled.current) {
				return
			}
			callback(...args)
			isThrottled.current = true
			setTimeout(() => (isThrottled.current = false), delay)
		},
		[callback, delay]
	)

	return throttledCallback
}
