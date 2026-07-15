import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 pt-24 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white">
          Navbar Working ✅
        </h1>
      </main>
    </>
  );
}