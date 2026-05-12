
import React, { useEffect, useRef, useState } from 'react';

const SC_EMBED_URL =
  'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/cyprien_nuance/sets/ciel-noir&auto_play=true&visual=false&show_artwork=false&buying=false&liking=false&download=false&sharing=false&show_comments=false&show_reposts=false&show_teaser=false';

const SoundCloudPlayer: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const widgetRef = useRef<any>(null);
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [trackTitle, setTrackTitle] = useState('chargement...');
  const [progress, setProgress] = useState(0); // 0–1

  useEffect(() => {
    const existingScript = document.getElementById('sc-widget-api');
    if (existingScript) {
      initWidget();
      return;
    }
    const script = document.createElement('script');
    script.id = 'sc-widget-api';
    script.src = 'https://w.soundcloud.com/player/api.js';
    script.onload = initWidget;
    document.head.appendChild(script);

    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, []);

  const initWidget = () => {
    if (!iframeRef.current || !(window as any).SC) return;
    const SC = (window as any).SC;
    const widget = SC.Widget(iframeRef.current);
    widgetRef.current = widget;

    widget.bind(SC.Widget.Events.READY, () => {
      widget.getCurrentSound((sound: any) => {
        if (sound) setTrackTitle(sound.title);
      });
    });

    widget.bind(SC.Widget.Events.PLAY, () => {
      setIsPlaying(true);
      widget.getCurrentSound((sound: any) => {
        if (sound) setTrackTitle(sound.title);
      });
      progressInterval.current = setInterval(() => {
        widget.getPosition((pos: number) => {
          widget.getDuration((dur: number) => {
            if (dur > 0) setProgress(pos / dur);
          });
        });
      }, 500);
    });

    widget.bind(SC.Widget.Events.PAUSE, () => {
      setIsPlaying(false);
      if (progressInterval.current) clearInterval(progressInterval.current);
    });

    widget.bind(SC.Widget.Events.FINISH, () => {
      setIsPlaying(false);
      setProgress(0);
    });
  };

  const togglePlay = () => {
    if (widgetRef.current) widgetRef.current.toggle();
  };

  const skipNext = () => {
    if (widgetRef.current) {
      widgetRef.current.next();
    }
  };

  const skipPrev = () => {
    if (widgetRef.current) {
      widgetRef.current.prev();
    }
  };

  return (
    <>
      {/* Hidden SoundCloud iframe */}
      <iframe
        ref={iframeRef}
        src={SC_EMBED_URL}
        style={{ position: 'absolute', width: 0, height: 0, border: 0, visibility: 'hidden' }}
        allow="autoplay"
        title="soundcloud-player"
      />

      {/* Custom UI */}
      <div className="w-[420px] md:w-[620px] bg-black/80 backdrop-blur-md border border-white/10 px-7 py-6">
        {/* Header label */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[7px] uppercase tracking-[0.5em] text-white/20">ciel noir /// nuance</span>
          <span className="text-[7px] uppercase tracking-[0.3em] text-white/15">cyprien</span>
        </div>

        {/* Track title */}
        <p className="text-[11px] lowercase tracking-[0.25em] font-bold text-white/70 truncate mb-4">
          {trackTitle}
        </p>

        {/* Waveform-style progress bar */}
        <div
          className="relative w-full h-[2px] bg-white/10 mb-4 cursor-pointer group"
          onClick={(e) => {
            const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
            const ratio = (e.clientX - rect.left) / rect.width;
            if (widgetRef.current) {
              widgetRef.current.getDuration((dur: number) => {
                widgetRef.current.seekTo(ratio * dur);
                setProgress(ratio);
              });
            }
          }}
        >
          <div
            className="absolute top-0 left-0 h-full bg-white transition-all duration-500"
            style={{ width: `${progress * 100}%` }}
          />
          {/* Fake waveform bars behind */}
          <div className="absolute inset-0 flex items-center gap-px overflow-hidden opacity-20">
            {Array.from({ length: 80 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-white/60"
                style={{ height: `${Math.random() * 10 + 2}px`, marginTop: 'auto', marginBottom: 'auto' }}
              />
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6">
          <button
            onClick={skipPrev}
            className="text-white/30 hover:text-white transition-colors text-[10px] uppercase tracking-widest"
          >
            ◂◂
          </button>
          <button
            onClick={togglePlay}
            className="w-8 h-8 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all text-white text-[10px]"
          >
            {isPlaying ? '▐▐' : '▶'}
          </button>
          <button
            onClick={skipNext}
            className="text-white/30 hover:text-white transition-colors text-[10px] uppercase tracking-widest"
          >
            ▸▸
          </button>
          <div className="flex-1" />
          <span className="text-[7px] uppercase tracking-[0.4em] text-white/15">soundcloud</span>
        </div>
      </div>
    </>
  );
};

export default SoundCloudPlayer;
