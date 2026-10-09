/* ============================================================
   JCOS Studios — interactions
   Vanilla JS. Respects prefers-reduced-motion. No dependencies.
   ============================================================ */
(() => {
  'use strict';
  const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- nav ---------- */
  const nav = $('.nav');
  const onScroll = () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 24);
    const bar = $('.progress');
    if (bar) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const toggle = $('.nav-toggle'), links = $('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? '\u2715' : '\u2630';
    });
    $$('.nav-links a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.textContent = '\u2630';
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  /* ---------- reveal on scroll ---------- */
  const reveals = $$('.reveal');
  if (!('IntersectionObserver' in window) || RM) {
    reveals.forEach(el => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px' });
    reveals.forEach(el => io.observe(el));
  }

  /* ---------- animated counters ---------- */
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const dec = (el.dataset.dec | 0);
    if (RM) { el.textContent = prefix + target.toFixed(dec) + suffix; return; }
    const dur = 1500, t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + (target * eased).toFixed(dec) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const counters = $$('[data-count]');
  if (counters.length) {
    if (!('IntersectionObserver' in window)) counters.forEach(animateCount);
    else {
      const cio = new IntersectionObserver((es) => es.forEach(e => {
        if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
      }), { threshold: 0.2 });
      counters.forEach(el => cio.observe(el));
    }
  }

  /* ---------- card cursor spotlight ---------- */
  if (!RM && window.matchMedia('(hover:hover)').matches) {
    $$('.card').forEach(card => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

  /* ---------- hero: particle constellation ---------- */
  const canvas = $('#bg-canvas');
  if (canvas && !RM) {
    const ctx = canvas.getContext('2d');
    let w, h, dpr, pts = [], raf = null, mouse = { x: -9e9, y: -9e9 };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const density = Math.min(Math.round((w * h) / 15000), 110);
      pts = Array.from({ length: density }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .28, vy: (Math.random() - .5) * .28,
        r: Math.random() * 1.5 + .7
      }));
    };

    const COLORS = ['110,231,255', '139,92,246', '244,114,182'];
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        // mouse repulsion
        const mdx = p.x - mouse.x, mdy = p.y - mouse.y;
        const md2 = mdx * mdx + mdy * mdy;
        if (md2 < 16000 && md2 > 0.01) {
          const f = (1 - md2 / 16000) * 0.9, d = Math.sqrt(md2);
          p.x += (mdx / d) * f; p.y += (mdy / d) * f;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + COLORS[i % 3] + ',.72)';
        ctx.fill();
        // links
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d2 = dx * dx + dy * dy;
          if (d2 < 15000) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = 'rgba(130,180,255,' + (0.16 * (1 - d2 / 15000)).toFixed(3) + ')';
            ctx.lineWidth = 0.7; ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    window.addEventListener('pointermove', (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    }, { passive: true });
    window.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9e9; });
    window.addEventListener('resize', resize);
    resize(); draw();

    // pause when hero is off-screen (battery/CPU)
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((es) => es.forEach(e => {
        if (e.isIntersecting) { if (!raf) draw(); }
        else if (raf) { cancelAnimationFrame(raf); raf = null; }
      }), { threshold: 0 }).observe(canvas);
    }
  }

  /* ---------- showcase tile canvases (generative, per-type) ---------- */
  const tiles = $$('canvas[data-viz]');
  tiles.forEach(cv => {
    const ctx = cv.getContext('2d');
    const kind = cv.dataset.viz;
    let t = 0, raf = null, running = false;
    const fit = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = cv.clientWidth * dpr; cv.height = cv.clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const W = () => cv.clientWidth, H = () => cv.clientHeight;

    const scenes = {
      // rotating wireframe cube — "game development"
      cube() {
        const cx = W() / 2, cy = H() / 2, s = Math.min(W(), H()) * 0.23;
        const V = [[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]];
        const E = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];
        const a = t * 0.0075, b = t * 0.0052;
        const proj = V.map(([x,y,z]) => {
          let X = x*Math.cos(a) - z*Math.sin(a), Z = x*Math.sin(a) + z*Math.cos(a);
          let Y = y*Math.cos(b) - Z*Math.sin(b); Z = y*Math.sin(b) + Z*Math.cos(b);
          const k = 2.6 / (2.6 + Z);
          return [cx + X*s*k, cy + Y*s*k, k];
        });
        ctx.lineWidth = 1.5;
        E.forEach(([i,j]) => {
          const g = ctx.createLinearGradient(proj[i][0],proj[i][1],proj[j][0],proj[j][1]);
          g.addColorStop(0,'rgba(110,231,255,.95)'); g.addColorStop(1,'rgba(139,92,246,.95)');
          ctx.strokeStyle = g; ctx.beginPath();
          ctx.moveTo(proj[i][0],proj[i][1]); ctx.lineTo(proj[j][0],proj[j][1]); ctx.stroke();
        });
        proj.forEach(([x,y,k]) => {
          ctx.beginPath(); ctx.arc(x,y,2.6*k,0,Math.PI*2);
          ctx.fillStyle = 'rgba(244,114,182,.95)'; ctx.fill();
        });
      },
      // audio-style equalizer — "video / audio content"
      bars() {
        const n = 34, gap = 3, bw = (W() - gap*(n-1)) / n;
        for (let i = 0; i < n; i++) {
          const v = (Math.sin(t*0.03 + i*0.42) * 0.5 + 0.5) *
                    (Math.sin(t*0.011 + i*0.17) * 0.35 + 0.65);
          const bh = Math.max(4, v * H() * 0.74);
          const g = ctx.createLinearGradient(0, H()-bh, 0, H());
          g.addColorStop(0, 'rgba(244,114,182,.95)');
          g.addColorStop(.5,'rgba(139,92,246,.9)');
          g.addColorStop(1, 'rgba(110,231,255,.75)');
          ctx.fillStyle = g;
          const x = i*(bw+gap), y = H()*0.92 - bh;
          ctx.beginPath();
          if (ctx.roundRect) { ctx.roundRect(x, y, bw, bh, 2.5); ctx.fill(); }
          else ctx.fillRect(x, y, bw, bh);
        }
      },
      // growth curve + bars — "marketing / revenue"
      growth() {
        const pad = W()*0.1, n = 11;
        ctx.strokeStyle = 'rgba(255,255,255,.07)'; ctx.lineWidth = 1;
        for (let i=1;i<4;i++){const y=H()*i/4;ctx.beginPath();ctx.moveTo(pad,y);ctx.lineTo(W()-pad,y);ctx.stroke();}
        const pts = [];
        for (let i=0;i<n;i++){
          const p = i/(n-1);
          const wobble = Math.sin(t*0.018 + i*0.6)*0.05;
          pts.push([pad + p*(W()-pad*2), H()*0.86 - (Math.pow(p,1.7)*0.68 + wobble)*H()*0.78]);
        }
        const area = ctx.createLinearGradient(0,0,0,H());
        area.addColorStop(0,'rgba(52,211,153,.4)'); area.addColorStop(1,'rgba(52,211,153,0)');
        ctx.beginPath(); ctx.moveTo(pts[0][0], H()*0.9);
        pts.forEach(([x,y]) => ctx.lineTo(x,y));
        ctx.lineTo(pts[n-1][0], H()*0.9); ctx.closePath();
        ctx.fillStyle = area; ctx.fill();
        ctx.beginPath(); pts.forEach(([x,y],i)=> i?ctx.lineTo(x,y):ctx.moveTo(x,y));
        const lg = ctx.createLinearGradient(pad,0,W()-pad,0);
        lg.addColorStop(0,'rgba(110,231,255,1)'); lg.addColorStop(1,'rgba(52,211,153,1)');
        ctx.strokeStyle = lg; ctx.lineWidth = 2.4; ctx.stroke();
        const head = pts[n-1];
        ctx.beginPath(); ctx.arc(head[0],head[1],4.4,0,Math.PI*2);
        ctx.fillStyle='#34d399'; ctx.fill();
        ctx.beginPath(); ctx.arc(head[0],head[1],4.4+((t*0.05)%14),0,Math.PI*2);
        ctx.strokeStyle='rgba(52,211,153,'+Math.max(0,.6-((t*0.05)%14)/22)+')';
        ctx.lineWidth=2; ctx.stroke();
      },
      // social reach web — "social media platforms"
      web() {
        const cx=W()/2, cy=H()/2, R=Math.min(W(),H())*0.33, n=9;
        for (let i=0;i<n;i++){
          const a = (i/n)*Math.PI*2 + t*0.004;
          const rr = R * (0.72 + 0.28*Math.sin(t*0.02 + i));
          const x = cx+Math.cos(a)*rr, y = cy+Math.sin(a)*rr;
          ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(x,y);
          ctx.strokeStyle='rgba(139,92,246,.42)'; ctx.lineWidth=1.1; ctx.stroke();
          const pr = 3 + 2.4*Math.abs(Math.sin(t*0.025+i));
          ctx.beginPath(); ctx.arc(x,y,pr,0,Math.PI*2);
          ctx.fillStyle = ['rgba(110,231,255,.95)','rgba(244,114,182,.95)','rgba(251,191,36,.95)'][i%3];
          ctx.fill();
        }
        ctx.beginPath(); ctx.arc(cx,cy,8.5,0,Math.PI*2);
        const cg=ctx.createRadialGradient(cx,cy,0,cx,cy,12);
        cg.addColorStop(0,'#fff'); cg.addColorStop(1,'rgba(110,231,255,.25)');
        ctx.fillStyle=cg; ctx.fill();
      },
      // flowing pipeline nodes — "automation / AI systems"
      flow() {
        const rows=3, cols=4, mx=W()*0.13, my=H()*0.22;
        const gx=(W()-mx*2)/(cols-1), gy=(H()-my*2)/(rows-1);
        for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){
          const x=mx+c*gx, y=my+r*gy;
          if(c<cols-1){
            ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(x+gx,my+r*gy);
            ctx.strokeStyle='rgba(255,255,255,.1)'; ctx.lineWidth=1; ctx.stroke();
            const prog=((t*0.009)+(r*0.33)+(c*0.17))%1;
            const px=x+gx*prog;
            ctx.beginPath(); ctx.arc(px,y,2.6,0,Math.PI*2);
            ctx.fillStyle='rgba(110,231,255,.95)'; ctx.fill();
          }
          const pulse=0.5+0.5*Math.sin(t*0.03+r+c);
          ctx.beginPath(); ctx.arc(x,y,5+pulse*1.6,0,Math.PI*2);
          ctx.fillStyle='rgba(139,92,246,'+(0.55+pulse*0.45)+')'; ctx.fill();
          ctx.beginPath(); ctx.arc(x,y,5+pulse*1.6,0,Math.PI*2);
          ctx.strokeStyle='rgba(255,255,255,.3)'; ctx.lineWidth=1; ctx.stroke();
        }
      }
    };

    const loop = () => {
      if (cv.clientWidth && (cv.width !== Math.round(cv.clientWidth * Math.min(devicePixelRatio||1,2)))) fit();
      ctx.clearRect(0, 0, W(), H());
      (scenes[kind] || scenes.flow)();
      t += 1;
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running) return;
      running = true;
      fit();
      if (RM) { ctx.clearRect(0,0,W(),H()); t = 40; (scenes[kind]||scenes.flow)(); return; }
      loop();
    };
    const stop  = () => { if (raf) cancelAnimationFrame(raf); raf = null; running = false; };

    window.addEventListener('resize', () => { if (running) fit(); });
    // Canvases size from CSS aspect-ratio; make sure we measure after layout.
    if (document.readyState === 'complete') fit();
    else window.addEventListener('load', fit);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((es) => es.forEach(e => e.isIntersecting ? start() : stop()),
        { threshold: 0.01 }).observe(cv);
    } else start();
  });

  /* ---------- FAQ: one open at a time ---------- */
  const faqs = $$('.faq details');
  faqs.forEach(d => d.addEventListener('toggle', () => {
    if (d.open) faqs.forEach(o => { if (o !== d) o.open = false; });
  }));

  /* ---------- headline: word-by-word rise ---------- */
  const rise = $('.rise');
  if (rise && !RM) {
    // Split only TEXT nodes into word spans, and keep element children (e.g.
    // the .grad gradient span) intact — splitting inside them double-wraps the
    // text and the words render stacked on top of each other.
    const wordSpans = [];
    const walk = (node) => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(tok => {
            if (!tok.trim()) { frag.appendChild(document.createTextNode(tok)); return; }
            const s = document.createElement('span');
            s.className = 'w';
            s.textContent = tok;
            frag.appendChild(s);
            wordSpans.push(s);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && !n.classList.contains('grad')) {
          walk(n);
        } else if (n.nodeType === 1) {
          // animate the gradient span as ONE unit
          n.classList.add('w');
          wordSpans.push(n);
        }
      });
    };
    walk(rise);
    wordSpans.forEach((s, i) => { s.style.animationDelay = (i * 0.05) + 's'; });
  } else if (rise) {
    rise.querySelectorAll('span').forEach(s => { s.style.opacity = 1; s.style.transform = 'none'; });
  }

  /* ---------- subtle 3D tilt on cards ---------- */
  if (!RM && window.matchMedia('(hover:hover)').matches) {
    $$('.case, .price, .plan').forEach(el => {
      el.classList.add('tilt');
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform =
          `perspective(900px) rotateX(${(-py * 4).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg) translateY(-6px)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- contact form guard ----------
     Posts to Formspree. If the placeholder endpoint is still in place, block
     submission and say so loudly rather than silently losing a lead. */
  const form = $('#lead-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      const action = form.getAttribute('action') || '';
      const status = $('#form-status');
      if (action.includes('YOUR_FORM_ID')) {
        e.preventDefault();
        if (status) {
          status.innerHTML = '<b style="color:#fbbf24">Form not connected yet.</b> ' +
            'Create a free form at formspree.io (or enable Netlify Forms) and paste the ID ' +
            'into the form action - see README.';
        }
        return;
      }
      if (status) status.textContent = (window.i18nT ? window.i18nT('f.sending') : 'Sending…');
    });
  }

  /* ---------- year ---------- */
  $$('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  /* ---------- safety net: never leave content hidden ---------- */
  setTimeout(() => $$('.reveal').forEach(el => el.classList.add('in')), 2500);

  /* ---------- post-submit thanks (FormSubmit redirects back with ?sent=1) ---------- */
  if (new URLSearchParams(location.search).get('sent') === '1') {
    const status = $('#form-status');
    if (status) status.innerHTML = (window.i18nT ? window.i18nT('f.sent') : '<b style="color:#34d399">Brief received — thank you.</b> We read every inquiry and reply within one business day.');
  }
})();
