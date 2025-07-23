import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

// Check if running in development without database
const isDevelopment = process.env.NODE_ENV === 'development';
const hasDatabase = !!process.env.DATABASE_URL;

if (!hasDatabase && !isDevelopment) {
  throw new Error(
    "DATABASE_URL must be set for production. Please add your database URL to environment variables.",
  );
}

// Only create database connection if DATABASE_URL is provided
export const pool = hasDatabase ? new Pool({ connectionString: process.env.DATABASE_URL }) : null;
export const db = hasDatabase ? drizzle({ client: pool!, schema }) : null;