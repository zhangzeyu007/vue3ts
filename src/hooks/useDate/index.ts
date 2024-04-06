/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2024-04-06 13:56:17
 * @LastEditors: 张泽雨
 * @LastEditTime: 2024-04-06 14:47:16
 * @FilePath: \vue3ts\src\hooks\useDate\index.ts
 */
import { ref, readonly } from 'vue'
import dayjs from 'dayjs'

const defaultOptions = {
	format: 'YYYY-MM-DD HH:mm:ss',
	method: 'format'
}

type Value = string | number | Date;


interface Options {
	format?: string
	method?: 'format' | 'millisecond' | 'second' | 'hour' | 'minute' | 'day' | 'date' | 'month' | 'year'
	methodParam?: number
}

function useDate(initValue?: Value | undefined, options?: Options) {

	const state = ref<string>()

	let value = initValue || new Date()

	const {
		format,
		method,
		methodParam
	} = { ...defaultOptions, ...options }

	const refresh = (refreshValue?: Value | undefined) => {
		value = refreshValue || new Date()

		if (method === 'format') {
			state.value = dayjs(value).format(format)
		} else if (method === undefined) {
			return
		} else {
			let data: any = dayjs(value);
			if (methodParam) {
				data = data[method](methodParam)
				if (options && options.format) {
					data = data.format(format);
				}
			}
			state.value = data
		}
	}


	refresh()

	const data = readonly(state)

	return {
		data,
		refresh
	}
}

export default useDate



