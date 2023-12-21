### NestJS | Next.js | Prisma | JWT

```bash
# two options for database
# 1. connect through local pgadmin

# 2. connect through docker (provided in docker-compose.yml); configure .env file

# add prisma
$ pnpm add prisma @prisma/client

# initialize prisma
$ pnpx prisma init

# run server
$ pnpm dev

# adjust database_url and run
$ pnpx prisma migrate dev --name init

# run prisma studio
$ pnpx prisma studio
```
