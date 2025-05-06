/*
  # Fix RLS policies for consultation requests

  1. Changes
    - Drop existing table and recreate with proper RLS policies
    - Enable public inserts without authentication
    - Maintain authenticated user access for viewing requests
    
  2. Security
    - Allow anyone to create consultation requests
    - Only authenticated users can view requests
    - Basic validation on required fields
*/

-- Drop existing table and policies
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

-- Create policy for public inserts without authentication
CREATE POLICY "Enable insert for anonymous users" 
ON consultation_requests
FOR INSERT 
TO public
WITH CHECK (true);

-- Create policy for authenticated users to view requests
CREATE POLICY "Enable read access for authenticated users" 
ON consultation_requests
FOR SELECT
TO authenticated
USING (true);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT INSERT ON consultation_requests TO anon;
GRANT INSERT ON consultation_requests TO authenticated;
GRANT SELECT ON consultation_requests TO authenticated;