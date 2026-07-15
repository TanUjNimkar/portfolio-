import { motion } from "framer-motion";
import { useProfile } from "../../context/ProfileContext";

export default function Skills() {
  const { skills, loading } = useProfile();

  if (loading) {
    return null;
  }

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }

    acc[skill.category].push(skill);

    return acc;
  }, {});

  return (
    <section
      id="skills"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16">

          <p className="font-semibold uppercase tracking-widest text-violet-400">
            Technical Skills
          </p>

          <h2 className="mt-3 text-5xl font-bold text-white">
            DevOps Capability Dashboard
          </h2>

          <p className="mt-6 max-w-3xl text-lg text-slate-400">
            Technologies I use to design,
            automate and deploy production-ready
            cloud infrastructure.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {Object.entries(groupedSkills).map(([category, items]) => (

            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl"
            >

              <h3 className="mb-8 text-2xl font-semibold text-white">
                {category}
              </h3>

              {items.map((skill) => (

                <div
                  key={skill.id}
                  className="mb-6"
                >

                  <div className="mb-2 flex justify-between">

                    <span className="text-slate-300">
                      {skill.skill}
                    </span>

                    <span className="text-violet-400">
                      {skill.level}%
                    </span>

                  </div>

                  <div className="h-3 rounded-full bg-slate-800">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                      }}
                      className="h-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"
                    />

                  </div>

                </div>

              ))}

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}