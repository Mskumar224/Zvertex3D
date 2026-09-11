const { createClient } = require('@supabase/supabase-js');

const url = (process.env.SUPABASE_URL || '').trim();
const serverKey = (process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || '').trim();

if (!url || !serverKey) {
  throw new Error('Missing SUPABASE_URL or server-only Supabase key. Set SUPABASE_URL and SUPABASE_SECRET_KEY (preferred) in Render Environment Variables.');
}

const supabase = createClient(url, serverKey, {
  auth: { autoRefreshToken: false, persistSession: false }
});

async function connectDB() {
  const { error } = await supabase.from('users').select('id').limit(1);
  if (error) throw new Error(`Supabase connection failed: ${error.message}`);
  console.log('Supabase PostgreSQL connected');
  return supabase;
}

async function closeDB() {}

module.exports = { supabase, connectDB, closeDB };
