# Valentine Asker Pro

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/GranitOrllati1/valentine-s-day-asker-interactive-experience)

A modern full-stack application built with React, TypeScript, Tailwind CSS, and shadcn/ui, powered by Cloudflare Workers for seamless edge deployment. Features a responsive UI, API-first architecture, and production-ready tooling.

## Features

- **Full-Stack Ready**: React frontend with Hono-powered API routes on Cloudflare Workers.
- **Modern UI**: shadcn/ui components, Tailwind CSS, dark mode support, and smooth animations.
- **Type-Safe**: End-to-end TypeScript with Cloudflare Workers types.
- **State Management**: TanStack Query for data fetching, Zustand for client state.
- **Developer Experience**: Vite for fast builds, Bun for package management, hot reload.
- **Error Handling**: Global error boundaries and client/server error reporting.
- **Responsive Design**: Mobile-first with sidebar layout and theme toggle.
- **Deployment Ready**: One-command deploy to Cloudflare Workers with asset bundling.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, Lucide React, Framer Motion, Sonner (toasts)
- **Backend**: Hono, Cloudflare Workers, Cloudflare KV/Durable Objects ready
- **Data/UI**: TanStack React Query, React Hook Form, Zod validation
- **State**: Zustand, Immer
- **Utils**: clsx, tailwind-merge, date-fns, UUID
- **Build Tools**: Bun, Wrangler

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/) installed (recommended package manager)
- [Cloudflare CLI (Wrangler)](https://developers.cloudflare.com/workers/wrangler/install/) for deployment
- Cloudflare account (free tier sufficient)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```

### Development

- Start the development server:
  ```bash
  bun dev
  ```
  Opens at `http://localhost:3000` (or `$PORT`).

- Generate Cloudflare Worker types:
  ```bash
  bun cf-typegen
  ```

- Lint the codebase:
  ```bash
  bun lint
  ```

### Build for Production

```bash
bun build
```

Builds optimized assets to `dist/`.

### Deployment

Deploy to Cloudflare Workers with one command:

```bash
bun deploy
```

This builds the app and deploys via Wrangler. Configure your `wrangler.jsonc` with account ID and secrets as needed.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/GranitOrllati1/valentine-s-day-asker-interactive-experience)

**Manual Deployment Steps**:
1. Login to Wrangler: `wrangler login`
2. Deploy: `wrangler deploy`
3. Assets are automatically handled via Pages integration.

## Usage

- **API Routes**: Add custom endpoints in `worker/userRoutes.ts`. Example:
  ```ts
  app.get('/api/test', (c) => c.json({ success: true }));
  ```
  Accessible at `/api/test`.

- **Pages**: Edit `src/pages/` and update `src/main.tsx` router.

- **Components**: Use shadcn/ui from `@/components/ui/*`. Sidebar layout available via `AppLayout`.

- **Custom Hooks**: Theme (`useTheme`), Mobile detection (`useIsMobile`).

- **Error Reporting**: Automatic client errors sent to `/api/client-errors`.

## Project Structure

```
├── src/              # React app
│   ├── components/   # UI components (shadcn/ui + custom)
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utilities
│   ├── pages/        # Page components
│   └── main.tsx      # Entry point
├── worker/           # Cloudflare Worker backend
│   ├── index.ts      # Core handler (DO NOT EDIT)
│   └── userRoutes.ts # Add your API routes here
├── tailwind.config.js # Theming
└── wrangler.jsonc    # Deployment config
```

## Environment Variables

Defined in `wrangler.toml` or via Wrangler secrets:
```
ASSETS # Auto-bound for Pages assets
```

## Contributing

1. Fork the repo
2. Create a feature branch (`bun dev`)
3. Commit changes (`bun lint`)
4. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) for details.