// Offline support: the game (including all voices and sounds) works without internet after the first visit.
const CACHE = 'gaarden-96b8280ee4';
const FILES = ["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./apple-touch-icon.png","./audio/v/again_intro.mp3","./audio/v/album_intro.mp3","./audio/v/ball_blue.mp3","./audio/v/ball_right.mp3","./audio/v/ball_yellow.mp3","./audio/v/bed_hilde.mp3","./audio/v/bed_rufus.mp3","./audio/v/bed_tuva.mp3","./audio/v/coop_invite.mp3","./audio/v/dig_full.mp3","./audio/v/dig_go.mp3","./audio/v/dig_intro.mp3","./audio/v/dig_more.mp3","./audio/v/dig_more2.mp3","./audio/v/egg1.mp3","./audio/v/egg2.mp3","./audio/v/egg3.mp3","./audio/v/egg4.mp3","./audio/v/egg5.mp3","./audio/v/egg_empty.mp3","./audio/v/feed_cow.mp3","./audio/v/feed_done.mp3","./audio/v/feed_go.mp3","./audio/v/feed_hens.mp3","./audio/v/feed_horse.mp3","./audio/v/finale.mp3","./audio/v/free_intro.mp3","./audio/v/free_next.mp3","./audio/v/free_next_b.mp3","./audio/v/free_next_c.mp3","./audio/v/hilde_help.mp3","./audio/v/hilde_help5.mp3","./audio/v/hilde_thanks.mp3","./audio/v/hilde_thanks5.mp3","./audio/v/hint_ball.mp3","./audio/v/hint_coop.mp3","./audio/v/hint_dig.mp3","./audio/v/hint_dig_go.mp3","./audio/v/hint_dump.mp3","./audio/v/hint_eggs.mp3","./audio/v/hint_feed_go.mp3","./audio/v/hint_free.mp3","./audio/v/hint_hilde.mp3","./audio/v/hint_mem.mp3","./audio/v/hint_mem_go.mp3","./audio/v/hint_pig.mp3","./audio/v/hint_puz.mp3","./audio/v/hint_puz_go.mp3","./audio/v/hint_scoot.mp3","./audio/v/hint_sort.mp3","./audio/v/hint_trac.mp3","./audio/v/hint_trac_go.mp3","./audio/v/intro.mp3","./audio/v/intro2.mp3","./audio/v/mem_done.mp3","./audio/v/mem_go.mp3","./audio/v/mem_intro.mp3","./audio/v/mem_match.mp3","./audio/v/mem_match_b.mp3","./audio/v/mem_match_c.mp3","./audio/v/mem_miss.mp3","./audio/v/no_cow.mp3","./audio/v/no_hens.mp3","./audio/v/no_horse.mp3","./audio/v/pig_clean.mp3","./audio/v/pig_dirty.mp3","./audio/v/pig_intro.mp3","./audio/v/puz_done.mp3","./audio/v/puz_go.mp3","./audio/v/puz_intro.mp3","./audio/v/puz_piece.mp3","./audio/v/puz_piece_b.mp3","./audio/v/puz_piece_c.mp3","./audio/v/rufus_ball.mp3","./audio/v/scoot_done.mp3","./audio/v/scoot_intro.mp3","./audio/v/scoot_jump.mp3","./audio/v/scoot_lap.mp3","./audio/v/sort_done.mp3","./audio/v/sort_good1.mp3","./audio/v/sort_good2.mp3","./audio/v/sort_good3.mp3","./audio/v/sort_good4.mp3","./audio/v/sort_good5.mp3","./audio/v/sort_intro.mp3","./audio/v/sort_wrong_brown.mp3","./audio/v/sort_wrong_white.mp3","./audio/v/star.mp3","./audio/v/star_b.mp3","./audio/v/star_c.mp3","./audio/v/sticker_new.mp3","./audio/v/trac_barn_stop.mp3","./audio/v/trac_done.mp3","./audio/v/trac_go.mp3","./audio/v/trac_hay_stop.mp3","./audio/v/trac_intro.mp3","./audio/v/trac_jump.mp3","./audio/v/trac_loaded.mp3","./audio/v/trac_missed.mp3","./audio/v/wake_rufus.mp3","./audio/v/yum_cow.mp3","./audio/v/yum_hens.mp3","./audio/v/yum_horse.mp3","./audio/s/ambience.mp3","./audio/s/bark.mp3","./audio/s/chime.mp3","./audio/s/cluck.mp3","./audio/s/dirt.mp3","./audio/s/engine.mp3","./audio/s/horn.mp3","./audio/s/moo.mp3","./audio/s/music.mp3","./audio/s/neigh.mp3","./audio/s/oink.mp3","./audio/s/quack.mp3","./audio/s/splash.mp3","./audio/s/thump.mp3"];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // the game page: network first (to get updates), fall back to the saved copy
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put('./index.html', c)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  // everything else (sounds, icons, fonts): saved copy first
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok || r.type === 'opaque') { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); }
    return r;
  })));
});
