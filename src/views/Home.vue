<template>

  <Navbar
      @search="search"
      @updateValue="updateValue"
      :store="store.history"
  />

  <div class="container mt-3" v-if="searchedValue != null">
    <div> {{ $translate('my_search_is') }} : {{ searchedValue }}</div>
  </div>

  <div class="alert alert-info" role="alert" v-else>
    {{ $translate('type_search_msg') }}
  </div>

  <div>
    <h4> {{ $translate('history') }}</h4>
      <div class="list-group">
        <div class="row">
        <SearchHistory
            v-for="(searchHistoryValue, key) in history"
            :key="key"
            :value="searchHistoryValue"
            @reset-search="changeSearch"
        />
        </div>
      </div>
  </div>


  <img alt="Vue logo" src="../assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld                   from  '../components/HelloWorld.vue'
import { default as SearchHistory } from  '../components/SearchHistory.vue'
import { default as Navbar }        from  '../components/Navbar.vue'

export default {
  components: {
    HelloWorld, SearchHistory, Navbar
  },
  props: ['store'],
  data () {
    return {
      valueToSearchInput: '',
      searchedValue: null,
      history: this.store.history.getAll()
    }
  },
  methods: {
    search (value) {
      this.searchedValue = value
      this.$router.push({ path: '/result', query: { value }})
    },
    changeSearch (value) {
      this.$router.push({ path: '/result', query: { value }})
    },
    updateValue(newValue) {
      this.searchedValue = newValue
    }
  }
}
</script>
