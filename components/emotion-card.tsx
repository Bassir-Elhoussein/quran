"use client";

import type { MouseEvent } from "react";
import { type Emotion, emotionConfig } from "@/lib/ayat-data";

interface EmotionCardProps {
  emotion: Emotion;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function EmotionCard({ emotion, onClick }: EmotionCardProps) {
  const config = emotionConfig[emotion];
  
  return (
    <button
      onClick={onClick}
      className="group w-full p-6 md:p-8 bg-card rounded-xl border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5 text-left active:scale-[0.98]"
    >
      <div className="flex flex-col gap-3">
        <span className="text-2xl" role="img" aria-label={config.label}>
          {config.icon}
        </span>
        <div className="space-y-1">
          <div className="flex items-baseline gap-3">
            <h3 className="text-lg font-medium text-foreground group-hover:text-gold transition-colors">
              {config.label}
            </h3>
            <span 
              className="text-lg text-gold/70 font-[var(--font-arabic)]"
              dir="rtl"
              lang="ar"
            >
              {config.labelArabic}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            {config.description}
          </p>
        </div>
      </div>
    </button>
  );
}
