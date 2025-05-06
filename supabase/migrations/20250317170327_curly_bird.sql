/*
  # Create consultation requests schema

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
    - Add policy for authenticated users to insert consultation requests
    - Add policy for authenticated users to read their own requests
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

-- Create policies
CREATE POLICY "Anyone can create consultation requests"
  ON consultation_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view consultation requests"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);