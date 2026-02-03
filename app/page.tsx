"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Logo } from "@/components/logo";
import { EmotionCard } from "@/components/emotion-card";
import { AyahDisplay } from "@/components/ayah-display";
import { type Emotion, type Ayah, getAyatByEmotion } from "@/lib/ayat-data";

const STORAGE_KEY = "la-umaymah-viewed-ayat";

interface ViewedState {
  [key: string]: string[]; // emotion -> array of viewed ayah ids
}

function getViewedState(): ViewedState {
  if (typeof window === "undefined") return {};
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveViewedState(state: ViewedState) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore storage errors
  }
}

export default function Home() {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [currentAyah, setCurrentAyah] = useState<Ayah | null>(null);
  const [viewedState, setViewedState] = useState<ViewedState>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isUnfolding, setIsUnfolding] = useState(false);
  const [unfoldOrigin, setUnfoldOrigin] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load viewed state from localStorage on mount
  useEffect(() => {
    setViewedState(getViewedState());
    setIsLoaded(true);
  }, []);

  const getNextAyah = useCallback((emotion: Emotion, currentViewed: ViewedState): { ayah: Ayah; newViewed: ViewedState } => {
    const allAyat = getAyatByEmotion(emotion);
    const viewedIds = currentViewed[emotion] || [];
    
    // Find unviewed ayat
    const unviewedAyat = allAyat.filter(a => !viewedIds.includes(a.id));
    
    // If all viewed, reset and start fresh
    if (unviewedAyat.length === 0) {
      const firstAyah = allAyat[0];
      return {
        ayah: firstAyah,
        newViewed: { ...currentViewed, [emotion]: [firstAyah.id] }
      };
    }
    
    // Get random unviewed ayah
    const randomIndex = Math.floor(Math.random() * unviewedAyat.length);
    const selectedAyah = unviewedAyat[randomIndex];
    
    return {
      ayah: selectedAyah,
      newViewed: { ...currentViewed, [emotion]: [...viewedIds, selectedAyah.id] }
    };
  }, []);

  const handleEmotionSelect = useCallback((emotion: Emotion, cardElement: HTMLElement) => {
    // Get the card's position for the unfold origin
    const rect = cardElement.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    
    if (containerRect) {
      setUnfoldOrigin({
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2
      });
    }
    
    // Start unfolding animation
    setIsUnfolding(true);
    
    // Prepare the ayah
    const { ayah, newViewed } = getNextAyah(emotion, viewedState);
    
    // After a brief delay, show the ayah display
    setTimeout(() => {
      setSelectedEmotion(emotion);
      setCurrentAyah(ayah);
      setViewedState(newViewed);
      saveViewedState(newViewed);
      
      // End unfolding animation
      setTimeout(() => {
        setIsUnfolding(false);
      }, 600);
    }, 400);
  }, [viewedState, getNextAyah]);

  const handleNextAyah = useCallback(() => {
    if (!selectedEmotion) return;
    const { ayah, newViewed } = getNextAyah(selectedEmotion, viewedState);
    setCurrentAyah(ayah);
    setViewedState(newViewed);
    saveViewedState(newViewed);
  }, [selectedEmotion, viewedState, getNextAyah]);

  const handleBack = useCallback(() => {
    setIsUnfolding(true);
    setTimeout(() => {
      setSelectedEmotion(null);
      setCurrentAyah(null);
      setTimeout(() => {
        setIsUnfolding(false);
        setUnfoldOrigin(null);
      }, 100);
    }, 300);
  }, []);

  if (!isLoaded) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <div ref={containerRef} className="container max-w-4xl mx-auto px-4 py-12 md:py-20 relative">
        {/* Logo */}
        <header className="mb-16 md:mb-20">
          <Logo />
        </header>

        {/* Paper Unfold Overlay */}
        {isUnfolding && unfoldOrigin && (
          <div 
            className="absolute inset-0 z-50 pointer-events-none"
            style={{
              perspective: '1200px',
            }}
          >
            <div 
              className="absolute bg-card border border-border shadow-2xl rounded-2xl"
              style={{
                left: unfoldOrigin.x,
                top: unfoldOrigin.y,
                transform: 'translate(-50%, -50%)',
                animation: selectedEmotion 
                  ? 'paperUnfold 800ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
                  : 'paperFold 400ms cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards',
                transformOrigin: 'center center',
              }}
            />
          </div>
        )}

        {/* Content */}
        {!selectedEmotion ? (
          <div className={`transition-all duration-300 ${isUnfolding ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="text-center mb-12">
              <h2 className="text-xl md:text-2xl text-foreground font-light mb-3 text-balance">
                How are you feeling today?
              </h2>
              <p className="text-muted-foreground">
                Select your emotional state to receive a comforting ayah
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(["anxious", "happy", "lost", "heartbroken"] as Emotion[]).map((emotion) => (
                <EmotionCard
                  key={emotion}
                  emotion={emotion}
                  onClick={(e) => handleEmotionSelect(emotion, e.currentTarget)}
                />
              ))}
            </div>

            <footer className="mt-16 text-center">
              <p className="text-xs text-muted-foreground/60">
                A space for reflection and spiritual comfort
              </p>
            </footer>
          </div>
        ) : currentAyah ? (
          <div className={`transition-all duration-500 ${isUnfolding ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <AyahDisplay
              ayah={currentAyah}
              emotion={selectedEmotion}
              onNext={handleNextAyah}
              onBack={handleBack}
            />
          </div>
        ) : null}
      </div>

      {/* Global Styles for Animation */}
      <style jsx global>{`
        @keyframes paperUnfold {
          0% {
            width: 200px;
            height: 120px;
            opacity: 0.8;
            transform: translate(-50%, -50%) rotateX(30deg) rotateY(-10deg) scale(0.3);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }
          30% {
            width: 300px;
            height: 200px;
            opacity: 1;
            transform: translate(-50%, -50%) rotateX(15deg) rotateY(-5deg) scale(0.6);
            box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
          }
          60% {
            width: 500px;
            height: 400px;
            transform: translate(-50%, -50%) rotateX(5deg) rotateY(0deg) scale(0.85);
            box-shadow: 0 16px 60px rgba(0, 0, 0, 0.1);
          }
          100% {
            width: 100vw;
            height: 100vh;
            transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) scale(1);
            box-shadow: 0 0 0 rgba(0, 0, 0, 0);
            border-radius: 0;
          }
        }
        
        @keyframes paperFold {
          0% {
            width: 100vw;
            height: 100vh;
            opacity: 1;
            transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) scale(1);
            border-radius: 0;
          }
          100% {
            width: 200px;
            height: 120px;
            opacity: 0;
            transform: translate(-50%, -50%) rotateX(30deg) rotateY(-10deg) scale(0.3);
            border-radius: 1rem;
          }
        }
      `}</style>
    </main>
  );
}
