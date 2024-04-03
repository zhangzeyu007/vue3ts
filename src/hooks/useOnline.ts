
import { ref, onMounted, onUnmounted } from 'vue'


export function useOnline() {
	const online = ref(true)

	const showStatus = (val) => {
		online.value = typeof val === 'boolean' ? val : val.target.online
	}
	// 在页面加载完成后，设置正确的网络状态
	navigator.onLine ? showStatus(true) : showStatus(false)

	// 监听网络状态变化
	onMounted(() => {
		window.addEventListener('online', showStatus)
		window.addEventListener('offline', showStatus)
	})

	onUnmounted(() => {
		window.removeEventListener('online', showStatus)
		window.removeEventListener('offline', showStatus)
	})


	return { online }
}