# GastroGnome - a restaurant review application page

## Description

  - The header/navbar component of a restaurant review application built from scratch with React.
  - Styled using React-styled components
  - Data is randomly seeded onto a MongoDB following a schema, and CRUD operations are created to follow RESTful API
  - Docker containerization is used to deploy service onto AWS EC2 instances
  - Proxy is used to combine modules together by retrieving Webpack bundle.js file and rendering on one index.html file.

Demo: https://www.youtube.com/watch?v=_RYAZTYVStI&feature=youtu.be

## Related Projects

  - https://github.com/Gastro-Gnome/photos
  - https://github.com/Gastro-Gnome/header
  - https://github.com/Gastro-Gnome/reservations
  - https://github.com/Gastro-Gnome/reviews
  - https://github.com/Gastro-Gnome/header-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

Run seed data script:
```sh
npm run seed
```

Run Webpack
```sh
npm run dev-react
```

Start Node Server:
```sh
npm start
```



