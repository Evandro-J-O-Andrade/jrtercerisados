import {
  type ImgHTMLAttributes,
  type ReactNode,
  useEffect,
  useState,
} from 'react';
import { cn } from '@/utils';

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: ReactNode;
  fallbackSrc?: string;
  skeleton?: boolean;
}

const DEFAULT_FALLBACK = (
  <div className="bg-surface-alt flex h-full w-full items-center justify-center">
    <svg
      className="text-muted-foreground h-12 w-12 opacity-40"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
      />
    </svg>
  </div>
);

export function SafeImage({
  src,
  alt = '',
  className,
  fallback,
  fallbackSrc,
  skeleton = true,
  loading = 'lazy',
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (imgSrc !== fallbackSrc && fallbackSrc) {
      setImgSrc(fallbackSrc);
    } else {
      setIsLoading(false);
      setHasError(true);
    }
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {isLoading && skeleton && (
        <div className="bg-surface-alt absolute inset-0 animate-pulse" />
      )}
      {hasError ? (
        (fallback ?? DEFAULT_FALLBACK)
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={() => setIsLoading(false)}
          onError={handleError}
          className={cn(
            'h-full w-full object-cover transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100',
          )}
          {...props}
        />
      )}
    </div>
  );
}
