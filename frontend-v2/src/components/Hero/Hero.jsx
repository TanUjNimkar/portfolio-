import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950">

      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            🚀 Open to DevOps Opportunities
          </span>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-white">
            Tanuj
            <br />
            Nimkar
          </h1>

          <div className="mt-6 text-2xl font-semibold text-violet-400">
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
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Building scalable cloud infrastructure, Kubernetes platforms,
            GitOps pipelines and production-ready AWS architectures.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-violet-600 px-8 py-3 font-medium text-white hover:bg-violet-700">
              Download Resume
            </button>

            <button className="rounded-xl border border-slate-700 px-8 py-3 text-white hover:border-violet-500">
              View Projects
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "AWS",
              "Terraform",
              "Docker",
              "Kubernetes",
              "GitHub Actions",
              "ArgoCD",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl">
            <p className="mb-4 font-mono text-green-400">
              $ current-focus.yaml
            </p>

            <pre className="overflow-x-auto text-sm leading-7 text-slate-300">
{`engineer: Tanuj Nimkar
role: DevOps Engineer

cloud:
  - AWS
  - EKS
  - EC2

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