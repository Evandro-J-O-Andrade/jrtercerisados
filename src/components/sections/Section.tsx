import { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={twMerge('py-[120px] sm:py-[140px] lg:py-[160px]', className)}
    >
      {children}
    </section>
  );
}
