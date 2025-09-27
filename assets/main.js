/**********************
 * NAVBAR – blur on scroll
 **********************/
const nav = document.querySelector('.nav');
const onScroll = () => {
  if (window.scrollY > 10) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll);
onScroll();

/**********************
 * CHATBOT – show after 1.5s + messages disappear
 **********************/
const chatbot = document.getElementById('chatbot');
const msg1 = document.querySelector('.chatbot__msg--1');
const msg2 = document.querySelector('.chatbot__msg--2');

setTimeout(() => {
  chatbot.classList.add('show');
  setTimeout(() => msg1.classList.add('show'), 200);
  setTimeout(() => msg2.classList.add('show'), 900);
  // ascunde mesajele după 3.5s
  setTimeout(() => chatbot.classList.add('hide-messages'), 3500);
}, 1500);

// la primul scroll – ascunde mesajele de întâmpinare
let hidOnScroll = false;
window.addEventListener('scroll', () => {
  if (!hidOnScroll) {
    chatbot.classList.add('hide-messages');
    hidOnScroll = true;
  }
});

// open chatbot (înlocuiește cu integrarea reală)
const talkBtn = document.querySelector('.cta__talk');
const bubble = document.querySelector('.chatbot__bubble');
function openChatbot(){
  alert(currentLang === 'ro' ? 'Aici se va deschide chatbotul SmartSquare.' : 'This will open the SmartSquare chatbot.');
}
talkBtn?.addEventListener('click', openChatbot);
bubble?.addEventListener('click', openChatbot);

/**********************
 * I18N – texts + attributes (placeholder, alt, title, aria-label)
 **********************/
const translations = {
  ro: {
    "nav.home": "Home",
    "nav.industries": "Industrii",
    "nav.pricing": "Prețuri",
    "nav.demo": "Demo",
    "nav.contact": "Contact",
    "nav.contactSales": "Contact Sales",

    "hero.title": "AI care vinde, răspunde și învață în timp real",
    "hero.subtitle": "Implementăm agenți AI naturali, integrați în canalele tale – fără să scrii cod.",
    "hero.desc": "De la răspunsuri instant la generare de lead-uri și programări, SmartSquare îți crește conversiile și reduce costurile suportului.",
    "hero.ctaQuote": "Cere ofertă",
    "hero.ctaTalk": "Vorbește cu noi",

    "form.email": "Emailul tău",

    "chat.hello": "Bună! 👋",
    "chat.help": "Sunt aici ca să te ajut.",

    "mb.startNow": "Începe acum",
    "mb.contactSales": "Contact Sales",

    "logos.title": "Branduri care lucrează cu noi",
    "logos.alt1": "Logo 1","logos.alt2": "Logo 2","logos.alt3": "Logo 3",
    "logos.alt4": "Logo 4","logos.alt5": "Logo 5","logos.alt6": "Logo 6",
    "logos.alt7": "Logo 7","logos.alt8": "Logo 8","logos.alt9": "Logo 9",
    "logos.alt10":"Logo 10","logos.alt11":"Logo 11","logos.alt12":"Logo 12",

    "fb.title": "De ce SmartSquare",
    "fb.subtitle": "Rezultate rapide, integrare fluidă, impact imediat.",
    "fb.item1.alt":"Iconiță crește vânzările","fb.item1.t":"Crește vânzările","fb.item1.d":"Conversii mai mari cu agenți AI proactivi.",
    "fb.item2.alt":"Iconiță disponibil 24/7","fb.item2.t":"Disponibil 24/7","fb.item2.d":"Răspunsuri instant, non-stop.",
    "fb.item3.alt":"Iconiță reduce costuri","fb.item3.t":"Reduce costuri","fb.item3.d":"Automatizezi suportul și pre-calificarea.",
    "fb.item4.alt":"Iconiță integrări","fb.item4.t":"Integrări facile","fb.item4.d":"WhatsApp, Telegram, Mail, Messenger etc.",
    "fb.item5.alt":"Iconiță AI natural","fb.item5.t":"AI natural","fb.item5.d":"Conversații umane, învață continuu.",
    "fb.item6.alt":"Iconiță lead-uri","fb.item6.t":"Lead-uri mai bune","fb.item6.d":"Calificare și routing automată.",
    "fb.item7.alt":"Iconiță cloud","fb.item7.t":"Cloud hosting","fb.item7.d":"Performanță globală, SLA.",
    "fb.item8.alt":"Iconiță securitate","fb.item8.t":"Securitate","fb.item8.d":"Privacy enterprise, conformitate.",

    "fb.more": "Learn more",

    "demo.title": "Testează chatbotul nostru, direct în browser",
    "demo.desc":  "Vezi cum răspunde natural, califică lead-uri și programează întâlniri – în timp real.",
    "demo.cta":   "Testează demo",

    ind: {
  title: "Avantaje pe industrii",
  desc: "De la start-up-uri la enterprise — adaptăm agentul AI pentru fiecare verticală.",
  more: "Află mai mult →",
  prev: "Înapoi",
  next: "Înainte",
  item1:{ t:"Start-up-uri",   d:"Lansezi rapid, iterezi repede — AI care scalează." },
  item2:{ t:"Enterprise",     d:"Conformitate, securitate, scalare globală — AI natural." },
  item3:{ t:"E-commerce",     d:"Crește AOV, scade retururile, asistență 24/7." },
  item4:{ t:"Restaurante",    d:"Rezervări instant, întrebări meniu, upsell." },
  item5:{ t:"Medical",        d:"Triaj, programări, răspunsuri pacienți — confidențialitate." },
  item6:{ t:"Educație",       d:"Admitere, tutoring, suport studenți — mereu activ." },
  item7:{ t:"Real Estate",    d:"Califici lead-uri, programezi vizionări, răspunzi listărilor." },
  item8:{ t:"Turism",         d:"Itinerarii, rebooking, suport instant pe toate canalele." },
  item9:{ t:"Financiar",      d:"Fluxuri KYC, suport clienți, automatizare cu audit." },
  item10:{t:"Entertainment",  d:"Engagement, ticketing, campanii cu agenți AI." },
  item11:{t:"Hotels",         d:"Engagement, ticketing, campanii cu agenți AI." }
},

    s6: {
  b1: { title: "Pachet complet & suport continuu", desc: "Ai totul de la A la Z — implementare, optimizare, mentenanță — ca investiția să se recupereze rapid." },
  b2: { title: "Integrare cu WhatsApp, Telegram, Mail etc.", desc: "Chatbotul lucrează acolo unde sunt clienții tăi — mesaj, email sau web — fără fricțiune." },
  b3: { title: "AI inteligent și natural", desc: "Răspunde natural, învață continuu din conversații și devine mai bun în timp." },
  b4: { title: "Vânzări & clienți fericiți", desc: "Transformă vizitatorii în clienți, crește vânzările și loialitatea cu răspunsuri rapide." },
  b5: { title: "Integrare rapidă & cloud hosting", desc: "Se instalează ușor pe orice site, rulează rapid și sigur în cloud, fără bătăi de cap." },
  cta: "Află detalii"
},

s7: {
  title: "AI care transformă industrii",
  sub:   "De la automatizare la creștere — schimbare vizibilă în câteva săptămâni.",
  cta:   "Începe acum",
  k1:{ n:"+100", t:"clienți în primul an" },
  k2:{ n:"+28%", t:"conversii medii" },
  k3:{ n:"–35%", t:"costuri suport" }
},

pricing: {
  title: "Planuri flexibile, parteneriat real",
  subtitle: "Toți clienții noștri sunt contactați de un agent SmartSquare pentru un plan personalizat — profesional, rapid și fără compromisuri.",
  compare: "Compară planurile",
  notSure: "Nu știi ce să alegi?",
  compareTitle: "Compară planurile",
  contact: "Contactează-ne",
  cta: "Începe acum",
  send: "Trimite cererea",
  privacy: "Protejăm datele. No spam.",
  featured: "Recomandat",

  // Form fields
  form: {
    name: "Nume",
    company: "Companie",
    email: "Email",
    phone: "Telefon (opțional)",
    success: "Mulțumim! Te contactăm în max. 24h.",
    secondary: "Între timp, vezi un demo",
    invalidEmail: "Te rugăm să introduci un email valid.",
    thanks: "Mulțumim! Te contactăm în maxim 24h.",
    demo: "Între timp, vezi un demo →",
    privacy: "Protejam datele. No spam.",
    submit: "Trimite cerere"
  },

  basic: {
    title: "Basic",
    sub: "Start rapid cu un agent AI natural",
    f1: "Instalare & setare inițială",
    f2: "Răspunsuri naturale (OpenAI) + context de bază",
    f3: "Formular lead-capture + email alerts",
    f4: "Widget web & WhatsApp (opțional)",
    f5: "Actualizări lunare ușoare"
  },

  business: {
    title: "Business",
    sub: "AI care convertește la scară",
    f1: "Tot din Basic",
    f2: "Ingestion website/catalog + Q&A pe produse",
    f3: "Reguli de routing: vânzări / suport",
    f4: "Integrare email + CRM (Zapier/Make)",
    f5: "Analytics esențial (conversii, intent, CSAT)"
  },

  complet: {
    title: "Complet",
    sub: "Site + Hosting + AI, cap-coadă",
    f1: "Tot din Business",
    f2: "Site performant (Cloudflare Pages) + CDN",
    f3: "Design/brand + mockup-uri & micro-animații",
    f4: "Mentenanță & optimizări de conversie",
    f5: "SLA răspuns 24h, suport în RO/EN"
  },

  enterprise: {
    title: "Enterprise",
    sub: "Securitate, control & scalare globală",
    f1: "Tot din Complet",
    f2: "SSO/SCIM, audit logs, export date",
    f3: "Instanțe izolate / self-hosted hibrid",
    f4: "Procese legale: DPA, NDA, conformitate",
    f5: "Suport dedicat / on-site onboarding"
  }
},

steps: {
  title: "Cum funcționează în 3 pași simpli",
  subtitle: "Fără cunoștințe tehnice — noi facem totul pentru tine.",
  cta: "Începe acum",
  s1: {
    title: "Discutăm nevoia",
    desc: "Ne spui businessul, obiectivele și unde te ajută AI-ul. Propunem abordarea potrivită."
  },
  s2: {
    title: "Implementăm rapid",
    desc: "Configurăm chatbotul (OpenAI), integrăm website/WhatsApp/email și testăm împreună."
  },
  s3: {
    title: "Tu crești vânzările",
    desc: "Agentul AI răspunde non-stop, capturează lead-uri și susține vânzările. Tu vezi rezultatele."
  }
},

tech: {
  title: "Detalii tehnice care ne diferențiază",
  desc: "Construim pe AI modern și cloud robust pentru o experiență rapidă, sigură și transparentă.",
  cta: "Află mai mult",
  imgAlt: "Ilustrație tehnică SmartSquare",
  i1: {
    t: "Integrare OpenAI / LLM de ultimă generație",
    d1: "Chatbotul folosește modele avansate (OpenAI GPT) cu fine-tuning pe domeniu.",
    d2: "Suport pentru multiple limbi și adaptare la context."
  },
  i2: {
    t: "Cloud Hosting global (CDN inclus)",
    d1: "Infrastructură pe Cloudflare / AWS cu livrare rapidă oriunde în lume.",
    d2: "Optimizare automată pentru latență scăzută și disponibilitate ridicată."
  },
  i3: {
    t: "SLA & uptime garantat",
    d1: "99,9% uptime contractual.",
    d2: "SLA cu suport 24h și rezolvare rapidă a incidentelor critice."
  },
  i4: {
    t: "Securitate enterprise-grade",
    d1: "Conexiuni criptate end-to-end (TLS 1.3).",
    d2: "Conformitate GDPR & opțiuni de data residency în UE."
  },
  i5: {
    t: "Control & transparență",
    d1: "Dashboard cu statistici (mesaje procesate, leaduri, intenții detectate).",
    d2: "Export date simplu (CSV/Excel) și control asupra fluxurilor de conversație."
  }
},

faq: {
  title: "Întrebări frecvente",
  desc: "Găsești rapid răspunsurile la cele mai comune întrebări.",
  cta:  "Verifică răspunsuri",
  items: {
    1: { q: "Ce este un chatbot AI și cum mă poate ajuta?",
         a: "Un chatbot AI este un asistent digital inteligent, capabil să răspundă clienților în timp real, să ofere informații, să facă recomandări și să convertească vizitatorii în clienți." },
    2: { q: "Pot integra chatbotul pe site-ul meu actual?",
         a: "Da. Chatbotul se poate integra ușor pe orice site existent, indiferent de platformă (WordPress, Shopify, custom)." },
    3: { q: "Poate chatbotul să fie legat și de WhatsApp, Telegram sau Facebook Messenger?",
         a: "Da. Putem conecta chatbotul direct la platformele de mesagerie preferate, iar tu poți prelua manual conversația oricând dorești." },
    4: { q: "Cum se diferențiază chatbotul AI de unul clasic, cu răspunsuri predefinite?",
         a: "Un chatbot AI bazat pe OpenAI oferă răspunsuri naturale și personalizate, înțelege contextul și învață continuu." },
    5: { q: "Cât durează implementarea?",
         a: "De obicei, 3–10 zile, în funcție de complexitate și nivelul de personalizare." },
    6: { q: "Trebuie să am cunoștințe tehnice pentru a folosi chatbotul?",
         a: "Nu. Totul este gestionat de noi. Primești un dashboard simplu, iar mentenanța e inclusă." },
    7: { q: "Pot să personalizez felul în care răspunde chatbotul?",
         a: "Da. Ton formal/prietenos, elemente de brand și stil adaptat businessului tău." },
    8: { q: "Cum primesc notificările despre clienții noi?",
         a: "Primești email instant (opțional și WhatsApp/Telegram). Vezi și rapoarte săptămânale." },
    9: { q: "Ce se întâmplă dacă chatbotul nu știe răspunsul?",
         a: "Oferă un răspuns general și poate direcționa către un operator sau trimite notificare pentru follow-up." },
    10:{ q: "Chatbotul este sigur și respectă GDPR?",
         a: "Da. Conexiuni criptate (TLS 1.3) și conformitate GDPR." },
    11:{ q: "Care sunt costurile pentru un chatbot AI?",
         a: "Avem planuri Basic, Business, Complet și Enterprise — configurate personalizat după nevoie." },
    12:{ q: "Pot să testez chatbotul înainte de decizie?",
         a: "Da. Avem demo interactiv pe site." },
    13:{ q: "Poate chatbotul să proceseze comenzi sau plăți?",
         a: "Da, pentru anumite integrări ecommerce poate ghida comanda sau trimite linkuri de plată." },
    14:{ q: "Ce suport primesc după implementare?",
         a: "Suport 24/7 și actualizări regulate. Mentenanță și optimizare continuă." },
    15:{ q: "De ce să aleg SmartSquare și nu alt furnizor?",
         a: "Pachet complet: AI natural, integrare multi-platformă, site & hosting rapid, consultanță și suport personalizat." }
  }
},

foot: {
  company: {
    t: "Companie",
    about: "Despre noi",
    careers: "Carieră",
    contact: "Contact"
  },
  product: {
    t: "Produs",
    pricing: "Planuri & prețuri",
    demo: "Demo",
    integrations: "Integrări",
    docs: "Documentație"
  },
  resources: {
    t: "Resurse",
    faq: "Întrebări frecvente",
    blog: "Blog",
    gdpr: "Politică GDPR",
    privacy: "Politică de confidențialitate",
    terms: "Termeni & condiții"
  },
  connect: {
    t: "Conectează-te",
    github: "GitHub",
    youtube: "YouTube",
    linkedin: "LinkedIn",
    whatsapp: "WhatsApp Business"
  },
  copy: "© 2025 SmartSquare Group SRL"
},

  },

  en: {
    "nav.home": "Home",
    "nav.industries": "Industries",
    "nav.pricing": "Pricing",
    "nav.demo": "Demo",
    "nav.contact": "Contact",
    "nav.contactSales": "Contact Sales",

    "hero.title": "AI that sells, answers and learns in real time",
    "hero.subtitle": "We implement natural AI agents, integrated into your channels — no code required.",
    "hero.desc": "From instant answers to lead generation and scheduling, SmartSquare boosts conversions and cuts support costs.",
    "hero.ctaQuote": "Request a quote",
    "hero.ctaTalk": "Talk to us",

    "form.email": "Your email",

    "chat.hello": "Hi! 👋",
    "chat.help": "I'm here to help.",

    "mb.startNow": "Start Now",
    "mb.contactSales": "Contact Sales",

    "logos.title": "Brands we work with",
    "logos.alt1": "Logo 1","logos.alt2": "Logo 2","logos.alt3":"Logo 3",
    "logos.alt4": "Logo 4","logos.alt5": "Logo 5","logos.alt6":"Logo 6",
    "logos.alt7": "Logo 7","logos.alt8": "Logo 8","logos.alt9":"Logo 9",
    "logos.alt10":"Logo 10","logos.alt11":"Logo 11","logos.alt12":"Logo 12",

    "fb.title": "Why SmartSquare",
    "fb.subtitle": "Fast results, smooth integration, immediate impact.",
    "fb.item1.alt":"Sales icon","fb.item1.t":"Increase sales","fb.item1.d":"Higher conversions with proactive AI agents.",
    "fb.item2.alt":"24/7 icon","fb.item2.t":"Available 24/7","fb.item2.d":"Instant answers, non-stop.",
    "fb.item3.alt":"Cost icon","fb.item3.t":"Cut costs","fb.item3.d":"Automate support and pre-qualification.",
    "fb.item4.alt":"Integrations icon","fb.item4.t":"Easy integrations","fb.item4.d":"WhatsApp, Telegram, Mail, Messenger etc.",
    "fb.item5.alt":"Natural AI icon","fb.item5.t":"Natural AI","fb.item5.d":"Human-like conversations that learn.",
    "fb.item6.alt":"Leads icon","fb.item6.t":"Better leads","fb.item6.d":"Automatic qualification and routing.",
    "fb.item7.alt":"Cloud icon","fb.item7.t":"Cloud hosting","fb.item7.d":"Global performance, SLA.",
    "fb.item8.alt":"Security icon","fb.item8.t":"Security","fb.item8.d":"Enterprise privacy and compliance.",

    "fb.more": "Learn more",

    "demo.title": "Try our chatbot, right in your browser",
    "demo.desc":  "See natural conversations, lead qualification and scheduling — in real time.",
    "demo.cta":   "Try the demo",

    ind: {
  title: "Industries we serve",
  desc: "From startups to enterprise — we tailor the AI agent to every vertical.",
  more: "Learn more →",
  prev: "Previous",
  next: "Next",
  item1:{ t:"Startups",      d:"Launch fast, iterate faster — AI that scales." },
  item2:{ t:"Enterprise",    d:"Compliance, security, global scale — natural AI." },
  item3:{ t:"E-commerce",    d:"Increase AOV, reduce returns, 24/7 assistance." },
  item4:{ t:"Restaurants",   d:"Instant reservations, menu Q&A, upsell." },
  item5:{ t:"Healthcare",    d:"Triage, scheduling, patient FAQs — privacy first." },
  item6:{ t:"Education",     d:"Admissions, tutoring, student support — always on." },
  item7:{ t:"Real Estate",   d:"Qualify leads, schedule viewings, answer listings." },
  item8:{ t:"Travel",        d:"Itineraries, rebooking, instant support on all channels." },
  item9:{ t:"Finance",       d:"KYC flows, customer care, automation with audit trail." },
  item10:{t:"Entertainment", d:"Fan engagement, ticketing, AI-powered campaigns." },
  item11:{t:"Hotels",         d:"Engagement, ticketing, campanii cu agenți AI." }
},

    s6: {
  b1: { title: "All-in-one package & ongoing support", desc: "Everything from A to Z — implementation, optimization, maintenance — so your investment pays off fast." },
  b2: { title: "WhatsApp, Telegram, Mail & more", desc: "Your bot works where your customers are — messaging, email, or web — with zero friction." },
  b3: { title: "Smart & natural AI", desc: "It responds naturally, keeps learning from conversations, and gets better over time." },
  b4: { title: "More sales & happier customers", desc: "Turn visitors into buyers, grow revenue and loyalty with instant answers." },
  b5: { title: "Fast integration & cloud hosting", desc: "Installs easily on any site, runs fast and securely in the cloud, hassle-free." },
  cta: "Learn more"
},

s7: {
  title: "AI that transforms industries",
  sub:   "From automation to growth — visible change in weeks.",
  cta:   "Get started",
  k1:{ n:"+100", t:"customers in year one" },
  k2:{ n:"+28%", t:"average conversions" },
  k3:{ n:"–35%", t:"support costs" }
},

pricing: {
  title: "Flexible plans, real partnership",
  subtitle: "All new customers are contacted by a SmartSquare agent to tailor a plan to their goals — professional, fast, zero fluff.",
  compare: "Compare plans",
  notSure: "Not sure what to choose?",
  compareTitle: "Compare plans",
  contact: "Contact us",
  cta: "Start now",
  send: "Send request",
  privacy: "We protect your data. No spam. <a href='#privacy'>Policy</a>",
  featured: "Recommended",

  // Form fields
  form: {
    name: "Name",
    company: "Company",
    email: "Email",
    phone: "Phone (optional)",
    success: "Thank you! We’ll get back to you within 24h.",
    secondary: "Meanwhile, check out a demo",
    invalidEmail: "Please enter a valid email.",
    thanks: "Thank you! We’ll contact you within 24h.",
    demo: "Meanwhile, check out a demo →",
    privacy: "We protect data. No spam.",
    submit: "Send request"
  },

  basic: {
    title: "Basic",
    sub: "Quick start with a natural AI agent",
    f1: "Installation & initial setup",
    f2: "Natural responses (OpenAI) + basic context",
    f3: "Lead-capture form + email alerts",
    f4: "Web & WhatsApp widget (optional)",
    f5: "Light monthly updates"
  },

  business: {
    title: "Business",
    sub: "AI that converts at scale",
    f1: "Everything in Basic",
    f2: "Website/catalog ingestion + product Q&A",
    f3: "Routing rules: sales / support",
    f4: "Email + CRM integration (Zapier/Make)",
    f5: "Essential analytics (conversions, intent, CSAT)"
  },

  complet: {
    title: "Full",
    sub: "Website + Hosting + AI, end-to-end",
    f1: "Everything in Business",
    f2: "High-performance site (Cloudflare Pages) + CDN",
    f3: "Design/brand + mockups & micro-animations",
    f4: "Ongoing maintenance & conversion optimizations",
    f5: "24h SLA, support in EN/RO"
  },

  enterprise: {
    title: "Enterprise",
    sub: "Security, control & global scale",
    f1: "Everything in Full",
    f2: "SSO/SCIM, audit logs, data export",
    f3: "Isolated instances / hybrid self-hosted",
    f4: "Legal processes: DPA, NDA, compliance",
    f5: "Dedicated support / on-site onboarding"
  }
},

steps: {
  title: "How it works in 3 simple steps",
  subtitle: "No technical knowledge needed — we handle everything for you.",
  cta: "Start now",
  s1: {
    title: "We discuss your needs",
    desc: "Tell us about your business, goals, and where AI can help. We propose the right approach."
  },
  s2: {
    title: "We implement fast",
    desc: "We configure the chatbot (OpenAI), integrate website/WhatsApp/email, and test together."
  },
  s3: {
    title: "You grow sales",
    desc: "Your AI agent replies 24/7, captures leads, and supports sales. You see the results."
  }

},

tech: {
  title: "Technical details that set us apart",
  desc: "We build on modern AI and a robust cloud to keep your experience fast, secure and transparent.",
  cta: "Learn more",
  imgAlt: "SmartSquare technical illustration",
  i1: {
    t: "Latest-gen OpenAI / LLM integration",
    d1: "The chatbot uses advanced models (OpenAI GPT) with domain fine-tuning.",
    d2: "Multi-language support and context adaptation."
  },
  i2: {
    t: "Global cloud hosting (CDN included)",
    d1: "Cloudflare / AWS infrastructure with fast delivery worldwide.",
    d2: "Automatic optimization for low latency and high availability."
  },
  i3: {
    t: "Guaranteed SLA & uptime",
    d1: "99.9% contractual uptime.",
    d2: "24h support SLA and fast resolution for critical incidents."
  },
  i4: {
    t: "Enterprise-grade security",
    d1: "End-to-end encrypted connections (TLS 1.3).",
    d2: "GDPR compliance & EU data residency options."
  },
  i5: {
    t: "Control & transparency",
    d1: "Dashboard with stats (messages processed, leads, intents).",
    d2: "Easy data export (CSV/Excel) and control over conversation flows."
  }
},

faq: {
  title: "Frequently Asked Questions",
  desc: "Find quick answers to the most common questions.",
  cta:  "Check answers",
  items: {
    1: { q: "What is an AI chatbot and how can it help me?",
         a: "An AI chatbot is a smart assistant that replies in real time, provides information, makes recommendations, and converts visitors into customers." },
    2: { q: "Can I integrate the chatbot on my current website?",
         a: "Yes. It integrates easily with any website or platform (WordPress, Shopify, custom)." },
    3: { q: "Can it connect to WhatsApp, Telegram or Facebook Messenger?",
         a: "Yes. We can connect it to your preferred messaging apps, and you can take over the conversation manually anytime." },
    4: { q: "How is an AI chatbot different from a rule-based one?",
         a: "An OpenAI-powered chatbot gives natural, personalized answers, understands context, and keeps learning." },
    5: { q: "How long does implementation take?",
         a: "Usually 3–10 days, depending on complexity and customization." },
    6: { q: "Do I need technical skills to use it?",
         a: "No. We handle everything. You get a simple dashboard and full maintenance." },
    7: { q: "Can I customize the chatbot’s tone and style?",
         a: "Yes. Formal or friendly tone, brand elements, and a style tailored to your business." },
    8: { q: "How do I receive new-lead notifications?",
         a: "Instant email (optionally WhatsApp/Telegram). Weekly reports are available too." },
    9: { q: "What if the chatbot doesn’t know an answer?",
         a: "It provides a general reply and can escalate to a human or send you a follow-up notification." },
    10:{ q: "Is it secure and GDPR compliant?",
         a: "Yes. Encrypted connections (TLS 1.3) and GDPR compliance." },
    11:{ q: "How much does it cost?",
         a: "We offer Basic, Business, Complete, and Enterprise plans — tailored to your needs." },
    12:{ q: "Can I test it before deciding?",
         a: "Yes. We have an interactive demo on the website." },
    13:{ q: "Can it handle orders or payments?",
         a: "Yes, for specific ecommerce integrations it can guide orders or send payment links." },
    14:{ q: "What support do I get after implementation?",
         a: "24/7 support and regular updates. Ongoing maintenance and optimization." },
    15:{ q: "Why choose SmartSquare over others?",
         a: "A complete package: natural AI, multi-platform integration, fast site & hosting, consulting and personalized support." }
  }
},

foot: {
  company: {
    t: "Company",
    about: "About us",
    careers: "Careers",
    contact: "Contact"
  },
  product: {
    t: "Product",
    pricing: "Pricing",
    demo: "Demo",
    integrations: "Integrations",
    docs: "Documentation"
  },
  resources: {
    t: "Resources",
    faq: "FAQ",
    blog: "Blog",
    gdpr: "GDPR Policy",
    privacy: "Privacy Policy",
    terms: "Terms of Service"
  },
  connect: {
    t: "Connect",
    github: "GitHub",
    youtube: "YouTube",
    linkedin: "LinkedIn",
    whatsapp: "WhatsApp Business"
  },
  copy: "© 2025 SmartSquare Group SRL"
}


 },
};



const htmlEl = document.documentElement;
const langButtons = document.querySelectorAll('.lang-btn');
let currentLang = 'ro';

/**********************
 * Validator chei i18n
 **********************/
(function validateTranslations(){
  const langs = Object.keys(translations);
  if (langs.length < 2) return;

  // comparăm prima limbă cu toate celelalte
  const baseLang = langs[0];
  const baseKeys = Object.keys(translations[baseLang]);

  langs.slice(1).forEach(lang => {
    const keys = Object.keys(translations[lang]);

    // chei lipsă în limba curentă
    const missing = baseKeys.filter(k => !keys.includes(k));
    if (missing.length) {
      console.warn(`[i18n] Lipsesc ${missing.length} chei în "${lang}":`, missing);
    }

    // chei extra față de baza
    const extra = keys.filter(k => !baseKeys.includes(k));
    if (extra.length) {
      console.warn(`[i18n] "${lang}" are chei în plus:`, extra);
    }
  });
})();


/* ========= I18N: resolver + apply + init (CURAT) ========= */

// Resolver hibrid: suportă atât chei imbricate ("ind.item1.t"),
// cât și chei plate ("hero.title", "nav.home").
function tI18n(lang, path){
  const dict = translations[lang] || {};
  // încearcă imbricat
  let cur = dict;
  const parts = path.split('.');
  for (let i = 0; i < parts.length; i++){
    if (cur && typeof cur === 'object' && parts[i] in cur){
      cur = cur[parts[i]];
    } else {
      cur = undefined;
      break;
    }
  }
  // dacă a reușit și e string -> gata
  if (typeof cur === 'string') return cur;

  // altfel încearcă cheia plată literală
  if (typeof dict[path] === 'string') return dict[path];

  // nimic găsit
  return undefined;
}


// 2) Aplică traducerile (text + atribute). Funcție PURĂ (fără event listeners aici)
function applyTranslations(lang){
  const L = lang || currentLang || 'ro';

  // textContent
document.querySelectorAll('[data-i18n]').forEach(el => {
  const key  = el.getAttribute('data-i18n');
  const text = tI18n(lang, key);
  if (typeof text === 'string') el.textContent = text;
});

// placeholder
document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
  const key = el.getAttribute('data-i18n-placeholder');
  const val = tI18n(lang, key);
  if (typeof val === 'string') el.setAttribute('placeholder', val);
});

// alt
document.querySelectorAll('[data-i18n-alt]').forEach(el => {
  const key = el.getAttribute('data-i18n-alt');
  const val = tI18n(lang, key);
  if (typeof val === 'string') el.setAttribute('alt', val);
});

// title
document.querySelectorAll('[data-i18n-title]').forEach(el => {
  const key = el.getAttribute('data-i18n-title');
  const val = tI18n(lang, key);
  if (typeof val === 'string') el.setAttribute('title', val);
});

// aria-label
document.querySelectorAll('[data-i18n-label]').forEach(el => {
  const key = el.getAttribute('data-i18n-label');
  const val = tI18n(lang, key);
  if (typeof val === 'string'){
    el.setAttribute('aria-label', val);
    if (!el.hasAttribute('title')) el.setAttribute('title', val);
  }
});

  // statul global de limbă + butoane
  htmlEl.setAttribute('lang', L);
  langButtons.forEach(btn =>
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === L))
  );

  currentLang = L;
  localStorage.setItem('lang', L);
}

// 3) Init GLOBAL, în afara funcției
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang');
  const initial = saved || (typeof detectInitialLang === 'function' ? detectInitialLang() : 'ro');

  currentLang = initial;
  applyTranslations(initial);

  // handler pt. butoanele RO/EN (o singură dată)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const L = btn.dataset.lang;
      if (L && L !== currentLang) applyTranslations(L);
    });
  });
});

/* ======== END I18N ========= */



function detectInitialLang(){
  const saved = localStorage.getItem('lang');
  if (saved) return saved;
  const navLang = (navigator.language || 'en').toLowerCase();
  return navLang.startsWith('ro') ? 'ro' : 'en';
}

// init
applyTranslations(detectInitialLang());

// switch
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    if (lang !== currentLang) applyTranslations(lang);
  });
});

// Mobile bar actions
const mbStartNow = document.getElementById('mbStartNow');
const mbContactSales = document.getElementById('mbContactSales');

mbStartNow?.addEventListener('click', () => {
  // focus pe email + scroll lin la zona CTA
  const email = document.querySelector('.cta__group .input[type="email"]');
  email?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  setTimeout(() => email?.focus(), 450);
});

mbContactSales?.addEventListener('click', () => {
  // dacă ai o secțiune #contact, facem scroll acolo; altfel deschide chatbotul ca fallback
  const contact = document.getElementById('contact');
  if (contact) {
    contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    openChatbot();
  }
});

/**********************
 * LOGOS – teleport swap (1 schimbare / 5s / slot, cu decalaj)
 **********************/
(function initLogosTeleport(){
  document.addEventListener('DOMContentLoaded', () => {
    const slots = Array.from(document.querySelectorAll('.logo-slot img'));
    let pool   = Array.from(document.querySelectorAll('.logos-pool img'));

    // ținem doar imaginile care chiar au src setat
    pool = pool.filter(img => !!img.getAttribute('src'));
    if (slots.length === 0 || pool.length === 0) return;

    // umplem sloturile inițial
    for (let i = 0; i < slots.length; i++) {
      const p = pool[i % pool.length];
      slots[i].src = p.src;
      slots[i].setAttribute('data-i18n-alt', p.getAttribute('data-i18n-alt') || '');
      const key = p.getAttribute('data-i18n-alt');
      slots[i].alt = (translations[currentLang]?.[key]) || p.alt || '';
    }

    const t = (key, fallback) => (translations[currentLang]?.[key] || fallback || '');
    const INTERVAL = 5000;  // sau 8000/10000
    const STAGGER  = 1665;  // ajustează proporțional

    let cursor = slots.length % pool.length;

    function swap(slotIdx){
      const slotImg = slots[slotIdx];
      const next = pool[cursor]; cursor = (cursor + 1) % pool.length;

      const key = next.getAttribute('data-i18n-alt');
      const altText = t(key, next.alt);

      slotImg.classList.remove('is-in');
      slotImg.classList.add('is-out');

      setTimeout(() => {
        slotImg.src = next.src;
        slotImg.setAttribute('data-i18n-alt', key || '');
        slotImg.alt = altText || '';

        slotImg.classList.remove('is-out');
        slotImg.classList.add('is-in');
        setTimeout(() => slotImg.classList.remove('is-in'), 260);
      }, 170);
    }

    slots.forEach((_, i) => {
      setTimeout(() => { setInterval(() => swap(i), INTERVAL); }, i * STAGGER);
    });

    // re-ALT la schimbarea limbii
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        slots.forEach(img => {
          const key = img.getAttribute('data-i18n-alt');
          if (key) img.alt = t(key, img.alt);
        });
      });
    });
  });
})();


// Reveal la scroll pentru cardurile din secțiunea 3
(function initFBReveal(){
  const items = document.querySelectorAll('.fb__card.reveal');
  if (!items.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(el => io.observe(el));
})();


(function(){
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 4) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();



// ===== S5: Industries – autoscroll right-only + hover pause + drag + prev/next =====
(function () {
  const sec   = document.querySelector('.industries');
  const wrap  = document.querySelector('.industries .ind_bleed'); // scrollerul
  const track = document.querySelector('.industries .ind_track'); // pista
  const prev  = document.querySelector('.industries .ind_prev');
  const next  = document.querySelector('.industries .ind_next');
  if (!sec || !wrap || !track) { console.warn('[ind] missing nodes'); return; }

  let rafId = null;
  let paused = false;
  const speed  = 0.35;   // ~px per frame (0.45–0.6 = mai rapid)
  const stepBy = 320;    // lățime card + gap pt butoane

function loop(){
  if (paused) { 
    rafId = requestAnimationFrame(loop); 
    return; 
  }
  const max = () => track.scrollWidth - wrap.clientWidth;
  if (wrap.scrollLeft >= max() -0) {
    // Am ajuns la final → stop
    stop(); 
    return;
  } else {
    wrap.scrollLeft += speed;
  }
  rafId = requestAnimationFrame(loop);
}


  function start(){ if (rafId == null) rafId = requestAnimationFrame(loop); }
  function stop(){  if (rafId != null){ cancelAnimationFrame(rafId); rafId = null; } }

  // pornește când secțiunea intră în viewport
  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) start(); else stop();
  }, { threshold: 0.25 });
  io.observe(sec);

  // pause la hover
  wrap.addEventListener('mouseenter', () => { paused = true;  });
  wrap.addEventListener('mouseleave', () => { paused = false; });

  // drag (desktop + mobil)
  let dragging=false, startX=0, startLeft=0;
  wrap.addEventListener('pointerdown', ev => {
    dragging = true;
    wrap.setPointerCapture(ev.pointerId);
    startX = ev.clientX;
    startLeft = wrap.scrollLeft;
    paused = true;
  });
  wrap.addEventListener('pointermove', ev => {
    if (!dragging) return;
    wrap.scrollLeft = startLeft - (ev.clientX - startX);
  });
  const endDrag = () => { if (!dragging) return; dragging=false; paused=false; };
  wrap.addEventListener('pointerup', endDrag);
  wrap.addEventListener('pointercancel', endDrag);
  wrap.addEventListener('pointerleave', endDrag);

  // prev / next
const STEP = 320; // cât vrei tu pe pas (ai deja o constantă stepBy – poți folosi aceea)

prev?.addEventListener('click', () => {
  const left = Math.max(0, wrap.scrollLeft - STEP);
  wrap.scrollTo({ left, behavior: 'smooth' });
});

next?.addEventListener('click', () => {
  const right = Math.min(max(), wrap.scrollLeft + STEP);
  wrap.scrollTo({ left: right, behavior: 'smooth' });
});


  // fallback: dacă secțiunea e deja vizibilă la refresh
  const r = sec.getBoundingClientRect();
  if (r.top < innerHeight && r.bottom > 0) start();
})();



/* ===== S5: Industries — autoscroll (right), hover pause, drag, prev/next (opționale) ===== */
document.addEventListener('DOMContentLoaded', () => {
  const sec   = document.querySelector('.industries');
  if (!sec) return;

  const wrap  = sec.querySelector('.ind_trackWrap');  // SCROLLER (are overflow-x)
  const track = sec.querySelector('.ind_track');      // PISTA (conține cardurile)
  const prev  = sec.querySelector('.ind_prev');       // poate lipsi
  const next  = sec.querySelector('.ind_next');       // poate lipsi
  if (!wrap || !track) return;

  // --- Autoscroll state ---
  let rafId   = null;
  let running = false;   // pornește doar când secțiunea e în viewport
  let paused  = false;   // pauză pe hover & drag
  const speed = 0.35;    // px/frame (~21 px/s). Poți urca la 0.5 dacă vrei mai rapid.

  const loop = () => {
    if (!running) { rafId = null; return; }

    // dimensiuni corecte: track = total; wrap = viewport
    const max = track.scrollWidth - wrap.clientWidth;
    if (!paused && max > 0) {
      if (wrap.scrollLeft >= max - 1) {
        // reia lin de la început
        wrap.scrollLeft = 0;
      } else {
        wrap.scrollLeft += speed;
      }
    }
    rafId = requestAnimationFrame(loop);
  };

  const start = () => { if (rafId == null) rafId = requestAnimationFrame(loop); running = true; };
  const stop  = () => { running = false; if (rafId != null) { cancelAnimationFrame(rafId); rafId = null; } };

  // --- Pornește doar când secțiunea e vizibilă
  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) start(); else stop();
  }, { threshold: 0.15 });
  io.observe(sec);

  // --- Hover pause pe scrollerul full-bleed
  wrap.addEventListener('mouseenter', () => { paused = true;  });
  wrap.addEventListener('mouseleave', () => { paused = false; });

  // --- Drag (mouse & touch) pe wrap
  let isDown = false, startX = 0, startLeft = 0;

  const onDown = (clientX, pointerId) => {
    isDown = true; paused = true;
    startX = clientX; startLeft = wrap.scrollLeft;
    if (pointerId != null) wrap.setPointerCapture?.(pointerId);
    wrap.style.cursor = 'grabbing';
  };
  const onMove = (clientX) => {
    if (!isDown) return;
    const dx = clientX - startX;
    wrap.scrollLeft = startLeft - dx;
  };
  const onUp = (pointerId) => {
    if (!isDown) return;
    isDown = false;
    wrap.style.cursor = '';
    wrap.releasePointerCapture?.(pointerId);
    // mic delay ca să nu reia exact în timpul hover-ului
    setTimeout(() => { paused = false; }, 120);
  };

  // mouse
  wrap.addEventListener('mousedown', (e) => onDown(e.clientX, e.pointerId));
  window.addEventListener('mousemove', (e) => onMove(e.clientX));
  window.addEventListener('mouseup',   (e) => onUp(e.pointerId));

  // touch
  wrap.addEventListener('touchstart', (e) => onDown(e.touches[0].clientX), { passive:true });
  wrap.addEventListener('touchmove',  (e) => onMove(e.touches[0].clientX), { passive:true });
  wrap.addEventListener('touchend',   () => onUp());

  // --- Prev/Next (opționale) — pas un card + gap
  const getStep = () => {
    const card = track.querySelector('.ind_card');
    const gap  = parseFloat(getComputedStyle(track).gap || '18') || 18;
    const w    = card ? card.getBoundingClientRect().width : 280;
    return w + gap;
  };
  const jump = (dx) => wrap.scrollBy({ left: dx, behavior: 'smooth' });

  if (prev) prev.addEventListener('click', () => { paused = true; jump(-getStep()); setTimeout(()=>paused=false, 300); });
  if (next) next.addEventListener('click', () => { paused = true; jump(+getStep()); setTimeout(()=>paused=false, 300); });

  // --- Dacă secțiunea e deja pe ecran la refresh, pornește
  const r = sec.getBoundingClientRect();
  if (r.top < innerHeight && r.bottom > 0) start();
});




// ===== Pricing: reveal + inline form + simple throttling + validation =====
(function initPricing(){
  const sec = document.querySelector('#pricing');
  if (!sec) return;

  // Reveal on view
  const cards = sec.querySelectorAll('.pricing__card');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach((e)=>{
      if (e.isIntersecting){
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  cards.forEach(c => io.observe(c));

  // Expand inline form
  const expandBtns = sec.querySelectorAll('.pricing__btn[data-expand]');
  expandBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = btn.dataset.expand;
      const form = sec.querySelector(`.pricing__form[data-form="${id}"]`);
      if (!form) return;
      const open = form.getAttribute('aria-expanded') === 'true';
      // close others
      sec.querySelectorAll('.pricing__form[aria-expanded="true"]').forEach(f=>{
        if (f !== form){ f.setAttribute('aria-expanded','false'); f.style.display='none'; }
      });
      form.setAttribute('aria-expanded', String(!open));
      form.style.display = !open ? 'block' : 'none';
      if (!open){
        const first = form.querySelector('input[name="email"]') || form.querySelector('input');
        first && first.focus();
      }
    });
  });

  // Basic throttling + honeypot + email validation
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const lastSubmit = new Map();

  sec.querySelectorAll('.pricing__form').forEach(form=>{
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      // honeypot
      if (form.querySelector('.pricing__hp')?.value) return;

      const now = Date.now();
      const key = form.dataset.form;
      if (lastSubmit.has(key) && (now - lastSubmit.get(key) < 8000)) return; // 8s throttle

      const email = form.querySelector('input[name="email"]');
      if (!EMAIL_RE.test(email.value.trim())){
        email.focus();
        // 🔑 i18n pentru validare email
        const msg = window.t?.('pricing.form.invalidEmail') || 'Please enter a valid email.';
        email.setCustomValidity(msg);
        email.reportValidity();
        setTimeout(()=>email.setCustomValidity(''), 1500);
        return;
      }

      lastSubmit.set(key, now);
      // Fake success (integrate backend later)
      form.querySelector('.pricing__submit').style.display = 'none';
      const thanks = form.querySelector('.pricing__thanks');
      thanks.hidden = false;

      // 🔑 i18n pentru mesajul de mulțumire
      const strong = thanks.querySelector('strong');
      if (strong) strong.textContent = window.t?.('pricing.form.thanks') || strong.textContent;
      const demo = thanks.querySelector('.pricing__demo');
      if (demo) demo.textContent = window.t?.('pricing.form.demo') || demo.textContent;
    }, { passive:false });
  });
})();




// ===== Steps: reveal + gentle parallax (motion-safe) =====
(function initSteps(){
  const sec = document.querySelector('#steps');
  if (!sec) return;

  // reveal on view
  const cols = sec.querySelectorAll('.steps__col');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach((e, idx)=>{
      if (e.isIntersecting){
        // stagger 80ms
        setTimeout(()=> e.target.classList.add('is-visible'), idx * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  cols.forEach(c=> io.observe(c));

  // gentle parallax on images
  const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!mql.matches){
    const imgs = sec.querySelectorAll('.steps__media img');
    if (imgs.length){
      let ticking = false;
      const update = ()=>{
        const rect = sec.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        // progress ~ [-1, 1]
        const p = Math.max(-1, Math.min(1, ((vh/2 - (rect.top + rect.height/2)) / (vh/2))));
        imgs.forEach((img, i)=>{
          const amp = 10; // px
          img.style.transform = `translateY(${(p * amp) * (i%2 ? -1 : 1)}px)`;
        });
        ticking = false;
      };
      const onScroll = ()=>{
        if (!ticking){ ticking = true; requestAnimationFrame(update); }
      };
      window.addEventListener('scroll', onScroll, { passive:true });
      window.addEventListener('resize', onScroll, { passive:true });
      update();
    }
  }
})();




// ===== FAQ: reveal-on-CTA + JSON-LD =====
(function initFAQ(){
  const sec = document.querySelector('#faq');
  if (!sec) return;

  const btn = sec.querySelector('.faq__cta');
  const list = sec.querySelector('#faq-list');
  if (!btn || !list) return;

  // Deschidere o singură dată (rămâne deschis)
  btn.addEventListener('click', ()=>{
    list.hidden = false;
    btn.setAttribute('aria-expanded','true');
    btn.setAttribute('aria-disabled','true');
    btn.disabled = true;
    // scroll ușor până la listă (opțional)
    list.scrollIntoView({ behavior:'smooth', block:'start' });
    // generează JSON-LD după ce avem textul (post-i18n)
    buildFAQJsonLD();
  }, { once:true });

  function buildFAQJsonLD(){
    const items = Array.from(sec.querySelectorAll('.faq__item')).map(li=>{
      const q = li.querySelector('.faq__q')?.textContent?.trim() || '';
      const a = li.querySelector('.faq__a')?.textContent?.trim() || '';
      return { "@type":"Question", "name": q, "acceptedAnswer": { "@type":"Answer", "text": a } };
    });
    const data = { "@context":"https://schema.org", "@type":"FAQPage", "mainEntity": items };
    const slot = sec.querySelector('#faq-jsonld');
    if (slot) slot.textContent = JSON.stringify(data);
  }

  // Dacă ai sistem de i18n care rulează după load, poți re-construi JSON-LD după switch:
  // window.addEventListener('languagechange'...) => buildFAQJsonLD();
})();






// RAMANE MEREU LA FINAL====Reveal generic: pentru orice element cu .reveal (S3, S4 etc.) 

/* ===== S6: Detailed Benefits – reveal on scroll (fade + slide) ===== */
(function initDetailsSection(){
  const sec = document.querySelector('.details');
  if (!sec) return;
  const items = Array.from(sec.querySelectorAll('.ditem'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const el = e.target;
        const order = parseInt(el.getAttribute('data-order') || '1', 10);
        // mic stagger în funcție de poziție
        el.style.transitionDelay = `${Math.min(order * 60, 240)}ms`;
        el.classList.add('is-inview');
        io.unobserve(el);
      }
    });
  }, { threshold: 0.18 });

  items.forEach(item => io.observe(item));
})();



(function initReveal(){
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
})();






