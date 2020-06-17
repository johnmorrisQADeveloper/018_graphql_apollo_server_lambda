const axios = require("axios");

(async () => {
  console.log('Hello World!')
  var result = await axios({
    method: 'POST',
    url: 'https://tul8x7p1cg.execute-api.eu-west-2.amazonaws.com/v1/graphql',
    data: {
      query: `
                {
                  getPosts {
                    id
                    body
                    likeCount
                    commentCount
                  }
                }
              `
    }
  })
  console.log(JSON.stringify(result.data.data, null, 1))
})()
