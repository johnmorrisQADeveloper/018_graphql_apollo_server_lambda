# Graphql via Apollo Server Lambda - mongoose atlas

## Run the app locally
```
yarn install
yarn dev
```
```
Insomnia - app
http://localhost:3000/graphql
{
  getPosts {
    id
    body
    createdAt
    username
  }
}
```

## Create a user
```
mutation {
  register(registerInput: {
    username: "user1"
    password: "user1"
    confirmPassword: "user1"
    email: "user1@mail.com"
  }){
    id
    email
    token
    username
    createdAt
  }
}
```

## validate login user
```
mutation {
  login(username: "s" password: "s") {
    id
    email
    token
    username
    createdAt
  }
}
```

## get a single post
```
query {
  getPost(postId: "5ee868a98a9dceb1209db78a") {
    id
    body
    createdAt
    username
    }
}
```

## create a post
```
mutation {
  createPost(body: "best post ever ever er er r r r") {
    id
    body
    createdAt
    username
  }
}
Header:
Authorization Bearer eyJhbGciOiJIU
```

## delete post
```
mutation {
  deletePost(postId: "5ee8fa563b5fff000d596c46") 
}
Header:
Authorization Bearer eyJhbGciOiJIU
```

## add a comment to an existing post
```
mutation {
  createComment(postId: "5ee904f1a05f82000db37f3b", body: "adding a third comment ") {
    id
    body
    comments {
      id
      createdAt
      username
      body
    }
  }
}
```