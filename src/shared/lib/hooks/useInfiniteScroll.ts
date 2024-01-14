import {MutableRefObject, useEffect, useRef} from 'react'


export interface UseInfiniteScrollOptions {
	callback?: () => void;
	triggerRef: MutableRefObject<HTMLElement>;
	wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = ({ callback, wrapperRef, triggerRef
} : UseInfiniteScrollOptions) => {
	const observer = useRef<IntersectionObserver | null>(null);
	
	
	useEffect(() => {
		const currentWrapperElement = wrapperRef.current;
		const currentTriggerElement = triggerRef.current;
		
		if (callback) {
			
			const options = {
				root: currentWrapperElement,
				rootMargin: '0px',
				threshold: 1.0,
			};
			
			observer.current = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) {
					callback();
				}
			}, options);
			
			observer.current.observe(currentTriggerElement);
		}
		
		return () => {
			if (observer.current && currentTriggerElement) {
				observer.current?.unobserve(currentTriggerElement);
			}
		}
		
	},[callback, wrapperRef, triggerRef])
	
	
}