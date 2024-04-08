<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2024-03-30 14:18:27
 * @LastEditors: 张泽雨
 * @LastEditTime: 2024-04-07 22:43:22
 * @FilePath: \vue3ts\src\views\category\index.vue
-->
<template>
  <div>购物组件页</div>
  <MyCat :message="1" />
  <AsyncComp></AsyncComp>
</template>

<script setup lang="ts">
import MyCat from './MyCat.vue'
import {
  ref,
  shallowRef,
  unref,
  computed,
  watch,
  reactive,
  watchEffect,
  isRef,
  toRef,
  toRefs,
  toValue,
  isReadonly,
  isReactive,
  watchPostEffect,
  watchSyncEffect,
  effectScope,
  onScopeDispose,
  getCurrentScope,
  defineAsyncComponent,
  toRaw
} from 'vue'
import { useOnline } from '@/hooks/useOnline'
import useDate from '@/hooks/useDate/index'

let reactive1 = reactive({ a: 1, b: 2, c: 6 })
const objRef = ref({ a: 1, b: 2, c: 6 })
const obj = { a: 1, b: 2, c: 6 }
const read = isReactive(objRef)
const scope = effectScope()
const curent = getCurrentScope()

console.log('toRaw', toRaw(reactive1))

setTimeout(() => {}, 3000)

watchEffect(() => {
  reactive1.a = 1000
  console.log('watchEffect')
})
watchSyncEffect(() => {
  console.log('watchSyncEffect')
})
watchPostEffect(() => {
  console.log('watchPostEffect')
})

onScopeDispose(() => {
  console.log('onScopeDispose')
})
const online = useOnline()
const currentTime = useDate('', { format: 'YYYY-MM-DD', method: 'hour', methodParam: 3 })
console.log(currentTime.data.value, '当前时间')
console.log(online.online.value, '网络状态')

const AsyncComp = defineAsyncComponent({
  loader: () => import('./asyncCom.vue'),
  delay: 3000,
  timeout: 3000
})
</script>
