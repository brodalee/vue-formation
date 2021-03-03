<template>
  <router-view :store="store"/>
</template>

<script>
import { default as Store } from  './store/store'

export default {
  name: 'App',
  data() {
    return {
      store: Store
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
