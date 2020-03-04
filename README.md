# Micro Inventory service


## Description
This microservice is going to be a wrapper over FCG APIs. All FCG APIs should be assessible here, and this includes the `car`, 
`auction`, `inspection`, `auth`, etc

### Requirements
- [Postgres](https://wiki.postgresql.org/wiki/Homebrew)
- [Nodejs](https://nodejs.org/en/download/current/)
- To access postgres on MacOs. Kidnly install [Postico](https://eggerapps.at/postico/) 

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
