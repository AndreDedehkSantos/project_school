<template>
  <div id="app">
    <Alunos/>
  </div>
</template>

<script>
import Alunos from './components/Alunos.vue'

export default {
  name: 'App',
  components: {
    Alunos
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");
body{
  background-color: #eee;
  font-family: "Montserrat";
}
</style>
