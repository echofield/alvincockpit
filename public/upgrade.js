(() => {
  'use strict';

  const EXTRA_LOCAL_TARGETS = Object.freeze([
    {organization:'Village Alliance',type:'Association',address:'8 East 8th Street, New York, NY 10003',walk:'~10 min',priority:'A',reason:'A nearby BID with a dense merchant, resident and institutional network. One relationship can open multiple neighborhood doors.',next:'Ask Business Development & Programs for one co-hosted neighborhood social, then a route into member businesses.',website:'https://greenwichvillage.nyc/'},
    {organization:'Gramercy Neighborhood Associates',type:'Association',address:'Gramercy Park, New York, NY 10003',walk:'~12 min',priority:'A',reason:'A long-running community organization that already supports neighborhood events, schools, residents and local businesses.',next:'Approach community programming with a co-hosted beginner social; frame it as neighborhood connection, not a dance class.',website:'https://www.gnaonline.org/'},
    {organization:'Flatiron NoMad Partnership',type:'Association',address:'230 Fifth Avenue, Suite 1511, New York, NY 10001',walk:'~16 min',priority:'A',reason:'A major nearby BID with a large workforce, residents, visitors and active event programming — strong multiplier potential.',next:'Ask marketing/programming for one employee or neighborhood pilot and a path into member businesses.',website:'https://www.flatironnomad.nyc/'},

    {organization:'Baruch College Alumni Relations',type:'Alumni',address:'One Bernard Baruch Way, New York, NY 10010',walk:'~17 min',priority:'A',reason:'Baruch Alumni Relations hosts dozens of events each year, including networking nights and affinity mixers.',next:'Pitch one capped alumni networking night at the studio; lead with easy conversation through movement.',website:'https://www.alumni.baruch.cuny.edu/events'},
    {organization:'Cooper Union Alumni Affairs',type:'Alumni',address:'41 Cooper Square, New York, NY 10003',walk:'~10 min',priority:'A',reason:'An active creative alumni network with All Cooper Weekend running September 17–19, 2026 — a concrete programming window.',next:'Contact Alumni Affairs now for an alumni social around reunion weekend or a follow-on young-alumni night.',website:'https://cooper.edu/alumni/AllCooperWeekend2026'},
    {organization:'Cardozo Law Alumni Association',type:'Alumni',address:'55 Fifth Avenue, New York, NY 10003',walk:'~6 min',priority:'A',reason:'A 16,000+ alumni network with affinity groups, reunions and networking programming only a few blocks away.',next:'Offer an after-work social for one affinity or practice group; make the first ask a single pilot date.',website:'https://cardozo.yu.edu/alumni'},

    {organization:'Paragon Sports',type:'Local business',address:'867 Broadway, New York, NY 10003',walk:'~1 min',priority:'A',reason:'A landmark movement-oriented neighbor practically next door, with both staff and customer-community potential.',next:'Walk in first. Ask local management/community marketing about a staff social or customer crossover night.',website:'https://www.paragonsports.com/'},
    {organization:'Regal Union Square',type:'Local business',address:'850 Broadway, New York, NY 10003',walk:'~1 min',priority:'A',reason:'A same-block entertainment destination: natural adjacency for date nights, private events and staff socials.',next:'Ask local management/events about a movie + dance date-night bundle, staff night or reciprocal neighborhood offer.',website:'https://www.regmovies.com/'},
    {organization:'Breads Bakery — Union Square',type:'Local business',address:'18 East 16th Street, New York, NY 10003',walk:'~3 min',priority:'A',reason:'High-footfall neighborhood hospitality close enough to make a real two-stop experience rather than a loose partnership.',next:'Pitch a bakery + beginner-dance occasion or staff social; start with local management.',website:'https://www.breadsbakery.com/'},
    {organization:'The Twenty Two New York',type:'Local business',address:'16 East 16th Street, New York, NY 10003',walk:'~3 min',priority:'A',reason:'Luxury hotel, restaurant and private-members club within minutes of the studio — strong fit for private couples and member experiences.',next:'Ask concierge, membership or private events for one preferred-partner test: a private Manhattan dance night.',website:'https://the22.com/new-york/'},
    {organization:'Barnes & Noble — Union Square',type:'Local business',address:'33 East 17th Street, New York, NY 10003',walk:'~4 min',priority:'B',reason:'A large cultural anchor with an event-going audience already choosing Union Square for experiences.',next:'Approach local events/community management with a themed social or staff experience.',website:'https://www.barnesandnoble.com/'},
    {organization:'Rothmans',type:'Local business',address:'222 Park Avenue South, New York, NY 10003',walk:'~5 min',priority:'A',reason:'A long-established menswear neighbor with wedding and occasion customers; first-dance referrals are commercially adjacent.',next:'Pitch a referral loop for wedding/occasion clients plus one staff or client social.',website:'https://www.rothmansny.com/'},
    {organization:'Hyatt Union Square New York',type:'Local business',address:'134 Fourth Avenue, New York, NY 10003',walk:'~6 min',priority:'A',reason:'A walkable hotel can make the studio a bookable guest memory with almost no transportation friction.',next:'Ask concierge/guest experience for a fixed 60–90 minute guest product and a simple referral path.',website:'https://www.hyatt.com/'},
    {organization:'Crunch Fitness — Union Square',type:'Local business',address:'113 Fourth Avenue, New York, NY 10003',walk:'~6 min',priority:'B',reason:'A large recurring fitness membership nearby creates a natural movement-community crossover.',next:'Ask club management about a members-only beginner social and reciprocal referral offer.',website:'https://www.crunch.com/'},
    {organization:'Time Out Market Union Square',type:'Local business',address:'124 East 14th Street, New York, NY 10003',walk:'~7 min',priority:'A',reason:'A food-and-culture destination built around programming can feed groups before or after a studio experience.',next:'Approach programming/partnerships with a co-promoted Union Square social night and a clear market-to-studio route.',website:'https://www.timeout.com/market/newyork'},
    {organization:'Civic Hall at Union Square',type:'Local business',address:'124 East 14th Street, New York, NY 10003',walk:'~7 min',priority:'A',reason:'A civic and technology community/event hub can supply teams, member groups and hosted event audiences.',next:'Ask events/community partnerships for a Team Chemistry pilot or member social at the studio.',website:'https://www.civichall.org/'}
  ]);

  const LOCAL = Object.freeze([...LOCAL_TARGETS, ...EXTRA_LOCAL_TARGETS]);
  const counts = LOCAL.reduce((acc, x) => (acc[x.type] = (acc[x.type] || 0) + 1, acc), {});

  const css = `
    .core-split{display:flex;flex-wrap:wrap;gap:7px;margin-top:13px}
    .core-split span{border:1px solid var(--line);padding:7px 9px;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);background:rgba(255,255,255,.18)}
    .core-split strong{color:var(--green);font-weight:700}
    .mobile-focus-launch{display:none}
    .focus-mobile-strip{display:flex;gap:8px;flex-wrap:wrap;margin:-5px 0 18px}
    .focus-mobile-strip span{border:1px solid var(--line);padding:8px 10px;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
    .focus-mobile-strip b{color:var(--green)}
    @media(max-width:620px){
      .mobile-nav{grid-template-columns:repeat(6,1fr)}
      .mobile-nav button[data-page="focus"]{background:var(--green);color:#fff!important;font-weight:750;transform:translateY(-4px);box-shadow:0 -5px 18px rgba(22,75,57,.16);border-top:1px solid var(--green)}
      .mobile-nav button[data-page="focus"]:after{content:' →'}
      .mobile-focus-launch{display:block;width:100%;text-align:left;border:1px solid rgba(22,75,57,.35);background:rgba(22,75,57,.055);padding:16px 16px 15px;margin:-4px 0 20px;color:var(--ink)}
      .mobile-focus-launch small{display:block;color:var(--green);font-size:9px;letter-spacing:.18em;text-transform:uppercase;font-weight:750;margin-bottom:8px}
      .mobile-focus-launch strong{display:block;font:400 27px/1.05 var(--serif);margin-bottom:7px}
      .mobile-focus-launch span{display:block;color:var(--muted);font-size:11px;line-height:1.45}
      #focus .hero{margin-bottom:12px}
      #focus .hero h1{font-size:44px}
      #focus .focus-mobile-strip{position:sticky;top:0;z-index:8;background:rgba(243,240,231,.96);backdrop-filter:blur(12px);margin:0 -24px 15px;padding:10px 24px;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
      #focus .focus-mobile-strip span{padding:6px 7px;font-size:9px;background:rgba(255,255,255,.32)}
      #focusSwitch{display:grid;grid-template-columns:1fr 1fr;gap:7px}
      #focusSwitch button{padding:12px 8px}
      .focus-stage{border-color:rgba(22,75,57,.35)}
      .focus-kicker{font-size:11px}
      .focus-name{font-size:42px}
      .focus-actions .primary{order:-2;width:100%;padding:15px;font-size:11px}
      .focus-actions .secondary{flex:1;text-align:center}
      #leads .core-split,#feeders .core-split{margin-bottom:4px}
    }
  `;
  const style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);

  const baseRenderLocalNetwork = renderLocalNetwork;
  renderLocalNetwork = function upgradedRenderLocalNetwork(){
    const q = document.querySelector('#localSearch').value.trim().toLowerCase();
    const type = document.querySelector('#localType').value;
    const priority = document.querySelector('#localPriority').value;
    const rows = LOCAL
      .filter(x => !q || [x.organization,x.type,x.address,x.reason,x.next].join(' ').toLowerCase().includes(q))
      .filter(x => !type || x.type === type)
      .filter(x => !priority || x.priority === priority)
      .sort((a,b) => priorityOrder(a.priority)-priorityOrder(b.priority) || a.walk.localeCompare(b.walk));
    document.querySelector('#localBody').innerHTML = rows.map(x => `<tr><td><div class="org">${esc(x.organization)}</div><span class="badge ${x.priority.toLowerCase()}">${x.priority}</span></td><td>${esc(x.type)}</td><td>${esc(x.reason)}</td><td><a class="walk" target="_blank" rel="noopener" href="${mapRoute(x.address)}">${esc(x.walk)} - Google route</a><div class="muted">${esc(x.address)}</div></td><td><a class="action-link" target="_blank" rel="noopener" href="${esc(x.website)}">Website ↗</a><div class="muted" style="margin-top:7px">${esc(x.next)}</div></td></tr>`).join('') || `<tr><td colspan="5"><div class="empty">No matching local targets.</div></td></tr>`;
    document.querySelector('#localCount').textContent = `${rows.length} of ${LOCAL.length} local targets`;
  };

  focusRows = function upgradedFocusRows(){
    const local = LOCAL.map((x,index)=>({kind:'local',index,...x,status:'Ready',context:x.walk}));
    const directRows = direct.filter(x=>!['Won','Lost'].includes(x.status)).map(x=>({kind:'direct',index:direct.indexOf(x),organization:x.organization,priority:x.priority,status:x.status,context:x.category,copy:x.offer,next:x.contact,fit:x.fit}));
    const feederRows = feeders.filter(x=>!['Won','Lost'].includes(x.status)).map(x=>({kind:'feeders',index:feeders.indexOf(x),organization:x.organization,priority:x.priority,status:x.status,context:x.category,copy:x.offer,next:x.contact,fit:x.fit}));
    const rows = focusScope==='local' ? local : focusScope==='direct' ? directRows : focusScope==='feeders' ? feederRows : [...local,...directRows,...feederRows];
    return rows.sort((a,b)=>priorityOrder(a.priority)-priorityOrder(b.priority) || String(a.context).localeCompare(String(b.context)));
  };

  const baseRenderFocus = renderFocus;
  renderFocus = function upgradedRenderFocus(){
    baseRenderFocus();
    const rows = focusRows();
    const labels = {local:`Nearby ${LOCAL.length}`,direct:`Direct ${direct.length}`,feeders:`Upstream ${feeders.length}`,all:`All ${direct.length+feeders.length+LOCAL.length}`};
    [...document.querySelectorAll('#focusSwitch button')].forEach((b,i)=>{
      const key=['local','direct','feeders','all'][i];
      b.textContent=labels[key];
    });
    let strip=document.querySelector('#focus .focus-mobile-strip');
    if(!strip){
      strip=document.createElement('div'); strip.className='focus-mobile-strip';
      document.querySelector('#focusSwitch').before(strip);
    }
    const core=direct.length+feeders.length;
    strip.innerHTML=`<span><b>Focus mode</b></span><span>${core} core = ${direct.length} direct + ${feeders.length} upstream</span><span>+ ${LOCAL.length} local</span><span>${focusCursor+1}/${rows.length || 0}</span>`;
    const sweep=document.querySelector('#focusContext .focus-metric:last-child p');
    if(sweep){
      sweep.textContent = focusScope==='local' ? `${LOCAL.length} hyperlocal routes around Union Square.` : focusScope==='direct' ? `${direct.length} direct NYC targets.` : focusScope==='feeders' ? `${feeders.length} upstream multipliers.` : `${core} core targets + ${LOCAL.length} hyperlocal routes.`;
    }
  };

  function addSplit(sectionId, emphasis){
    const hero=document.querySelector(`#${sectionId} .hero > div`); if(!hero || hero.querySelector('.core-split')) return;
    const split=document.createElement('div'); split.className='core-split';
    split.innerHTML=`<span><strong>143 core</strong></span><span>100 direct</span><span>43 upstream</span><span>+ ${LOCAL.length} local separate</span>`;
    hero.appendChild(split);
    const eyebrow=hero.querySelector('.eyebrow'); if(eyebrow) eyebrow.textContent=emphasis;
  }

  function enhanceChrome(){
    const totalNote=document.querySelector('#kpiTotal')?.nextElementSibling;
    const totalLabel=document.querySelector('#kpiTotal')?.previousElementSibling;
    if(totalLabel) totalLabel.textContent='Core targets';
    if(totalNote) totalNote.textContent=`${direct.length} direct + ${feeders.length} upstream · +${LOCAL.length} local`;
    addSplit('leads',`${direct.length} DIRECT · OF ${direct.length+feeders.length} CORE TARGETS`);
    addSplit('feeders',`${feeders.length} UPSTREAM · OF ${direct.length+feeders.length} CORE TARGETS`);

    const localIntro=document.querySelector('#local-network .network-intro .eyebrow');
    if(localIntro) localIntro.textContent=`UNION SQUARE FIELD NETWORK · ${LOCAL.length} LOCAL LEADS`;
    const chips=document.querySelector('#local-network .network-chips');
    if(chips){
      chips.querySelectorAll('.upgrade-count').forEach(x=>x.remove());
      [['Associations',counts.Association||0],['Alumni',counts.Alumni||0],['Local businesses',counts['Local business']||0]].forEach(([label,n])=>{
        const el=document.createElement('span'); el.className='network-chip upgrade-count'; el.textContent=`${label}: ${n}`; chips.appendChild(el);
      });
    }

    const navFocus=document.querySelector('.mobile-nav button[data-page="focus"]');
    if(navFocus) navFocus.textContent='Focus';

    const overviewHero=document.querySelector('#overview .hero');
    if(overviewHero && !document.querySelector('.mobile-focus-launch')){
      const launch=document.createElement('button'); launch.className='mobile-focus-launch'; launch.type='button';
      launch.onclick=()=>goPage('focus');
      launch.innerHTML=`<small>Focus mode · daily sweep</small><strong>Open the next move →</strong><span>${direct.length+feeders.length} core targets · ${LOCAL.length} hyperlocal routes · one target at a time</span>`;
      overviewHero.after(launch);
    }
  }

  ['#localSearch','#localType','#localPriority'].forEach(sel=>{
    const el=document.querySelector(sel); if(el){el.addEventListener('input',()=>renderLocalNetwork()); el.addEventListener('change',()=>renderLocalNetwork());}
  });

  enhanceChrome();
  renderLocalNetwork();
  renderFocus();
})();