import { useTransform, type MotionValue } from 'framer-motion';

export function useParallax(
  scrollY: MotionValue<number>,
  speed = 0.5,
  range = 300,
) {
  return useTransform(scrollY, [0, range], [-range * speed, range * speed]);
}

export function useParallaxOpacity(
  scrollY: MotionValue<number>,
  threshold = 500,
) {
  return useTransform(scrollY, [0, threshold], [1, 0.3]);
}

export function useScaleParallax(
  scrollY: MotionValue<number>,
  minScale = 1,
  maxScale = 1.15,
  range = 800,
) {
  return useTransform(scrollY, [0, range], [minScale, maxScale]);
}
