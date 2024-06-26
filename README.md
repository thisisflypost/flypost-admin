# 🪰 flyPost

An event listing website

## Getting started

### Postgres

```
docker run --name flypost-db -e POSTGRES_DB=flypost -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=1234 -p 5432:5432 -d postgres
```

### Strapi

#### Environment variables

Create a `.env` file with the environment variables below.
| Name | Value |
| ---- | ----- |
| APP_KEYS | Values generated by the command `openssl rand -base64 16` |
| API_TOKEN_SALT | A value generated by the command `openssl rand -base64 16` |
| ADMIN_JWT_SECRET | A value generated by the command `openssl rand -base64 16` |
| DATABASE_CLIENT | `postgres` |
| DATABASE_HOST | `127.0.0.1` |
| DATABASE_PORT | `5432` |
| DATABASE_NAME | `flypost` |
| DATABASE_USERNAME | `admin` (or whatever value used by the Postgres Docker container) |
| DATABASE_PASSWORD | `1234` (or whatever value used by the Postgres Docker container) |
| DATABASE_SSL | `false` |

#### Commands

```
npm run develop
```
