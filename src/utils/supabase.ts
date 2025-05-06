import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// More detailed environment variable validation
if (!supabaseUrl) {
  throw new Error('VITE_SUPABASE_URL is not defined in environment variables');
}

if (!supabaseAnonKey) {
  throw new Error('VITE_SUPABASE_ANON_KEY is not defined in environment variables');
}

// Configure with retries and timeouts for better reliability
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  global: {
    headers: {
      'Content-Type': 'application/json'
    }
  },
  db: {
    schema: 'public'
  },
  // Add retries for better reliability
  httpOptions: {
    fetch: (url, options) => {
      return fetch(url, {
        ...options,
        // Add longer timeout for slower connections
        signal: AbortSignal.timeout(15000) // 15 second timeout
      });
    }
  }
});

export interface ConsultationRequest {
  id?: string;
  name: string;
  company: string;
  employees: string;
  phone: string;
  email: string;
  requirements: string;
  created_at?: string;
  status?: string;
}

export const saveConsultationRequest = async (request: Omit<ConsultationRequest, 'id' | 'created_at' | 'status'>) => {
  try {
    const { data, error } = await supabase
      .from('consultation_requests')
      .insert(request)
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(`Error saving consultation request: ${error.message}`);
    }
    
    return data;
  } catch (error) {
    console.error('Error saving consultation request:', error);
    throw error;
  }
};