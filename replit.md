# AgentX AI Services Platform

## Overview

AgentX is a marketing website for an AI consulting and agent services platform. The application showcases AI-powered solutions including voice agents, chat bots, AI avatars, and workflow automation. It features interactive demonstrations of RAG (Retrieval-Augmented Generation) data retrieval and AI agent workflow architecture.

The platform is built as a modern single-page application with a React frontend and Express backend, designed to capture leads through demo and consultation request forms.

## Recent Changes

**November 20, 2025 - Supabase to Neon PostgreSQL Migration:**
- Migrated from Supabase to Replit's built-in Neon PostgreSQL database
- Replaced SupabaseStorage with DrizzleStorage implementation using Drizzle ORM
- Installed required packages: @neondatabase/serverless, ws, @types/ws, @types/node, drizzle-kit
- Created drizzle.config.ts for database configuration and migrations
- Added db:push script to package.json for schema synchronization
- Successfully migrated database schema with demo_requests and consultation_requests tables
- Removed all Supabase dependencies and related code
- Fixed production build by using relative imports instead of '@shared' alias
- Verified application works correctly with new database backend in both dev and production modes

**November 9, 2025 - Production Deployment Fixed:**
- Removed `tsconfig-paths/register` from start script (incompatible with Node.js ESM)
- Added `.js` extensions to all local imports in server code (required for ESM)
- Fixed production static file path in `server/vite.ts` (changed from `../dist/public` to `../public`)
- Simplified start script to `NODE_ENV=production node dist/server/index.js`
- Verified production build compiles successfully and server starts without errors

**November 9, 2025 - Loading Issues Fixed:**
- Fixed Tailwind CSS configuration to point to correct source paths (`./client/src/**` instead of `./src/**`)
- Resolved "No utility classes were detected" warning that prevented proper styling compilation
- Removed duplicate index.html at project root (server correctly uses `client/index.html`)
- Verified preview loads successfully with working Vite HMR websocket connection
- Application now fully operational with stable development server

**November 9, 2025 - Deployment Configuration Fixed:**
- Added missing `start` script to package.json for production deployment
- Downgraded from Express v5 to v4 to resolve path-to-regexp wildcard routing incompatibility
- Fixed server crash loop by removing `throw err` from Express error handler (prevents Node process termination)
- Configured tsx watch with ignore patterns for Vite temporary files (prevents continuous restart loops)
- Updated server-side imports to use relative paths (`../shared/schema.js`) instead of `@shared` alias for tsx compatibility
- Successfully configured workflow to run development server with stable operation

**November 8, 2025 - Bolt to Replit Migration:**
- Migrated from Bolt frontend-only to Replit fullstack template with client/server/shared directory structure
- Set up Express.js v4 backend with Vite middleware for development hot module replacement
- Implemented RESTful API endpoints: `/api/demo-requests` and `/api/consultation-requests`
- Created Drizzle ORM schemas with Zod validation for PostgreSQL readiness
- Configured tsx for TypeScript server execution with watch mode
- Updated all component imports and directory structure for new architecture

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- TailwindCSS for utility-first styling with custom design tokens
- Dual theme support (light/dark mode) with localStorage persistence

**Component Structure:**
- Modular component architecture with separation of concerns
- Context-based theme management using React Context API
- Intersection Observer pattern for scroll-triggered animations and lazy loading
- Fully responsive design with mobile-first approach

**Design System:**
- Custom color palette with brand gradients (blue, teal, emerald, coral, amber)
- Custom fonts (Inter for body text, Playfair Display for headings)
- Reusable animation patterns and transitions
- Accessibility features including ARIA labels, skip links, and reduced motion support

### Backend Architecture

**Server Framework:**
- Express.js server with TypeScript
- Custom middleware for request logging and JSON response capture
- Centralized error handling middleware
- RESTful API endpoints for form submissions

**Development Setup:**
- Vite middleware integration for hot module replacement in development
- Custom static file serving for production builds
- Dual source structure (both `src/` and `client/src/` directories present)

**Data Layer:**
- DrizzleStorage implementation for persistent database operations
- Storage interface pattern (IStorage) for clean architecture
- Schema validation using Zod with Drizzle integration
- Neon PostgreSQL serverless database with WebSocket support

### Data Storage Solutions

**Current Implementation:**
- Neon PostgreSQL database (serverless) via Replit's built-in database
- Drizzle ORM for type-safe database queries
- Two primary tables: `demo_requests` and `consultation_requests`

**Schema Design:**
- PostgreSQL schema definitions using Drizzle ORM
- `demo_requests` table: id (uuid), name, email, company, job_title, status, created_at, updated_at
- `consultation_requests` table: id (uuid), name, email, company, job_title, service_interest, message, status, created_at, updated_at
- UUID primary keys with automatic generation
- Automatic timestamp management with defaultNow()
- Zod validation schemas for type-safe data insertion

**Database Configuration:**
- Drizzle Kit configured for schema migrations
- Database credentials managed via DATABASE_URL environment variable
- WebSocket support via ws package for Neon serverless connection

### Authentication and Authorization

**Current State:**
- No authentication system implemented
- Public-facing marketing website with open form submissions
- Basic form validation only

**Integration Points:**
- No external auth service integration
- Future-ready for user authentication implementation

### External Dependencies

**Database & Backend:**
- Drizzle ORM (v0.44.7) - Type-safe SQL query builder
- Postgres (v3.4.7) - PostgreSQL client
- @neondatabase/serverless - Neon PostgreSQL serverless driver
- ws - WebSocket library for Neon connection
- Express (v4.21.2) - Web server framework

**Validation & Type Safety:**
- Zod (v4.1.12) - Runtime type validation
- Drizzle-Zod (v0.8.3) - Zod schema generation from Drizzle schemas
- TypeScript (v5.5.3) - Static type checking

**Frontend Libraries:**
- React (v18.3.1) & React DOM - UI framework
- Lucide React (v0.344.0) - Icon library
- TailwindCSS (v3.4.1) - Utility-first CSS framework

**Build Tools:**
- Vite (v5.4.2) - Frontend build tool and dev server
- PostCSS (v8.4.35) - CSS processing
- Autoprefixer (v10.4.18) - CSS vendor prefixing

**Code Quality:**
- ESLint (v9.9.1) with TypeScript support
- React-specific linting rules
- Strict TypeScript configuration

**API Endpoints:**
- `POST /api/demo-requests` - Submit demo request form
- `POST /api/consultation-requests` - Submit consultation request form

**Third-Party Service Integrations:**
- Google Fonts (Inter, Playfair Display)
- Social Media: LinkedIn and Instagram links configured
- Schema.org structured data for SEO

**Environment Configuration:**
- DATABASE_URL environment variable for PostgreSQL connection
- Replit's built-in database integration for seamless deployment