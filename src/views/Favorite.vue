<template>
  <div class="about">
    <button @click="goToHome">Go To Home</button>
    <h1>Favorite</h1>

    <template v-if="favorites.length > 0">
      <div class="row">
      <div class="col-md-2 offset-1" v-for="(movieDetails, key) in favorites" :key="key">
        <movie-card :movieDetails="movieDetails" />
      </div>
      </div>
    </template>

  </div>
</template>


<script>

import { default as MovieCard } from '../components/MovieCard.vue'

export default {
  props:['store'],
  components: {
    'movie-card': MovieCard
  },
  data() {
    return {
      favorites: this.store.favorite.getAll()
    }
  },
  methods: {
    goToHome() {
      this.$router.push({ path: '/', query: {}})
    }
  }
}
</script>