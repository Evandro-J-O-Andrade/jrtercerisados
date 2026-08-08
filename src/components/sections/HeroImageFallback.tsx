import { SafeImage } from '@/components/ui/SafeImage';

const HERO_PLACEHOLDER_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 720 520' fill='none'%3E%3Crect width='720' height='520' fill='%23111'/%3E%3Crect x='1' y='1' width='718' height='518' rx='28' stroke='%23262626' stroke-width='2'/%3E%3Ccircle cx='360' cy='210' r='90' fill='%231a1a1a' stroke='%23262626' stroke-width='2'/%3E%3Cpath d='M280 340c0-44 36-80 80-80s80 36 80 80' stroke='%23262626' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M340 290c0-22 18-40 40-40s40 18 40 40' stroke='%23262626' stroke-width='2' stroke-linecap='round'/%3E%3Crect x='150' y='430' width='420' height='8' rx='4' fill='%231a1a1a'/%3E%3Crect x='210' y='455' width='300' height='8' rx='4' fill='%231a1a1a'/%3E%3C/svg%3E`;

interface HeroImageFallbackProps {
  src?: string;
  alt: string;
  className?: string;
}

export function HeroImageFallback({
  src,
  alt,
  className,
}: HeroImageFallbackProps) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ${className ?? ''}`}>
      <SafeImage
        src={src}
        alt={alt}
        fallbackSrc={HERO_PLACEHOLDER_SVG}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
