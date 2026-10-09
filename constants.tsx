
import { Event, Livestream, Podcast, SocialLink } from './types';

export const PRESS_KIT_URL = "https://drive.google.com/file/d/1PTl3Q23ZzlNUY0Y4ykZFHc0MnZrslq45/view?usp=sharing";

export const MIXTAPES = [
  {
    id: 'm-nuance',
    title: 'nuance studio',
    artist: 'nuance',
    date: '2026-01-01',
    scUrl: 'https://soundcloud.com/nuancestudio',
    scEmbedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nuancestudio&auto_play=true&visual=false&show_artwork=false&buying=false&liking=false&download=false&sharing=false&show_comments=false&show_reposts=false&show_teaser=false',
  },
  // ajouter des sorties spécifiques ici pour les mettre en avant individuellement
];

export const RELEASES = [
  {
    id: 'r-nms005',
    title: 'mixtape series 005',
    artist: 'kat',
    date: '2026',
    catalog: 'NMS005',
    scUrl: 'https://soundcloud.com/nuancestudio/nuance-mixtape-series-005-w',
  },
  {
    id: 'r-nms004',
    title: 'mixtape series 004',
    artist: 'jovan grujić',
    date: '2026',
    catalog: 'NMS004',
    scUrl: 'https://soundcloud.com/nuancestudio/nuance-mixtape-series-w-jovan',
  },
  {
    id: 'r-nms003',
    title: 'mixtape series 003',
    artist: 'sef:d',
    date: '2026',
    catalog: 'NMS003',
    scUrl: 'https://soundcloud.com/nuancestudio/nuance-mixtape-series-003-w',
  },
  {
    id: 'r-nms002',
    title: 'mixtape series 002',
    artist: 'lu:kə',
    date: '2026',
    catalog: 'NMS002',
    scUrl: 'https://soundcloud.com/nuancestudio/nuance-mixtape-series-002-w-lu',
  },
  {
    id: 'r-nms001',
    title: 'mixtape series 001',
    artist: 'liema',
    date: '2026',
    catalog: 'NMS001',
    scUrl: 'https://soundcloud.com/nuancestudio/nuance-mixtape-series-001-w',
  },
  {
    id: 'r1',
    title: 'ciel noir',
    artist: 'cyprien noiriel',
    date: '2026',
    catalog: 'NUR001',
    scUrl: 'https://soundcloud.com/cyprien_nuance/sets/ciel-noir',
  },
  // ajouter chaque nouvelle sortie ici — apparaît automatiquement dans archives
];

export const LABEL_RELEASE = {
  catalog: 'TOT001',
  title: 'the truth is out there',
  label: 'nuance recording',
  date: '18.11.2026',
  artwork: '@bertanoezsoy',
  tracklist: [
    { artist: 'letherique', title: 'la commedia' },
    { artist: 'shaed', title: 'pantone 808' },
    { artist: 'shônagon', title: 'you got it' },
    { artist: 'liema', title: 'grizzly' },
    { artist: 'cyprien noiriel', title: 'transmission' },
    { artist: 'd2000p', title: 'agent 13' },
    { artist: 'crash server', title: 'x runs' },
    { artist: 'ralt144mi', title: 'euclidean sports resort' },
  ]
};

export const EVENTS: Event[] = [
  {
    id: 'e3',
    title: 'release party — the truth is out there',
    date: '05.12.26',
    location: 'secret place, strasbourg',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000',
    description: 'release party [TOT001] nuance recording. secret place strasbourg.',
    type: 'upcoming',
    ticketUrl: 'https://fr.ra.co/events/2553089'
  },
  {
    id: 'e4',
    title: 'release party — the truth is out there',
    date: '20.11.26',
    location: 'vault club, mulhouse',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000',
    description: 'release party [TOT001] nuance recording. vault club mulhouse.',
    type: 'upcoming'
  },
  {
    id: 'e0',
    title: 'checkpoint — soirée gaming',
    date: '11.06.26',
    location: 'bar du quai de scène, 5 quai du général koenig, strasbourg',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000',
    description: 'soirée gaming & esports — smash bros, mario kart, tekken, dj set. entrée gratuite. happy hour 17h–20h.',
    type: 'past'
  },
  {
    id: 'e1',
    title: 'allons ranger la forêt du neuhof !',
    date: '20.06.26',
    location: '184 rue du rhin tortu, strasbourg',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000',
    description: 'rassemblement bénévole pour le nettoyage de la forêt. gants et sacs fournis.',
    type: 'past'
  },
  {
    id: 'e2',
    title: 'parenthèse / fête de la musique',
    date: '21.06.26',
    location: 'parc gruber, koenigshoffen',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000',
    description: "dj sets, lives, ateliers, stands, vinyles d'occasion, fripes.",
    type: 'past'
  }
];

export const LIVESTREAMS: Livestream[] = [];

export const ARCHIVE_COLLECTIONS = [
  {
    id: 'ac1',
    title: 'Studio_live_sessions_',
    url: 'https://vimeo.com/user/220761433/folder/28915064',
    description: 'sessions immersives en studio.',
    items: [
      { id: 'v1', title: 'Episode 1 w_ Javier', duration: '45:00', thumbnail: 'https://vumbnail.com/1176557559.jpg', vimeoId: '1176557559' },
      { id: 'v2', title: 'Episode 2 w_ Pacôme', duration: '45:00', thumbnail: 'https://vumbnail.com/1176557784.jpg', vimeoId: '1176557784' },
      { id: 'v3', title: 'Episode 3 w_ Joey 808', duration: '45:00', thumbnail: 'https://vumbnail.com/1176561260.jpg', vimeoId: '1176561260' },
      { id: 'v4', title: 'Episode 4 w_ Juani', duration: '45:00', thumbnail: 'https://vumbnail.com/1176558195.jpg', vimeoId: '1176558195' },
      { id: 'v5', title: 'Episode 5 w_ Shônagon', duration: '45:00', thumbnail: 'https://vumbnail.com/1176557306.jpg', vimeoId: '1176557306' },
      { id: 'v6', title: 'Episode 6 w_ Josh', duration: '45:00', thumbnail: 'https://vumbnail.com/1176560689.jpg', vimeoId: '1176560689' },
      { id: 'v7', title: 'Episode 7 w_ Ficus', duration: '45:00', thumbnail: 'https://vumbnail.com/1176557958.jpg', vimeoId: '1176557958' },
      { id: 'v9', title: 'Episode 9 w_ Bizzy B', duration: '45:00', thumbnail: 'https://vumbnail.com/1176557655.jpg', vimeoId: '1176557655' },
      { id: 'v10', title: 'Episode 10 w_ Naej', duration: '45:00', thumbnail: 'https://vumbnail.com/1176561012.jpg', vimeoId: '1176561012' },
      { id: 'v11', title: 'Episode 11 w_ Doudeh', duration: '45:00', thumbnail: 'https://vumbnail.com/1176560415.jpg', vimeoId: '1176560415' },
      { id: 'v12', title: 'S2E2 w_ Crash Server', duration: '45:00', thumbnail: 'https://vumbnail.com/1176563243.jpg', vimeoId: '1176563243' },
      { id: 'v13', title: 'S2E7 w_ Alex Atlhas', duration: '45:00', thumbnail: 'https://vumbnail.com/1176562445.jpg', vimeoId: '1176562445' },
      { id: 'v14', title: 'Vinyl Set w_ Doudeh', duration: '45:00', thumbnail: 'https://vumbnail.com/1176564496.jpg', vimeoId: '1176564496' },
    ]
  },
  {
    id: 'ac2',
    title: 'Outdoor_live_sessions_',
    url: 'https://vimeo.com/user/220761433/folder/28915072',
    description: 'performances en extérieur et lieux atypiques.',
    items: [
      { id: 'o1', title: 'S2E6 Les Mutants Ont Des Oreilles', duration: '45:00', thumbnail: 'https://vumbnail.com/1176563945.jpg', vimeoId: '1176563945' },
      { id: 'o2', title: 'Live Machine w_ JohnBoucleisboucled', duration: '45:00', thumbnail: 'https://vumbnail.com/1176563756.jpg', vimeoId: '1176563756' },
      { id: 'o3', title: 'Live Kittyclock @ Shadok', duration: '45:00', thumbnail: 'https://vumbnail.com/1176487745.jpg', vimeoId: '1176487745' },
      { id: 'o4', title: 'Opening Set w_ Liema', duration: '45:00', thumbnail: 'https://vumbnail.com/1176562904.jpg', vimeoId: '1176562904' },
      { id: 'o5', title: 'Closing Set w_ Dea', duration: '45:00', thumbnail: 'https://vumbnail.com/1176561820.jpg', vimeoId: '1176561820' },
      { id: 'o6', title: '[CHAOS LAB] Live w_ Crash Server', duration: '45:00', thumbnail: 'https://vumbnail.com/1176567007.jpg', vimeoId: '1176567007' },
      { id: 'o7', title: 'Live Ralt144mi @ Shadok', duration: '45:00', thumbnail: 'https://vumbnail.com/1176491478.jpg', vimeoId: '1176491478' },
      { id: 'o8', title: 'Live Ralt144mi (2) @ Shadok', duration: '45:00', thumbnail: 'https://vumbnail.com/1176491478.jpg', vimeoId: '1176491478' },
      { id: 'o9', title: 'Live Pidag @ Shadok', duration: '45:00', thumbnail: 'https://vumbnail.com/1176490788.jpg', vimeoId: '1176490788' },
      { id: 'o10', title: 'Live Blaz @ Shadok', duration: '45:00', thumbnail: 'https://vumbnail.com/1176489398.jpg', vimeoId: '1176489398' },
      { id: 'o11', title: 'Live Crash @ Shadok', duration: '45:00', thumbnail: 'https://vumbnail.com/1176490008.jpg', vimeoId: '1176490008' },
    ]
  }
];

export const PODCASTS: Podcast[] = [
  {
    id: 'p1',
    episode: 1,
    title: "L'esthétique du bruit",
    duration: '45:20',
    guest: 'crash server',
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000',
    url: '#'
  },
  {
    id: 'p2',
    episode: 2,
    title: 'Modularité et Chaos',
    duration: '38:15',
    guest: 'john boucleisboucled',
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1000',
    url: '#'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'instagram', url: 'https://www.instagram.com/nuance_recording', icon: 'I', cta: 'follow @nuance_recording' },
  { name: 'youtube', url: 'https://youtube.com/@nuance.studio', icon: 'Y', cta: 'subscribe @nuance.studio' },
  { name: 'soundcloud', url: 'https://soundcloud.com/nuancestudio', icon: 'S', cta: 'listen /nuancestudio' },
  { name: 'bandcamp', url: 'https://nuancerecording.bandcamp.com', icon: 'B', cta: 'support on bandcamp' },
  { name: 'linktree', url: 'https://linktr.ee/nuance.studio?utm_source=linktree_profile_share&ltsid=d11ada53-8074-48e4-bf63-dc41cf7c41ee', icon: 'L', cta: 'all links' }
];

export const STREAM_EMBEDS = {
  youtubeLatest: "https://www.youtube.com/embed/live_stream?channel=UC-x7h0-yXf1D_tX9A9wX_zV",
  soundcloudTrack: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1126781239&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
  bandcampDiscography: "https://bandcamp.com/EmbeddedPlayer/album=3076722304/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/"
};
