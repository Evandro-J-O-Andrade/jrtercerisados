import { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={twMerge('py-16 sm:py-20 lg:py-24', className)}>
      {children}
    </section>
  );
}
