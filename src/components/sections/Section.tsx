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
      className={twMerge('py-[80px] sm:py-[100px] lg:py-[120px]', className)}
    >
      {children}
    </section>
  );
}
