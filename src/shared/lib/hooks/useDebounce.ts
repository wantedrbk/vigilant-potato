import {MutableRefObject, useCallback, useRef} from 'react'
// help me with interface and fix other mistakes

interface UseThrottleProps {
	callback: (...args: any[]) => void
	delay: number
}

export const useDebounce = ({callback, delay}: UseThrottleProps) => {
	const timer = useRef() as MutableRefObject<any>
	
	const throttledCallback = useCallback(
		 (...args: any[]) => {
			 if (timer.current) {
				 clearTimeout(timer.current)
			 }
			 
			 timer.current = setTimeout(() => {
				 callback(...args)
				 
			 }, delay)
		},
		[callback, delay]
	)
	
	return throttledCallback
}
