<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand">
    <a class="navbar-brand" href="/">
      <img class="logo" alt="Vue logo" src="../assets/logo.png">
      SeekMovie
    </a>
    <div class="collapse navbar-collapse justify-content-between">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">{{ $translate('home') }}</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">{{ $translate('about_menu_title') }}</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/favorites">Favoris</router-link>
        </li>
      </ul>
      <form class="form-inline" @submit.prevent="this.$emit('search', valueToSearchInput)">
        <input
            @input="updateValue"
            class="form-control mr-sm-2"
               v-model="valueToSearchInput"
               type="search"
               :placeholder="this.$translate('type_title_hint')"
               :aria-label="this.$translate('type_title_hint')">
        <button
            @click="goToResult"
            :disabled="this.isDisabled"
            class="btn btn-success my-2 my-sm-0" type="submit">
          Rechercher
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['store'],
  data() {
    return {
      valueToSearchInput: ''
    }
  },
  methods: {
    submit() {
      this.store.add(this.valueToSearchInput)
      this.$emit('search', this.valueToSearchInput)
    },
    updateValue() {
      this.$emit('updateValue', this.valueToSearchInput.trim().length >= 3 ? this.valueToSearchInput : null)
    },
    goToResult() {
      const value = this.valueToSearchInput.trim()
      this.store.add(value)
      this.$router.push({ path: '/result', query: { value }})
    }
  },
  computed: {
    isDisabled() {
      return this.valueToSearchInput.trim().length < 3
    }
  }
}
</script>