<template>
  <div id="app">
    <headerApp />
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <questionBox />          
        </b-col>
      </b-row>
    </b-container>
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
  }, 
  mounted: function(){
    fetch('https://opentdb.com/api.php?amount=5&category=27&type=multiple',{
      method: 'get'
    }).then((response)=> {
      console.log(response.json())

    })
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
  margin-top: 5px;
}
</style>
