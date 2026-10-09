/* ============================================================
   Digital Consulting Studios — i18n (EN/ES)
   House pattern: data-i18n dictionary + EN|ES toggle +
   localStorage('lang') + ?lang=es + <html lang> swap.
   Loaded BEFORE site.js so the headline word-split runs on
   already-translated text. Vanilla JS, no dependencies.
   ============================================================ */
(() => {
  'use strict';

  const I18N = {
    en: {
      'meta.title': 'Digital Consulting Studios — Websites, Automation & Content Systems',
      'meta.desc': 'A digital studio building websites, automation pipelines and content systems for growing businesses. Fixed prices, monthly care plans, Alaska based.',
      'a.lang': 'Cambiar idioma / Switch language',
      'a.menu': 'Menu',
      'a.logo': 'Digital Consulting Studios logo',
      'a.viz1': 'Animated pipeline visual',
      'a.viz2': 'Animated growth chart visual',
      'a.viz3': 'Rotating 3D wireframe visual',

      'nav.work': 'Work',
      'nav.services': 'Services',
      'nav.pricing': 'Pricing',
      'nav.care': 'Care Plans',
      'nav.quote': 'Get a quote',

      'hero.pill': 'Studio open — taking new projects',
      'hero.h1': 'Websites and systems that <span class="grad">win you the job</span>, built without agency overhead.',
      'hero.lead': 'Websites, automation pipelines and content systems for growing businesses. Fixed prices, written scope, and a care plan that keeps everything running after launch.',
      'hero.cta1': 'Get a fixed-price quote →',
      'hero.cta2': 'See the work',
      'm1': 'Service lines',
      'm2': 'Products shipped',
      'm3': 'Platforms published',
      'm4': 'Fixed-price work',

      'mq1': 'Business Websites', 'mq2': 'Automation Pipelines', 'mq3': 'Content Systems',
      'mq4': 'Game &amp; Interactive', 'mq5': 'Video &amp; Motion', 'mq6': 'Digital Products',
      'mq7': 'Local SEO', 'mq8': 'Care Plans', 'mq9': 'Fixed Pricing',

      'work.eyebrow': 'Selected work',
      'work.h2': 'Built, shipped, <span class="grad">in production</span>.',
      'work.lead': 'Live systems, not mockups. Each one is running right now — click through and judge it yourself.',
      'case1.meta': 'Drywall contractor · Wasilla &amp; Anchorage',
      'case1.problem': '<b>Problem:</b> An established crew with no web presence — every lead came by word of mouth, and nothing showed up in search.',
      'case1.built': '<b>Built:</b> Full marketing site with services, project gallery and FAQ, click-to-call in the header, a free-estimate banner, and a complete English/Spanish translation for the valley\'s bilingual customer base.',
      'case1.note': 'Live now — click through and try it on your phone.',
      'case1.tag1': 'Bilingual EN/ES', 'case1.tag2': 'Click-to-call', 'case1.tag3': 'Local SEO',
      'case1.link': 'Visit the live site <span aria-hidden="true">&#8599;</span>',
      'case2.meta': 'Lash &amp; wax studio · Wasilla',
      'case2.problem': '<b>Problem:</b> A licensed artist with 58 five-star reviews and no website — all that social proof was invisible to anyone searching.',
      'case2.built': '<b>Built:</b> Next.js studio site with animated service menu, before-and-after gallery, reviews, and Book Now buttons wired straight into her existing GlossGenius booking system — no workflow change for her.',
      'case2.note': 'Live on her own domain — booking and payments stay on the tools she already uses.',
      'case2.tag1': 'Next.js', 'case2.tag2': 'Custom domain', 'case2.tag3': 'Booking integration',
      'case2.link': 'Visit beautyluxeak.com <span aria-hidden="true">&#8599;</span>',
      'case3.meta': 'Browser game · in-house R&amp;D',
      'case3.problem': '<b>Problem:</b> We wanted a hard technical proving ground, not another portfolio piece.',
      'case3.built': '<b>Built:</b> A playable browser strategy game — Node backend, in-house pixel-art pipeline, automated deploy, and a live service kept up by health watchdogs.',
      'case3.note': 'Play it free. If this runs unattended, your website is not a challenge.',
      'case3.tag1': 'Node', 'case3.tag2': 'Game dev', 'case3.tag3': 'Automated deploy',
      'case3.link': 'Play the demo <span aria-hidden="true">&#8599;</span>',
      'work.also': 'Also shipped in-house: 40+ published titles through an automated generate-and-verify pipeline, a multi-platform content repurposing engine, and print-on-demand product automation. These are our own products — proof the systems work.',

      'sv.eyebrow': 'What we do',
      'sv.h2': 'Three specialisms. <span class="grad">Three more</span> when you need them.',
      'sv.lead': 'We lead with what we do best. The rest is there for when your business grows into it.',
      's1.h3': 'Business Websites',
      's1.p': 'Fast, mobile-first sites for trade and service businesses. Click-to-call, service-area pages, Google Business Profile, review requests. Built to turn a search into a phone call.',
      's1.tag1': 'Trades', 's1.tag2': 'Local SEO', 's1.tag3': 'Mobile-first',
      's2.h3': 'Automation &amp; Pipelines',
      's2.p': 'The repetitive work, handled: lead follow-up, missed-call text-back, reporting, publishing, and moving data between systems that don\'t talk to each other.',
      's2.tag1': 'n8n', 's2.tag2': 'APIs', 's2.tag3': 'Python',
      's3.h3': 'Content Systems',
      's3.p': 'One input becomes publish-ready output across every channel, with a human review gate before anything goes live.',
      's3.tag1': 'Repurposing', 's3.tag2': 'Scheduling', 's3.tag3': 'Review gate',
      'up.h3': 'Also available to existing clients',
      'up.p': 'Once your core system is running, these extend it. Most clients add one within the first year.',
      'up1.b': 'Game &amp; Interactive',
      'up1.s': 'Playable demos, browser games, interactive experiences and playable ads.',
      'up2.b': 'Video &amp; Motion',
      'up2.s': 'Short-form verticals, product video, animated explainers, motion identity.',
      'up3.b': 'Digital Products',
      'up3.s': 'Books, templates, printables and print-on-demand — built, QA\'d and published.',

      'pr.eyebrow': 'Project pricing',
      'pr.h2': 'Fixed prices, <span class="grad">written scope</span>.',
      'pr.lead': 'No hourly billing, no surprise invoices. You approve scope and price before work starts. 50% to begin, 50% on delivery. You own everything at launch.',
      'p1.h3': 'Starter Site',
      'p1.sub': 'Where most local businesses start',
      'p1.l1': 'Up to 5 pages', 'p1.l2': 'Mobile-first, fast by default',
      'p1.l3': 'Click-to-call + contact form', 'p1.l4': 'Google Business Profile setup',
      'p1.l5': '2 rounds of revisions', 'p1.l6': 'First 30 days of Care free',
      'p1.cta': 'Start here',
      'p2.badge': 'Most popular',
      'p2.h3': 'Growth Site',
      'p2.sub': 'For chasing more service areas',
      'p2.l1': 'Up to 10 pages', 'p2.l2': 'Service-area landing pages',
      'p2.l3': 'Review request automation', 'p2.l4': 'Missed-call text-back setup',
      'p2.l5': 'Local SEO + schema markup', 'p2.l6': '30 days post-launch support',
      'p3.h3': 'Site + Automation',
      'p3.sub': 'A website plus a working pipeline',
      'p3.l1': 'Everything in Growth', 'p3.l2': 'One custom automation built',
      'p3.l3': 'Content or follow-up pipeline', 'p3.l4': 'Written documentation',
      'p3.l5': '60 days support',
      'pr.foot': '<b>Custom systems</b> — multi-system pipelines, interactive builds, video production — are quoted after a free scoping call, typically <b>$5,000–$15,000</b>.',

      'care.eyebrow': 'Care plans',
      'care.h2': 'A site nobody maintains <span class="grad">stops earning</span>.',
      'care.lead': 'Every project includes 30 days of Care free. After that, pick a plan or walk away — you own everything either way.',
      'care.mo': '/mo',
      'c1.h3': 'Care',
      'c1.l1': 'Hosting management + SSL', 'c1.l2': 'Security updates &amp; backups',
      'c1.l3': 'Uptime monitoring', 'c1.l4': 'Up to 1 hr of content edits',
      'c1.l5': 'Monthly health report',
      'c2.h3': 'Growth',
      'c2.l1': 'Everything in Care', 'c2.l2': 'Up to 4 hrs of changes',
      'c2.l3': 'Monthly performance &amp; SEO review call', 'c2.l4': 'Review-request monitoring',
      'c2.l5': 'Quarterly content refresh',
      'c3.h3': 'Systems',
      'c3.l1': 'Everything in Growth', 'c3.l2': 'Automation monitoring &amp; tuning',
      'c3.l3': 'Up to 10 hrs build time', 'c3.l4': 'Priority same-day response',
      'c3.l5': 'Quarterly strategy review',
      'cad1.b': 'Monthly',
      'cad1.p': 'Automated health report: uptime, traffic, form submissions, automation runs — emailed, no chasing.',
      'cad2.b': 'Quarterly',
      'cad2.p': 'A 30-minute review call. What worked, what didn\'t, what changes next quarter.',
      'cad3.b': 'Annually',
      'cad3.p': 'Full site and systems audit with a written improvement plan for the year ahead.',

      'ps.eyebrow': 'How it works',
      'ps.h2': 'Four steps. <span class="grad">No mystery.</span>',
      'st1.h3': 'Free scoping call',
      'st1.p': '20 minutes. We ask what the business actually needs and say straight away if we\'re not the right fit.',
      'st2.h3': 'Fixed quote',
      'st2.p': 'Written scope, fixed price, delivery date — approved before any work starts.',
      'st3.h3': 'We build it',
      'st3.p': 'Progress on a real URL, not in status meetings. Questions answered same day.',
      'st4.h3': 'Launch + care',
      'st4.p': 'It goes live, you get documentation and every credential, and the care plan keeps it healthy.',
      'eng.h3': 'Why our pricing holds',
      'eng.p': 'We\'ve spent years building our own products, so the repetitive parts of a build — testing, deployment, QA checks — already run through tooling we wrote and maintain. That\'s time we don\'t bill you for, and it\'s why we can quote a fixed price and hold it. No office, no sales floor, no account managers between you and the person doing the work.',

      'faq.eyebrow': 'Straight answers',
      'faq.h2': 'Questions we get asked',
      'q1.s': 'How can a small studio deliver this fast?',
      'q1.p': 'Years of building our own products means the repetitive parts of a web build are already solved — our testing, deployment and QA tooling is written and battle-tested. We spend our time on the parts that are specific to your business, not reinventing the plumbing. Every client-facing deliverable is reviewed and approved by a person before it ships, and you always have someone to call.',
      'q2.s': 'Do I own the website?',
      'q2.p': 'Completely. You own the domain, the hosting account and the code. Every credential and the documentation are handed over at launch. We don\'t hold sites hostage behind a monthly fee — care plans are optional and cancellable any time.',
      'q3.s': 'What if I don\'t like it?',
      'q3.p': 'The first payment covers the build to a reviewable state. If what you see doesn\'t match what we agreed in writing, you don\'t pay the second half and owe nothing further. Two rounds of revisions are included in every package.',
      'q4.s': 'Why is this cheaper than an agency?',
      'q4.p': 'No office, no sales team, no account managers, and automation on the repetitive parts. You\'re paying for the build, not the overhead wrapped around it.',
      'q5.s': 'How long does it take?',
      'q5.p': 'Starter Site: typically 1–2 weeks from approved scope. Growth Site: 2–4 weeks. Automation work depends on how many systems are involved and gets a firm date in the written quote. If a date is going to slip, you hear it from us before it does.',
      'q6.s': 'Do I have to take a care plan?',
      'q6.p': 'No. Every project includes 30 days free, then it continues at $149/mo unless you cancel — and cancelling is one email. Plenty of clients self-manage. We just won\'t pretend an unmaintained site keeps performing.',

      'ct.eyebrow': 'Start here',
      'ct.h2': 'Tell us what you need built.',
      'ct.lead': 'Every real inquiry gets a reply within one business day — a quote, a question, or an honest "we\'re not the right studio for this."',
      'f.name': 'Your name',
      'f.email': 'Email',
      'f.phone': 'Phone (optional)',
      'f.service': 'What do you need?',
      'f.o1': 'Business website', 'f.o2': 'Automation / pipeline', 'f.o3': 'Content system',
      'f.o4': 'Game / interactive', 'f.o5': 'Video &amp; motion', 'f.o6': 'Digital products',
      'f.o7': 'Not sure yet',
      'f.budget': 'Budget range',
      'f.b1': 'Under $1,500', 'f.b2': '$1,500 – $3,500', 'f.b3': '$3,500 – $7,500',
      'f.b4': '$7,500 – $15,000', 'f.b5': '$15,000+',
      'f.msg': 'Tell us about the project',
      'f.ph': 'What\'s the business, and what\'s not working right now?',
      'f.send': 'Send project brief →',
      'f.note': 'No newsletter, no automated sales sequence. "Not sure yet" is a perfectly good answer on budget.',
      'f.sending': 'Sending…',
      'f.sent': '<b style="color:#34d399">Brief received — thank you.</b> We read every inquiry and reply within one business day.',
      'as1.h3': 'Direct contact',
      'as2.h3': 'What happens next',
      'as2.p': '1. We read your brief.<br>2. A short call if it\'s a fit.<br>3. Written scope + fixed price.<br>4. Build starts.',
      'as3.h3': 'How we work',
      'as3.p': 'Fixed price agreed up front. 50% to start, 50% on delivery. Full ownership handed over at launch.',

      'ft.tag': 'A digital studio building websites, automation and content systems for businesses that want output, not overhead.',
      'ft.services': 'Services',
      'ft.sv1': 'Business websites', 'ft.sv2': 'Automation &amp; pipelines',
      'ft.sv3': 'Content systems', 'ft.sv4': 'Game, video &amp; products',
      'ft.studio': 'Studio',
      'ft.faq': 'FAQ',
      'ft.touch': 'Get in touch',
      'ft.quote': 'Request a quote',
      'ft.loc': 'Alaska, USA',
      'ft.rights': 'All rights reserved.',
      'ft.built': 'Built and maintained in-house.'
    },

    es: {
      'meta.title': 'Digital Consulting Studios — Sitios web, automatización y sistemas de contenido',
      'meta.desc': 'Un estudio digital que construye sitios web, pipelines de automatización y sistemas de contenido para negocios en crecimiento. Precios fijos, planes de mantenimiento mensuales, con base en Alaska.',
      'a.lang': 'Switch language / Cambiar idioma',
      'a.menu': 'Menú',
      'a.logo': 'Logotipo de Digital Consulting Studios',
      'a.viz1': 'Visual animado de pipeline',
      'a.viz2': 'Visual animado de gráfica de crecimiento',
      'a.viz3': 'Visual 3D giratorio',

      'nav.work': 'Proyectos',
      'nav.services': 'Servicios',
      'nav.pricing': 'Precios',
      'nav.care': 'Planes de mantenimiento',
      'nav.quote': 'Solicitar presupuesto',

      'hero.pill': 'Estudio abierto — aceptando nuevos proyectos',
      'hero.h1': 'Sitios web y sistemas que <span class="grad">le ganan el trabajo</span>, construidos sin el costo de una agencia.',
      'hero.lead': 'Sitios web, pipelines de automatización y sistemas de contenido para negocios en crecimiento. Precios fijos, alcance por escrito y un plan de mantenimiento que lo mantiene todo funcionando después del lanzamiento.',
      'hero.cta1': 'Solicitar presupuesto fijo →',
      'hero.cta2': 'Ver los proyectos',
      'm1': 'Líneas de servicio',
      'm2': 'Productos publicados',
      'm3': 'Plataformas de publicación',
      'm4': 'Trabajo a precio fijo',

      'mq1': 'Sitios Web para Negocios', 'mq2': 'Pipelines de Automatización', 'mq3': 'Sistemas de Contenido',
      'mq4': 'Juegos e Interactivos', 'mq5': 'Video y Motion', 'mq6': 'Productos Digitales',
      'mq7': 'SEO Local', 'mq8': 'Planes de Mantenimiento', 'mq9': 'Precios Fijos',

      'work.eyebrow': 'Proyectos destacados',
      'work.h2': 'Construido, entregado, <span class="grad">en producción</span>.',
      'work.lead': 'Sistemas en vivo, no maquetas. Cada uno está funcionando ahora mismo — entre y júzguelo usted mismo.',
      'case1.meta': 'Contratista de drywall · Wasilla y Anchorage',
      'case1.problem': '<b>Problema:</b> Un equipo establecido sin presencia web — cada cliente llegaba de boca en boca y nada aparecía en las búsquedas.',
      'case1.built': '<b>Construido:</b> Sitio de marketing completo con servicios, galería de proyectos y preguntas frecuentes, botón de llamada en el encabezado, banner de presupuesto gratis y traducción completa inglés/español para la clientela bilingüe del valle.',
      'case1.note': 'En vivo ahora — ábralo y pruébelo en su teléfono.',
      'case1.tag1': 'Bilingüe EN/ES', 'case1.tag2': 'Llamada con un toque', 'case1.tag3': 'SEO local',
      'case1.link': 'Visitar el sitio en vivo <span aria-hidden="true">&#8599;</span>',
      'case2.meta': 'Estudio de pestañas y depilación · Wasilla',
      'case2.problem': '<b>Problema:</b> Una artista con licencia, 58 reseñas de cinco estrellas y ningún sitio web — toda esa prueba social era invisible para quien buscaba.',
      'case2.built': '<b>Construido:</b> Sitio de estudio en Next.js con menú de servicios animado, galería de antes y después, reseñas y botones de reserva conectados directamente a su sistema GlossGenius — sin cambiar su forma de trabajar.',
      'case2.note': 'En vivo en su propio dominio — reservas y pagos siguen en las herramientas que ya usa.',
      'case2.tag1': 'Next.js', 'case2.tag2': 'Dominio propio', 'case2.tag3': 'Integración de reservas',
      'case2.link': 'Visitar beautyluxeak.com <span aria-hidden="true">&#8599;</span>',
      'case3.meta': 'Juego de navegador · I+D interno',
      'case3.problem': '<b>Problema:</b> Queríamos un campo de pruebas técnico exigente, no otra pieza de portafolio.',
      'case3.built': '<b>Construido:</b> Un juego de estrategia jugable en el navegador — backend en Node, pipeline interno de pixel art, despliegue automatizado y un servicio en vivo supervisado por monitores de salud.',
      'case3.note': 'Juéguelo gratis. Si esto corre sin supervisión, su sitio web no es un reto.',
      'case3.tag1': 'Node', 'case3.tag2': 'Desarrollo de juegos', 'case3.tag3': 'Despliegue automatizado',
      'case3.link': 'Jugar la demo <span aria-hidden="true">&#8599;</span>',
      'work.also': 'También entregado internamente: más de 40 títulos publicados mediante un pipeline automatizado de generación y verificación, un motor multiplataforma de reutilización de contenido y automatización de productos de impresión bajo demanda. Son productos propios — la prueba de que los sistemas funcionan.',

      'sv.eyebrow': 'Qué hacemos',
      'sv.h2': 'Tres especialidades. <span class="grad">Tres más</span> cuando las necesite.',
      'sv.lead': 'Lideramos con lo que mejor hacemos. El resto está ahí para cuando su negocio crezca.',
      's1.h3': 'Sitios Web para Negocios',
      's1.p': 'Sitios rápidos y móviles para oficios y negocios de servicio. Llamada con un toque, páginas por área de servicio, Perfil de Negocio de Google y solicitudes de reseñas. Hechos para convertir una búsqueda en una llamada.',
      's1.tag1': 'Oficios', 's1.tag2': 'SEO local', 's1.tag3': 'Móvil primero',
      's2.h3': 'Automatización y Pipelines',
      's2.p': 'El trabajo repetitivo, resuelto: seguimiento de prospectos, respuesta por texto a llamadas perdidas, reportes, publicación y mover datos entre sistemas que no se comunican entre sí.',
      's2.tag1': 'n8n', 's2.tag2': 'APIs', 's2.tag3': 'Python',
      's3.h3': 'Sistemas de Contenido',
      's3.p': 'Un solo insumo se convierte en contenido listo para publicar en cada canal, con revisión humana antes de que algo salga en vivo.',
      's3.tag1': 'Reutilización', 's3.tag2': 'Programación', 's3.tag3': 'Revisión humana',
      'up.h3': 'También disponible para clientes existentes',
      'up.p': 'Cuando su sistema principal esté funcionando, esto lo amplía. La mayoría de los clientes agrega uno durante el primer año.',
      'up1.b': 'Juegos e Interactivos',
      'up1.s': 'Demos jugables, juegos de navegador, experiencias interactivas y anuncios jugables.',
      'up2.b': 'Video y Motion',
      'up2.s': 'Videos verticales cortos, video de producto, explicativos animados e identidad en movimiento.',
      'up3.b': 'Productos Digitales',
      'up3.s': 'Libros, plantillas, imprimibles e impresión bajo demanda — construidos, verificados y publicados.',

      'pr.eyebrow': 'Precios por proyecto',
      'pr.h2': 'Precios fijos, <span class="grad">alcance por escrito</span>.',
      'pr.lead': 'Sin cobro por hora, sin facturas sorpresa. Usted aprueba el alcance y el precio antes de empezar. 50% para comenzar, 50% a la entrega. Todo es suyo al lanzamiento.',
      'p1.h3': 'Sitio Inicial',
      'p1.sub': 'Donde empieza la mayoría de los negocios locales',
      'p1.l1': 'Hasta 5 páginas', 'p1.l2': 'Móvil primero, rápido por diseño',
      'p1.l3': 'Llamada con un toque + formulario de contacto', 'p1.l4': 'Configuración del Perfil de Negocio de Google',
      'p1.l5': '2 rondas de revisiones', 'p1.l6': 'Primeros 30 días de Mantenimiento gratis',
      'p1.cta': 'Empiece aquí',
      'p2.badge': 'El más popular',
      'p2.h3': 'Sitio de Crecimiento',
      'p2.sub': 'Para ganar más áreas de servicio',
      'p2.l1': 'Hasta 10 páginas', 'p2.l2': 'Páginas por área de servicio',
      'p2.l3': 'Automatización de solicitudes de reseñas', 'p2.l4': 'Respuesta por texto a llamadas perdidas',
      'p2.l5': 'SEO local + datos estructurados', 'p2.l6': '30 días de soporte tras el lanzamiento',
      'p3.h3': 'Sitio + Automatización',
      'p3.sub': 'Un sitio web más un pipeline funcionando',
      'p3.l1': 'Todo lo del plan Crecimiento', 'p3.l2': 'Una automatización a la medida',
      'p3.l3': 'Pipeline de contenido o de seguimiento', 'p3.l4': 'Documentación por escrito',
      'p3.l5': '60 días de soporte',
      'pr.foot': '<b>Sistemas a la medida</b> — pipelines multisistema, desarrollos interactivos, producción de video — se cotizan tras una llamada gratuita de alcance, típicamente <b>$5,000–$15,000</b>.',

      'care.eyebrow': 'Planes de mantenimiento',
      'care.h2': 'Un sitio que nadie mantiene <span class="grad">deja de generar</span>.',
      'care.lead': 'Cada proyecto incluye 30 días de Mantenimiento gratis. Después, elija un plan o siga por su cuenta — todo es suyo de cualquier forma.',
      'care.mo': '/mes',
      'c1.h3': 'Mantenimiento',
      'c1.l1': 'Gestión de hosting + SSL', 'c1.l2': 'Actualizaciones de seguridad y respaldos',
      'c1.l3': 'Monitoreo de disponibilidad', 'c1.l4': 'Hasta 1 hora de ediciones de contenido',
      'c1.l5': 'Reporte mensual de salud',
      'c2.h3': 'Crecimiento',
      'c2.l1': 'Todo lo del plan Mantenimiento', 'c2.l2': 'Hasta 4 horas de cambios',
      'c2.l3': 'Llamada mensual de rendimiento y SEO', 'c2.l4': 'Monitoreo de solicitudes de reseñas',
      'c2.l5': 'Actualización trimestral de contenido',
      'c3.h3': 'Sistemas',
      'c3.l1': 'Todo lo del plan Crecimiento', 'c3.l2': 'Monitoreo y ajuste de automatizaciones',
      'c3.l3': 'Hasta 10 horas de desarrollo', 'c3.l4': 'Respuesta prioritaria el mismo día',
      'c3.l5': 'Revisión estratégica trimestral',
      'cad1.b': 'Mensual',
      'cad1.p': 'Reporte de salud automatizado: disponibilidad, tráfico, formularios enviados, ejecuciones de automatización — por correo, sin perseguir a nadie.',
      'cad2.b': 'Trimestral',
      'cad2.p': 'Una llamada de revisión de 30 minutos. Qué funcionó, qué no y qué cambia el próximo trimestre.',
      'cad3.b': 'Anual',
      'cad3.p': 'Auditoría completa del sitio y los sistemas con un plan de mejora por escrito para el año siguiente.',

      'ps.eyebrow': 'Cómo funciona',
      'ps.h2': 'Cuatro pasos. <span class="grad">Sin misterio.</span>',
      'st1.h3': 'Llamada gratuita de alcance',
      'st1.p': '20 minutos. Preguntamos qué necesita realmente el negocio y le decimos de inmediato si no somos la opción correcta.',
      'st2.h3': 'Presupuesto fijo',
      'st2.p': 'Alcance por escrito, precio fijo y fecha de entrega — aprobados antes de empezar cualquier trabajo.',
      'st3.h3': 'Lo construimos',
      'st3.p': 'Avance en una URL real, no en juntas de estatus. Preguntas respondidas el mismo día.',
      'st4.h3': 'Lanzamiento + mantenimiento',
      'st4.p': 'Sale en vivo, usted recibe la documentación y todas las credenciales, y el plan de mantenimiento lo mantiene sano.',
      'eng.h3': 'Por qué nuestros precios se sostienen',
      'eng.p': 'Llevamos años construyendo productos propios, así que las partes repetitivas de un desarrollo — pruebas, despliegue, control de calidad — ya corren con herramientas que escribimos y mantenemos. Ese tiempo no se lo cobramos, y por eso podemos dar un precio fijo y sostenerlo. Sin oficina, sin piso de ventas, sin gerentes de cuenta entre usted y quien hace el trabajo.',

      'faq.eyebrow': 'Respuestas directas',
      'faq.h2': 'Preguntas que nos hacen',
      'q1.s': '¿Cómo puede un estudio pequeño entregar tan rápido?',
      'q1.p': 'Años construyendo productos propios significan que las partes repetitivas de un desarrollo web ya están resueltas — nuestras herramientas de pruebas, despliegue y control de calidad están escritas y probadas en batalla. Dedicamos el tiempo a lo que es específico de su negocio, no a reinventar la plomería. Cada entregable lo revisa y aprueba una persona antes de salir, y usted siempre tiene a quién llamar.',
      'q2.s': '¿El sitio web es mío?',
      'q2.p': 'Completamente. Usted es dueño del dominio, la cuenta de hosting y el código. Todas las credenciales y la documentación se entregan en el lanzamiento. No retenemos sitios a cambio de una cuota mensual — los planes de mantenimiento son opcionales y cancelables en cualquier momento.',
      'q3.s': '¿Y si no me gusta?',
      'q3.p': 'El primer pago cubre el desarrollo hasta un estado revisable. Si lo que ve no coincide con lo acordado por escrito, no paga la segunda mitad y no debe nada más. Cada paquete incluye dos rondas de revisiones.',
      'q4.s': '¿Por qué es más barato que una agencia?',
      'q4.p': 'Sin oficina, sin equipo de ventas, sin gerentes de cuenta, y automatización en las partes repetitivas. Usted paga por el desarrollo, no por la estructura que lo rodea.',
      'q5.s': '¿Cuánto tarda?',
      'q5.p': 'Sitio Inicial: típicamente 1–2 semanas desde el alcance aprobado. Sitio de Crecimiento: 2–4 semanas. El trabajo de automatización depende de cuántos sistemas participan y recibe una fecha firme en el presupuesto por escrito. Si una fecha va a moverse, se entera por nosotros antes de que pase.',
      'q6.s': '¿Estoy obligado a tomar un plan de mantenimiento?',
      'q6.p': 'No. Cada proyecto incluye 30 días gratis; después continúa a $149/mes salvo que cancele — y cancelar es un correo. Muchos clientes se administran solos. Simplemente no vamos a fingir que un sitio sin mantenimiento sigue rindiendo.',

      'ct.eyebrow': 'Empiece aquí',
      'ct.h2': 'Cuéntenos qué necesita construir.',
      'ct.lead': 'Cada consulta real recibe respuesta en un día hábil — un presupuesto, una pregunta o un honesto "no somos el estudio indicado para esto".',
      'f.name': 'Su nombre',
      'f.email': 'Correo electrónico',
      'f.phone': 'Teléfono (opcional)',
      'f.service': '¿Qué necesita?',
      'f.o1': 'Sitio web para negocio', 'f.o2': 'Automatización / pipeline', 'f.o3': 'Sistema de contenido',
      'f.o4': 'Juego / interactivo', 'f.o5': 'Video y motion', 'f.o6': 'Productos digitales',
      'f.o7': 'Aún no lo sé',
      'f.budget': 'Rango de presupuesto',
      'f.b1': 'Menos de $1,500', 'f.b2': '$1,500 – $3,500', 'f.b3': '$3,500 – $7,500',
      'f.b4': '$7,500 – $15,000', 'f.b5': '$15,000+',
      'f.msg': 'Cuéntenos sobre el proyecto',
      'f.ph': '¿Cuál es el negocio y qué no está funcionando ahora mismo?',
      'f.send': 'Envíenos su proyecto →',
      'f.note': 'Sin boletines ni secuencias de venta automatizadas. "Aún no lo sé" es una respuesta perfectamente válida para el presupuesto.',
      'f.sending': 'Enviando…',
      'f.sent': '<b style="color:#34d399">Solicitud recibida — gracias.</b> Leemos cada mensaje y respondemos en un día hábil.',
      'as1.h3': 'Contacto directo',
      'as2.h3': 'Qué sigue',
      'as2.p': '1. Leemos su solicitud.<br>2. Una llamada corta si hay compatibilidad.<br>3. Alcance por escrito + precio fijo.<br>4. Empieza el desarrollo.',
      'as3.h3': 'Cómo trabajamos',
      'as3.p': 'Precio fijo acordado desde el inicio. 50% para empezar, 50% a la entrega. Propiedad total entregada en el lanzamiento.',

      'ft.tag': 'Un estudio digital que construye sitios web, automatización y sistemas de contenido para negocios que quieren resultados, no gastos generales.',
      'ft.services': 'Servicios',
      'ft.sv1': 'Sitios web para negocios', 'ft.sv2': 'Automatización y pipelines',
      'ft.sv3': 'Sistemas de contenido', 'ft.sv4': 'Juegos, video y productos',
      'ft.studio': 'Estudio',
      'ft.faq': 'Preguntas frecuentes',
      'ft.touch': 'Contacto',
      'ft.quote': 'Solicitar presupuesto',
      'ft.loc': 'Alaska, EE. UU.',
      'ft.rights': 'Todos los derechos reservados.',
      'ft.built': 'Construido y mantenido internamente.'
    }
  };

  const getInitialLang = () => {
    try {
      const q = new URLSearchParams(location.search).get('lang');
      if (q === 'es' || q === 'en') {
        try { localStorage.setItem('lang', q); } catch (e) {}
        return q;
      }
      const saved = localStorage.getItem('lang');
      if (saved === 'es' || saved === 'en') return saved;
    } catch (e) {}
    return 'en';
  };

  let lang = getInitialLang();
  const t = (key) => {
    const d = I18N[lang] || I18N.en;
    return (key in d) ? d[key] : (I18N.en[key] !== undefined ? I18N.en[key] : key);
  };

  const apply = () => {
    document.documentElement.lang = lang;
    document.title = t('meta.title');
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', t('meta.desc'));
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.innerHTML = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      el.setAttribute('alt', t(el.getAttribute('data-i18n-alt')));
    });
    document.querySelectorAll('.lang-toggle [data-lang-opt]').forEach(s => {
      s.classList.toggle('on', s.getAttribute('data-lang-opt') === lang);
    });
  };

  const setLang = (l) => {
    if (l !== 'en' && l !== 'es') return;
    lang = l;
    try { localStorage.setItem('lang', l); } catch (e) {}
    apply();
  };

  // expose for site.js dynamic strings + console/debug use
  window.i18nT = t;
  window.setLang = setLang;

  const btn = document.querySelector('.lang-toggle');
  if (btn) btn.addEventListener('click', () => setLang(lang === 'en' ? 'es' : 'en'));

  apply();
})();
