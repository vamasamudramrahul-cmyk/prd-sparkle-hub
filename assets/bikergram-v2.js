
(function(){
  'use strict';
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const data=window.BIKERGRAM_FIXTURE||{};
  const stateName=id=>id==='AP'?'Andhra Pradesh':id==='TG'?'Telangana':'';
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const toast=(msg)=>{const el=$('#bg-toast');if(!el)return;el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),4200)};
  const image=(src)=>src?`<img src="${esc(src)}" alt="" loading="lazy">`:'';
  const card=(item,kind,href)=>{
    const name=item.name||item.title||item.issue||'Sample item';
    const desc=item.description||item.story||item.notes||'Sample description for the prototype.';
    const state=item.state_id?stateName(item.state_id):(item.state_ids||[]).map(stateName).join(' + ');
    const dist=(data.districts||[]).find(d=>d.id===item.district_id)?.name||'';
    const src=item.image||item.photos?.[0]||'';
    return `<article class="bg-card" data-search="${esc([name,desc,state,dist,item.category||item.event_type||''].join(' ').toLowerCase())}"><div class="bg-card-media">${image(src)}</div><div class="bg-card-body"><div class="bg-card-meta">${esc(kind)}${state?' · '+esc(state):''}</div><h3>${esc(name)}</h3><p>${esc(desc)}</p><a class="bg-card-link" href="${href}">View details →</a><div style="margin-top:12px"><span class="bg-pill">SAMPLE FIXTURE · UNVERIFIED</span></div></div></article>`;
  };
  // Shared navigation
  const toggle=$('#bg-mobile-toggle'), nav=$('#bg-nav-links');
  if(toggle&&nav)toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
  // Cookie preferences
  const cookie=$('#bg-cookie');
  if(cookie&&!localStorage.getItem('bg-cookie-choice'))cookie.classList.add('show');
  $$('[data-cookie]').forEach(b=>b.addEventListener('click',()=>{
    const choice=b.dataset.cookie;
    if(choice==='custom'){ $('#cookie-customize')?.classList.remove('bg-hidden'); return; }
    if(choice==='save-custom'){
      const prefs={essential:true,analytics:!!$('#cookie-analytics')?.checked,functional:!!$('#cookie-functional')?.checked,marketing:false};
      localStorage.setItem('bg-cookie-choice',JSON.stringify(prefs));cookie?.classList.remove('show');toast('Cookie preferences saved in this prototype.');return;
    }
    const prefs={essential:true,analytics:choice==='all',functional:choice==='all',marketing:false};
    localStorage.setItem('bg-cookie-choice',JSON.stringify(prefs));cookie?.classList.remove('show');
    toast(choice==='all'?'Optional cookies accepted in this prototype.':'Optional cookies rejected in this prototype.');
  }));
  $('#manage-cookies')?.addEventListener('click',()=>{cookie?.classList.add('show');$('#cookie-customize')?.classList.remove('bg-hidden');});
  // Demo forms never transmit or persist user-submitted information
  $$('.demo-form').forEach(form=>form.addEventListener('submit',e=>{
    e.preventDefault();
    if(!form.reportValidity())return;
    if(form.dataset.formKind==='sign-up'){
      const fd=new FormData(form);if(fd.get('password')!==fd.get('confirm_password')){toast('Passwords do not match.');return;}
      toast('Prototype only: account creation and verification email are not connected.');
    } else if(form.dataset.formKind==='password-reset') toast('Prototype only: password reset email delivery is not connected.');
    else if(form.dataset.formKind==='sign-in') toast('Prototype only: authentication provider is not connected.');
    else if(form.dataset.formKind==='account-deletion') toast('Prototype only: no account was deactivated.');
    else toast('Form preview validated. Backend submission is not connected; no information was sent or stored.');
  }));
  $$('[data-demo-action="google"]').forEach(b=>b.addEventListener('click',()=>toast('Google OAuth needs provider credentials and backend configuration.')));
  // Rider story directory
  const storyGrid=$('#story-grid');
  function renderStories(){
    if(!storyGrid)return;
    const q=($('#story-search')?.value||'').toLowerCase(), st=$('#story-state')?.value||'', district=$('#story-district')?.value||'', dest=($('#story-destination')?.value||'').toLowerCase(), date=$('#story-date')?.value||'';
    const rows=(data.rider_stories||[]).filter(x=>x.moderation_status==='Approved'&&(!st||x.state_id===st)&&(!district||x.district_id===district)&&(!date||x.trip_date===date)&&(!dest||String(x.destination||'').toLowerCase().includes(dest))&&[x.title,x.public_rider_name,x.story,x.destination,x.trip_type].join(' ').toLowerCase().includes(q)).sort((a,b)=>(b.trip_date||'').localeCompare(a.trip_date||''));
    storyGrid.innerHTML=rows.length?rows.map(x=>card(x,'Rider story',`trip-story.html?id=${encodeURIComponent(x.id)}`)).join(''):'<div class="bg-empty">No approved stories match these filters.</div>';
  }
  const storyState=$('#story-state'),storyDistrict=$('#story-district');
  function populateStoryDistricts(){if(!storyDistrict)return;storyDistrict.innerHTML='<option value="">All districts</option>'+(data.districts||[]).filter(d=>!storyState?.value||d.state_id===storyState.value).map(d=>`<option value="${esc(d.id)}">${esc(d.name)}</option>`).join('');}
  storyState?.addEventListener('change',()=>{populateStoryDistricts();renderStories();});
  storyDistrict?.addEventListener('change',renderStories);
  $('#story-search')?.addEventListener('input',renderStories);$('#story-destination')?.addEventListener('input',renderStories);$('#story-date')?.addEventListener('change',renderStories);
  populateStoryDistricts();renderStories();
  // Story detail
  const storyDetail=$('#story-detail');
  if(storyDetail){
    const id=new URLSearchParams(location.search).get('id'),x=(data.rider_stories||[]).find(s=>s.id===id&&s.moderation_status==='Approved');
    storyDetail.innerHTML=x?`<div class="bg-card"><div class="bg-card-media">${image(x.photos?.[0])}</div><div class="bg-card-body"><div class="bg-card-meta">${esc(stateName(x.state_id))} · ${esc(x.trip_date)}</div><h2>${esc(x.title)}</h2><p>Shared by ${esc(x.public_rider_name)}</p><p>${esc(x.start_location)} → ${esc(x.destination)}</p><p>${esc(x.story)}</p><span class="bg-pill">SAMPLE FIXTURE · UNVERIFIED</span></div></div><p style="margin-top:22px"><a href="rider-stories.html">← Back to Rider Stories</a></p>`:'<div class="bg-empty">This story is unavailable or has not been approved for public viewing. <a href="rider-stories.html">Return to Rider Stories</a>.</div>';
  }
  // Business details
  const businessDetail=$('#business-detail');
  if(businessDetail){
    const id=new URLSearchParams(location.search).get('id'),x=(data.businesses||[]).find(b=>b.id===id);
    businessDetail.innerHTML=x?`<div class="bg-split"><div class="bg-hero-image">${image(x.image)}</div><div><p class="bg-eyebrow">${esc(x.category||'BIKER BUSINESS')}</p><h2>${esc(x.name)}</h2><p>${esc(x.description)}</p><p class="bg-muted">${esc(stateName(x.state_id))} · ${(data.districts||[]).find(d=>d.id===x.district_id)?.name||'District not set'}</p><span class="bg-pill">SAMPLE FIXTURE · UNVERIFIED</span><p class="bg-form-note">No public phone, email, social link or operating hours are supplied because the fixture has no verified contact data.</p></div></div><section class="bg-section"><h2>Products &amp; Services</h2><p>Details pending verified business information.</p><h2>Gallery</h2><p>Additional verified gallery assets have not been supplied.</p><h2>Location</h2><p>Address, city, state and district details will appear only after verification. No interactive map is included on this page.</p><h2>Contact</h2><p>Public contact actions will appear only when verified contact information is available. No contact details are invented for this fixture.</p></section><a href="businesses.html">← Back to Biker Businesses</a>`:'<div class="bg-empty">Business not found. <a href="businesses.html">Browse the directory</a>.</div>';
  }
  // Global search across seven approved content categories
  const searchInput=$('#global-search-input'),results=$('#global-search-results');
  function renderSearch(){
    if(!searchInput||!results)return;
    const q=searchInput.value.toLowerCase().trim(),st=$('#global-search-state')?.value||'',district=$('#global-search-district')?.value||'',cat=$('#global-search-category')?.value||'';
    const groups=[
      ['clubs','Riding Clubs',data.clubs||[],x=>`club-profile.html?id=${encodeURIComponent(x.id)}`],
      ['destinations','Destinations',data.destinations||[],x=>`destination-details.html?id=${encodeURIComponent(x.id)}`],
      ['circuits','Riding Circuits',data.circuits||[],x=>`circuit-details.html?id=${encodeURIComponent(x.id)}`],
      ['events','Events & Rides',data.events||[],x=>`event-details.html?id=${encodeURIComponent(x.id)}`],
      ['businesses','Biker Businesses',data.businesses||[],x=>`business-details.html?id=${encodeURIComponent(x.id)}`],
      ['assistance','Rider Assistance',data.assistance_resources||[],x=>'rider-assistance.html'],
      ['stories','Rider Stories',(data.rider_stories||[]).filter(x=>x.moderation_status==='Approved'),x=>`trip-story.html?id=${encodeURIComponent(x.id)}`]
    ];
    let htmlOut='',count=0;
    groups.filter(g=>!cat||cat===g[0]).forEach(([key,label,rows,href])=>{
      const matched=rows.filter(x=>{
        const stateMatch=!st || x.state_id===st || (x.state_ids||[]).includes(st);
        const districtRecord=(data.districts||[]).find(d=>d.id===district);
        const districtMatch=!district || x.district_id===district || (key==='circuits' && districtRecord && (x.route_stops||[]).some(stop=>String(stop).toLowerCase()===districtRecord.name.toLowerCase()));
        const text=[x.name,x.title,x.description,x.story,x.category,x.event_type,x.issue].join(' ').toLowerCase();
        return stateMatch&&districtMatch&&(!q||text.includes(q));
      });
      if(matched.length){htmlOut+=`<div style="grid-column:1/-1"><p class="bg-eyebrow">${esc(label)} · ${matched.length}</p></div>`+matched.map(x=>card(x,label,href(x))).join('');count+=matched.length;}
    });
    results.innerHTML=htmlOut;$('#search-count').textContent=`${count} sample result${count===1?'':'s'} found.`;
    const suggestionBox=$('#search-suggestions');
    if(suggestionBox){
      const candidates=groups.flatMap(g=>g[2]).filter(x=>[x.name,x.title,x.description].join(' ').toLowerCase().includes(q)&&q.length>0).slice(0,5);
      suggestionBox.innerHTML=candidates.map(x=>`<button type="button" class="bg-tab" data-suggestion="${esc(x.name||x.title)}">${esc(x.name||x.title)}</button>`).join('');
      $$('[data-suggestion]',suggestionBox).forEach(b=>b.addEventListener('click',()=>{searchInput.value=b.dataset.suggestion;renderSearch();}));
    }
    $('#search-empty')?.classList.toggle('bg-hidden',count!==0);
  }
  const searchState=$('#global-search-state'),searchDistrict=$('#global-search-district');
  function populateSearchDistricts(){if(!searchDistrict)return;searchDistrict.innerHTML='<option value="">All districts</option>'+(data.districts||[]).filter(d=>!searchState?.value||d.state_id===searchState.value).map(d=>`<option value="${esc(d.id)}">${esc(d.name)}</option>`).join('');}
  const searchParams=new URLSearchParams(location.search),requestedDistrict=searchParams.get('district'),requestedState=searchParams.get('state'),requestedCategory=searchParams.get('category');
  if(requestedDistrict){const rec=(data.districts||[]).find(d=>d.id===requestedDistrict);if(rec&&searchState)searchState.value=rec.state_id;} else if(requestedState&&searchState&&['AP','TG'].includes(requestedState))searchState.value=requestedState;
  populateSearchDistricts();
  if(requestedDistrict&&searchDistrict&&Array.from(searchDistrict.options).some(o=>o.value===requestedDistrict))searchDistrict.value=requestedDistrict;
  if(requestedCategory&&$('#global-search-category')&&Array.from($('#global-search-category').options).some(o=>o.value===requestedCategory))$('#global-search-category').value=requestedCategory;
  searchInput?.addEventListener('input',renderSearch);
  searchState?.addEventListener('change',()=>{populateSearchDistricts();renderSearch();});
  searchDistrict?.addEventListener('change',renderSearch);
  $('#global-search-category')?.addEventListener('change',renderSearch);
  renderSearch();
  // District category selector
  const stateSel=$('#district-state'),districtSel=$('#district-choice'),catGrid=$('#district-category-grid');
  function populateDistricts(){
    if(!stateSel||!districtSel)return;
    districtSel.innerHTML='<option value="">Choose a district</option>'+(data.districts||[]).filter(d=>d.state_id===stateSel.value).map(d=>`<option value="${esc(d.id)}">${esc(d.name)}</option>`).join('');
    if(catGrid)catGrid.innerHTML='<div class="bg-empty">Select a district to view available categories.</div>';
  }
  stateSel?.addEventListener('change',populateDistricts);
  districtSel?.addEventListener('change',()=>{
    if(!catGrid)return;const id=districtSel.value;if(!id){catGrid.innerHTML='<div class="bg-empty">Select a district to view available categories.</div>';return;}
    const cats=[
      ['Riding Clubs',data.clubs||[],'clubs','clubs',x=>x.district_id===id],
      ['Destinations',data.destinations||[],'destinations','destinations',x=>x.district_id===id],
      ['Riding Circuits',data.circuits||[],'circuits','circuits',x=>(x.route_stops||[]).some(s=>(data.districts||[]).find(d=>d.id===id)?.name===s)],
      ['Events & Rides',data.events||[],'events','events',x=>x.district_id===id],
      ['Biker Businesses',data.businesses||[],'businesses','businesses',x=>x.district_id===id],
      ['Rider Assistance',data.assistance_resources||[],'assistance','assistance',x=>x.district_id===id],
      ['Rider Stories',data.rider_stories||[],'stories','stories',x=>x.district_id===id&&x.moderation_status==='Approved']
    ];
    const active=cats.filter(c=>c[1].some(c[4]));
    catGrid.innerHTML=active.length?active.map(c=>`<article class="bg-card"><div class="bg-card-body"><h3>${esc(c[0])}</h3><p>${c[1].filter(c[4]).length} sample item(s) in this district.</p><a class="bg-card-link" href="search.html?district=${encodeURIComponent(id)}&amp;category=${encodeURIComponent(c[3])}">Browse category →</a></div></article>`).join(''):'<div class="bg-empty">No published categories for this district in the current sample dataset.</div>';
  });
  if(stateSel&&districtSel){
    const wanted=new URLSearchParams(location.search).get('district');
    const rec=(data.districts||[]).find(d=>d.id===wanted);
    if(rec){stateSel.value=rec.state_id;populateDistricts();districtSel.value=rec.id;districtSel.dispatchEvent(new Event('change'));}
    else populateDistricts();
  } else populateDistricts();
  // Assistance directory filters link to the corresponding filtered search results.
  const as=$('#assist-state'),ad=$('#assist-district');
  function assistDistricts(){
    if(!as||!ad)return;
    ad.innerHTML='<option value="">All districts</option>'+(data.districts||[]).filter(d=>!as.value||d.state_id===as.value).map(d=>`<option value="${esc(d.id)}">${esc(d.name)}</option>`).join('');
    updateAssistanceLinks();
  }
  function updateAssistanceLinks(){
    if(!as||!ad)return;
    const params=new URLSearchParams();
    if(ad.value)params.set('district',ad.value);else if(as.value)params.set('state',as.value);
    const suffix=params.toString();
    const clubs=$('#assist-clubs-link'),businesses=$('#assist-businesses-link'),note=$('#assist-filter-note');
    if(clubs)clubs.href='search.html?category=clubs'+(suffix?'&'+suffix:'');
    if(businesses)businesses.href='search.html?category=businesses'+(suffix?'&'+suffix:'');
    if(note)note.textContent=ad.value?'Community and service links are filtered to the selected district.':as.value?'Community and service links are filtered to the selected state.':'Choose a state or district to narrow the community and service directory links.';
  }
  as?.addEventListener('change',()=>{assistDistricts();});
  ad?.addEventListener('change',updateAssistanceLinks);
  // Notification centre: sample filtering and deletion controls
  $$('[data-notif-tab]').forEach(b=>b.addEventListener('click',()=>{
    $$('[data-notif-tab]').forEach(x=>x.classList.toggle('active',x===b));
    const filter=b.dataset.notifTab;
    $$('[data-notification-status]').forEach(card=>card.classList.toggle('bg-hidden',filter!=='all'&&card.dataset.notificationStatus!==filter));
  }));
  $$('[data-delete-notification]').forEach(b=>b.addEventListener('click',()=>b.closest('[data-notification-status]')?.remove()));
  $('#clear-notifications')?.addEventListener('click',()=>{$$('[data-notification-status]').forEach(card=>card.remove());toast('Sample notifications cleared.');});
  // Language switcher: control exists, but full Telugu copy is a remaining localization task.
  $('#bg-language')?.addEventListener('change',e=>toast(e.target.value==='te'?'Telugu language selected. Full page translation is still pending.':'English selected.'));
})();
