"use client";

import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-[#F3F5F5] text-[#1C1D20] font-sans relative">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(49,110,114,0.05),transparent_60%),radial-gradient(900px_500px_at_0%_0%,rgba(94,224,181,0.05),transparent_55%),#F3F5F5]" />

      {/* Hero */}
      <header className="container mx-auto max-w-4xl px-6 pt-28 pb-14 text-center">
        {/* Logo */}
        <h1
          className="mb-8"
          style={{
            fontFamily: "Madimi One, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "48px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#316E72",
          }}
        >
          Noumi
        </h1>

        <span className="inline-block border border-[#D6E8E3] rounded-full px-4 py-1 text-xs text-[#316E72] mb-8 tracking-wide uppercase">
          Money meets mindfulness
        </span>
        <p className="text-lg md:text-xl text-[#316E72] mb-10 max-w-2xl mx-auto">
          Noumi turns everyday actions into mindful saving—so you can move closer
          to life and money goals, without spreadsheets.
        </p>
        <div className="flex justify-center">
          {!submitted ? (
            <form
              className="flex flex-wrap w-full max-w-md gap-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const input = form.querySelector<HTMLInputElement>("#email");
                if (!input?.value) return;

                try {
                  const res = await fetch("https://script.google.com/macros/s/AKfycbzJCLYYFzPzKmua3jmKxEw5lsIp3nCkrkmBn5q7npOZeWaRGe7zVdUWBIuHEy2k8Ci3/exec", {
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
                className="flex-1 min-w-0 px-4 py-3 rounded-xl border border-[#B7DFD9] bg-[#F3F5F5] text-sm focus:outline-none focus:ring-2 focus:ring-[#316E72] transition"
              />
              <button
                type="submit"
                className="flex-1 min-w-0 bg-[#316E72] text-[#F3F5F5] text-sm font-semibold px-4 py-2 rounded-xl border border-[#316E72] shadow-lg hover:brightness-110 hover:scale-[1.02] transition cursor-pointer"
              >
                Join the Private Beta
              </button>
            </form>
          ) : (
            <p className="text-sm text-[#316E72] mt-2">
              You&apos;re on the list. We&apos;ll only email with access details. No spam,
              ever.
            </p>
          )}
        </div>
        <p className="mt-6 text-sm text-[#316E72]">Now accepting early users and investor conversations. Beta is limited.</p>
      </header>

      {/* Strip */}
      <section className="bg-[#D6E8E3]/10 text-center pt-6">
        <p className="text-[#316E72] text-base px-6">
          <strong>
            Crafted by domain experts in banking, product, health & wellness, and AI.
          </strong>{" "}
        </p>
        <section className="container mx-auto max-w-5xl p-6 grid md:grid-cols-2 gap-8">
          <div className="bg-[#D6E8E3]/20 border border-[#B7DFD9] rounded-2xl p-8 shadow-md">
            <h2 className="text-3xl font-semibold mb-6 text-[#316E72]">Value</h2>
            <ul className="space-y-4 text-sm leading-relaxed text-[#1C1D20]">
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
            <p className="text-[#316E72] text-sm mt-4 italic">
              (That’s it—no diagrams or algorithm talk.)
            </p>
          </div>
          <div className="bg-[#D6E8E3]/20 border border-[#B7DFD9] rounded-2xl p-8 shadow-md">
            <h2 className="text-3xl font-semibold mb-6 text-[#316E72]">
              How it feels
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed mb-4 text-[#1C1D20]">
              <li>Set a goal that matters.</li>
              <li>Log tiny wins in seconds.</li>
              <li>Watch progress grow—calmly and consistently.</li>
            </ol>
          </div>
        </section>
      </section>

      {/* FAQ / Contact / Accessibility */}
      <section className="container mx-auto max-w-5xl p-6 grid md:grid-cols-3 gap-8">
        <div className="bg-[#D6E8E3]/20 border border-[#B7DFD9] rounded-2xl p-8 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-[#316E72]">FAQ</h2>
          <dl className="text-sm leading-relaxed space-y-3 text-[#1C1D20]">
            <div>
              <dt className="font-semibold">Is this another budgeting app?</dt>
              <dd>
                No. Noumi focuses on habits, awareness, and simple
                automation—so saving feels effortless.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">How do you handle data?</dt>
              <dd>
                Privacy-first. You control what’s shared; opt out anytime. (Full
                policy at launch.)
              </dd>
            </div>
            <div>
              <dt className="font-semibold">When is the beta?</dt>
              <dd>
                Rolling access over the next few weeks. Add your email to get an
                invite.
              </dd>
            </div>
          </dl>
        </div>
        <div className="bg-[#D6E8E3]/20 border border-[#B7DFD9] rounded-2xl p-8 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-[#316E72]">Contact</h2>
          <p className="text-sm leading-relaxed text-[#1C1D20]">
            For general inquiries, please contact us at {" "}
            <a href="mailto:hello@noumiapp.ai" className="underline text-[#316E72]">
              hello@noumiapp.ai
            </a>{" "}
          </p>
        </div>
      </section>

      {/* Signup */}
      <section
        id="signup"
        className="container mx-auto max-w-2xl px-6 pt-3 pb-12"
        aria-label="Email capture"
      >
        <div className="bg-[#D6E8E3]/20 border border-[#B7DFD9] rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-[#316E72]">
            Be the first to try Noumi
          </h2>
          {!submitted ? (
            <form
              className="flex flex-wrap gap-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const input = form.querySelector<HTMLInputElement>("#email");
                if (!input?.value) return;

                try {
                  const res = await fetch("https://script.google.com/macros/s/AKfycbzJCLYYFzPzKmua3jmKxEw5lsIp3nCkrkmBn5q7npOZeWaRGe7zVdUWBIuHEy2k8Ci3/exec", {
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
                className="flex-1 min-w-[240px] px-4 py-3 rounded-xl border border-[#B7DFD9] bg-[#F3F5F5] text-sm focus:outline-none focus:ring-2 focus:ring-[#316E72] transition"
              />
              <button
                type="submit"
                className="bg-[#316E72] text-[#F3F5F5] font-semibold px-6 py-3 rounded-xl border border-[#316E72] shadow-lg hover:brightness-110 hover:scale-[1.02] transition cursor-pointer"
              >
                Get Early Access
              </button>
            </form>
          ) : (
            <p className="text-sm text-[#316E72] mt-2">
              You&apos;re on the list. We&apos;ll only email with access details. No spam,
              ever.
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto max-w-5xl p-6 text-sm text-[#316E72] border-t border-[#B7DFD9] flex flex-wrap justify-between gap-3">
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
