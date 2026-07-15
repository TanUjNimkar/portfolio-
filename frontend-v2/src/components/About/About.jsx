import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import {
  SiTerraform,
  SiKubernetes,
} from "react-icons/si";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <p className="mb-3 text-violet-400 font-semibold uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-5xl font-bold text-white">
            Building Cloud Infrastructure,
            <br />
            Not Just Applications.
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-400">
            AWS Certified DevOps Engineer with experience designing
            cloud-native infrastructure, automating CI/CD pipelines,
            containerizing applications, and deploying Kubernetes
            workloads using GitOps practices.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {/* Left Card */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl"
          >

            <h3 className="mb-8 text-2xl font-semibold text-white">
              Core Expertise
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <FaAws className="text-3xl text-orange-400" />
                <span className="text-slate-300">
                  Amazon Web Services
                </span>
              </div>

              <div className="flex items-center gap-4">
                <SiTerraform className="text-3xl text-violet-500" />
                <span className="text-slate-300">
                  Terraform Infrastructure as Code
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaDocker className="text-3xl text-sky-400" />
                <span className="text-slate-300">
                  Docker Containers
                </span>
              </div>

              <div className="flex items-center gap-4">
                <SiKubernetes className="text-3xl text-blue-500" />
                <span className="text-slate-300">
                  Kubernetes & Amazon EKS
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-3xl text-white" />
                <span className="text-slate-300">
                  GitHub Actions & GitOps
                </span>
              </div>

            </div>

          </motion.div>

          {/* Right Card */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl"
          >

            <h3 className="mb-8 text-2xl font-semibold text-white">
              Quick Facts
            </h3>

            <div className="space-y-6 text-slate-300">

              <div>
                <span className="text-violet-400">🎓 Education</span>
                <p>MCA - G.H. Raisoni College of Engineering</p>
              </div>

              <div>
                <span className="text-violet-400">📍 Location</span>
                <p>Nagpur, Maharashtra</p>
              </div>

              <div>
                <span className="text-violet-400">💼 Experience</span>
                <p>Ex DevOps Engineer Intern</p>
              </div>

              <div>
                <span className="text-violet-400">☁ Cloud</span>
                <p>AWS Certified</p>
              </div>

              <div>
                <span className="text-violet-400">🎯 Goal</span>
                <p>
                  Building scalable, secure and production-ready cloud
                  infrastructure.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}