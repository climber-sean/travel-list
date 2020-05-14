<template>
  <div>
    <app-header></app-header>
    <router-view>
      <app-search></app-search>
      <app-my-list></app-my-list>
    </router-view>
    
  </div>
</template>

<script>
import Header from './shared/Header.vue';
import Search from './components/Search.vue';
import MyList from './components/MyList.vue';

export default {
  components: {
    appHeader: Header,
    appSearch: Search,
    appMyList: MyList
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

  .blur-element {
    opacity: 0.2;
  }

  .slide-fade-enter-active {
  transition: all .4s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>
