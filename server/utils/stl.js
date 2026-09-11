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
function triangle(a, b, c) {
  const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
  const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
  let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
  const len = Math.hypot(nx, ny, nz) || 1;
  nx /= len; ny /= len; nz /= len;
  return `facet normal ${nx} ${ny} ${nz}\n outer loop\n  vertex ${a[0]} ${a[1]} ${a[2]}\n  vertex ${b[0]} ${b[1]} ${b[2]}\n  vertex ${c[0]} ${c[1]} ${c[2]}\n endloop\nendfacet\n`;
}

function heightmapToStl(data, widthPx, heightPx, widthMm, depthMm, reliefMm) {
  const maxDim = 180;
  const scale = Math.max(widthPx, heightPx) / maxDim;
  const w = Math.max(20, Math.min(180, Math.round(widthPx / scale)));
  const h = Math.max(20, Math.min(180, Math.round(heightPx / scale)));
  const sx = widthMm / (w - 1);
  const sy = depthMm / (h - 1);
  const top = Math.max(0.5, Number(reliefMm));
  const base = 1.6;
  const heights = new Float32Array(w * h);

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const ox = Math.floor(x * (widthPx - 1) / (w - 1));
      const oy = Math.floor(y * (heightPx - 1) / (h - 1));
      const gray = data[(oy * widthPx + ox) * 4];
      heights[y * w + x] = base + ((255 - gray) / 255) * top;
    }
  }

  let stl = "solid zvertex3d\n";
  const z = (x,y) => heights[y*w+x];
  for (let y=0;y<h-1;y++) for(let x=0;x<w-1;x++){
    const p00=[x*sx,y*sy,z(x,y)], p10=[(x+1)*sx,y*sy,z(x+1,y)], p01=[x*sx,(y+1)*sy,z(x,y+1)], p11=[(x+1)*sx,(y+1)*sy,z(x+1,y+1)];
    stl += triangle(p00,p10,p11) + triangle(p00,p11,p01);
  }
  // bottom + four side walls
  const b00=[0,0,0], b10=[widthMm,0,0], b01=[0,depthMm,0], b11=[widthMm,depthMm,0];
  stl += triangle(b00,b11,b10) + triangle(b00,b01,b11);
  for(let x=0;x<w-1;x++){
    const p0=[x*sx,0,z(x,0)],p1=[(x+1)*sx,0,z(x+1,0)],q0=[x*sx,0,0],q1=[(x+1)*sx,0,0];
    stl += triangle(p0,q1,p1)+triangle(p0,q0,q1);
    const a0=[x*sx,depthMm,z(x,h-1)],a1=[(x+1)*sx,depthMm,z(x+1,h-1)],c0=[x*sx,depthMm,0],c1=[(x+1)*sx,depthMm,0];
    stl += triangle(a0,a1,c1)+triangle(a0,c1,c0);
  }
  for(let y=0;y<h-1;y++){
    const p0=[0,y*sy,z(0,y)],p1=[0,(y+1)*sy,z(0,y+1)],q0=[0,y*sy,0],q1=[0,(y+1)*sy,0];
    stl += triangle(p0,p1,q1)+triangle(p0,q1,q0);
    const a0=[widthMm,y*sy,z(w-1,y)],a1=[widthMm,(y+1)*sy,z(w-1,y+1)],c0=[widthMm,y*sy,0],c1=[widthMm,(y+1)*sy,0];
    stl += triangle(a0,c1,a1)+triangle(a0,c0,c1);
  }
  stl += "endsolid zvertex3d\n";
  return { stl, vertices: (w-1)*(h-1)*6 + 12*(w+h-2) };
}

<<<<<<< HEAD
module.exports = { heightmapToStl };
=======
<<<<<<< HEAD
module.exports = { heightmapToStl };
=======
<<<<<<< HEAD
module.exports = { heightmapToStl };
=======
<<<<<<< HEAD
module.exports = { heightmapToStl };
=======
<<<<<<< HEAD
module.exports = { heightmapToStl };
=======
<<<<<<< HEAD
module.exports = { heightmapToStl };
=======
<<<<<<< HEAD
module.exports = { heightmapToStl };
=======
module.exports = { heightmapToStl };
=======
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
>>>>>>> 198dc3267cce374489a058aa74e737c1402dcabb
>>>>>>> 4ff7eff4da625b0aa81943bb92486aeaeca350f5
>>>>>>> bfa6eea49934b7beb4ebc42a1ae246db25ad53c1
>>>>>>> a6a3db8e95390c1e7f8a89f32fc719b550f6b66b
>>>>>>> 6749823fb1f85adf6e3b7e3523847c8ec5eea842
>>>>>>> 5fe4c532631c49952bf7e16bbac69a863f154676
>>>>>>> f5f7d408740acf640b490ad955179b89f222a19c
>>>>>>> 0e9e6f07bd68a8be2c5da3b5054c33dec9b12c54
