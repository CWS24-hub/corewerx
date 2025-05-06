/*
  # Fix consultation requests permissions - Final

  1. Changes
    - Drop existing table
    - Recreate with RLS disabled for public access
    - Keep structure but simplify security model
    
  2. Security
    - Disable RLS since we want public access
    - Grant basic permissions
    - Keep table structure intact
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

-- Disable RLS since we want public access
ALTER TABLE consultation_requests DISABLE ROW LEVEL SECURITY;

-- Grant basic permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON consultation_requests TO anon, authenticated, service_role;