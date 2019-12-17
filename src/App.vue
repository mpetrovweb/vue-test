<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from '@/components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
@import './assets/reset.css';

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  padding: 48px 15px;
}
</style>
