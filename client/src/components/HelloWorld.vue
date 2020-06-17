<template>
  <div class="hello">hi John</div>
</template>

<script>
const axios = require("axios");
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      q: []
    }
  },
  async mounted() {
    try {
      let res = await axios({
      method: "POST",
      url: "http://localhost:3000/graphql",
      data: {
        query: `
        {
          getPosts {
            likeCount
          }
        }
        `
      }
    })
    console.log(res)
    } catch (error) {
      console.log(error)
    }

  }
};
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
