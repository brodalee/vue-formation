<template>
  <div class="card">
    <img :src="movieDetails.Poster" class="card-img" :alt="movieDetails.Title">
    <div class="card-body">
      <h5 class="card-title">{{ movieDetails.Title }}</h5>
      <p class="card-text">Director: {{ movieDetails.Director }}</p>
      <p class="card-text">Year: {{ movieDetails.Year }}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'MovieCard',
  props: ['movieDetails']
}
</script>

<style>
.card-img {
  max-height: 550px;
}
</style>