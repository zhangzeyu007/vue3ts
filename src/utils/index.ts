/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2024-04-02 17:10:42
 * @LastEditors: 张泽雨
 * @LastEditTime: 2024-04-06 15:47:10
 * @FilePath: \vue3ts\src\utils\index.ts
 */

import { isObject } from './is/index'
import { Serializer } from '@vueuse/core';


export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
	let key: string
	for (key in target) {
		src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key])
	}
	return src;
}

const RegExp = /^http(s)?:\/\//iu
export function isUrl(url: string) {
	return RegExp.test(url);
}



export function getValueType(defaultValue: unknown) {
	return defaultValue == null ? 'any' : typeof defaultValue === 'boolean' ? 'boolean' : typeof defaultValue === 'number' ? 'number' : typeof defaultValue === 'string' ? 'string' : Array.isArray(defaultValue) ? 'array' : typeof defaultValue === 'object' ? 'object' : 'any'
}

const TypeSerializers: Record<'boolean' | 'object' | 'number' | 'any' | 'string', Serializer<any>> = {
	boolean: {
		read: (v: any) => v != null ? v === 'true' : null,
		write: (v: any) => String(v),
	},
	object: {
		read: (v: any) => v ? JSON.parse(v) : null,
		write: (v: any) => JSON.stringify(v),
	},
	number: {
		read: (v: any) => v != null ? Number.parseFloat(v) : null,
		write: (v: any) => String(v),
	},
	any: {
		read: (v: any) => (v != null && v !== 'null') ? v : null,
		write: (v: any) => String(v),
	},
	string: {
		read: (v: any) => v != null ? v : null,
		write: (v: any) => String(v),
	}
}

export {
	TypeSerializers
}