<template>
    <div @click="add">
        <p>-----------点击里面的数字-------------</p>
        {{count}} --两倍--> {{double}}
        <p>-----------点击里面的数字-------------</p>
    </div>
    <button @click="asyncAdd">async add</button>
</template>

<script setup>
import {computed} from 'vue'
// import { useStore } from '../store/gvuex.js';
import { useStore } from 'vuex';
let store = useStore()
console.log('store', store)

let count = computed(()=>store.state.count)
let double = computed(()=>store.getters.double)

function add(){
    store.commit('add')
}

function asyncAdd(){
    store.dispatch('asyncAdd')
}

</script>

<style lang="scss" scoped>

</style>