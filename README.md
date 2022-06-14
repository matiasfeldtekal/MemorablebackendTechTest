# Memorable Backend Tech Test

## Steps to run this project:

1. Run `npm install` command
2. Run `npm start` command


## Endpoints examples
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
