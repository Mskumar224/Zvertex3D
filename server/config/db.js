const { createClient } = require('@supabase/supabase-js');

const url = (process.env.SUPABASE_URL || '').trim();
const serviceKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY || '').trim();

if (!url || !serviceKey) {
  throw new Error('SUPABASE_URL and a server-only Supabase key are required. Add them to server/.env or Render environment variables.');
}

const supabase = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false }
});

async function connectDB() {
  const { error } = await supabase.from('users').select('id').limit(1);
  if (error) throw new Error(`Supabase connection failed: ${error.message}`);
  console.log('Supabase PostgreSQL connected');
  return supabase;
}

async function closeDB() {
  // supabase-js uses HTTP connections and does not require an explicit close.
}

module.exports = { supabase, connectDB, closeDB };
