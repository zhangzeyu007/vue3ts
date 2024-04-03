/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2024-04-02 19:40:40
 * @LastEditors: 张泽雨
 * @LastEditTime: 2024-04-02 19:48:37
 * @FilePath: \vue3ts\src\hooks\event\useWindowSizeFn.ts
 */
import { tryOnMounted, tryOnUnmounted, useDebounceFn } from '@vueuse/core'
import { toHandlers } from 'vue'

interface WindowSizeOptions {
	once?: boolean
	immediate?: boolean
	listenerOptions?: AddEventListenerOptions | boolean
}


export function useWindowSizeFn<T>(fn: any, wait = 150, options?: WindowSizeOptions) {
	let handler = () => {
		fn()
	}
	const handleSize = useDebounceFn(handler, wait)
	handler = handleSize
	const start = () => {
		if (options && options.immediate) {
			handler()
		}
		window.addEventListener('resize', handler)
	}

	const stop = () => {
		window.removeEventListener('resize', handler)
	}

	tryOnMounted(() => {
		start()
	})

	tryOnUnmounted(() => {
		stop()
	})
	return [start, stop]
}
