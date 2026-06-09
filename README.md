# srv-hono-template

GitHub Template — backend TypeScript + Hono (Node 22).

## Requisitos

- Node 22+

## Rodar localmente

```bash
npm install
npm run dev
# GET http://localhost:3000/health → {"status":"ok"}
```

## Build

```bash
npm run build
npm start
```

## Docker

```bash
docker build -t srv-hono-template .
docker run -p 3000:3000 srv-hono-template
```

## CI

Push para `main` → typecheck + lint + test + build + push GHCR.
