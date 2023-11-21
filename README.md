# NestJS | Next.js | JWT | Monorepo

#### Setup

```bash
# installation
# create new nest project
$ nest new server --strict --skip-git --package-manager=pnpm

# create new next project
$ pnpx create-next-app@latest client

$ touch tsconfig.base.json
# and setup tsconfig for base, client, server

# add deps (server | client)
$ pnpm add @package-name --filter=server
```

#### Railway deployment

```bash
# -> 'Empty Project'
# -> Add a service
# backend
# -> ... settings ... 'Watch paths' = /apps/server/** -> generate domain
# frontend
# -> new -> github -> ... settings ... 'Watch paths' = /apps/client/** -> generate domain
```
