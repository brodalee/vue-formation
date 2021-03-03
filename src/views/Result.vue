<template v-model="selectedMovie">
  <button @click="goToHome">Go To Home</button>

  <modal @close="closeModal" :store="store" :selectedMovie="selectedMovie" v-if="showModal === true && selectedMovie != null" />

  <div class="spinner-border" role="status" v-if="isLoading">
    <span class="sr-only">Loading...</span>
  </div>

  <div class="row" v-else>

    <h1 class="col-md-12">Resultats ({{ movies.length }})</h1>

    <template v-if="movies.length > 0">
      <div style="cursor:pointer" class="col-md-2 offset-1" v-for="(movieDetails, key) in movies" :key="key">
        <movie-card :movie-details="movieDetails" @click="openModale(movieDetails)" />
      </div>
    </template>
    <template v-else>
      <div class="text-center col-md-12">Pas de resultat.</div>
    </template>
  </div>
</template>

<script>
import { getMoviesFrom } from "@/api/movies";
import { default as Modal } from '../components/Modale.vue'
import { default as MovieCard } from '../components/MovieCard.vue'

export default {
  props: ['store'],
  components: {
    'modal': Modal,
    'movie-card': MovieCard
  },
  data() {
    return {
      movies: [],
      isLoading: false,
      showModal: true,
      selectedMovie: null
    }
  },
  beforeRouteEnter(to, from, next) {
    if (!to.query || !to.query.value) {
      next({name: 'Home'})
    }
    next()
  },
  async created() {
    await this.fetchMovies()
  },
  methods: {
    async fetchMovies() {
      this.updateLoadingState()
      const query = this.$route.query.value
      if (query === undefined) return;
      this.movies = await getMoviesFrom(query)
      this.updateLoadingState()
    },
    updateLoadingState() {
      this.isLoading = !this.isLoading
    },
    goToHome() {
      this.$router.push({ path: '/', query: {}})
    },
    openModale(ref) {
      this.selectedMovie = ref
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    }
  },
  watch: {
    '$route.query.value': 'fetchMovies'
  }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 450px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>