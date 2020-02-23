# Doggos 🐕

Just a server-side REST wrapper for [Dog API](https://dog.ceo/dog-api/) built with [GraphQL](https://graphql.org/).

```
            ,
            |`-.__
            / ' _/
           ****`
          /    }
         /  \ /
     \ /`   \\\
      `\    /_\\
       `~~~~~``~`
```

## Usage

1. `yarn install`

2. `yarn start`

3. Make the queries in the GraphQL Playground

## List of available queries

Dog API [Documentation](https://dog.ceo/dog-api/documentation/)

### List all breeds

```graphql
{
    listAllBreeds
}
```

### Random image

```graphql
{
    randomImage {
        message
        status
    }
}
```

### By breed

```graphql
{
    byBreed {
        message
        status
    }
}
```

### By sub-breed

```graphql
{
    bySubBreed {
        message
        status
    }
}
```

### Browser breed list

```graphql
query {
    breed(type: "african") {
        message
        status
    }
}
```
