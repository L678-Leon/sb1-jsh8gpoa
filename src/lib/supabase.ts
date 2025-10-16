import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ConsultationBooking {
  full_name: string;
  email: string;
  phone: string;
  company_name?: string;
  message: string;
  preferred_date?: string;
  preferred_time?: string;
}

export async function createConsultationBooking(booking: ConsultationBooking) {
  const { data, error } = await supabase
    .from('consultation_bookings')
    .insert([booking])
    .select()
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}
