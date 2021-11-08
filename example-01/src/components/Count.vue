<template>
    <div @click="add">
        <p>-----------点击里面的数字-------------</p>
        {{count}}
        <p>-----------点击里面的数字-------------</p>
    </div>
</template>

<script setup>
import {computed} from 'vue'
import { useStore } from 'vuex';
let store = useStore()
let count = computed(()=>store.state.count)

function add(){
    store.commit('add')
}

</script>

<style lang="scss" scoped>

</style>