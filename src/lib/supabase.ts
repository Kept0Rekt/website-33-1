import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabaseInstance: SupabaseClient | null = null;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase configuration. Check your .env file for VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
} else {
  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
}

export const supabase = supabaseInstance;

export const isSupabaseConfigured = (): boolean => {
  return supabaseInstance !== null;
};
