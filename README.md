# Memorable Backend Tech Test

## Dependencies
- Install Node js
  - Windows / Mac: https://nodejs.org/en/download/
  - Linux: 
  ```
    sudo apt install curl
    curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    sudo apt-get install -y nodejs
  
    verify installation:
        node --version
        npm --version
  ``` 


## Steps to run this project:

1. Run `npm install` command
2. Run `npm start` command (The server runs in http://localhost:3333/graphql)
3. For tests: `npm test`

The project is configured to use a sqlite database.


## The problem

We have two types of assets, which can be either videos or images. 

These assets have the following metadata: ID, type, filename and extension (jpg, png, mp4, etc). 

Additionally, each one of these assets can have multiple scores, one for each Score Type (Type1, Type2, Type3). 
This score can be a number between 0 and 100. 

To share these metrics with the rest of the organization, we need to be able to interact with this database and know 
the average score for each asset type (video, image) for a specific Score Type.


## The task
We propose to develop a few endpoints that interact with a database containing these assets. 

The endpoints are as follows:
- An endpoint to create assets with scores.
- An endpoint to get the average score for a specific Score Type and a specific asset type. 
- An endpoint to get the data for an asset. The endpoint receives an asset id and returns the asset data, including all of the asset’s scores.
The endpoint receives an asset type (image, video), and a score type (Type1, etc). 
The endpoint should return the average score for that asset type and score type.


## Requirements
- You have 45 minutes to develop these endpoints.
- Don't worry if the code does not compile, you can use some pseudocode to help you if you don't remember the syntax. 
The important thing is that we understand what you would do in a real situation.
- It is preferable to not finish all the endpoints but have a good design than finishing everything on time with bad practices.
- You are free to modify all existing code, they are just examples.
- Please add some automatic tests.


## Stack
-   [TypeScript](https://www.typescriptlang.org) as the language
-   [TypeORM](https://typeorm.io/#/) as the database ORM
-   [TypeDi](https://github.com/typestack/typedi) as dependency injection container
-   [Apollo](https://www.apollographql.com/docs/) as the graphql server
-   [Type-graphql](https://typegraphql.com/) as the graphql library
-   [Mocha](https://mochajs.org/) as testing framework
-   [Chai](https://www.chaijs.com/) as testing assert framework


## Endpoints examples (with the sample implementation)
- Create asset
```graphql
mutation {
  createAsset {
    id
    name
  }
}
```

- Get all assets
```graphql
query {
    getAllAssets{
        id
        name
    }
}
```
