<template>
    <h1>这是关于页</h1>
    <Heading :level="2">Hello JSX</Heading>
    <br />
    <p>鼠标位置：{{ x }},{{ y }}</p>
    <br />
    <div><button @click="loading">换图标</button></div>
    <div><button @click="toggle">全屏</button></div>
    <Counter></Counter>
    <br />
    <!-- <Rate :value="score" @update-rate="update"></Rate> -->
    <Rate v-model="score" @update-rate="update">课程评分</Rate>
    <!-- <Rate :value="2" theme="red"></Rate> -->
    <!-- <Rate :value="5" theme="green"></Rate> -->

</template>

<script setup>
import Counter from '../components/Counter.vue';
import { useMouse } from '../utils/mouse'
import { useFavicon } from '../utils/useFavicon';
import {useFullscreen} from '@vueuse/core'
import Rate from '../components/Rate.vue';
import Heading from '../components/Heading.jsx'
import {ref} from 'vue'

const { x, y } = useMouse()

const {favicon} = useFavicon()
function loading() {
    favicon.value = '/geek.png'
}

const {isFullscreen,enter,exit,toggle} = useFullscreen()
let score = ref(3.5)

function update(num) {
    score.value = num
}


</script>
