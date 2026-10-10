# One Click Store — Base44 Dev Environment

## Project Overview
Next.js 14 e-commerce app with TypeScript, Tailwind CSS, Prisma (PostgreSQL), JWT auth, and a Groq-powered chatbot. The repo arrived with only `package.json` and config templates — no source code. Minimal Next.js app scaffolding was created to get the dev server running.

## Architecture
- **Frontend**: Next.js 14 (App Router) with Tailwind CSS and lucide-react icons
- **Database**: PostgreSQL 16 via Prisma ORM
- **Auth**: JWT-based (jsonwebtoken + bcryptjs) — not yet implemented in code
- **Chatbot**: Groq API — not yet implemented in code

## Running the App
```bash
docker compose -f docker-compose.base44.yml up -d
```
- Web entry point: http://localhost:3000
- PostgreSQL runs as a compose service (no external DB needed)
- The dev server hot-reloads on file changes (bind-mounted source)

## Environment Variables
- `.env.base44-defaults` — repo-level placeholder defaults (boots without real secrets)
- `/run/base44/app.env` — platform-managed secrets (overrides defaults)
- `DATABASE_URL` is set in compose `environment:` (local infra, not a user secret)

## Known Issues Fixed During Setup
- `jsonwebtoken@^9.1.0` does not exist on npm — changed to `^9.0.2`
- `Home` naming conflict between lucide-react icon import and page function — aliased to `HomeIcon`

## External Service Credentials
- **GROQ_API_KEY**: Required for the AI chatbot feature. Obtain from https://console.groq.com/keys. Not needed for the app to boot; add via the Secrets dashboard when ready.
- **JWT_SECRET**: A development placeholder is set in `.env.base44-defaults`. Replace with a real 32+ character secret via the Secrets dashboard for production use.

## Verification
- `curl http://localhost:3000/` returns HTTP 200 with the One Click Store landing page
- Both `db` and `web` compose services report healthy status
