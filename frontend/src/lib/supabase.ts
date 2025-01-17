// import { createClient } from '@supabase/supabase-js';

// // Add error handling for missing environment variables
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// if (!supabaseUrl || !supabaseAnonKey) {
//   console.warn('Supabase credentials are missing. Authentication features will be disabled.');
// }

// export const supabase = supabaseUrl && supabaseAnonKey
//   ? createClient(supabaseUrl, supabaseAnonKey)
//   : null;