import {ref} from 'vue'

export function useMouse() {
    const x = ref(0)
    const y = ref(0)

    return {x, y}
}