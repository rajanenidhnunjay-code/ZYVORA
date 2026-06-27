import { createClient } from '@supabase/supabase-js'

// Safely pull the keys regardless of what prefix Vercel or your local environment uses
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || (process as any).env?.NEXT_PUBLIC_SUPABASE_URL || (process as any).env?.SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || (process as any).env?.NEXT_PUBLIC_SUPABASE_ANON_KEY || (process as any).env?.SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)