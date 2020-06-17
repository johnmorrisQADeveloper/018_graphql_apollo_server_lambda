const axios = require("axios");

( async () => {
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
  console.log(JSON.stringify(res.data.data, null, 2))
})();