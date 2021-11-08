<template>
    <div @click="add">
        <p>-----------点击里面的数字-------------</p>
        {{count}}
        <p>-----------点击里面的数字-------------</p>
    </div>
</template>

<script setup>
import {computed} from 'vue'
import { useStore } from '../store/gvuex.js';
let store = useStore()
console.log('store', store)

let count = computed(()=>store.state.count)
// let double = computed(()=>store.getters.double)

function add(){
    store.commit('add')
}

</script>

<style lang="scss" scoped>

</style>