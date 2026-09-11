const { createClient } = require('@supabase/supabase-js');

const url = (process.env.SUPABASE_URL || '').trim();
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4ff7eff4da625b0aa81943bb92486aeaeca350f5
>>>>>>> bfa6eea49934b7beb4ebc42a1ae246db25ad53c1
>>>>>>> a6a3db8e95390c1e7f8a89f32fc719b550f6b66b
>>>>>>> 6749823fb1f85adf6e3b7e3523847c8ec5eea842
>>>>>>> 5fe4c532631c49952bf7e16bbac69a863f154676
>>>>>>> f5f7d408740acf640b490ad955179b89f222a19c
>>>>>>> 0e9e6f07bd68a8be2c5da3b5054c33dec9b12c54
const serverKey = (process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || '').trim();

if (!url || !serverKey) {
  throw new Error('Missing SUPABASE_URL or server-only Supabase key. Set SUPABASE_URL and SUPABASE_SECRET_KEY (preferred) in Render Environment Variables.');
}

const supabase = createClient(url, serverKey, {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
const serviceKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY || '').trim();

if (!url || !serviceKey) {
  throw new Error('SUPABASE_URL and a server-only Supabase key are required. Add them to server/.env or Render environment variables.');
}

const supabase = createClient(url, serviceKey, {
>>>>>>> 198dc3267cce374489a058aa74e737c1402dcabb
>>>>>>> 4ff7eff4da625b0aa81943bb92486aeaeca350f5
>>>>>>> bfa6eea49934b7beb4ebc42a1ae246db25ad53c1
>>>>>>> a6a3db8e95390c1e7f8a89f32fc719b550f6b66b
>>>>>>> 6749823fb1f85adf6e3b7e3523847c8ec5eea842
>>>>>>> 5fe4c532631c49952bf7e16bbac69a863f154676
>>>>>>> f5f7d408740acf640b490ad955179b89f222a19c
>>>>>>> 0e9e6f07bd68a8be2c5da3b5054c33dec9b12c54
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
<<<<<<< HEAD
async function closeDB() {}
=======
<<<<<<< HEAD
async function closeDB() {}
=======
<<<<<<< HEAD
async function closeDB() {}
=======
<<<<<<< HEAD
async function closeDB() {}
=======
<<<<<<< HEAD
async function closeDB() {}
=======
<<<<<<< HEAD
async function closeDB() {}
=======
<<<<<<< HEAD
async function closeDB() {}
=======
async function closeDB() {
  // supabase-js uses HTTP connections and does not require an explicit close.
}
>>>>>>> 198dc3267cce374489a058aa74e737c1402dcabb
>>>>>>> 4ff7eff4da625b0aa81943bb92486aeaeca350f5
>>>>>>> bfa6eea49934b7beb4ebc42a1ae246db25ad53c1
>>>>>>> a6a3db8e95390c1e7f8a89f32fc719b550f6b66b
>>>>>>> 6749823fb1f85adf6e3b7e3523847c8ec5eea842
>>>>>>> 5fe4c532631c49952bf7e16bbac69a863f154676
>>>>>>> f5f7d408740acf640b490ad955179b89f222a19c
>>>>>>> 0e9e6f07bd68a8be2c5da3b5054c33dec9b12c54

module.exports = { supabase, connectDB, closeDB };
