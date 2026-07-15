import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useProfile } from "../../context/ProfileContext";

export default function Projects() {
  const { projects, loading } = useProfile();

  if (loading) {
    return null;
  }

  return (
    <section id="projects" className="bg-slate-950 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16">
          <p className="font-semibold uppercase tracking-widest text-violet-400">
            Featured Projects
          </p>

          <h2 className="mt-3 text-5xl font-bold text-white">
            DevOps & Cloud Portfolio
          </h2>

          <p className="mt-6 max-w-3xl text-lg text-slate-400">
            Production-style cloud infrastructure, Kubernetes, GitOps,
            DevSecOps and CI/CD projects demonstrating hands-on
            engineering experience.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-violet-500"
            >

              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-300">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-white transition hover:bg-violet-700"
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}