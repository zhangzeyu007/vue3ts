<!--
 * @Author: 张泽雨
 * @Date: 2024-03-30 13:57:52
 * @LastEditors: 张泽雨
 * @LastEditTime: 2024-04-03 18:34:39
 * @FilePath: \vue3ts\src\views\category\index.vue
-->
<template>
  <div>购物组件页</div>
  <MyCat :message="1" />
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
  toRaw
} from 'vue'
import { useOnline } from '@/hooks/useOnline'

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
console.log(online.online.value, '网络状态')
</script>
