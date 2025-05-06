/*
  # Fix consultation requests table and policies

  1. Changes
    - Drop and recreate table with proper structure
    - Set up correct RLS policies
    - Grant proper permissions
    - Enable public access for inserts
    
  2. Security
    - Allow public inserts without authentication
    - Maintain authenticated user access for viewing
    - Ensure proper schema permissions
*/

-- Drop existing table and policies
DROP TABLE IF EXISTS consultation_requests CASCADE;

-- Recreate the table
CREATE TABLE consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  employees text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  requirements text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'::text
);

-- Enable RLS
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Enable public inserts"
ON consultation_requests
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Enable authenticated reads"
ON consultation_requests
FOR SELECT
TO authenticated
USING (true);

-- Grant schema permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;

-- Grant table permissions
GRANT ALL ON consultation_requests TO postgres;
GRANT INSERT ON consultation_requests TO public;
GRANT SELECT ON consultation_requests TO authenticated;