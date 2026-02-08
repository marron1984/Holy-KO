"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-sage-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <Leaf className="h-6 w-6 text-sage-500 group-hover:text-sage-400 transition-colors" />
            <div>
              <span className="font-serif font-bold text-lg text-sage-700">
                {siteConfig.name}
              </span>
              <span className="hidden sm:inline text-xs text-sage-400 ml-2">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {siteConfig.categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className="text-sm text-sage-600 hover:text-sage-500 transition-colors"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/about"
              className="text-sm text-sage-600 hover:text-sage-500 transition-colors"
            >
              このサイトについて
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="メニュー"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-sage-600" />
            ) : (
              <Menu className="h-6 w-6 text-sage-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-sage-100">
            <div className="flex flex-col gap-1">
              {siteConfig.categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.id}`}
                  className="px-3 py-3 text-sage-600 hover:bg-sage-50 rounded-lg transition-colors min-h-[44px] flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
              <Link
                href="/about"
                className="px-3 py-3 text-sage-600 hover:bg-sage-50 rounded-lg transition-colors min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                このサイトについて
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
