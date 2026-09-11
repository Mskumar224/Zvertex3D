const router=require('express').Router();
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
const bcrypt=require('bcryptjs'); const jwt=require('jsonwebtoken'); const crypto=require('crypto');
const {supabase}=require('../config/db'); const {rowToUser,rowToVendor}=require('../lib/data'); const {auth}=require('../middleware/auth');
const {sendVerificationEmail,sendAdminNotification}=require('../utils/mailer');
function slugify(s){return s.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,60)}
function tokenFor(user){return jwt.sign({id:user.id,role:user.role},process.env.JWT_SECRET,{expiresIn:'7d'})}
function makeVerifyToken(){const raw=crypto.randomBytes(32).toString('hex');return {raw,hash:crypto.createHash('sha256').update(raw).digest('hex')}}
async function createUser({name,email,password,role='customer',vendorId=null}){
  const passwordHash=await bcrypt.hash(password,12); const {raw,hash}=makeVerifyToken();
  const {data,error}=await supabase.from('users').insert({name,email:email.toLowerCase(),password_hash:passwordHash,role,vendor_id:vendorId,email_verified:false,verification_token_hash:hash,verification_expires_at:new Date(Date.now()+86400000).toISOString()}).select('*').single();
  if(error) throw error; const user=rowToUser(data); await sendVerificationEmail(user,raw); return user;
}
router.post('/signup',async(req,res)=>{try{const{name,email,password}=req.body;if(!name||!email||!password)return res.status(400).json({message:'Name, email and password are required.'});if(password.length<8)return res.status(400).json({message:'Password must be at least 8 characters.'});const normalized=email.toLowerCase();const existing=await supabase.from('users').select('id').eq('email',normalized).maybeSingle();if(existing.error)throw existing.error;if(existing.data)return res.status(409).json({message:'An account with this email already exists.'});await createUser({name,email:normalized,password});res.status(201).json({message:'Account created. Check your email to verify it.'});}catch(e){console.error(e);res.status(500).json({message:'Could not create account.',error:e.message})}});
router.get('/verify-email/:token',async(req,res)=>{try{const hash=crypto.createHash('sha256').update(req.params.token).digest('hex');const {data,error}=await supabase.from('users').select('id').eq('verification_token_hash',hash).gt('verification_expires_at',new Date().toISOString()).maybeSingle();if(error)throw error;if(!data)return res.status(400).json({message:'This verification link is invalid or expired.'});const updated=await supabase.from('users').update({email_verified:true,verification_token_hash:null,verification_expires_at:null}).eq('id',data.id);if(updated.error)throw updated.error;res.json({message:'Your email is verified. You can now sign in.'});}catch(e){res.status(500).json({message:'Email verification failed.'})}});
router.post('/vendor/register',async(req,res)=>{try{const{name,email,password,storeName,phone,city,tagline,description}=req.body;if(!name||!email||!password||!storeName)return res.status(400).json({message:'Name, email, password and store name are required.'});if(password.length<8)return res.status(400).json({message:'Password must be at least 8 characters.'});const normalized=email.toLowerCase();const existing=await supabase.from('users').select('id').eq('email',normalized).maybeSingle();if(existing.error)throw existing.error;if(existing.data)return res.status(409).json({message:'An account with this email already exists.'});let slug=slugify(storeName),n=1;while(true){const q=await supabase.from('vendors').select('id').eq('slug',slug).maybeSingle();if(q.error)throw q.error;if(!q.data)break;slug=`${slugify(storeName)}-${n++}`;}
  const v=await supabase.from('vendors').insert({name,email:normalized,phone,city,store_name:storeName,slug,tagline,description}).select('*').single();if(v.error)throw v.error;
  try{await createUser({name,email:normalized,password,role:'vendor',vendorId:v.data.id});}catch(e){await supabase.from('vendors').delete().eq('id',v.data.id);throw e;}
  await sendAdminNotification('New Zvertex3D vendor application',`<div style="font-family:Arial"><h2>New Zvertex3D vendor application</h2><p><strong>${storeName}</strong> submitted by ${name} (${normalized}).</p><p>Status: pending admin approval.</p></div>`,`New vendor application: ${storeName} / ${normalized}`);
  res.status(201).json({message:'Vendor application submitted. Verify your email, then wait for Zvertex3D admin approval.',slug});
}catch(e){console.error(e);res.status(500).json({message:'Could not register vendor.',error:e.message})}});
router.post('/login',async(req,res)=>{try{const{email,password}=req.body;const q=await supabase.from('users').select('*').eq('email',(email||'').toLowerCase()).maybeSingle();if(q.error)throw q.error;const user=q.data;if(!user||!(await bcrypt.compare(password||'',user.password_hash)))return res.status(401).json({message:'Invalid email or password.'});if(user.status!=='active')return res.status(403).json({message:'This account is disabled.'});if(user.role!=='admin'&&!user.email_verified)return res.status(403).json({message:'Please verify your email before signing in.'});let vendor=null;if(user.vendor_id){const v=await supabase.from('vendors').select('*').eq('id',user.vendor_id).maybeSingle();if(v.error)throw v.error;vendor=rowToVendor(v.data);if(user.role==='vendor'&&(!vendor||vendor.status!=='approved'))return res.status(403).json({message:'Your vendor account is awaiting Zvertex3D admin approval.'});}
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
const bcrypt=require('bcryptjs'); const jwt=require('jsonwebtoken');
const {supabase}=require('../config/db'); const {rowToUser,rowToVendor}=require('../lib/data'); const {auth}=require('../middleware/auth');
const {sendSignupConfirmation,sendVendorApplicationConfirmation,sendAdminNotification}=require('../utils/mailer');
function slugify(s){return s.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,60)}
function tokenFor(user){return jwt.sign({id:user.id,role:user.role},process.env.JWT_SECRET,{expiresIn:'7d'})}
async function createUser({name,email,password,role='customer',vendorId=null}){
  const passwordHash=await bcrypt.hash(password,12);
  const {data,error}=await supabase.from('users').insert({name,email:email.toLowerCase(),password_hash:passwordHash,role,vendor_id:vendorId,status:'active',email_verified:true}).select('*').single();
  if(error) throw error;
  return rowToUser(data);
}
router.post('/signup',async(req,res)=>{try{const{name,email,password}=req.body;if(!name||!email||!password)return res.status(400).json({message:'Name, email and password are required.'});if(password.length<8)return res.status(400).json({message:'Password must be at least 8 characters.'});const normalized=email.toLowerCase().trim();const existing=await supabase.from('users').select('id').eq('email',normalized).maybeSingle();if(existing.error)throw existing.error;if(existing.data)return res.status(409).json({message:'An account with this email already exists.'});const user=await createUser({name,email:normalized,password});await sendSignupConfirmation(user);res.status(201).json({message:'Account created. A confirmation email has been sent to your inbox.'});}catch(e){console.error(e);res.status(500).json({message:'Could not create account.',error:e.message})}});
router.post('/vendor/register',async(req,res)=>{try{const{name,email,password,storeName,phone,city,tagline,description}=req.body;if(!name||!email||!password||!storeName)return res.status(400).json({message:'Name, email, password and store name are required.'});if(password.length<8)return res.status(400).json({message:'Password must be at least 8 characters.'});const normalized=email.toLowerCase();const existing=await supabase.from('users').select('id').eq('email',normalized).maybeSingle();if(existing.error)throw existing.error;if(existing.data)return res.status(409).json({message:'An account with this email already exists.'});let slug=slugify(storeName),n=1;while(true){const q=await supabase.from('vendors').select('id').eq('slug',slug).maybeSingle();if(q.error)throw q.error;if(!q.data)break;slug=`${slugify(storeName)}-${n++}`;}
  const v=await supabase.from('vendors').insert({name,email:normalized,phone,city,store_name:storeName,slug,tagline,description}).select('*').single();if(v.error)throw v.error;
  try{await createUser({name,email:normalized,password,role:'vendor',vendorId:v.data.id});}catch(e){await supabase.from('vendors').delete().eq('id',v.data.id);throw e;}
  await sendVendorApplicationConfirmation({name,email:normalized,storeName});
  await sendAdminNotification('New Zvertex3D vendor application',`<div style="font-family:Arial"><h2>New Zvertex3D vendor application</h2><p><strong>${storeName}</strong> submitted by ${name} (${normalized}).</p><p>Status: pending admin approval.</p></div>`,`New vendor application: ${storeName} / ${normalized}`);
  res.status(201).json({message:'Vendor application submitted. A confirmation email has been sent. Your store will appear in the marketplace after admin approval.',slug});
}catch(e){console.error(e);res.status(500).json({message:'Could not register vendor.',error:e.message})}});
router.post('/login',async(req,res)=>{try{const{email,password}=req.body;const q=await supabase.from('users').select('*').eq('email',(email||'').toLowerCase()).maybeSingle();if(q.error)throw q.error;const user=q.data;if(!user||!(await bcrypt.compare(password||'',user.password_hash)))return res.status(401).json({message:'Invalid email or password.'});if(user.status!=='active')return res.status(403).json({message:'This account is disabled.'});let vendor=null;if(user.vendor_id){const v=await supabase.from('vendors').select('*').eq('id',user.vendor_id).maybeSingle();if(v.error)throw v.error;vendor=rowToVendor(v.data);if(user.role==='vendor'&&(!vendor||vendor.status!=='approved'))return res.status(403).json({message:'Your vendor account is awaiting Zvertex3D admin approval.'});}
>>>>>>> 198dc3267cce374489a058aa74e737c1402dcabb
>>>>>>> 4ff7eff4da625b0aa81943bb92486aeaeca350f5
>>>>>>> bfa6eea49934b7beb4ebc42a1ae246db25ad53c1
>>>>>>> a6a3db8e95390c1e7f8a89f32fc719b550f6b66b
>>>>>>> 6749823fb1f85adf6e3b7e3523847c8ec5eea842
>>>>>>> 5fe4c532631c49952bf7e16bbac69a863f154676
res.json({token:tokenFor(user),user:rowToUser(user),vendor});}catch(e){console.error(e);res.status(500).json({message:'Login failed.',error:e.message})}});
router.get('/me',auth,async(req,res)=>{try{let vendor=null;if(req.user.vendorId){const q=await supabase.from('vendors').select('*').eq('id',req.user.vendorId).maybeSingle();if(q.error)throw q.error;vendor=rowToVendor(q.data);}res.json({user:req.user,vendor});}catch(e){res.status(500).json({message:'Could not load account.'})}});
module.exports=router;
