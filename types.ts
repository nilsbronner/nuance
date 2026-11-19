
export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  type: 'upcoming' | 'past';
  ticketUrl?: string;
}

export interface Livestream {
  id: string;
  season: number;
  title: string;
  artist: string;
  videoUrl: string;
  thumbnail: string;
}

export interface Podcast {
  id: string;
  episode: number;
  title: string;
  duration: string;
  guest: string;
  imageUrl: string;
  url: string;
}

export interface LabelReleaseTrack {
  position: string;
  artist: string;
  title: string;
  note?: string;
}

export interface LabelRelease {
  id: string;
  catalog: string;
  title: string;
  artist: string;
  format: string;
  date: string;
  cover: string;
  description: string;
  tracklist: LabelReleaseTrack[];
  credits: { role: string; name: string }[];
  bandcampUrl: string;
  soundcloudUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  cta: string;
}
