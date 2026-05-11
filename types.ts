
export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  type: 'upcoming' | 'past';
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

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  cta: string;
}
