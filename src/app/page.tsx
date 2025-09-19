"use client";

import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-[#0b0b0c] text-[#e8e8ea] font-sans relative">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(169,184,255,.15),transparent_60%),radial-gradient(900px_500px_at_0%_0%,rgba(94,224,181,.12),transparent_55%),#0b0b0c]" />

      {/* Hero */}
      <header className="container mx-auto max-w-4xl px-6 py-28 text-center">
        <span className="inline-block border border-[#1c1d20] rounded-full px-4 py-1 text-xs text-[#a8abb2] mb-8 tracking-wide uppercase">
          Noumi — Money meets mindfulness
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Money meets mindfulness.
        </h1>
        <p className="text-lg md:text-xl text-[#a8abb2] mb-10 max-w-2xl mx-auto">
          Noumi turns everyday actions into mindful saving—so you can move closer
          to life and money goals, without spreadsheets.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#signup"
            className="bg-gradient-to-b from-[#5ee0b5] to-[#3fd6a6] text-black font-semibold px-8 py-3 rounded-xl border border-[#3fd6a6] shadow-lg hover:brightness-110 transition-transform transform hover:scale-[1.02]"
          >
            Join the Private Beta
          </a>
          <a
            href="#investors"
            className="border border-[#2a2b2f] px-8 py-3 rounded-xl hover:border-gray-500 transition"
          >
            Investor Brief (by request)
          </a>
        </div>
        <p className="mt-6 text-sm text-[#a8abb2]">Beta access is limited.</p>
      </header>

      {/* Strip */}
      <section className="bg-white/5 border-y border-[#1c1d20] py-6 text-center">
        <p className="text-[#a8abb2] text-base">
          <strong>
            Built by operators in banking, product, health & wellness and AI.
          </strong>{" "}
          Now accepting early users and investor conversations.
        </p>
      </section>

      {/* Value / How it feels */}
      <section className="container mx-auto max-w-5xl px-6 py-16 grid md:grid-cols-2 gap-8">
        <div className="bg-[#111214]/60 border border-[#1c1d20] rounded-2xl p-8 shadow-md">
          <h2 className="text-3xl font-semibold mb-6">Value</h2>
          <ul className="space-y-4 text-sm leading-relaxed">
            <li>
              <strong>Know what’s safe to spend.</strong> A simple meter that
              keeps goals (and bills) on track.
            </li>
            <li>
              <strong>Weekly moments of clarity.</strong> One snapshot—progress,
              patterns, and what to focus on next.
            </li>
            <li>
              <strong>Streaks that stick.</strong> Tiny daily actions,
              compounding into real savings.
            </li>
            <li>
              <strong>Awareness that changes behavior.</strong> Past
              transactions highlight your personal patterns and triggers.
            </li>
          </ul>
          <p className="text-[#a8abb2] text-sm mt-4 italic">
            (That’s it—no diagrams or algorithm talk.)
          </p>
        </div>
        <div className="bg-[#111214]/60 border border-[#1c1d20] rounded-2xl p-8 shadow-md">
          <h2 className="text-3xl font-semibold mb-6">How it feels</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed mb-4">
            <li>Set a goal that matters.</li>
            <li>Log tiny wins in seconds.</li>
            <li>Watch progress grow—calmly and consistently.</li>
          </ol>
        </div>
      </section>

      {/* Signup */}
      <section
        id="signup"
        className="container mx-auto max-w-2xl px-6 py-16"
        aria-label="Email capture"
      >
        <div className="bg-[#111214]/60 border border-[#1c1d20] rounded-2xl p-8 shadow-md">
          <h2 className="text-3xl font-semibold mb-6">Be first to try Noumi</h2>
          {!submitted ? (
            <form
              className="flex flex-wrap gap-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const input = form.querySelector<HTMLInputElement>("#email");
                if (!input?.value) return;

                try {
                  const res = await fetch("YOUR_GOOGLE_SCRIPT_URL", {
                    method: "POST",
                    body: new URLSearchParams({ email: input.value }),
                  });
                  if (res.ok) {
                    setSubmitted(true);
                  } else {
                    alert("Something went wrong. Try again.");
                  }
                } catch {
                  alert("Error submitting email.");
                }
              }}
            >
              <label htmlFor="email" className="sr-only">
                Your email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 min-w-[240px] px-4 py-3 rounded-xl border border-[#2a2b2f] bg-[#0f1012] text-sm focus:outline-none focus:ring-2 focus:ring-[#5ee0b5] transition"
              />
              <button
                type="submit"
                className="bg-gradient-to-b from-[#5ee0b5] to-[#3fd6a6] text-black font-semibold px-6 py-3 rounded-xl border border-[#3fd6a6] shadow-lg hover:brightness-110 hover:scale-[1.02] transition"
              >
                Get Early Access
              </button>
            </form>
          ) : (
            <p className="text-sm text-[#a8abb2] mt-2">
              You&apos;re on the list. We&apos;ll only email with access details. No spam,
              ever.
            </p>
          )}
        </div>
      </section>

      {/* Investors */}
      <section
        id="investors"
        className="container mx-auto max-w-2xl px-6 py-16"
      >
        <div className="bg-[#111214]/60 border border-[#1c1d20] rounded-2xl p-8 shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Investors</h2>
          <p className="text-sm leading-relaxed">
            Exploring pre-seed conversations. <br />
            Request a 1-page overview:{" "}
            <a href="mailto:hello@noumiapp.ai" className="underline">
              hello@noumiapp.ai
            </a>
          </p>
        </div>
      </section>

      {/* FAQ / Contact / Accessibility */}
      <section className="container mx-auto max-w-5xl px-6 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-[#111214]/60 border border-[#1c1d20] rounded-2xl p-8 shadow-md">
          <h2 className="text-xl font-semibold mb-4">FAQ</h2>
          <dl className="text-sm leading-relaxed space-y-3">
            <div>
              <dt className="font-semibold">Is this another budgeting app?</dt>
              <dd className="text-[#a8abb2]">
                No. Noumi focuses on habits, awareness, and simple
                automation—so saving feels effortless.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">How do you handle data?</dt>
              <dd className="text-[#a8abb2]">
                Privacy-first. You control what’s shared; opt out anytime. (Full
                policy at launch.)
              </dd>
            </div>
            <div>
              <dt className="font-semibold">When is the beta?</dt>
              <dd className="text-[#a8abb2]">
                Rolling access over the next few weeks. Add your email to get an
                invite.
              </dd>
            </div>
          </dl>
        </div>
        <div className="bg-[#111214]/60 border border-[#1c1d20] rounded-2xl p-8 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="text-sm leading-relaxed">
            Press & partnerships:{" "}
            <a href="mailto:gina@noumi.ai" className="underline">
              gina@noumi.ai
            </a>{" "}
            |{" "}
            <a href="mailto:vidya@noumi.ai" className="underline">
              vidya@noumi.ai
            </a>
          </p>
        </div>
        <div className="bg-[#111214]/60 border border-[#1c1d20] rounded-2xl p-8 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Accessibility</h2>
          <p className="text-sm leading-relaxed">
            Keyboard-friendly, high-contrast palette, and minimal motion. We
            welcome feedback from all users.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto max-w-5xl px-6 py-8 text-sm text-[#a8abb2] border-t border-[#1c1d20] flex flex-wrap justify-between gap-3">
        <div>© Noumi. All rights reserved.</div>
        <div className="space-x-2">
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <span>•</span>
          <a href="#" className="hover:underline">
            Terms
          </a>
        </div>
      </footer>
    </main>
  );
}
