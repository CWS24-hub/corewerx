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
    - Enable RLS on consultation_requests table
    - Add policy for public inserts
    - Add policy for authenticated users to view requests
    - Grant necessary permissions
*/

-- Drop existing table and policies if they exist
DROP TABLE IF EXISTS consultation_requests CASCADE;

-- Create consultation requests table
CREATE TABLE consultation_requests (
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

-- Create insert policy for public access
CREATE POLICY "Allow public to create consultation requests"
  ON consultation_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create select policy for authenticated users
CREATE POLICY "Allow authenticated users to view consultation requests"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Grant necessary permissions
GRANT ALL ON consultation_requests TO postgres;
GRANT INSERT ON consultation_requests TO anon;
GRANT INSERT ON consultation_requests TO authenticated;
GRANT SELECT ON consultation_requests TO authenticated;