const jwt = require('jsonwebtoken');
const { supabase } = require('../config/db');
const { rowToUser } = require('../lib/data');

async function auth(req,res,next){
  try{
    const header=req.headers.authorization||'';
    const token=header.startsWith('Bearer ')?header.slice(7):null;
    if(!token) return res.status(401).json({message:'Authentication required.'});
    const payload=jwt.verify(token,process.env.JWT_SECRET);
    const {data,error}=await supabase.from('users').select('id,name,email,role,vendor_id,status,email_verified,created_at,updated_at').eq('id',payload.id).maybeSingle();
    if(error) throw error;
    if(!data||data.status!=='active') return res.status(401).json({message:'Account unavailable.'});
    req.user=rowToUser(data); next();
  }catch(e){ res.status(401).json({message:'Invalid or expired session.'}); }
}
function requireRole(...roles){return (req,res,next)=>{if(!req.user||!roles.includes(req.user.role))return res.status(403).json({message:'You do not have permission for this action.'});next();};}
module.exports={auth,requireRole};
