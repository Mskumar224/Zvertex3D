const { createClient } = require('@supabase/supabase-js');

const url = (process.env.SUPABASE_URL || '').trim();
<<<<<<< HEAD
const serverKey = (process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || '').trim();

if (!url || !serverKey) {
  throw new Error('Missing SUPABASE_URL or server-only Supabase key. Set SUPABASE_URL and SUPABASE_SECRET_KEY (preferred) in Render Environment Variables.');
}

const supabase = createClient(url, serverKey, {
=======
const serviceKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY || '').trim();

if (!url || !serviceKey) {
  throw new Error('SUPABASE_URL and a server-only Supabase key are required. Add them to server/.env or Render environment variables.');
}

const supabase = createClient(url, serviceKey, {
>>>>>>> 198dc3267cce374489a058aa74e737c1402dcabb
  auth: { autoRefreshToken: false, persistSession: false }
});

async function connectDB() {
  const { error } = await supabase.from('users').select('id').limit(1);
  if (error) throw new Error(`Supabase connection failed: ${error.message}`);
  console.log('Supabase PostgreSQL connected');
  return supabase;
}

<<<<<<< HEAD
async function closeDB() {}
=======
async function closeDB() {
  // supabase-js uses HTTP connections and does not require an explicit close.
}
>>>>>>> 198dc3267cce374489a058aa74e737c1402dcabb

module.exports = { supabase, connectDB, closeDB };
