<template>
  <div id="app">
    <headerApp />
    <questionBox />
  </div>
</template>

<script>
import questionBox from './components/questionBox.vue'
import headerApp from './components/headerApp.vue'


export default {
  name: 'App',
  components: {
    questionBox,
    headerApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
