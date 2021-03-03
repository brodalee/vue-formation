import { ref } from 'vue'

export default {
    state: {
        list: ref([])
    },

    addOrDelete(value) {
        if (this.state.list.includes(value) || (this.state.list.find(i => i.imdbID === value.imdbID) != null || undefined )) {
            console.log(`deleted ${value}`)
            this.state.list.splice(this.state.list.indexOf(value), 1)
            return
        }
        console.log(`added ${value}`)
        this.state.list.unshift(value)
    },

    isFavorite(value) {
        return this.state.list.find(i => i.imdbID === value.imdbID) !== undefined
    },

    getAll() {
        return this.state.list.map(i => i)
    }
}