<template>
  <div>
    <app-header></app-header>
    <app-search></app-search>
    
  </div>
</template>

<script>
import Header from './shared/Header.vue';
import Search from './components/Search.vue';

export default {
  components: {
    appHeader: Header,
    appSearch: Search
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0px;
  }

  .container {
    width: 80%;
    margin: auto;
  }

  .responsive-img {
    width: auto;
    height: 100%;
  }
</style>
