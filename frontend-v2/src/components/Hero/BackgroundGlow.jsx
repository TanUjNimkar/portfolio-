import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <>
      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-150px] top-[-80px] h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[120px]"
      />

      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-120px] bottom-[-100px] h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[120px]"
      />

      {/* Small Purple Orb */}
      <motion.div
        animate={{
          y: [0, 25, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl"
      />
    </>
  );
}