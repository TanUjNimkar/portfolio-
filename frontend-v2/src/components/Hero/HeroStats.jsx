import { motion } from "framer-motion";

const stats = [
  {
    number: "10+",
    label: "Projects",
  },
  {
    number: "2",
    label: "AWS Certifications",
  },
  {
    number: "AWS",
    label: "Cloud Focus",
  },
  {
    number: "CI/CD",
    label: "Automation",
  },
];

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4"
    >
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-500"
        >
          <h3 className="text-3xl font-bold text-violet-400">
            {item.number}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {item.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}