/*
  # Fix consultation requests permissions

  1. Changes
    - Drop existing table and recreate with proper structure
    - Enable RLS with correct policies
    - Grant proper schema and table permissions
    
  2. Security
    - Enable schema usage for all roles
    - Allow public inserts without authentication
    - Grant full permissions to all roles
*/

-- First, grant schema permissions
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT USAGE ON SCHEMA public TO service_role;

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
TO public;

CREATE POLICY "Enable authenticated reads"
ON consultation_requests
FOR SELECT
TO authenticated
USING (true);

-- Grant table permissions
GRANT ALL ON consultation_requests TO postgres;
GRANT ALL ON consultation_requests TO service_role;
GRANT ALL ON consultation_requests TO anon;
GRANT ALL ON consultation_requests TO authenticated;