<template>
    <div :style="fontStyle">
        <slot></slot>
        <div class="rate" @mouseout="mouseOut">
            <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
            <span class="hollow" :style="fontWidth">
                <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
            </span>
        </div>
    </div>
</template>

<script setup>

import { defineProps, computed, ref, defineEmits } from 'vue'

let props = defineProps({
    modelValue: Number,
    theme: {
        type: String,
        default: 'orange'
    }
})
// let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value))

const themeObj = {
    'black': '#000',
    'white': '#fff',
    'red': '#f5222d',
    'orange': '#fa541c',
    'yellow': '#fadb14',
    'green': '#73d13d',
    'blue': '#40a9ff'
}

const fontStyle = computed(() => {
    return `color:${themeObj[props.theme]};`
})

let width = ref(props.modelValue)
function mouseOver(i) {
    width.value = i
}
function mouseOut() {
    width.value = props.modelValue
}

const fontWidth = computed(() => `width:${width.value}em;`)

// let emits = defineEmits('update-rate')
let emits = defineEmits(['update:modelValue'])
function onRate(num) {
    emits('update-rate', num)
}

</script>

<style scoped>
div {
    font-size: 35px;
    text-align: center;
}

.rate {
    position: relative;
    display: inline-block;
}
.rate > span.hollow {
    position: absolute;
    display: inline-block;
    top:0;
    left:0;
    width:0;
    overflow: hidden;
}
</style>