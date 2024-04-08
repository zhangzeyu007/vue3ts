
import { ref, Ref, markRaw } from 'vue'


interface Acitons<T> {
	add: (value: T) => void
	remove: (value: T) => void
	has: (value: T) => boolean
	clear: () => void
	reset: () => void
}

function useSet<T = any>(initialValue?: T[]): [
	Ref<Set<any>>,
	actions: Acitons<T>
]

function useSet<T = any>(initialValue?: T[]) {
	const initSet = initialValue ? new Set(initialValue) : new Set()
	const state = ref(initSet)
	const acitons: Acitons<T> = {
		add: (value: T) => {
			state.value.add(value)
		},
		remove: (value: T) => {
			state.value.delete(value)
		},
		has: (value: T) => state.value.has(value),
		clear: () => state.value.clear(),
		reset: () => {
			state.value = new Set()
		}
	}
	return [state, markRaw(acitons)]
}


export default useSet