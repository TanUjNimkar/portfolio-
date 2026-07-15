import { useProfile } from "../../context/ProfileContext";
import BackgroundGlow from "./BackgroundGlow";
import TerminalCard from "./TerminalCard";
import HeroStats from "./HeroStats";

export default function Hero() {
  const { profile, loading } = useProfile();

  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-slate-950">
        <h1 className="text-2xl text-white">Loading...</h1>
      </section>
    );
  }

  if (!profile) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-slate-950">
        <h1 className="text-2xl text-red-400">
          Unable to load profile
        </h1>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 grid-bg"
    >
      <BackgroundGlow />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-32 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            🚀 Open to DevOps Opportunities
          </span>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-white md:text-7xl">
            {profile.name}
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-violet-400">
            {profile.title}
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            {profile.summary}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="/resume.pdf"
              download
              className="rounded-xl bg-violet-600 px-8 py-4 font-medium text-white transition hover:bg-violet-700"
            >
              ⬇ Download Resume
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 px-8 py-4 font-medium text-white transition hover:border-violet-500"
            >
              GitHub →
            </a>

          </div>

          <div className="mt-10 flex flex-wrap gap-3">

            {[
              "AWS",
              "Terraform",
              "Docker",
              "Kubernetes",
              "GitHub Actions",
              "ArgoCD",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-300"
              >
                {tech}
              </span>
            ))}

          </div>

          <HeroStats />

        </div>

        {/* Right */}

        <div className="flex justify-center">
          <TerminalCard />
        </div>

      </div>
    </section>
  );
}