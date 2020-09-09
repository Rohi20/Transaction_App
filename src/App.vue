<template>
  <div id="app">
    <Toolbar />
    <router-view />
  </div>
</template>

<script>
import Toolbar from './components/UI/Toolbar'
export default {
  name: 'App',
  components: {
    Toolbar
  }
}
</script>

<style>
#app {
  font-family: 'Lora', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #190741;
}
</style>
