/**
 * Supabase Client Configuration
 * This file works in both React and Next.js
 */

import { createClient } from '@supabase/supabase-js'
import type { Database } from './database.types'

// In a browser environment like Figma Make, you'll need to replace these with your actual values
// For Next.js, these will be loaded from .env.local automatically
const supabaseUrl = (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SUPABASE_URL) 
  || (window as any).__SUPABASE_URL__ 
  || 'https://placeholder.supabase.co' // Valid URL format to prevent errors

const supabaseAnonKey = (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY) 
  || (window as any).__SUPABASE_ANON_KEY__ 
  || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTI4MDAsImV4cCI6MTk2MDc2ODgwMH0.placeholder-key-replace-with-real-key' // Valid JWT format

// Check if using placeholder values
const isConfigured = supabaseUrl !== 'https://placeholder.supabase.co' && 
                      !supabaseAnonKey.includes('placeholder-key-replace-with-real-key')

if (!isConfigured) {
  console.warn(`
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║   ⚠️  SUPABASE NOT CONFIGURED                                  ║
║                                                                ║
║   The app is running with placeholder Supabase credentials.   ║
║   To connect to your database, please configure Supabase:     ║
║                                                                ║
║   📝 Edit /lib/supabase.ts and replace:                       ║
║      - supabaseUrl with your Supabase project URL             ║
║      - supabaseAnonKey with your anon/public key              ║
║                                                                ║
║   📚 See SUPABASE_CONFIG.md for detailed instructions         ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
  `)
}

// Use a loosely-typed export to avoid editor PostgREST "never" inference
// while keeping runtime behavior. For stricter typing, replace `any` with
// `Database` and ensure generated `database.types.ts` matches your schema.
export const supabase = createClient(supabaseUrl, supabaseAnonKey) as any

// Helper to check if Supabase is properly configured
export function isSupabaseConfigured(): boolean {
  return isConfigured
}