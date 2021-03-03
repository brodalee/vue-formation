import { reactive } from 'vue'

export default {
    state: reactive({
        list: []
    }),

    add(value) {
        console.log(`added ${value}`)
        this.state.list.unshift(value)
    },

    getAll() {
        return this.state.list.map(i => i)
    }
}