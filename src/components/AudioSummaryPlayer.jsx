import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Headphones,
  Play,
  Pause,
  Square,
  SkipBack,
  SkipForward,
  Volume2
} from 'lucide-react';
import { buildAudioTracksForTopic, pickBestCatalanVoice } from '../utils/audioNarration';

export default function AudioSummaryPlayer({ topic, onClose = null, autoPlay = false }) {
  const tracks = useMemo(() => buildAudioTracksForTopic(topic), [topic]);
  const [trackIndex, setTrackIndex] = useState(0);
  const [segmentIndex, setSegmentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [rate, setRate] = useState(1.0);
  const [voices, setVoices] = useState([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState('');
  const [mp3Tracks, setMp3Tracks] = useState([]);
  const [mp3Index, setMp3Index] = useState(0);
  const mp3AudioRef = useRef(null);
  const isPlayingRef = useRef(false);
  const activeTrack = tracks[trackIndex] || tracks[0];
  const mp3Url = mp3Tracks[mp3Index] || null;

  const speechSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  useEffect(() => {
    setTrackIndex(0);
    setSegmentIndex(0);
    setIsPlaying(false);
    setMp3Tracks([]);
    setMp3Index(0);
    isPlayingRef.current = false;
    if (speechSupported) {
      window.speechSynthesis.cancel();
    }

    // Comprova pistes MP3 reals (multi-pista -1.mp3, -2.mp3... o única .mp3) a ./audio/ o ./public/audio/
    if (!topic?.id) return;
    let active = true;
    const isAudioRes = (res) => {
      const ct = res.headers.get('content-type') || '';
      return res.ok && (ct.includes('audio') || ct.includes('octet-stream') || ct === '');
    };
    const checkUrl = async (url) => {
      try {
        const res = await fetch(url, { method: 'HEAD' });
        return isAudioRes(res) ? url : null;
      } catch {
        return null;
      }
    };

    (async () => {
      const found = [];
      for (const base of ['./audio', './public/audio']) {
        const firstPart = await checkUrl(`${base}/${topic.id}-1.mp3`);
        if (firstPart) {
          found.push(firstPart);
          for (let part = 2; part <= 6; part++) {
            const nextPart = await checkUrl(`${base}/${topic.id}-${part}.mp3`);
            if (nextPart) found.push(nextPart);
            else break;
          }
          break;
        }
        const single = await checkUrl(`${base}/${topic.id}.mp3`);
        if (single) {
          found.push(single);
          break;
        }
      }
      if (active && found.length > 0) {
        setMp3Tracks(found);
      }
    })();
    return () => {
      active = false;
    };
  }, [topic?.id]);

  useEffect(() => {
    if (!speechSupported) return;
    const loadVoices = () => {
      const list = window.speechSynthesis.getVoices() || [];
      setVoices(list);
      if (!selectedVoiceURI && list.length > 0) {
        const best = pickBestCatalanVoice(list);
        if (best) setSelectedVoiceURI(best.voiceURI);
      }
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [speechSupported]);

  useEffect(() => {
    if (autoPlay && activeTrack) {
      startPlayback(0, 0);
    }
  }, [topic?.id, autoPlay]);

  const speakSegment = (tIdx, sIdx, playbackRate = rate) => {
    if (!speechSupported) return;
    const track = tracks[tIdx];
    if (!track || sIdx >= track.segments.length) {
      // Passa a la següent pista si n'hi ha
      if (tIdx + 1 < tracks.length) {
        setTrackIndex(tIdx + 1);
        setSegmentIndex(0);
        speakSegment(tIdx + 1, 0, playbackRate);
      } else {
        isPlayingRef.current = false;
        setIsPlaying(false);
        setSegmentIndex(0);
      }
      return;
    }

    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(track.segments[sIdx]);
    utter.lang = 'ca-ES';
    utter.rate = playbackRate;
    const chosenVoice = voices.find((v) => v.voiceURI === selectedVoiceURI) || pickBestCatalanVoice(voices);
    if (chosenVoice) {
      utter.voice = chosenVoice;
      utter.lang = chosenVoice.lang || 'ca-ES';
    }

    utter.onend = () => {
      if (!isPlayingRef.current) return;
      const nextS = sIdx + 1;
      setSegmentIndex(nextS);
      // Pausa breu natural entre frases perquè soni com una classe i no atropellat
      setTimeout(() => {
        if (isPlayingRef.current) {
          speakSegment(tIdx, nextS, playbackRate);
        }
      }, 280);
    };
    utter.onerror = () => {
      isPlayingRef.current = false;
      setIsPlaying(false);
    };

    if (typeof navigator !== 'undefined' && 'mediaSession' in navigator) {
      try {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: track.title,
          artist: 'Estudi Bombers · SGO 2026',
          album: `Tema ${topic.number} · ${topic.title}`
        });
      } catch {}
    }

    window.speechSynthesis.speak(utter);
  };

  const startPlayback = (tIdx = trackIndex, sIdx = segmentIndex) => {
    if (!speechSupported || !tracks[tIdx]) return;
    isPlayingRef.current = true;
    setIsPlaying(true);
    speakSegment(tIdx, sIdx, rate);
  };

  const pausePlayback = () => {
    isPlayingRef.current = false;
    setIsPlaying(false);
    if (speechSupported) {
      window.speechSynthesis.cancel();
    }
  };

  const stopPlayback = () => {
    pausePlayback();
    setSegmentIndex(0);
  };

  const handleRateChange = (newRate) => {
    setRate(newRate);
    if (mp3AudioRef.current) {
      mp3AudioRef.current.playbackRate = newRate;
    }
    if (isPlayingRef.current) {
      speakSegment(trackIndex, segmentIndex, newRate);
    }
  };

  if (!activeTrack) return null;

  const pct =
    activeTrack.segments.length > 0
      ? Math.min(100, Math.round(((segmentIndex + (isPlaying ? 1 : 0)) / activeTrack.segments.length) * 100))
      : 0;

  return (
    <div className="rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/90 via-white to-sky-50/80 dark:from-indigo-950/40 dark:via-slate-900 dark:to-slate-900 p-4 sm:p-5 shadow-sm space-y-3.5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
            <Headphones className="w-4 h-4" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                Àudio-Resum (≤ 10 min/pista)
              </span>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200">
                ~{Math.max(1, Math.round(activeTrack.estMinutes / rate))} min
              </span>
            </div>
            <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
              {activeTrack.title} — {topic.title}
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {[0.9, 1.0, 1.25, 1.5].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => handleRateChange(r)}
              className={`px-2 py-1 rounded-lg text-[11px] font-extrabold border transition ${
                rate === r
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
              }`}
            >
              {r}×
            </button>
          ))}
          {onClose && (
            <button
              type="button"
              onClick={() => {
                stopPlayback();
                onClose();
              }}
              className="ml-1 px-2.5 py-1 rounded-lg text-xs font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Tancar
            </button>
          )}
        </div>
      </div>

      {mp3Url ? (
        <div className="space-y-2.5">
          {mp3Tracks.length > 1 && (
            <div className="flex flex-wrap gap-1.5">
              {mp3Tracks.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setMp3Index(idx)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold border ${
                    idx === mp3Index
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  Pista {idx + 1}/{mp3Tracks.length} (≤ 10 min)
                </button>
              ))}
            </div>
          )}
          <audio
            ref={mp3AudioRef}
            controls
            autoPlay={autoPlay}
            src={mp3Url}
            onLoadedMetadata={() => {
              if (mp3AudioRef.current) mp3AudioRef.current.playbackRate = rate;
            }}
            onEnded={() => {
              if (mp3Index + 1 < mp3Tracks.length) {
                setMp3Index((i) => i + 1);
              }
            }}
            className="w-full"
          />
          <p className="text-[11px] text-emerald-700 dark:text-emerald-300 font-semibold">
            Podcast MP3 amb explicacions completes ({mp3Url}). Funciona amb la pantalla bloquejada!
          </p>
        </div>
      ) : !speechSupported ? (
        <p className="text-xs text-red-600">
          El teu navegador no admet síntesi de veu en català. Prova-ho des de Safari o Chrome.
        </p>
      ) : (
        <>
          {/* Selector de pistes si el resum supera els 10 minuts */}
          {tracks.length > 1 && (
            <div className="flex flex-wrap gap-1.5">
              {tracks.map((tr, idx) => (
                <button
                  key={tr.trackNumber}
                  type="button"
                  onClick={() => {
                    setTrackIndex(idx);
                    setSegmentIndex(0);
                    if (isPlayingRef.current) speakSegment(idx, 0, rate);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold border ${
                    idx === trackIndex
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  Pista {tr.trackNumber}/{tr.totalTracks} (~{tr.estMinutes} min)
                </button>
              ))}
            </div>
          )}

          {/* Barra de progrés i controls */}
          <div className="space-y-2">
            <div className="h-2 w-full rounded-full bg-indigo-100 dark:bg-slate-800 overflow-hidden">
              <div
                style={{ width: `${pct}%` }}
                className="h-full rounded-full bg-indigo-600 transition-all duration-300"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const prev = Math.max(0, segmentIndex - 1);
                    setSegmentIndex(prev);
                    if (isPlayingRef.current) speakSegment(trackIndex, prev, rate);
                  }}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50"
                  title="Fragment anterior"
                >
                  <SkipBack className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => (isPlaying ? pausePlayback() : startPlayback())}
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-xs font-extrabold shadow-sm transition"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isPlaying ? 'Pausar' : segmentIndex > 0 ? 'Continuar' : 'Reproduir Resum'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const next = Math.min(activeTrack.segments.length - 1, segmentIndex + 1);
                    setSegmentIndex(next);
                    if (isPlayingRef.current) speakSegment(trackIndex, next, rate);
                  }}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50"
                  title="Següent fragment"
                >
                  <SkipForward className="w-4 h-4" />
                </button>

                {isPlaying || segmentIndex > 0 ? (
                  <button
                    type="button"
                    onClick={stopPlayback}
                    className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-red-600"
                    title="Aturar"
                  >
                    <Square className="w-4 h-4" />
                  </button>
                ) : null}
              </div>

              {voices.length > 0 && (
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <Volume2 className="w-3.5 h-3.5 shrink-0" />
                  <select
                    value={selectedVoiceURI}
                    onChange={(e) => {
                      setSelectedVoiceURI(e.target.value);
                      if (isPlayingRef.current) {
                        setTimeout(() => speakSegment(trackIndex, segmentIndex, rate), 50);
                      }
                    }}
                    className="max-w-[170px] rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-2 py-1 text-[11px] text-slate-700 dark:text-slate-200"
                  >
                    {voices
                      .filter((v) => /^(ca|es)/i.test(v.lang))
                      .concat(voices.filter((v) => !/^(ca|es)/i.test(v.lang)).slice(0, 5))
                      .map((v) => (
                        <option key={v.voiceURI} value={v.voiceURI}>
                          {v.name} ({v.lang})
                        </option>
                      ))}
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* Text que s'està narrant ara mateix */}
          <div className="rounded-xl border border-indigo-100 dark:border-indigo-900/40 bg-white/80 dark:bg-slate-950/60 px-3.5 py-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            <span className="font-extrabold text-indigo-700 dark:text-indigo-300">
              Fragment {Math.min(segmentIndex + 1, activeTrack.segments.length)}/{activeTrack.segments.length}:
            </span>{' '}
            {activeTrack.segments[segmentIndex] || activeTrack.segments[0]}
          </div>

          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
            <strong>Consell per a iPhone / iPad (veu natural):</strong> si la veu del dispositiu sona robòtica, ves a{' '}
            <em>Ajustos → Accessibilitat → Contingut parlat → Veus → Català</em> i descarrega la veu{' '}
            <strong>Montserrat (Millorada)</strong> o <strong>Jordi</strong>. El reproductor l&apos;agafarà automàticament!
          </p>
        </>
      )}
    </div>
  );
}
