export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950">

      <div className="mx-auto max-w-6xl px-6">

        <p className="mb-4 text-violet-400">
          AWS Certified
        </p>

        <h1 className="text-6xl font-extrabold leading-tight text-white">

          Tanuj

          <br />

          Nimkar

        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">

          DevOps Engineer focused on AWS, Kubernetes,
          Terraform, CI/CD, GitOps and building
          scalable cloud-native platforms.

        </p>

        <div className="mt-10 flex gap-5">

          <button className="rounded-xl bg-violet-600 px-8 py-3 font-medium text-white transition hover:bg-violet-700">
            Download Resume
          </button>

          <button className="rounded-xl border border-slate-700 px-8 py-3 text-white transition hover:border-violet-500">
            View Projects
          </button>

        </div>

      </div>

    </section>
  );
}