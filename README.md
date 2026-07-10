# RM: Project Name

Template project with a pre-configured full-stack stack using Express + Prisma + Next.js. Replace all `RM:` markers with your own values.

- **Backend**: Express + Prisma + PostgreSQL + JWT auth
- **Frontend**: Next.js
- **Docker Compose** for local development

## Quick Start

```bash
# 1. Copy env vars and edit them (RM: update values)
cp .env.example .env

# 2. Start PostgreSQL
docker compose up -d postgres

# 3. Backend
cd back
pnpm install
pnpm run prisma:migrate:init
pnpm run dev

# 4. Frontend (new terminal)
cd front
pnpm install
pnpm run dev
```

Or run everything with Docker:

```bash
docker compose up --build
```

## RM: Add more documentation here
