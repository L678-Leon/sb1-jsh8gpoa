/*
  # Create consultation_bookings table

  ## Overview
  This migration creates a table to store consultation booking requests from website visitors.
  
  ## New Tables
  
  ### `consultation_bookings`
  Stores all consultation booking requests submitted through the website contact form.
  
  **Columns:**
  - `id` (uuid, primary key) - Unique identifier for each booking, automatically generated
  - `full_name` (text, required) - Full name of the client requesting consultation
  - `email` (text, required) - Email address for communication
  - `phone` (text, required) - Contact phone number
  - `company_name` (text, optional) - Company/organization name if applicable
  - `message` (text, required) - Detailed message or consultation request
  - `preferred_date` (date, optional) - Preferred date for consultation
  - `preferred_time` (text, optional) - Preferred time slot for consultation
  - `status` (text, default 'pending') - Booking status: 'pending', 'contacted', 'scheduled', 'completed', 'cancelled'
  - `created_at` (timestamptz) - Timestamp when booking was created
  - `updated_at` (timestamptz) - Timestamp when booking was last updated
  
  ## Security
  
  ### Row Level Security (RLS)
  - **Enabled**: Yes - Table is locked down by default
  - **Public Insert Policy**: Allows anyone to submit booking requests (required for public form)
  - **Admin Read Policy**: Only authenticated users can view bookings (admin access)
  - **Admin Update Policy**: Only authenticated users can update booking status
  
  ## Notes
  - Public users can only INSERT bookings (submit forms)
  - Only authenticated admin users can SELECT and UPDATE bookings
  - Email validation should be handled at the application level
  - Status field uses text instead of enum for flexibility
*/

-- Create consultation_bookings table
CREATE TABLE IF NOT EXISTS consultation_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company_name text,
  message text NOT NULL,
  preferred_date date,
  preferred_time text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE consultation_bookings ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert bookings (public form submissions)
CREATE POLICY "Anyone can submit consultation bookings"
  ON consultation_bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Only authenticated users can view bookings
CREATE POLICY "Authenticated users can view all bookings"
  ON consultation_bookings
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Only authenticated users can update bookings
CREATE POLICY "Authenticated users can update bookings"
  ON consultation_bookings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_consultation_bookings_email 
  ON consultation_bookings(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_consultation_bookings_created_at 
  ON consultation_bookings(created_at DESC);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_consultation_bookings_status 
  ON consultation_bookings(status);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_consultation_bookings_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to call the function before update
CREATE TRIGGER consultation_bookings_updated_at
  BEFORE UPDATE ON consultation_bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_consultation_bookings_updated_at();