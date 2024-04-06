/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2024-04-06 15:03:01
 * @LastEditors: 张泽雨
 * @LastEditTime: 2024-04-06 15:14:36
 * @FilePath: \vue3ts\src\hooks\useSessionStorage\index.ts
 */
import { ref, Ref, isRef, watch as vueWatch } from 'vue'

const storage = sessionStorage

interface Options {
	watch: boolean
}
const defaultOptions = {
	watch: true
}

const useSessionStorage = <T = any>(key: string, initValue?: T | Ref<T>, options?: Options) => {
	const { watch } = { ...defaultOptions, ...options }
	const data = ref() as Ref<T | undefined | null>
	try {
		if (initValue !== undefined) {
			data.value = isRef(initValue) ? initValue.value : initValue
		} else {
			data.value = JSON.parse(storage.getItem(key) || '{}')
		}
	} catch (error) {
		console.log(error);
	}


}
