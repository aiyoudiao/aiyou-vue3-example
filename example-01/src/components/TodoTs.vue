<template>
    <div>

    </div>
</template>

<script setup lang="ts">
    import {computed,reactive,ref} from '@vue/runtime-core'

    interface 极客时间课程{
        name: string,
        price: number,
    }

    const msg = ref('')
    const msg1 = ref<string>('')
    
    const obj = reactive({})
    const course = reactive<极客时间课程>({name: '玩转Vue3全家桶', price: 129})

    const msg2 = computed(() => '')
    const course2 = computed<极客时间课程> (() => {
        return {name: '玩转Vue3全家桶', price: 129}
    })

</script>

<style lang="scss" scoped>

</style>