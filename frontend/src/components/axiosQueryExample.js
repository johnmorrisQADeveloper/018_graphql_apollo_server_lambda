const axios = require('axios');

(async () => {
  console.log('Hello World!')
  var result = await axios({
    method: 'POST',
    url: 'http://127.0.0.1:3000/graphql',
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
