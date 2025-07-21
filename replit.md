# Treat Your Car - Auto Care Service Website

## Overview

This is a full-stack web application for "Treat Your Car," an automotive care service business. The application features a modern, responsive website built with React and TypeScript, offering information about services, company details, and a contact form for customer inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between frontend and backend concerns:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for development and production builds
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Hosting**: Neon Database for PostgreSQL hosting
- **Session Management**: Uses connect-pg-simple for PostgreSQL session storage

## Key Components

### Database Schema (`shared/schema.ts`)
- **Users Table**: Basic user authentication (id, username, password)
- **Contacts Table**: Customer contact form submissions with fields for personal info, service type, and messages
- **Validation**: Zod schemas for type-safe data validation

### API Routes (`server/routes.ts`)
- `POST /api/contact` - Submit contact form with validation
- `GET /api/contacts` - Retrieve all contact submissions (admin)
- `GET /api/brochure/download` - Download company brochure (mock implementation)

### Frontend Pages and Components
- **Home Page**: Single-page application with navigation, hero carousel, about section, services, works gallery, contact form, and footer
- **Contact Form**: Integrated form with validation and success/error feedback
- **Responsive Design**: Mobile-first approach with smooth scrolling navigation

### Storage Layer (`server/storage.ts`)
- **Interface Design**: IStorage interface for database operations
- **Memory Implementation**: MemStorage class for development/testing
- **Database Operations**: Methods for user and contact management

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Processing**: Express routes handle requests with validation
3. **Database Operations**: Storage layer abstracts database interactions
4. **Response Handling**: Standardized JSON responses with error handling
5. **Client Updates**: Query client handles caching and UI updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **zod**: Runtime type validation
- **express**: Web server framework

### UI Dependencies
- **@radix-ui/***: Accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for Node.js

## Deployment Strategy

### Development Setup
- Vite handles frontend development with HMR
- Express server serves API routes
- Development-specific middleware for error overlay and debugging

### Production Build
- `npm run build`: Compiles frontend assets and bundles backend
- Frontend built to `dist/public` directory
- Backend bundled with esbuild for optimal performance
- Static file serving integrated with Express in production

### Environment Configuration
- Database URL configuration via environment variables
- Drizzle migrations stored in `./migrations` directory
- TypeScript configuration supports both client and server code

### Database Management
- `npm run db:push`: Apply schema changes to database
- Drizzle Kit handles migrations and schema synchronization
- PostgreSQL dialect with connection pooling support

The application is designed to be easily deployed to platforms like Replit, with proper separation of concerns and scalable architecture patterns.