/*
  # Create consultation requests table with proper RLS policies

  1. New Tables
    - `consultation_requests`
      - `id` (uuid, primary key)
      - `name` (text)
      - `company` (text)
      - `employees` (text)
      - `phone` (text)
      - `email` (text)
      - `requirements` (text)
      - `created_at` (timestamptz)
      - `status` (text)

  2. Security
    - Enable RLS on `consultation_requests` table
    - Add policy for public inserts
    - Add policy for authenticated users to view requests
*/

-- Create consultation requests table
CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  employees text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  requirements text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Enable RLS
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can create consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Authenticated users can view consultation requests" ON consultation_requests;

-- Create policies with proper security checks
CREATE POLICY "Anyone can create consultation requests"
  ON consultation_requests
  FOR INSERT
  TO public
  WITH CHECK (
    name IS NOT NULL AND
    company IS NOT NULL AND
    employees IS NOT NULL AND
    phone IS NOT NULL AND
    email IS NOT NULL AND
    requirements IS NOT NULL
  );

CREATE POLICY "Authenticated users can view consultation requests"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Grant necessary permissions
GRANT INSERT ON consultation_requests TO anon;
GRANT INSERT ON consultation_requests TO authenticated;
GRANT SELECT ON consultation_requests TO authenticated;