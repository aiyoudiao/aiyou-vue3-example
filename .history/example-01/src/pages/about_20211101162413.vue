<template>
    <h1>这是关于页</h1>
    <br />
    <p>鼠标位置：{{ x }},{{ y }}</p>
</template>

<script setup>
import CounterVue from '../components/Counter.vue';
import { useMouse } from '../utils/mouse'

const { x, y } = useMouse()
</script>
