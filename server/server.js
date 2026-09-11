<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4ff7eff4da625b0aa81943bb92486aeaeca350f5
require('dotenv').config({ path: require('path').join(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { connectDB, closeDB } = require('./config/db');
const authRoutes = require('./routes/auth');
const vendorRoutes = require('./routes/vendors');
const modelRoutes = require('./routes/models');
const orderRoutes = require('./routes/orders');
const adminRoutes = require('./routes/admin');

const app = express();
app.set('trust proxy', 1);
app.use(helmet());

const defaultAllowedOrigins = [
  'https://zvertex3d.com',
  'https://www.zvertex3d.com'
];
const configuredOrigins = (process.env.CLIENT_URL || '')
  .split(',')
  .map(v => v.trim())
  .filter(Boolean);
const allowedOrigins = [...new Set([...defaultAllowedOrigins, ...configuredOrigins])];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error(`CORS blocked for origin: ${origin}`));
  },
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false,
  optionsSuccessStatus: 204
}));

app.use(express.json({ limit: '1mb' }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 300, standardHeaders: true, legacyHeaders: false }));

let dbReady = false;
app.get('/health', (req, res) => res.status(dbReady ? 200 : 503).json({
  ok: dbReady,
  service: 'zvertex3d-api',
  database: dbReady ? 'supabase-postgresql' : 'disconnected',
  time: new Date().toISOString()
}));

app.use('/api/auth', authRoutes);
app.use('/api/vendors', vendorRoutes);
app.use('/api/models', modelRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Server error.' });
});

const port = Number(process.env.PORT) || 5000;

connectDB()
  .then(() => {
    dbReady = true;
    const server = app.listen(port, '0.0.0.0', () => {
      console.log(`API listening on ${port}`);
      console.log(`Allowed CORS origins: ${allowedOrigins.join(', ')}`);
    });
    const shutdown = async () => {
      server.close(async () => {
        await closeDB();
        process.exit(0);
      });
    };
    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
<<<<<<< HEAD
=======
=======
require('dotenv').config({path:require('path').join(__dirname,'.env')});
const express=require('express'); const cors=require('cors'); const helmet=require('helmet'); const rateLimit=require('express-rate-limit');
const {connectDB,closeDB}=require('./config/db');
const authRoutes=require('./routes/auth'); const vendorRoutes=require('./routes/vendors'); const modelRoutes=require('./routes/models'); const orderRoutes=require('./routes/orders'); const adminRoutes=require('./routes/admin');
const app=express(); app.set('trust proxy',1); app.use(helmet());
app.use(cors({origin:(origin,cb)=>{const allowed=(process.env.CLIENT_URL||'').split(',').map(x=>x.trim()).filter(Boolean);if(!origin||allowed.length===0||allowed.includes(origin))return cb(null,true);cb(new Error('CORS blocked'));}}));
app.use(express.json({limit:'1mb'})); app.use(rateLimit({windowMs:15*60*1000,max:300,standardHeaders:true,legacyHeaders:false}));
let dbReady=false;
app.get('/health',(req,res)=>res.status(dbReady?200:503).json({ok:dbReady,service:'zvertex3d-api',database:dbReady?'supabase-postgresql':'disconnected',time:new Date().toISOString()}));
app.use('/api/auth',authRoutes); app.use('/api/vendors',vendorRoutes); app.use('/api/models',modelRoutes); app.use('/api/orders',orderRoutes); app.use('/api/admin',adminRoutes);
app.use((err,req,res,next)=>{console.error(err);res.status(err.status||500).json({message:err.message||'Server error.'});});
const port=process.env.PORT||5000;
connectDB().then(()=>{dbReady=true;const server=app.listen(port,'0.0.0.0',()=>console.log(`API listening on ${port}`));const shutdown=async()=>{server.close(async()=>{await closeDB();process.exit(0);});};process.on('SIGTERM',shutdown);process.on('SIGINT',shutdown);}).catch(err=>{console.error(err);process.exit(1);});
>>>>>>> 198dc3267cce374489a058aa74e737c1402dcabb
>>>>>>> 4ff7eff4da625b0aa81943bb92486aeaeca350f5
