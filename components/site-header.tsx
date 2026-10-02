"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { nav, whatsappLink } from "@/lib/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="container-page">
          <div className="mt-3 flex h-14 items-center justify-between rounded-2xl border border-gray-100 bg-white/85 px-3 shadow-[var(--shadow-soft)] backdrop-blur-md sm:px-4">
            <Link href="/" className="flex items-center gap-2" aria-label="Zyra, início">
              <Image
                src="/img/logo-zyra.webp"
                alt=""
                width={28}
                height={28}
                className="h-7 w-7"
                priority
              />
              <span className="text-lg font-semibold tracking-tight text-ink">
                Zyra
              </span>
            </Link>

            <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-ink-soft transition hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={whatsappLink("Olá, quero falar com a Zyra sobre o crescimento da minha empresa.")}
                target="_blank"
                rel="noopener"
                className="hidden rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 md:inline-flex"
              >
                Falar com a Zyra
              </a>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                aria-expanded={open}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  {open ? (
                    <path d="M6 6l12 12M18 6L6 18" />
                  ) : (
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {open && (
            <div className="mt-2 rounded-2xl border border-gray-100 bg-white p-4 shadow-[var(--shadow-elevated)] md:hidden">
              <nav className="flex flex-col" aria-label="Menu mobile">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-gray-50"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={whatsappLink("Olá, quero falar com a Zyra sobre o crescimento da minha empresa.")}
                  target="_blank"
                  rel="noopener"
                  className="mt-2 rounded-xl bg-brand-500 px-4 py-3 text-center text-base font-semibold text-white"
                >
                  Falar com a Zyra
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
      <div className="h-20" aria-hidden="true" />
    </>
  );
}
