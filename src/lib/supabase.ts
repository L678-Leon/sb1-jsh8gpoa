import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ConsultationBooking {
  name: string;
  email: string;
  phone_number: string;
  company_name?: string;
  business_needs: string;
  product?: string;
}

export async function createConsultationBooking(booking: ConsultationBooking) {
  const dbBooking = {
    full_name: booking.name,
    email: booking.email,
    phone: booking.phone_number,
    company_name: booking.company_name,
    message: booking.business_needs,
    status: 'pending'
  };

  const { data, error } = await supabase
    .from('consultation_bookings')
    .insert([dbBooking])
    .select()
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}
