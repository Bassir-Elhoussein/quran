"use client";

import { type Ayah, type Emotion, emotionConfig } from "@/lib/ayat-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw } from "lucide-react";

interface AyahDisplayProps {
  ayah: Ayah;
  emotion: Emotion;
  onNext: () => void;
  onBack: () => void;
}

export function AyahDisplay({ ayah, emotion, onNext, onBack }: AyahDisplayProps) {
  const config = emotionConfig[emotion];
  
  return (
    <div className="w-full max-w-2xl mx-auto px-4 animate-in fade-in duration-500">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">Choose another feeling</span>
      </button>
      
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold text-sm">
          <span>{config.icon}</span>
          <span>{config.label}</span>
          <span className="font-[var(--font-arabic)]" dir="rtl" lang="ar">{config.labelArabic}</span>
        </span>
      </div>
      
      <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-sm">
        {/* Arabic Text */}
        <div className="text-center mb-8">
          <p 
            className="text-2xl md:text-3xl lg:text-4xl leading-loose text-foreground font-[var(--font-arabic)]"
            dir="rtl"
            lang="ar"
          >
            {ayah.arabicText}
          </p>
        </div>
        
        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px w-16 bg-gold/30" />
          <div className="w-2 h-2 rounded-full bg-gold/50" />
          <div className="h-px w-16 bg-gold/30" />
        </div>
        
        {/* Translation */}
        <div className="text-center mb-8">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed italic">
            {'"'}{ayah.translation}{'"'}
          </p>
        </div>
        
        {/* Surah Info */}
        <div className="text-center">
          <p className="text-sm text-gold/80">
            <span className="font-[var(--font-arabic)]" dir="rtl" lang="ar">{ayah.surahNameArabic}</span>
            {" — "}
            {ayah.surahName}, Ayah {ayah.ayahNumber}
          </p>
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <Button
          onClick={onNext}
          className="bg-gold hover:bg-gold-dark text-card px-8 py-6 text-base rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Next Ayah
        </Button>
      </div>
    </div>
  );
}
