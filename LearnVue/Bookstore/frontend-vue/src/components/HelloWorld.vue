<template>
  <div class="hello" style="text-align: center">
    <h1>Hello World</h1>
    <p>Learning Vue at CAMP404</p>
    <input type="text" placeholder="input your name..." v-model="yourname" />
    <p>{{ yourname }}</p>
    <button @click="greet(yourname)">Say Hi</button>
    <button @click="pass(yourname)">Send to book management</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      yourname :"Fanny"
    }
  },
  props: {
    msg: String
  },
  methods: {
    greet(yourname) {
      alert("Hello " + yourname);
    },
    pass(yourname) {
      this.$emit("fromChild", yourname);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
