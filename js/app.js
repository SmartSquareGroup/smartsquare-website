// year in footer
document.querySelectorAll('#y').forEach(n => n.textContent = new Date().getFullYear());

// on-scroll reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  })
},{threshold:0.12});
document.querySelectorAll('[data-animate]').forEach(el=>io.observe(el));

// simple parallax (very light)
const parallaxEls = [...document.querySelectorAll('[data-parallax]')];
window.addEventListener('scroll', ()=>{
  parallaxEls.forEach(el=>{
    const r = el.getBoundingClientRect();
    const offset = (window.innerHeight - r.top) * 0.05;
    el.style.transform = `translateY(${Math.min(20, Math.max(-20, offset))}px)`;
  });
});

// hero typing demo
const typingDemo = document.getElementById('typing-demo');
if (typingDemo){
  const msgs = [
    {who:'bot', text:'Salut! Eu sunt demo-ul smartsquare.'},
    {who:'bot', text:'Îți pot răspunde instant, colecta lead-uri și ghida clienții.'},
    {who:'bot', text:'Vrei să vezi cum ar arăta pe site-ul tău?'}
  ];
  let i=0;
  const type = () => {
    if(i>=msgs.length) return;
    const m = document.createElement('div');
    m.className = 'msg msg--' + msgs[i].who;
    typingDemo.appendChild(m);
    let j=0;
    const t = setInterval(()=>{
      m.textContent = msgs[i].text.slice(0, ++j);
      typingDemo.scrollTop = typingDemo.scrollHeight;
      if(j>=msgs[i].text.length){ clearInterval(t); i++; setTimeout(type, 400); }
    }, 18);
  };
  setTimeout(type, 500);
}

// demo chat (front-end only)
const demoBody = document.getElementById('demoBody');
const demoInput = document.getElementById('demoInput');
const demoSend = document.getElementById('demoSend');

function addMsg(text, who='user'){
  const m = document.createElement('div');
  m.className = 'msg ' + (who==='bot' ? 'msg--bot':'msg--user');
  m.textContent = text;
  demoBody.appendChild(m);
  demoBody.scrollTop = demoBody.scrollHeight;
}

function fakeBotReply(userText){
  // super simplu – doar demo; ulterior înlocuim cu API
  let reply = "Mulțumim! Notăm: " + userText;
  if (/program|ora|contact/i.test(userText)) reply = "Îți putem seta programări automat. Vrei să vedem cum?";
  if (/pret|preț|cost/i.test(userText)) reply = "Prețurile sunt în secțiunea Pricing. Putem recomanda planul potrivit.";
  setTimeout(()=>addMsg(reply,'bot'), 400);
}

if (demoSend){
  demoSend.addEventListener('click', ()=>{
    const t = (demoInput.value||'').trim();
    if(!t) return;
    addMsg(t,'user');
    demoInput.value = '';
    fakeBotReply(t);
  });
  demoInput.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){ e.preventDefault(); demoSend.click(); }
  });
}
