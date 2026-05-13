-- Animation Bahrain Lead Capture Table
CREATE TABLE animation_bahrain_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  company text,
  service text,
  budget text,
  message text not null,
  source text default 'animationbahrain.com',
  status text default 'new',
  notes text
);

-- Enable RLS
ALTER TABLE animation_bahrain_leads ENABLE ROW LEVEL SECURITY;

-- Service role has full access (API uses service role key)
-- Anon role: no access (good)

-- Indexes for admin queries
CREATE INDEX idx_animation_bahrain_leads_created_at
  ON animation_bahrain_leads(created_at DESC);

CREATE INDEX idx_animation_bahrain_leads_status
  ON animation_bahrain_leads(status);
