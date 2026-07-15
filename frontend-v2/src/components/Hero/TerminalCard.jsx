import { motion } from "framer-motion";

export default function TerminalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-2xl backdrop-blur-xl"
    >
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-4">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>

        <span className="ml-4 font-mono text-sm text-slate-400">
          current-focus.yaml
        </span>
      </div>

      {/* Body */}
      <div className="p-6 font-mono text-sm leading-8 text-slate-300">
        <span className="text-green-400">$ cat current-focus.yaml</span>

        <br />
        <br />

        <span className="text-violet-400">engineer:</span> Tanuj Nimkar
        <br />

        <span className="text-violet-400">role:</span> DevOps Engineer
        <br />

        <span className="text-violet-400">cloud:</span>

        <div className="ml-5">
          - AWS
          <br />
          - Amazon EKS
          <br />
          - EC2
          <br />
          - VPC
        </div>

        <br />

        <span className="text-violet-400">iac:</span>

        <div className="ml-5">
          - Terraform
          <br />
          - Ansible
        </div>

        <br />

        <span className="text-violet-400">containers:</span>

        <div className="ml-5">
          - Docker
          <br />
          - Kubernetes
        </div>

        <br />

        <span className="text-violet-400">cicd:</span>

        <div className="ml-5">
          - GitHub Actions
          <br />
          - Jenkins
          <br />
          - ArgoCD
        </div>
      </div>
    </motion.div>
  );
}