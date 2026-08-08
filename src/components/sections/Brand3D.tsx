import { motion } from 'framer-motion';

interface Brand3DProps {
  className?: string;
}

export function Brand3D({ className }: Brand3DProps) {
  return (
    <motion.div
      className={className}
      animate={{
        rotateX: [0, 2, -2, 0],
        rotateY: [0, -1, 1, 0],
        z: [0, 4, -4, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <motion.div
        className="bg-muted relative flex h-32 w-32 items-center justify-center rounded-[24px] border border-white/10 backdrop-blur-xl"
        whileHover={{
          rotate: [0, -2, 2, 0],
          scale: 1.05,
          boxShadow:
            '0 0 40px hsla(43, 74%, 40%, 0.5), 0 0 80px hsla(43, 74%, 40%, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Outer ring glow */}
        <motion.div
          className="absolute inset-0 rounded-[24px]"
          style={{
            boxShadow: 'inset 0 0 60px hsla(43, 74%, 40%, 0.2)',
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-primary absolute h-1 w-1 rounded-full opacity-60"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* JS Monogram */}
        <motion.span
          className="text-foreground text-5xl font-extrabold tracking-tighter"
          style={{
            textShadow:
              '0 0 20px hsla(43, 74%, 40%, 0.5), 0 0 40px hsla(43, 74%, 40%, 0.3)',
          }}
          animate={{
            filter: [
              'drop-shadow(0 0 8px hsla(43, 74%, 40%, 0.4))',
              'drop-shadow(0 0 20px hsla(43, 74%, 40%, 0.7))',
              'drop-shadow(0 0 8px hsla(43, 74%, 40%, 0.4))',
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span className="text-primary">J</span>S
        </motion.span>

        {/* Gold inner glow ring */}
        <motion.div
          className="border-primary/30 absolute inset-2 rounded-[20px] border"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            borderColor: [
              'hsla(43, 74%, 40%, 0.2)',
              'hsla(43, 74%, 40%, 0.5)',
              'hsla(43, 74%, 40%, 0.2)',
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
}
