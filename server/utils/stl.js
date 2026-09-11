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

module.exports = { heightmapToStl };