<template>
  <div id="app">
    <headerApp />
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <questionBox 
          v-if="questions.length"
          v-bind:currentQuestion="questions[index]"
          v-bind:next="next"
          />          
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
  data() {
    return {
      questions: [],
      index: 0
    }
  },
  methods: {
    next() {
      this.index++

    }
  },
  mounted: function(){
    fetch('https://opentdb.com/api.php?amount=10&category=27&type=multiple',{
      method: 'get'
    })
    .then((response)=> {
      return response.json()

    })
    .then((jsonData) => {
      this.questions = jsonData.results

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
