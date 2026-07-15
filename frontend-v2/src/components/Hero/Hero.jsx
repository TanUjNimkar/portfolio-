import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const technologies = [
    "AWS",
    "Terraform",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "ArgoCD",
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 grid-bg"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-32 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            🚀 Open to DevOps Opportunities
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Tanuj
            <br />
            Nimkar
          </h1>

          <div className="mt-8 h-10 text-2xl font-semibold text-violet-400">
            <TypeAnimation
              sequence={[
                "AWS Certified DevOps Engineer",
                2000,
                "Cloud Infrastructure Engineer",
                2000,
                "Kubernetes Enthusiast",
                2000,
                "Terraform & GitOps Engineer",
                2000,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Building scalable cloud infrastructure,
            Kubernetes platforms, GitOps pipelines,
            and production-ready AWS architectures.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="/resume.pdf"
              download
              className="rounded-xl bg-violet-600 px-8 py-4 font-medium text-white transition duration-300 hover:scale-105 hover:bg-violet-700"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="rounded-xl border border-slate-700 px-8 py-4 font-medium text-white transition duration-300 hover:border-violet-500 hover:bg-slate-900"
            >
              View Projects
            </a>

          </div>

          {/* Tech Stack */}

          <div className="mt-12 flex flex-wrap gap-3">

            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-900/70 px-5 py-2 text-sm text-slate-300 transition hover:border-violet-500 hover:text-white"
              >
                {tech}
              </span>
            ))}

          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl">

            <div className="mb-5 flex items-center gap-2">

              <div className="h-3 w-3 rounded-full bg-red-500"></div>

              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>

              <div className="h-3 w-3 rounded-full bg-green-500"></div>

            </div>

            <p className="mb-5 font-mono text-green-400">
              $ current-focus.yaml
            </p>

            <pre className="overflow-x-auto text-sm leading-7 text-slate-300">
{`engineer: Tanuj Nimkar

role: DevOps Engineer

cloud:
  - AWS
  - Amazon EKS
  - EC2
  - VPC

iac:
  - Terraform
  - Ansible

containers:
  - Docker
  - Kubernetes

cicd:
  - Jenkins
  - GitHub Actions
  - ArgoCD`}
            </pre>

          </div>
        </motion.div>

      </div>
    </section>
  );
}