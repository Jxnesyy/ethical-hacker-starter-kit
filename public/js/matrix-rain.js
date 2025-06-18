const c = document.getElementById('matrix');
const ctx = c.getContext('2d');
c.width = innerWidth; c.height = innerHeight;

const cols = Math.floor(c.width / 20) + 1;
const drops = Array(cols).fill(1);

function draw() {
  ctx.fillStyle = 'rgba(0,0,0,0.05)';
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = '#0f0';
  ctx.font = '20px monospace';

  for(let i = 0; i < drops.length; i++){
    const text = String.fromCharCode(0x30A0 + Math.random() * 96);
    ctx.fillText(text, i*20, drops[i]*20);
    if(drops[i]*20 > c.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}

setInterval(draw, 50);
