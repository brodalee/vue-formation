<template>
  <button
      @click="onClick"
      type="button" class="list-group-item list-group-item-action">
    <div class="row">
    <div class="col-md-2 offset-1" v-for="(movieDetails, key) in movies" :key="key">
      <movie-card :movie-details="movieDetails" />
    </div>
    </div>
  </button>
</template>

<script>

import { getMoviesFrom } from "@/api/movies";
import { default as MovieCard } from '../components/MovieCard.vue'

export default {
  name: 'SearchHistoricValue',
  components: {
    'movie-card': MovieCard
  },
  props: ['value', 'store'],
  data() {
    return {
      movies: []
    }
  },
  async created() {
    const query = this.value
    this.movies = (await getMoviesFrom(query)).slice(0, 4)
  },
  methods: {
    onClick() {
      this.$emit('reset-search', this.value);
    }
  }
}
</script>