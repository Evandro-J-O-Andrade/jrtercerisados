import { type HTMLAttributes } from 'react';
import { cn } from '@/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?:
    'default' | 'secondary' | 'success' | 'warning' | 'danger' | 'outline';
  children: React.ReactNode;
}

export function Badge({
  className,
  variant = 'default',
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        {
          'bg-muted text-muted-foreground': variant === 'default',
          'bg-primary/10 text-primary': variant === 'secondary',
          'bg-success/10 text-success': variant === 'success',
          'bg-warning/10 text-warning': variant === 'warning',
          'bg-destructive/10 text-destructive': variant === 'danger',
          'border-border text-muted-foreground border bg-transparent':
            variant === 'outline',
        },
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
