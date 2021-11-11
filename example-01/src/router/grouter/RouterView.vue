<template>
    <component :is="comp"></component>
</template>
<script setup>

import { computed } from 'vue'
import { useRouter } from '../grouter/index'

let router = useRouter()

const comp = computed(() => {
    // 这个地方要根据实际配置的路由来编写相关代码
    const route = router.routes.find((route) => route.path === router.current.value)
    return route ? route.component : null
})

</script>