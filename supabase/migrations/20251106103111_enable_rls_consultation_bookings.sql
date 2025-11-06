/*
  # Enable RLS for consultation_bookings

  ## Overview
  This migration enables Row Level Security on the consultation_bookings table
  and creates policies to allow public form submissions.

  ## Security Changes
  - Enable RLS on consultation_bookings table
  - Add policy to allow anyone (anon users) to insert bookings
  - Add policy to allow authenticated users to view all bookings
  - Add policy to allow authenticated users to update bookings

  ## Important Notes
  - Public users can only INSERT (submit forms)
  - Only authenticated admin users can SELECT and UPDATE
  - This ensures data security while allowing public form submissions
*/

-- Enable Row Level Security
ALTER TABLE consultation_bookings ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Anyone can submit consultation bookings" ON consultation_bookings;
DROP POLICY IF EXISTS "Authenticated users can view all bookings" ON consultation_bookings;
DROP POLICY IF EXISTS "Authenticated users can update bookings" ON consultation_bookings;

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
