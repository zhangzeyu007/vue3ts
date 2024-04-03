<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2024-04-03 17:24:08
 * @LastEditors: 张泽雨
 * @LastEditTime: 2024-04-03 18:36:27
 * @FilePath: \vue3ts\src\views\category\MyCat.vue
-->
<template>
  <input v-model="msg" />
  <button @click="handleClick()">添加</button>
</template>
<script>
import { defineComponent, toRefs } from 'vue'

export default defineComponent(
  (props) => {
    const { message } = toRefs(props)
    const msg = ref(message.value)
    const handleClick = () => {
      msg.value++
    }
    return {
      msg,
      handleClick
    }
  },
  {
    props: ['message']
  }
)
</script>
