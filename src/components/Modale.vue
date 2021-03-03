<template>
  <transition name="modal" v-if="selectedMovie != null">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            {{ selectedMovie.Title }}
          </div>

          <div class="modal-body">
            <slot name="body">
              <img :src="selectedMovie.Poster" class="card-img" :alt="selectedMovie.Title">
              <div>Year: {{selectedMovie.Year}}</div>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-success"
                      @click="addOrDeleteFromFavorites(selectedMovie)"
                      v-text="this.isInFavoriteList(selectedMovie) === true ? this.$translate('add_favorite') : this.$translate('delete_favorite')"
              ></button>

              <button class="modal-default-button btn btn-danger" @click="closeModal">
                {{ $translate('close') }}
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
export default {
  name: 'modal',
  props:['selectedMovie', 'store'],
  methods: {
    addOrDeleteFromFavorites(movie) {
      this.store.favorite.addOrDelete(movie)
    },
    isInFavoriteList(movie) {
      return !this.store.favorite.isFavorite(movie)
    },
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>
