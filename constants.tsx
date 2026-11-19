
import { Event, LabelRelease, Livestream, Podcast, SocialLink } from './types';
import coverTot001 from './src/assets/images/compilation-cover.jpg';
import coverNur001 from './src/assets/images/releases/nur001-ciel-noir.jpg';

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

// sorties du label nuance recording — catégorie "releases"
// ajouter chaque nouvelle sortie en haut de la liste (la plus récente d'abord)
export const LABEL_RELEASES: LabelRelease[] = [
  {
    id: 'tot001',
    catalog: 'TOT001',
    title: 'the truth is out there',
    artist: 'various artists',
    format: 'various artists compilation',
    date: '18.11.2026',
    cover: coverTot001,
    description: "“The Truth Is Out There” unfolds in the space between what we see and what we can explain, where a light streaks across the sky and vanishes, leaving only a strange shadow and an unanswered question. It’s a collective search for meaning in the unknown, guided by the certainty that something lies beyond our reach…",
    tracklist: [
      { position: '01', artist: 'letherique', title: 'la commedia' },
      { position: '02', artist: 'shônagon', title: 'you got it' },
      { position: '03', artist: 'schaed', title: 'pantone 808' },
      { position: '04', artist: 'liema', title: 'grizzly' },
      { position: '05', artist: 'd200p', title: 'agent 13' },
      { position: '06', artist: 'cyprien noiriel', title: 'transmission' },
      { position: '07', artist: 'crash server', title: 'x runs', note: 'live coding' },
      { position: '08', artist: 'ralt144mi', title: 'euclidean sports resort', note: 'live coding' },
    ],
    credits: [
      { role: 'label', name: 'nuance recording' },
      { role: 'release', name: '18.11.2026 — all platforms' },
      { role: 'mastering', name: '4bstr4cker' },
      { role: 'artwork', name: 'Bertan Özsoy' },
    ],
    bandcampUrl: 'https://nuancerecording.bandcamp.com/album/tot001-the-truth-is-out-there-va-compilation',
  },
  {
    id: 'nur001',
    catalog: 'NUR001',
    title: 'ciel noir',
    artist: 'cyprien noiriel',
    format: 'album',
    date: '15.02.2026',
    cover: coverNur001,
    description: "“Ciel Noir” reflects the pervasive unease and quiet anxiety gripping society today. Through an introspective exploration, it examines illness, life, and death, unveiling the malaise eroding our world and its inequalities, while paying homage to the departed.",
    tracklist: [
      { position: 'A1', artist: 'cyprien noiriel', title: "ils m'observent" },
      { position: 'A2', artist: 'cyprien noiriel', title: 'ciel noir' },
      { position: 'A3', artist: 'cyprien noiriel', title: 'road rage' },
      { position: 'A4', artist: 'cyprien noiriel', title: 'anthem of the flies' },
      { position: 'B1', artist: 'cyprien noiriel', title: 'inhale' },
      { position: 'B2', artist: 'cyprien noiriel', title: 'interrupted dream' },
      { position: 'B3', artist: 'cyprien noiriel', title: 'exhale' },
      { position: 'B4', artist: 'cyprien noiriel', title: 'detox' },
    ],
    credits: [
      { role: 'written & produced by', name: 'Cyprien Noiriel' },
      { role: 'label', name: 'nuance recording' },
      { role: 'mixed by', name: 'Letherique / Bella Ursa' },
      { role: 'mastered by', name: 'Zarkoff / Sensorium' },
      { role: 'designed by', name: 'Patrick Strajnic / Galerie Decorde' },
      { role: 'distributed by', name: 'Vinyl Future & Deejay DE' },
      { role: 'manufactured by', name: 'B Side' },
    ],
    bandcampUrl: 'https://nuancerecording.bandcamp.com/album/nur001-ciel-noir-cyprien-noiriel',
  },
];

// charte de bonne conduite — affichée dans la section agenda
export const CHARTE: string[] = [
  "Lors de nos événements, n'oubliez pas de prendre soin les uns des autres comme si nous étions une seule famille.",
  "Adoptez des comportements responsables et raisonnables dans votre façon de faire la fête et laissez les excès de côté.",
  "Il s'agit avant tout de votre santé et de votre sécurité, mais aussi de notre responsabilité et de celle du lieu qui ouvre ses portes à notre collectif.",
  "La piste de danse est le cœur battant de la fête : un lieu de liberté, de mouvement et d'énergie collective. Nous croyons en une philosophie où la piste de danse passe avant tout : un espace dédié à la joie, à l'expression de soi et à la convivialité.",
  "Respectez-vous, respectez les autres et respectez le rythme de la musique. Donnez à chacun l'espace dont il a besoin pour danser, bouger et profiter du moment présent. Évitez de pousser, de bousculer ou de marcher sur les personnes autour de vous. Veillez les uns sur les autres et, si quelqu'un semble mal à l'aise, offrez-lui votre gentillesse et votre attention.",
  "En honorant la piste de danse et ceux qui la partagent avec vous, nous créons un espace sûr, inclusif et dynamique où chacun peut vraiment se lâcher et faire la fête.",
  "Respectez l'espace, le consentement et le corps de chacun et soyez attentif aux autres.",
  "Prenez vos responsabilités, celles de vos actes et de vos paroles.",
  "Le respect du corps et du consentement de chacun est essentiel pour une fête où chacun se sent en sécurité et à l'aise.",
  "Si vous remarquez un comportement dangereux ou discriminatoire, qu'il soit sexiste, raciste, homophobe ou toute autre forme d'agression ou de harcèlement, n'hésitez pas à le signaler immédiatement au personnel et aux membres de notre collectif.",
];

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
