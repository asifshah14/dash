/*
  # Create initial application tables

  1. New Tables
    - `demo_requests`
      - `id` (uuid, primary key) - Unique identifier for the demo request
      - `name` (text) - Full name of the person requesting the demo
      - `email` (text) - Email address for contact
      - `company` (text) - Company name
      - `job_title` (text) - Job title of the requester
      - `status` (text) - Status of the request (pending, contacted, completed)
      - `created_at` (timestamp) - When the request was created
      - `updated_at` (timestamp) - When the request was last updated

    - `consultation_requests`
      - `id` (uuid, primary key) - Unique identifier for the consultation request
      - `name` (text) - Full name of the person requesting consultation
      - `email` (text) - Email address for contact
      - `company` (text) - Company name
      - `job_title` (text) - Job title of the requester
      - `service_interest` (text) - Type of service interested in
      - `message` (text, optional) - Additional message or details
      - `status` (text) - Status of the request (pending, contacted, completed)
      - `created_at` (timestamp) - When the request was created
      - `updated_at` (timestamp) - When the request was last updated

    - `users`
      - `id` (uuid, primary key) - Unique identifier for the user
      - `username` (text, unique) - Username for authentication
      - `password` (text) - Hashed password
      - `role` (text) - User role (admin)
      - `created_at` (timestamp) - When the user was created

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated admin users
*/

-- Create demo_requests table
CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  job_title text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Create consultation_requests table
CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  job_title text NOT NULL,
  service_interest text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text NOT NULL UNIQUE,
  password text NOT NULL,
  role text NOT NULL DEFAULT 'admin',
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- RLS Policies for demo_requests
CREATE POLICY "Anyone can insert demo requests"
  ON demo_requests FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view demo requests"
  ON demo_requests FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update demo requests"
  ON demo_requests FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for consultation_requests
CREATE POLICY "Anyone can insert consultation requests"
  ON consultation_requests FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view consultation requests"
  ON consultation_requests FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update consultation requests"
  ON consultation_requests FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for users
CREATE POLICY "Authenticated users can view users"
  ON users FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_demo_requests_status ON demo_requests(status);
CREATE INDEX IF NOT EXISTS idx_demo_requests_created_at ON demo_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_consultation_requests_status ON consultation_requests(status);
CREATE INDEX IF NOT EXISTS idx_consultation_requests_created_at ON consultation_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);
