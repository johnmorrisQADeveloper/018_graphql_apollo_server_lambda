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