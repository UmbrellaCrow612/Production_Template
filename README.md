# Templates 

- Includes Tailwind stater 
- MUI starter 
- Prisma 
- Next Auth
- Prisma Adaptor with Next Auth


# Steps to follow for prisma Next Auth to work

1.) In `.env` paste the `DATABASE_URL=` from `railway` or `PlanetScale`

2.) Run:

```bash
npx prisma migrate dev
```
This will create an SQL migration file and execute it.

3.) Generate Client

```bash
npx prisma generate
```

4.) To configure your database to use the new schema (i.e. create tables and columns) use the prisma migrate command:

```bash
npx prisma migrate dev
```