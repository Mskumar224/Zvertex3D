const { Buffer } = require('buffer');
function normal(a,b,c){const ux=b[0]-a[0],uy=b[1]-a[1],uz=b[2]-a[2],vx=c[0]-a[0],vy=c[1]-a[1],vz=c[2]-a[2];let nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;const l=Math.hypot(nx,ny,nz)||1;return [nx/l,ny/l,nz/l];}
function heightmapToStl(data,widthPx,heightPx,widthMm,depthMm,reliefMm){
  const maxDim=120; const scale=Math.max(widthPx,heightPx)/maxDim; const w=Math.max(20,Math.min(maxDim,Math.round(widthPx/scale))); const h=Math.max(20,Math.min(maxDim,Math.round(heightPx/scale)));
  const sx=widthMm/(w-1),sy=depthMm/(h-1),base=1.6,top=Math.max(.5,Number(reliefMm)); const heights=new Float32Array(w*h);
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){const ox=Math.floor(x*(widthPx-1)/(w-1)),oy=Math.floor(y*(heightPx-1)/(h-1)),i=(oy*widthPx+ox)*4;const r=data[i]||0,g=data[i+1]||r,b=data[i+2]||r,gray=.299*r+.587*g+.114*b;heights[y*w+x]=base+((255-gray)/255)*top;}
  const tris=[];const z=(x,y)=>heights[y*w+x];
  for(let y=0;y<h-1;y++)for(let x=0;x<w-1;x++){const p00=[x*sx,y*sy,z(x,y)],p10=[(x+1)*sx,y*sy,z(x+1,y)],p01=[x*sx,(y+1)*sy,z(x,y+1)],p11=[(x+1)*sx,(y+1)*sy,z(x+1,y+1)];tris.push([p00,p10,p11],[p00,p11,p01]);}
  const b00=[0,0,0],b10=[widthMm,0,0],b01=[0,depthMm,0],b11=[widthMm,depthMm,0];tris.push([b00,b11,b10],[b00,b01,b11]);
  for(let x=0;x<w-1;x++){const p0=[x*sx,0,z(x,0)],p1=[(x+1)*sx,0,z(x+1,0)],q0=[x*sx,0,0],q1=[(x+1)*sx,0,0];tris.push([p0,q1,p1],[p0,q0,q1]);const a0=[x*sx,depthMm,z(x,h-1)],a1=[(x+1)*sx,depthMm,z(x+1,h-1)],c0=[x*sx,depthMm,0],c1=[(x+1)*sx,depthMm,0];tris.push([a0,a1,c1],[a0,c1,c0]);}
  for(let y=0;y<h-1;y++){const p0=[0,y*sy,z(0,y)],p1=[0,(y+1)*sy,z(0,y+1)],q0=[0,y*sy,0],q1=[0,(y+1)*sy,0];tris.push([p0,p1,q1],[p0,q1,q0]);const a0=[widthMm,y*sy,z(w-1,y)],a1=[widthMm,(y+1)*sy,z(w-1,y+1)],c0=[widthMm,y*sy,0],c1=[widthMm,(y+1)*sy,0];tris.push([a0,c1,a1],[a0,c0,c1]);}
  const buf=Buffer.alloc(84+tris.length*50);Buffer.from('Zvertex3D binary STL').copy(buf,0,0,20);buf.writeUInt32LE(tris.length,80);let off=84;for(const [a,b,c] of tris){const n=normal(a,b,c);for(const v of [...n,...a,...b,...c]){buf.writeFloatLE(v,off);off+=4;}buf.writeUInt16LE(0,off);off+=2;}return {stl:buf,vertices:tris.length*3};
}
module.exports={heightmapToStl};
