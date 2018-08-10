<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>

    <section>
      <button-counter></button-counter>
      <input v-focus type="text" />

      <br />

    </section>

    <router-view/>
  </div>
</template>
<script>
export default {
  components: {

  },
  data () {
    return {
      name: 'Jason',
      cat: {}
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
