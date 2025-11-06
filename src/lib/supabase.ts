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
    name: booking.name,
    email: booking.email,
    phone_number: booking.phone_number,
    company_name: booking.company_name || '',
    business_needs: booking.business_needs || '',
    product: booking.product || ''
  };

  console.log('Attempting to insert into database:', dbBooking);

  const { data, error } = await supabase
    .from('consultation_bookings')
    .insert([dbBooking])
    .select()
    .maybeSingle();

  if (error) {
    console.error('Database insert error:', error);
    throw new Error(`Database error: ${error.message} (Code: ${error.code})`);
  }

  console.log('Database insert successful:', data);
  return data;
}
